import { NextResponse } from "next/server";
import { createClient } from "@/utitls/supabase/server";

// API to repair schedules with invalid UUIDs or other issues
export async function POST(request: Request) {
  try {
    // Check for admin authorization
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // This should be a secure token that only admins know
    const token = authHeader.split("Bearer ")[1];
    if (token !== process.env.ADMIN_REPAIR_TOKEN) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }

    const supabase = await createClient();
    
    const body = await request.json();
    const { action } = body;
    
    if (action === "repair_logs") {
      // Find and fix any schedule logs with invalid UUIDs
      const { data: invalidLogs, error: findError } = await supabase.rpc(
        "find_invalid_schedule_logs"
      );
      
      if (findError) {
        console.error("❌ Error finding invalid logs:", findError);
        return NextResponse.json({ 
          error: "Database error", 
          message: findError.message 
        }, { status: 500 });
      }
      
      // Fix any found invalid logs by setting blog_id to null
      let fixedCount = 0;
      if (invalidLogs && invalidLogs.length > 0) {
        for (const log of invalidLogs) {
          const { error: updateError } = await supabase
            .from("schedule_logs")
            .update({ blog_id: null })
            .eq("id", log.id);
            
          if (!updateError) fixedCount++;
        }
      }
      
      return NextResponse.json({
        success: true,
        message: `Fixed ${fixedCount} of ${invalidLogs?.length || 0} invalid logs`,
        fixed_count: fixedCount,
        total_invalid: invalidLogs?.length || 0,
      });
    }
    
    if (action === "validate_schedules") {
      // Check all active schedules for validity
      const { data: schedules, error: scheduleError } = await supabase
        .from("blog_schedules")
        .select("id, website_url, qstash_message_id")
        .eq("is_active", true);
        
      if (scheduleError) {
        console.error("❌ Error fetching active schedules:", scheduleError);
        return NextResponse.json({ 
          error: "Database error", 
          message: scheduleError.message 
        }, { status: 500 });
      }
      
      const results = {
        total: schedules?.length || 0,
        valid_qstash: 0,
        missing_qstash: 0,
        schedules: schedules || []
      };
      
      // Count schedules with valid QStash IDs
      if (schedules) {
        for (const schedule of schedules) {
          if (schedule.qstash_message_id) {
            results.valid_qstash++;
          } else {
            results.missing_qstash++;
          }
        }
      }
      
      return NextResponse.json({
        success: true,
        message: `Validated ${results.total} active schedules`,
        results
      });
    }
    
    return NextResponse.json({ 
      error: "Invalid action", 
      message: "Specify a valid action: repair_logs or validate_schedules" 
    }, { status: 400 });

  } catch (error) {
    console.error("❌ Error in repair-schedules:", error);
    
    return NextResponse.json({
      error: "Server error",
      message: String(error)
    }, { status: 500 });
  }
}
