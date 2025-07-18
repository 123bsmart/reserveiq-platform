import FadeInOnScroll from '@/shared/components/FadeInOnScroll';

export default function Hero(): JSX.Element {
  return (
    <section className="pt-20 pb-16 gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" style={{ animation: 'fadeIn 0.6s ease-in-out' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partner with <span className="text-yellow-300">ReserveIQ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join the AI revolution in condo property management. Earn recurring revenue while helping your clients
            prevent $50K+ emergency assessments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Partnership Program
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Schedule Demo Call
            </a>
          </div>
        </div>

        {/* Floating Stats  */}
        <FadeInOnScroll delay={0} yOffset={20}>
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">70%</div>
              <div className="text-blue-100">of condos underfunded</div>
            </div>
            <div className="text-center " style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-bold text-yellow-300">5-10hrs</div>
              <div className="text-blue-100">saved weekly</div>
            </div>
            <div className="text-center" style={{ animationDelay: '1s' }}>
              <div className="text-4xl font-bold text-yellow-300">$50K+</div>
              <div className="text-blue-100">assessments prevented</div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
