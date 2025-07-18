export default function Platform(): JSX.Element {
  return (
    <section id="platform" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Dashboard Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why property managers and condo boards choose ReserveIQ for crisis prevention and professional
            communications.
          </p>
        </div>

        {/* PM Dashboard Preview */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <span>Property Manager Dashboard</span>
          </h3>
          <div className="dashboard-preview bg-gray-100 p-6">
            {/* Top Stats Row */}
            <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Portfolio Overview</h4>
                <div className="text-sm text-gray-600">24 Buildings Managed</div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center border-l-4 border-blue-600">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-xs text-gray-600">Buildings</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg text-center border-l-4 border-yellow-500">
                  <div className="text-2xl font-bold text-yellow-600">7</div>
                  <div className="text-xs text-gray-600">Active Alerts</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center border-l-4 border-emerald-500">
                  <div className="text-2xl font-bold text-emerald-500">$24.5K</div>
                  <div className="text-xs text-gray-600">Monthly Revenue</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center border-l-4 border-purple-500">
                  <div className="text-2xl font-bold text-purple-600">$2.8K</div>
                  <div className="text-xs text-gray-600">Partner Commissions</div>
                </div>
              </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="grid grid-cols-4 gap-4">
              {/* Building Portfolio Sidebar */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h5 className="font-medium text-gray-900 mb-3">Building Portfolio</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-red-50 rounded border-l-4 border-red-500">
                    <div>
                      <div className="font-medium text-gray-900">Maple Heights</div>
                      <div className="text-gray-600">156 units</div>
                    </div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <div>
                      <div className="font-medium text-gray-900">Sunset Towers</div>
                      <div className="text-gray-600">89 units</div>
                    </div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded border-l-4 border-emerald-500">
                    <div>
                      <div className="font-medium text-gray-900">Ocean View</div>
                      <div className="text-gray-600">124 units</div>
                    </div>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded border-l-4 border-emerald-500">
                    <div>
                      <div className="font-medium text-gray-900">Downtown Heights</div>
                      <div className="text-gray-600">67 units</div>
                    </div>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <div>
                      <div className="font-medium text-gray-900">Riverfront Plaza</div>
                      <div className="text-gray-600">201 units</div>
                    </div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="text-center py-2">
                    <div className="text-gray-500">+19 more buildings</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="col-span-3 bg-white rounded-lg p-4 shadow-sm">
                <h5 className="font-medium text-gray-900 mb-3">Quick Actions</h5>
                <div className="grid grid-cols-4 gap-3">
                  <button className="gradient-bg text-white p-3 rounded-lg text-center text-sm font-medium hover:opacity-90 transition-all">
                    📧 Email Template
                  </button>
                  <button className="bg-blue-100 text-blue-600 p-3 rounded-lg text-center text-sm font-medium hover:bg-blue-200 transition-all">
                    📊 Upload Document
                  </button>
                  <button className="bg-green-100 text-emerald-500 p-3 rounded-lg text-center text-sm font-medium hover:bg-green-200 transition-all">
                    🧮 Assessment Calc
                  </button>
                  <button className="bg-purple-100 text-purple-600 p-3 rounded-lg text-center text-sm font-medium hover:bg-purple-200 transition-all">
                    📋 Board Report
                  </button>
                </div>

                {/* Recent Activity  */}
                <div className="mt-4">
                  <h6 className="font-medium text-gray-900 mb-2">Recent Activity</h6>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Email generated for Maple Heights</span>
                      <span className="text-gray-500">2 min ago</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Reserve study analyzed for Sunset Towers</span>
                      <span className="text-gray-500">15 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Key Features:</strong> Portfolio management across multiple buildings, AI email generation,
              document analysis, assessment planning, and partner commission tracking.
            </p>
          </div>
        </div>

        {/* Board Dashboard Preview */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Board Member Dashboard</span>
          </h3>
          <div className="dashboard-preview bg-gray-100 p-6">
            <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Crisis Prevention Center</h4>
                <div className="text-sm text-gray-600">Maple Heights Condominiums</div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-red-50 p-4 rounded-lg text-center border-l-4 border-red-500">
                  <div className="text-2xl font-bold text-red-600">68/100</div>
                  <div className="text-xs text-gray-600">Reserve Health</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg text-center border-l-4 border-yellow-500">
                  <div className="text-2xl font-bold text-yellow-600">85%</div>
                  <div className="text-xs text-gray-600">Compliance</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center border-l-4 border-red-500">
                  <div className="text-2xl font-bold text-red-600">18mo</div>
                  <div className="text-xs text-gray-600">Next Crisis Risk</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center border-l-4 border-emerald-500">
                  <div className="text-2xl font-bold text-emerald-500">$243K</div>
                  <div className="text-xs text-gray-600">Emergency Fund</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                <div className="text-sm font-medium text-red-800">URGENT</div>
                <div className="text-xs text-gray-600">Reserve Fund Shortfall</div>
                <div className="text-xs text-gray-500">$85K needed by Q2 2026</div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                <div className="text-sm font-medium text-yellow-800">PLAN AHEAD</div>
                <div className="text-xs text-gray-600">Budget Review Due</div>
                <div className="text-xs text-gray-500">Annual budget planning</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-emerald-500">
                <div className="text-sm font-medium text-green-800">ALL GOOD</div>
                <div className="text-xs text-gray-600">Elevator Maintenance</div>
                <div className="text-xs text-gray-500">Fully funded and scheduled</div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-sm text-gray-700">
              <strong>Key Features:</strong> Crisis timeline prediction, reserve health scoring, compliance tracking,
              professional owner communications, and AI-powered early warning systems.
            </p>
          </div>
        </div>

        {/* AI Technology Highlight  */}
        <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 rounded-xl p-8 border border-purple-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">🤖 AI-Powered Intelligence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Document Analysis</h4>
              <p className="text-gray-600 text-sm">
                Automatically extracts key data from reserve studies and financial reports
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Predictive Analytics</h4>
              <p className="text-gray-600 text-sm">Forecasts funding shortfalls 18-24 months in advance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Communications</h4>
              <p className="text-gray-600 text-sm">Generates professional emails tailored to audience and situation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
