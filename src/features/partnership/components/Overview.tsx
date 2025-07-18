import FadeInOnScroll from '@/shared/components/FadeInOnScroll';

export default function Overview(): JSX.Element {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Partner with <span className="gradient-text">ReserveIQ</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by property management professionals with 15+ years experience. We understand the pain points and have
            the solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll>
            <div className="space-y-8">
              <div className="card-hover bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">💰 Revenue Opportunity</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>
                      <strong>Flat monthly fee structure</strong> - predictable income
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>
                      <strong>Per-building residual payments</strong> - scale with your success
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>
                      <strong>No operational overhead</strong> - we handle everything
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card-hover bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Client Value</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>
                      <strong>Stronger client relationships</strong> through crisis prevention
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>
                      <strong>Competitive advantage</strong> in PM market
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>
                      <strong>Reduced board complaints</strong> with professional communications
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInOnScroll>

          <div className="relative">
            <div className="absolute inset-0 gradient-bg rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Built by Industry Veterans</h4>
              <blockquote className="text-gray-700 italic mb-6">
                "After years in the trenches managing buildings and dealing with overwhelmed boards, we knew the tools
                had to change. ReserveIQ is our answer — built not for Silicon Valley, but for the realities of PM firms
                trying to stay ahead of the curve."
              </blockquote>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">80%</div>
                  <div className="text-sm text-gray-600">of Ontario condos face funding shortfalls</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">years PM industry experience</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500 text-center">
                Developed in consultation with licensed professionals across compliance, legal, and reserve planning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
