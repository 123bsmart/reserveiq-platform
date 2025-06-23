import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Play,
  Edit3,
  Wand2,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Home,
  Users,
  Target,
  CheckCircle,
  Settings,
  Bell,
  Menu,
  X,
  Upload,
  Calculator,
  Shield,
  Share,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const BoardPresentationGenerator = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [presentationMode, setPresentationMode] = useState(false);
  const [generatingPresentation, setGeneratingPresentation] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('reserve-crisis');

  // Sample building data
  const buildingData = {
    name: "Maple Heights Condominiums",
    units: 156,
    currentReserve: 125000,
    targetReserve: 170000,
    shortfall: 45000,
    monthlyFee: 425,
    proposedIncrease: 68
  };

  const presentationTemplates = [
    {
      id: 'reserve-crisis',
      name: 'Reserve Fund Crisis',
      description: 'Explain funding shortfall and options to owners',
      slides: 8,
      duration: '15 min',
      icon: AlertTriangle
    },
    {
      id: 'budget-overview',
      name: 'Annual Budget Presentation',
      description: 'Present yearly budget and variance analysis',
      slides: 12,
      duration: '20 min',
      icon: DollarSign
    },
    {
      id: 'capital-planning',
      name: 'Capital Improvement Plan',
      description: 'Long-term planning and expense timeline',
      slides: 10,
      duration: '18 min',
      icon: TrendingUp
    },
    {
      id: 'agm-summary',
      name: 'AGM Executive Summary',
      description: 'Complete year-end summary for owners',
      slides: 15,
      duration: '25 min',
      icon: Users
    }
  ];

  // Sample slides for reserve crisis presentation
  const slides = [
    {
      id: 1,
      title: "Reserve Fund Crisis Alert",
      subtitle: "Understanding Our Current Situation",
      type: "title"
    },
    {
      id: 2,
      title: "Current Financial Position",
      subtitle: "Where We Stand Today",
      type: "financial"
    },
    {
      id: 3,
      title: "Upcoming Major Expenses",
      subtitle: "What We Need to Fund",
      type: "expenses"
    },
    {
      id: 4,
      title: "The Problem: Funding Gap",
      subtitle: "Why We Need to Act Now",
      type: "problem"
    },
    {
      id: 5,
      title: "Solution Options",
      subtitle: "Three Paths Forward",
      type: "solutions"
    },
    {
      id: 6,
      title: "Recommended Solution",
      subtitle: "Monthly Fee Increase",
      type: "recommendation"
    },
    {
      id: 7,
      title: "Next Steps",
      subtitle: "What Happens Now",
      type: "action"
    },
    {
      id: 8,
      title: "Questions & Discussion",
      subtitle: "Your Questions Matter",
      type: "qa"
    }
  ];

  const generatePresentation = () => {
    setGeneratingPresentation(true);
    setTimeout(() => {
      setGeneratingPresentation(false);
    }, 3000);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const SlideRenderer = ({ slide }) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white p-12">
            <AlertTriangle className="w-16 h-16 mb-4" />
            <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
            <h2 className="text-xl mb-8">{slide.subtitle}</h2>
            <div className="text-lg">
              <div className="mb-2">{buildingData.name}</div>
              <div className="text-blue-200">{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        );

      case 'financial':
        return (
          <div className="h-full p-12">
            <h1 className="text-3xl font-bold mb-2">{slide.title}</h1>
            <h2 className="text-xl text-gray-600 mb-8">{slide.subtitle}</h2>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-sm text-blue-600 uppercase tracking-wide">Current Reserve</div>
                  <div className="text-3xl font-bold text-blue-900">${buildingData.currentReserve.toLocaleString()}</div>
                </div>
                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm text-green-600 uppercase tracking-wide">Target Reserve</div>
                  <div className="text-3xl font-bold text-green-900">${buildingData.targetReserve.toLocaleString()}</div>
                </div>
                <div className="p-6 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-sm text-red-600 uppercase tracking-wide">Shortfall</div>
                  <div className="text-3xl font-bold text-red-900">${buildingData.shortfall.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle cx="96" cy="96" r="80" stroke="#e5e7eb" strokeWidth="16" fill="transparent" />
                    <circle 
                      cx="96" 
                      cy="96" 
                      r="80" 
                      stroke="#ef4444" 
                      strokeWidth="16" 
                      fill="transparent"
                      strokeDasharray={502}
                      strokeDashoffset={502 - (73 / 100) * 502}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600">73%</div>
                      <div className="text-sm text-gray-600">Funded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'expenses':
        const expenses = [
          { item: "Roof Replacement", cost: 85000, timeline: "18 months" },
          { item: "HVAC System", cost: 42000, timeline: "24 months" },
          { item: "Parking Garage", cost: 28000, timeline: "12 months" }
        ];
        
        return (
          <div className="h-full p-12">
            <h1 className="text-3xl font-bold mb-2">{slide.title}</h1>
            <h2 className="text-xl text-gray-600 mb-8">{slide.subtitle}</h2>
            
            <div className="space-y-4 mb-8">
              {expenses.map((expense, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-lg text-gray-900">{expense.item}</div>
                    <div className="text-gray-600">Timeline: {expense.timeline}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">${expense.cost.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-blue-900">Total Major Expenses</span>
                <span className="text-3xl font-bold text-blue-900">$155,000</span>
              </div>
            </div>
          </div>
        );

      case 'recommendation':
        return (
          <div className="h-full p-12">
            <h1 className="text-3xl font-bold mb-2">{slide.title}</h1>
            <h2 className="text-xl text-gray-600 mb-8">{slide.subtitle}</h2>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="p-6 bg-green-50 rounded-lg border border-green-200 mb-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Recommended Solution</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monthly increase:</span>
                      <span className="font-bold">+${buildingData.proposedIncrease}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>New monthly fee:</span>
                      <span className="font-bold">${buildingData.monthlyFee + buildingData.proposedIncrease}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">Implementation: March 1, 2025</div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {[
                    "Builds long-term financial stability",
                    "Avoids emergency assessments", 
                    "Protects property values",
                    "Manageable monthly amount"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
              <h2 className="text-xl text-gray-600">{slide.subtitle}</h2>
            </div>
          </div>
        );
    }
  };

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">ReserveIQ</span>
        </div>
        <button 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-1 rounded-md hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="p-4 space-y-2">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <BarChart3 className="w-5 h-5" />
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <Upload className="w-5 h-5" />
          Documents
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <DollarSign className="w-5 h-5" />
          Financial
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <Shield className="w-5 h-5" />
          Compliance
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <Calculator className="w-5 h-5" />
          Calculator
        </a>
        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
        >
          <FileText className="w-5 h-5" />
          Presentations
        </a>
      </nav>
    </div>
  );

  if (presentationMode) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
          <button 
            onClick={prevSlide}
            className="p-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-white text-sm px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            {currentSlide + 1} / {slides.length}
          </span>
          <button 
            onClick={nextSlide}
            className="p-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setPresentationMode(false)}
            className="p-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 bg-white">
          <SlideRenderer slide={slides[currentSlide]} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Board Presentation Generator</h1>
                <p className="text-gray-600">AI-powered slides explaining reserve crisis to owners</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setPresentationMode(true)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                <Play className="w-4 h-4" />
                Present
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4" />
                Export PowerPoint
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Presentation Template</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {presentationTemplates.map((template) => {
                const Icon = template.icon;
                return (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 rounded-lg border text-left transition-colors ${
                      selectedTemplate === template.id
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-white border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-3" />
                    <div className="font-medium text-gray-900 mb-1">{template.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{template.description}</div>
                    <div className="text-xs text-gray-500">
                      {template.slides} slides • {template.duration}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate AI Presentation</h3>
                  <p className="text-gray-600">
                    Create customized slides using your building's financial data and reserve study
                  </p>
                </div>
                <button 
                  onClick={generatePresentation}
                  disabled={generatingPresentation}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {generatingPresentation ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4" />
                      Generate Presentation
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Slides ({slides.length})</h3>
              <div className="space-y-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-full p-3 text-left rounded-lg border transition-colors ${
                      currentSlide === index
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-white border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {index + 1}. {slide.title}
                    </div>
                    <div className="text-xs text-gray-600">{slide.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="aspect-video bg-white">
                  <SlideRenderer slide={slides[currentSlide]} />
                </div>
                
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="p-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-sm text-gray-600">
                        Slide {currentSlide + 1} of {slides.length}
                      </span>
                      <button 
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className="p-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">
                        <Edit3 className="w-3 h-3" />
                        Edit
                      </button>
                      <button 
                        onClick={() => setPresentationMode(true)}
                        className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                      >
                        <Maximize2 className="w-3 h-3" />
                        Full Screen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BoardPresentationGenerator;