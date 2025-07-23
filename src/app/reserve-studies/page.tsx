'use client';
import React, { useState } from 'react';
import { FileText, Upload, Download, Eye, Calendar, DollarSign, TrendingUp, BarChart3, Calculator } from 'lucide-react';

const ReserveStudiesPage = (): JSX.Element => {
  const [activeView, setActiveView] = useState('timeline');

  const reserveStudies = [
    {
      id: 1,
      name: 'Pinewood Towers - 2024 Reserve Study',
      building: 'Pinewood Towers',
      uploadDate: '2024-07-18',
      analysisComplete: true,
      riskLevel: 'critical',
      shortfall: '$127,000',
      timeline: '18 months',
      components: ['Roof Membrane', 'HVAC System', 'Elevator'],
      nextAction: 'Emergency funding review required',
    },
    {
      id: 2,
      name: 'Oakview Commons - 2024 Reserve Study',
      building: 'Oakview Commons',
      uploadDate: '2024-07-10',
      analysisComplete: true,
      riskLevel: 'good',
      shortfall: 'Fully Funded',
      timeline: '5+ years',
      components: ['Parking Lot', 'Balcony Repairs', 'Common Area'],
      nextAction: 'Continue current contribution rate',
    },
    {
      id: 3,
      name: 'Maple Ridge Condos - 2024 Reserve Study',
      building: 'Maple Ridge Condos',
      uploadDate: '2024-07-01',
      analysisComplete: true,
      riskLevel: 'moderate',
      shortfall: '$45,000',
      timeline: '3 years',
      components: ['Windows', 'Concrete Repairs', 'Landscaping'],
      nextAction: 'Consider contribution increase',
    },
  ];

  const getRiskColor = (riskLevel: string): string => {
    switch (riskLevel) {
      case 'critical':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'moderate':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'good':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getRiskBadge = (riskLevel: string): string => {
    switch (riskLevel) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'good':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🏆 Reserve Fund Studies</h1>
          <p className="text-gray-600 mt-1">Crisis prevention command center with AI-powered analysis</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Upload New Study</span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Portfolio Report</span>
          </button>
        </div>
      </div>

      {/* Upload Area */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-dashed border-blue-300 rounded-xl p-8">
        <div className="text-center">
          <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Upload Reserve Fund Study</h3>
          <p className="text-blue-700 mb-4">
            Get comprehensive AI analysis with crisis prediction and funding strategies
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Choose File
            </button>
            <span className="text-blue-600 text-sm">or drag and drop your PDF here</span>
          </div>
          <p className="text-blue-500 text-xs mt-3">Supports PDF, DOC, DOCX files up to 50MB</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveView('timeline')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeView === 'timeline' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Timeline View
        </button>
        <button
          onClick={() => setActiveView('analysis')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeView === 'analysis' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Analysis View
        </button>
        <button
          onClick={() => setActiveView('comparison')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeView === 'comparison' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Portfolio Comparison
        </button>
      </div>

      {/* Timeline View */}
      {activeView === 'timeline' && (
        <div className="space-y-4">
          {reserveStudies.map((study) => (
            <div
              key={study.id}
              className={`bg-white rounded-lg shadow-sm border-l-4 p-6 ${
                study.riskLevel === 'critical'
                  ? 'border-l-red-500'
                  : study.riskLevel === 'moderate'
                    ? 'border-l-yellow-500'
                    : 'border-l-green-500'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <FileText
                    className={`w-8 h-8 mt-1 ${
                      study.riskLevel === 'critical'
                        ? 'text-red-600'
                        : study.riskLevel === 'moderate'
                          ? 'text-yellow-600'
                          : 'text-green-600'
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{study.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getRiskBadge(study.riskLevel)}`}>
                        {study.riskLevel === 'critical'
                          ? 'Crisis Alert'
                          : study.riskLevel === 'moderate'
                            ? 'Monitor'
                            : 'Healthy'}
                      </span>
                      {study.analysisComplete && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          AI Analysis Complete
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Funding Status:</span>
                        <span
                          className={`text-sm font-medium ${
                            study.shortfall.includes('Funded') ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {study.shortfall}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Timeline:</span>
                        <span className="text-sm font-medium text-gray-900">{study.timeline}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Uploaded:</span>
                        <span className="text-sm text-gray-900">{new Date(study.uploadDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Key Components:</p>
                      <div className="flex flex-wrap gap-2">
                        {study.components.map((component, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg ${getRiskColor(study.riskLevel)}`}>
                      <p className="text-sm font-medium">Next Action Required:</p>
                      <p className="text-sm mt-1">{study.nextAction}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View Analysis</span>
                  </button>

                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center space-x-2">
                    <Calculator className="w-4 h-4" />
                    <span>Calculate Options</span>
                  </button>

                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Analysis View */}
      {activeView === 'analysis' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reserveStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText
                  className={`w-6 h-6 ${
                    study.riskLevel === 'critical'
                      ? 'text-red-600'
                      : study.riskLevel === 'moderate'
                        ? 'text-yellow-600'
                        : 'text-green-600'
                  }`}
                />
                <h3 className="font-semibold text-gray-900">{study.building}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Risk Level:</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded ${getRiskBadge(study.riskLevel)}`}>
                    {study.riskLevel.charAt(0).toUpperCase() + study.riskLevel.slice(1)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Funding Status:</span>
                  <span
                    className={`text-sm font-medium ${
                      study.shortfall.includes('Funded') ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {study.shortfall}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Next Crisis:</span>
                  <span className="text-sm font-medium text-gray-900">{study.timeline}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  View Full Analysis
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Comparison View */}
      {activeView === 'comparison' && (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Risk Comparison</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Building</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Risk Level</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Funding Gap</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Timeline</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Next Action</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reserveStudies.map((study) => (
                  <tr key={study.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">{study.building}</div>
                      <div className="text-sm text-gray-500">{new Date(study.uploadDate).toLocaleDateString()}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${getRiskBadge(study.riskLevel)}`}>
                        {study.riskLevel === 'critical'
                          ? 'Critical'
                          : study.riskLevel === 'moderate'
                            ? 'Moderate'
                            : 'Good'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`font-medium ${
                          study.shortfall.includes('Funded') ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {study.shortfall}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-900">{study.timeline}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{study.nextAction}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                        <button className="text-purple-600 hover:text-purple-800 text-sm">Calculate</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReserveStudiesPage;
