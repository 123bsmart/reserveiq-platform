export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12L6 8h8l-4 4z" />
              </svg>
            </div>
            <span className="text-xl font-bold">ReserveIQ</span>
          </div>
          <p className="text-gray-400 mb-4">Built by property management professionals with 15+ years experience</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="https://www.reserveiq.net/privacy.html" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://www.reserveiq.net/terms.html" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="mailto:legal@reserveiq.net" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-500">© 2025 ReserveIQ Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
