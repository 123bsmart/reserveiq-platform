import FadeInOnScroll from '@/shared/components/FadeInOnScroll';

export default function Templates(): JSX.Element {
  return (
    <section id="templates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Professional Email Templates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save 5-10 hours weekly on communications • AI-generated professional emails in 30 seconds • Auto-filled with
            building data
          </p>
        </div>

        <FadeInOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* PM Templates  */}
            <div className="card-hover">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span>Property Manager Templates</span>
              </h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all cursor-pointer">
                  <div className="font-medium text-gray-900">📊 Monthly Board Financial Update</div>
                  <div className="text-sm text-gray-600 mt-1">Auto-filled with reserve data and AI recommendations</div>
                  <div className="flex space-x-2 mt-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Monthly
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      High Impact
                    </span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all cursor-pointer">
                  <div className="font-medium text-gray-900">⚠️ Compliance Deadline Reminders</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Jurisdiction-specific warnings with penalty calculations
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                      As Needed
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Critical</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all cursor-pointer">
                  <div className="font-medium text-gray-900">💰 Special Assessment Announcements</div>
                  <div className="text-sm text-gray-600 mt-1">Professional funding analysis that owners understand</div>
                  <div className="flex space-x-2 mt-3">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Critical</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                      Board Approved
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Board Templates */}
            <div className="card-hover">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded"></div>
                <span>Board Member Templates</span>
              </h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-all cursor-pointer">
                  <div className="font-medium text-gray-900">👥 Owner Announcements</div>
                  <div className="text-sm text-gray-600 mt-1">Building updates, policy changes, community news</div>
                  <div className="flex space-x-2 mt-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Monthly
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      Community
                    </span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-all cursor-pointer">
                  <div className="font-medium text-gray-900">💵 Fee Increase Notifications</div>
                  <div className="text-sm text-gray-600 mt-1">Professional explanations with clear justification</div>
                  <div className="flex space-x-2 mt-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                      Annual
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                      High Stakes
                    </span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-all cursor-pointer">
                  <div className="font-medium text-gray-900">🚨 Emergency Building Notices</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Urgent issues, service disruptions, emergency procedures
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                      Emergency
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                      Immediate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/*  Sample Email */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Sample AI-Generated Email</h3>
          <div className="max-w-4xl mx-auto">
            <div className="email-preview p-6">
              <div className="border-b border-gray-300 pb-3 mb-4 text-sm">
                <div>
                  <strong>From:</strong> sarah.johnson@maplecondos.com
                </div>
                <div>
                  <strong>To:</strong> board@maplecondos.com
                </div>
                <div>
                  <strong>Subject:</strong> Monthly Financial Update - Maple Heights Condominiums - December 2024
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div>Dear Board Members,</div>
                <div>I am pleased to present the December 2024 financial update for Maple Heights Condominiums.</div>
                <div>
                  <strong>Reserve Fund Status:</strong>
                  <br />
                  Current Balance: $125,000
                  <br />
                  Target Balance: $170,000
                  <br />
                  Funding Level: 73% of recommended target
                </div>
                <div>
                  <strong>Critical Action Items:</strong>
                  <br />
                  • Roof replacement scheduled for Q2 2025 ($485,000)
                  <br />
                  • Reserve funding shortfall requires immediate attention
                  <br />• Recommend increasing monthly contributions by $35/unit
                </div>
                <div>
                  <strong>AI Risk Assessment:</strong>
                  <br />
                  Current risk level: High
                  <br />
                  Recommended action: Board resolution for contribution increase at next meeting
                </div>
                <div>
                  Please review the attached detailed financial analysis. I recommend scheduling a special meeting to
                  discuss funding strategies.
                </div>
                <div>
                  Best regards,
                  <br />
                  Sarah Johnson, Property Manager
                </div>
                <div className="text-gray-500 italic text-xs">Generated by ReserveIQ AI | Confidence: 94%</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Features  */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">🧠 AI Email Intelligence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Tone Customization</h4>
              <p className="text-gray-600 text-sm">Formal, friendly, urgent, or reassuring - AI adapts to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Live Data Integration</h4>
              <p className="text-gray-600 text-sm">
                Automatically pulls financial metrics, compliance status, and building data
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Audience Targeting</h4>
              <p className="text-gray-600 text-sm">Technical language for boards, simple explanations for owners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
