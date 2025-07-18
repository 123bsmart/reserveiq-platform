import FadeInOnScroll from '@/shared/components/FadeInOnScroll';

export default function Implementation(): JSX.Element {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Implementation & <span className="gradient-text">Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed as a ReserveIQ partner.
          </p>
        </div>

        <FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center card-hover">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Setup</h3>
              <p className="text-gray-600">
                Platform onboarding in under 1 hour • No IT team required • Complete training materials provided
              </p>
            </div>
            <div className="text-center card-hover">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Provided</h3>
              <p className="text-gray-600">
                Complete training materials • Live demo sessions • Sales playbooks • Ongoing support
              </p>
            </div>
            <div className="text-center card-hover">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600">
                Partner success manager • Technical support • Marketing materials • Monthly partner calls
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
