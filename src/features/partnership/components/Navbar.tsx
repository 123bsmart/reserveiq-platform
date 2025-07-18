export default function Navbar(): JSX.Element {
  return (
    <nav className="sticky-nav fixed top-0 w-full z-50 border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12L6 8h8l-4 4z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">ReserveIQ</span>
            <span className="text-sm text-gray-500">Partners</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#overview" className="text-gray-600 hover:text-blue-600 transition-colors">
              Overview
            </a>
            <a href="#platform" className="text-gray-600 hover:text-blue-600 transition-colors">
              Platform
            </a>
            <a href="#templates" className="text-gray-600 hover:text-blue-600 transition-colors">
              Email Templates
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Partnership
            </a>
            <a href="#contact" className="gradient-bg text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all">
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
