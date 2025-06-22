import React, { useState } from 'react';
import { FileText, Download, Eye, Presentation, BarChart, PieChart, TrendingUp, Clock, Users, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';

const BoardPresentationGenerator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('reserve-crisis');
  const [selectedBuilding, setSelectedBuilding] = useState('maple-heights');
  const [generating, setGenerating] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const buildings = [
    { id: 'maple-heights', name: 'Maple Heights Condos', units: 84 },
    { id: 'lakeside-manor', name: 'Lakeside Manor', units: 156 }
  ];

  const templates = [
    {
      id: 'reserve-crisis',
      name: 'Reserve Fund Crisis Presentation',
      description: 'Emergency presentation explaining reserve shortfall and funding options',
      slides: 8,
      audience: 'Board & Owners',
      duration: '15-20 minutes'
    },
    {
      id: 'annual-report',
      name: 'Annual Financial Report',
      description: 'Comprehensive year-end financial review and reserve fund status',
      slides: 12,
      audience: 'AGM Attendees',
      duration: '25-30 minutes'
    },
    {
      id: 'special-assessment',
      name: 'Special Assessment Proposal',
      description: 'Detailed justification and impact analysis for proposed special assessment',
      slides: 10,
      audience: 'Owners Meeting',
      duration: '20-25 minutes'
    },
    {
      id: 'maintenance-plan',
      name: 'Major Maintenance Planning',
      description: 'Multi-year capital project timeline and funding strategy',
      slides: 14,
      audience: 'Board Planning Session',
      duration: '30-35 minutes'
    }
  ];

  const sampleSlides = {
    'reserve-crisis': [
      {
        title: 'Reserve Fund Emergency: Immediate Action Required',
        type: 'title',
        content: {
          subtitle: 'Critical Funding Shortfall Analysis',
          building: 'Maple Heights Condos',
          date: 'June 2024',
          urgency: 'HIGH PRIORITY'
        }
      },
      {
        title: 'Current Crisis Overview',
        type: 'crisis-summary',
        content: {
          currentBalance: 142000,
          targetBalance: 280000,
          shortfall: 138000,
          percentageFunded: 51,
          riskLevel: 'Critical',
          timeToEmpty: '18 months'
        }
      },
      {
        title: 'Immediate Risks & Consequences',
        type: 'risk-analysis',
        content: {
          risks: [
            { risk: 'Elevator failure requiring $65,000 emergency repair', probability: 'High', timeline: '6-12 months' },
            { risk: 'Forced special assessment of $50,000+ per unit', probability: 'Very High', timeline: '12-18 months' },
            { risk: 'Property values decline due to deferred maintenance', probability: 'Medium', timeline: '12-24 months' },
            { risk: 'Legal liability for board members', probability: 'High', timeline: 'Immediate' }
          ]
        }
      },
      {
        title: 'Funding Solutions Comparison',
        type: 'solutions-comparison',
        content: {
          solutions: [
            {
              name: 'Monthly Fee Increase',
              monthlyImpact: 89,
              totalFirstYear: 1068,
              pros: ['Spreads cost over time', 'Builds sustainable funding'],
              cons: ['Ongoing expense', 'May face owner resistance'],
              recommendation: 'Recommended'
            },
            {
              name: 'Special Assessment',
              monthlyImpact: 0,
              totalFirstYear: 15000,
              pros: ['One-time payment', 'Immediate funding'],
              cons: ['Large upfront cost', 'Financial hardship for some'],
              recommendation: 'Emergency Only'
            }
          ]
        }
      }
    ]
  };

  const currentTemplate = templates.find(t => t.id === selectedTemplate);
  const slides = sampleSlides[selectedTemplate] || [];

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      alert('Presentation generated! In a real implementation, this would create a PowerPoint file.');
    }, 3000);
  };

  const handleExport = (format) => {
    alert(`Exporting presentation as ${format}. In a real implementation, this would download the file.`);
  };

  const renderSlideContent = (slide) => {
    switch(slide.type) {
      case 'title':
        return (
          <div className="text-center p-8 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-lg">
            <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
            <h2 className="text-xl mb-6">{slide.content.subtitle}</h2>
            <div className="text-lg mb-2">{slide.content.building}</div>
            <div className="text-base mb-4">{slide.content.date}</div>
            <div className="inline-block px-4 py-2 bg-yellow-500 text-black font-bold rounded">
              {slide.content.urgency}
            </div>
          </div>
        );
      
      case 'crisis-summary':
        return (
          <div className="p-6 bg-white rounded-lg border">
            <h2 className="text-2xl font-bold mb-6 text-center">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="text-sm text-gray-600">Current Balance</div>
                  <div className="text-2xl font-bold text-red-600">
                    ${slide.content.currentBalance.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Target Balance</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${slide.content.targetBalance.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-red-100 rounded-lg">
                  <div className="text-sm text-gray-600">Shortfall</div>
                  <div className="text-2xl font-bold text-red-700">
                    ${slide.content.shortfall.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="text-sm text-gray-600">Funding Level</div>
                  <div className="text-2xl font-bold text-yellow-600">
                    {slide.content.percentageFunded}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'risk-analysis':
        return (
          <div className="p-6 bg-white rounded-lg border">
            <h2 className="text-2xl font-bold mb-6 text-center">{slide.title}</h2>
            <div className="space-y-4">
              {slide.content.risks.map((risk, index) => (
                <div key={index} className="p-4 border border-red-200 rounded-lg bg-red-50">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 mb-2">{risk.risk}</div>
                      <div className="flex gap-4 text-sm">
                        <span className="text-red-600 font-medium">
                          Probability: {risk.probability}
                        </span>
                        <span className="text-gray-600">
                          Timeline: {risk.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'solutions-comparison':
        return (
          <div className="p-6 bg-white rounded-lg border">
            <h2 className="text-2xl font-bold mb-6 text-center">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.content.solutions.map((solution, index) => (
                <div key={index} className={`p-6 rounded-lg border-2 ${solution.recommendation === 'Recommended' ? 'border-green-500 bg-green-50' : 'border-yellow-500 bg-yellow-50'}`}>
                  <h3 className="text-xl font-bold mb-4">{solution.name}</h3>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600">Monthly Impact per Unit</div>
                    <div className="text-2xl font-bold">
                      {solution.monthlyImpact > 0 ? `+$${solution.monthlyImpact}` : 'No Change'}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600">First Year Total</div>
                    <div className="text-xl font-semibold">
                      ${solution.totalFirstYear.toLocaleString()}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-green-600 mb-1">Pros:</div>
                    <ul className="text-sm space-y-1">
                      {solution.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-red-600 mb-1">Cons:</div>
                    <ul className="text-sm space-y-1">
                      {solution.cons.map((con, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`text-center py-2 px-4 rounded font-medium ${solution.recommendation === 'Recommended' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'}`}>
                    {solution.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-6 bg-white rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
            <div className="text-gray-600">Slide content would be generated here...</div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Board Presentation Generator</h1>
            <p className="text-gray-600">AI-powered slide generation for board meetings and owner communications</p>
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              value={selectedBuilding}
              onChange={(e) => setSelectedBuilding(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {buildings.map(building => (
                <option key={building.id} value={building.id}>{building.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Presentation Templates</h2>
              <div className="space-y-3">
                {templates.map((template) => (
                  <div 
                    key={template.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedTemplate === template.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <div className="font-medium text-gray-900 mb-1">{template.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{template.description}</div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{template.slides} slides</span>
                      <span>{template.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Generation Controls */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate Presentation</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Audience
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>{currentTemplate ? currentTemplate.audience : 'Select audience'}</option>
                    <option>Board Members Only</option>
                    <option>All Owners</option>
                    <option>Emergency Meeting</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Presentation Length
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Standard ({currentTemplate ? currentTemplate.duration : 'N/A'})</option>
                    <option>Short (10-15 minutes)</option>
                    <option>Extended (30+ minutes)</option>
                  </select>
                </div>
              </div>
              
              <button 
                onClick={handleGenerate}
                disabled={generating}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2 mb-4"
              >
                {generating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Presentation className="w-4 h-4" />
                    Generate Presentation
                  </>
                )}
              </button>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => handleExport('PowerPoint')}
                  className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 flex items-center justify-center gap-1 text-sm"
                >
                  <Download className="w-4 h-4" />
                  PowerPoint
                </button>
                <button 
                  onClick={() => handleExport('PDF')}
                  className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 flex items-center justify-center gap-1 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  PDF
                </button>
              </div>
            </div>
          </div>

          {/* Slide Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Preview: {currentTemplate ? currentTemplate.name : 'Select Template'}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      Slide {currentSlide + 1} of {slides.length}
                    </span>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                        disabled={currentSlide === 0}
                        className="px-2 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
                      >
                        ←
                      </button>
                      <button 
                        onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                        disabled={currentSlide === slides.length - 1}
                        className="px-2 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {slides[currentSlide] ? (
                  <div className="aspect-video">
                    {renderSlideContent(slides[currentSlide])}
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Presentation className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <div className="text-gray-600">Select a template to preview slides</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPresentationGenerator;
