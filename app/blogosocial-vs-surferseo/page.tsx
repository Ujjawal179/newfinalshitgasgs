import Link from "next/link"
import { Check, X } from "lucide-react"
import Footer from "../components/footer"
export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#294fd6]/10 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#294fd6] mb-4">GetMoreSEO vs SurferSEO</h1>
            <p className="text-xl md:text-2xl font-medium text-black mb-8">The Ultimate Comparison Guide</p>
            <p className="max-w-3xl mx-auto text-black text-lg">
              Choosing the right SEO tool can make or break your content marketing strategy. This detailed comparison
              will help you decide which platform is better suited for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#294fd6] mb-6">Comparison Overview</h2>
              <p className="text-black mb-4">
                Whether you're looking for full automation or manual optimization, this guide breaks down all the key
                features, pricing, and benefits to help you make an informed decision.
              </p>
              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-block bg-[#294fd6] hover:bg-[#294fd6]/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Get one Article for Free
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-black">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-left">Feature</th>
                      <th className="py-2 text-left text-[#294fd6]">GetMoreSEO</th>
                      <th className="py-2 text-left">SurferSEO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Platform Type</td>
                      <td className="py-3 font-medium text-[#294fd6]">100% Automated AI Blogging SaaS</td>
                      <td className="py-3">SEO Optimization Tool (Manual Input Required)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Content Creation</td>
                      <td className="py-3 font-medium text-[#294fd6]">Fully automated AI-generated blogs</td>
                      <td className="py-3">Requires manual content creation</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Pricing</td>
                      <td className="py-3 font-medium text-[#294fd6]">Starts at $7/month</td>
                      <td className="py-3">Starts at $59/month</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Ease of Use</td>
                      <td className="py-3 font-medium text-[#294fd6]">
                        Beginner-friendly, no technical knowledge required
                      </td>
                      <td className="py-3">Steep learning curve; requires SEO expertise</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Publishing</td>
                      <td className="py-3 font-medium text-[#294fd6]">Automated publishing included</td>
                      <td className="py-3">Requires manual publishing</td>
                    </tr>
                    <tr>
                      <td className="py-3">Target Audience</td>
                      <td className="py-3 font-medium text-[#294fd6]">Bloggers, small businesses, solopreneurs</td>
                      <td className="py-3">Marketing teams, SEO professionals</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#294fd6] mb-12 text-center">Pricing Comparison</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-6">GetMoreSEO Pricing Plans</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-black">
                <thead>
                  <tr className="bg-[#294fd6]/10 border-b">
                    <th className="py-3 px-4 text-left">Plan Name</th>
                    <th className="py-3 px-4 text-left">Monthly Price</th>
                    <th className="py-3 px-4 text-left">Credits/Posts</th>
                    <th className="py-3 px-4 text-left">Key Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Basic</td>
                    <td className="py-4 px-4 text-[#294fd6] font-bold">$7</td>
                    <td className="py-4 px-4">2 credits (2 posts)</td>
                    <td className="py-4 px-4">Basic SEO optimization, content calendar, email support</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Starter</td>
                    <td className="py-4 px-4 text-[#294fd6] font-bold">$25</td>
                    <td className="py-4 px-4">15 credits (15 posts)</td>
                    <td className="py-4 px-4">
                      Standard SEO optimization, content strategy, social media integration, email and chat support
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Growth</td>
                    <td className="py-4 px-4 text-[#294fd6] font-bold">$40</td>
                    <td className="py-4 px-4">30 credits (30 posts)</td>
                    <td className="py-4 px-4">
                      Advanced SEO optimization, comprehensive content strategy, analytics, priority support
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Professional</td>
                    <td className="py-4 px-4 text-[#294fd6] font-bold">$70</td>
                    <td className="py-4 px-4">60 credits (60 posts)</td>
                    <td className="py-4 px-4">
                      Premium SEO optimization, advanced planning, full social media integration, dedicated account
                      manager
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Enterprise</td>
                    <td className="py-4 px-4 text-[#294fd6] font-bold">$100</td>
                    <td className="py-4 px-4">120 credits (120 posts)</td>
                    <td className="py-4 px-4">
                      Enterprise-grade SEO optimization, custom strategies, multi-channel distribution, 24/7 priority
                      support
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-6">SurferSEO Pricing Plans</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-black">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-4 text-left">Plan Name</th>
                    <th className="py-3 px-4 text-left">Monthly Price</th>
                    <th className="py-3 px-4 text-left">Key Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Basic Plan</td>
                    <td className="py-4 px-4">$59</td>
                    <td className="py-4 px-4">Limited content audits and optimization tools</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Pro Plan</td>
                    <td className="py-4 px-4">$119</td>
                    <td className="py-4 px-4">Expanded features with more audits and content editor usage</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Business Plan</td>
                    <td className="py-4 px-4">Custom Pricing</td>
                    <td className="py-4 px-4">Tailored for large teams; includes API access and advanced analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#294fd6] mb-12 text-center">Feature-by-Feature Breakdown</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-[#294fd6]">Content Creation & Automation</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-black">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left">Feature</th>
                        <th className="py-2 text-left text-[#294fd6]">GetMoreSEO</th>
                        <th className="py-2 text-left">SurferSEO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Content Generation</td>
                        <td className="py-3 font-medium text-[#294fd6]">Fully automated AI blogging on autopilot</td>
                        <td className="py-3">No content generation; users must create content manually</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Optimization Approach</td>
                        <td className="py-3 font-medium text-[#294fd6]">
                          AI-driven optimization trained by Blogosocial experts
                        </td>
                        <td className="py-3">Provides manual recommendations for on-page optimization</td>
                      </tr>
                      <tr>
                        <td className="py-3">Publishing Workflow</td>
                        <td className="py-3 font-medium text-[#294fd6]">
                          End-to-end automation: research → creation → publishing
                        </td>
                        <td className="py-3">Only assists with optimization; requires manual publishing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-[#294fd6]">SEO Optimization Features</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-black">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left">Feature</th>
                        <th className="py-2 text-left text-[#294fd6]">GetMoreSEO</th>
                        <th className="py-2 text-left">SurferSEO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Keyword Research</td>
                        <td className="py-3 font-medium text-[#294fd6]">Integrated AI-powered keyword research</td>
                        <td className="py-3">Provides keyword suggestions based on SERP analysis</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Competitor Analysis</td>
                        <td className="py-3 font-medium text-[#294fd6]">
                          Automatically incorporates competitor insights
                        </td>
                        <td className="py-3">Manual SERP Analyzer for competitor research</td>
                      </tr>
                      <tr>
                        <td className="py-3">On-Page Optimization</td>
                        <td className="py-3 font-medium text-[#294fd6]">
                          Automatically optimized headings, keywords, and structure
                        </td>
                        <td className="py-3">Offers real-time suggestions for manual implementation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-[#294fd6]">Usability & Support</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-black">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left">Feature</th>
                        <th className="py-2 text-left text-[#294fd6]">GetMoreSEO</th>
                        <th className="py-2 text-left">SurferSEO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Ease of Use</td>
                        <td className="py-3 font-medium text-[#294fd6]">Beginner-friendly; minimal setup required</td>
                        <td className="py-3">Moderate to steep learning curve; requires SEO knowledge</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Support Options</td>
                        <td className="py-3 font-medium text-[#294fd6]">
                          Email and chat support (priority for higher plans)
                        </td>
                        <td className="py-3">Email support only</td>
                      </tr>
                      <tr>
                        <td className="py-3">Learning Curve</td>
                        <td className="py-3 font-medium text-[#294fd6]">Minimal—designed for non-technical users</td>
                        <td className="py-3">Requires understanding of SEO principles</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-[#294fd6]">Core Features</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-black">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left">Feature</th>
                        <th className="py-2 text-left text-[#294fd6]">GetMoreSEO</th>
                        <th className="py-2 text-left">SurferSEO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Automation Level</td>
                        <td className="py-3 font-medium text-[#294fd6]">Fully automated</td>
                        <td className="py-3">Semi-automated</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Content Creation</td>
                        <td className="py-3 font-medium text-[#294fd6]">AI-generated blogs</td>
                        <td className="py-3">User-created</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Keyword Research</td>
                        <td className="py-3 font-medium text-[#294fd6]">Built-in AI-powered</td>
                        <td className="py-3">Manual SERP analysis</td>
                      </tr>
                      <tr>
                        <td className="py-3">Publishing</td>
                        <td className="py-3 font-medium text-[#294fd6]">Automated</td>
                        <td className="py-3">Manual</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GetMoreSEO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#294fd6]/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#294fd6] mb-8 text-center">Why Choose GetMoreSEO?</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Key Benefits:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-[#294fd6]">
                    <Check size={20} />
                  </div>
                  <p className="text-black">
                    <span className="font-bold text-[#294fd6]">💰 Highly affordable</span> plans starting at just
                    $7/month—5x cheaper than competitors.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-[#294fd6]">
                    <Check size={20} />
                  </div>
                  <p className="text-black">
                    <span className="font-bold text-[#294fd6]">🚀 Fully automated</span> blogging SaaS—no manual work
                    required.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-[#294fd6]">
                    <Check size={20} />
                  </div>
                  <p className="text-black">
                    <span className="font-bold text-[#294fd6]">🤖 Trained by experts</span> for superior content
                    quality.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-[#294fd6]">
                    <Check size={20} />
                  </div>
                  <p className="text-black">
                    <span className="font-bold text-[#294fd6]">📈 Delivers optimized</span> blog posts that rank higher
                    with minimal effort.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-[#294fd6]">
                    <Check size={20} />
                  </div>
                  <p className="text-black">
                    <span className="font-bold text-[#294fd6]">⏱️ Saves time</span> with end-to-end automation from
                    keyword research to publishing.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Limitations of SurferSEO:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">
                    <X size={20} />
                  </div>
                  <p className="text-black">Requires manual effort for content creation and implementation.</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">
                    <X size={20} />
                  </div>
                  <p className="text-black">Higher pricing starting at $59/month.</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">
                    <X size={20} />
                  </div>
                  <p className="text-black">Better suited for advanced users or teams with dedicated SEO resources.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#294fd6] mb-12 text-center">
            Final Comparison: GetMoreSEO vs SurferSEO
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-[#294fd6]">Pricing & Value</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-black">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left">Feature</th>
                        <th className="py-2 text-left text-[#294fd6]">GetMoreSEO</th>
                        <th className="py-2 text-left">SurferSEO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Starting Price</td>
                        <td className="py-3 font-medium text-[#294fd6]">$7/month</td>
                        <td className="py-3">$59/month</td>
                      </tr>
                      <tr>
                        <td className="py-3">Cost Efficiency</td>
                        <td className="py-3 font-medium text-[#294fd6]">5x cheaper</td>
                        <td className="py-3">Premium pricing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-[#294fd6]">Usability & Support</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-black">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left">Feature</th>
                        <th className="py-2 text-left text-[#294fd6]">GetMoreSEO</th>
                        <th className="py-2 text-left">SurferSEO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Ease of Use</td>
                        <td className="py-3 font-medium text-[#294fd6]">Beginner-friendly</td>
                        <td className="py-3">Requires SEO expertise</td>
                      </tr>
                      <tr>
                        <td className="py-3">Support Options</td>
                        <td className="py-3 font-medium text-[#294fd6]">Email & chat (priority on higher plans)</td>
                        <td className="py-3">Email only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <Footer/>
    </div>
  )
}
