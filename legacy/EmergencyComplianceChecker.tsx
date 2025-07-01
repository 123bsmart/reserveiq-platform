import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, FileText, Shield, ExternalLink, Download, RefreshCw, MapPin } from 'lucide-react';

const EmergencyComplianceChecker = () => {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState('ontario');
  const [scanning, setScanning] = useState(false);
  const [lastScanDate, setLastScanDate] = useState('2024-06-22 14:30');

  const jurisdictions = [
    { id: 'ontario', name: 'Ontario', flag: '🇨🇦' },
    { id: 'bc', name: 'British Columbia', flag: '🇨🇦' },
    { id: 'florida', name: 'Florida', flag: '🇺🇸' },
    { id: 'texas', name: 'Texas', flag: '🇺🇸' },
    { id: 'california', name: 'California', flag: '🇺🇸' }
  ];

  const emergencyRules = {
    ontario: [
      {
        id: 1,
        rule: "Form 15 - Reserve Fund Study Filing",
        description: "Reserve fund study must be filed within 120 days of fiscal year end",
        status: "violation",
        riskLevel: "critical",
        daysRemaining: -45,
        penalty: "Board liability, potential lawsuits",
        autoFixAvailable: true,
        authority: "Condominium Act, 1998 - Section 94",
        lastChecked: "2024-06-22"
      },
      {
        id: 2,
        rule: "Insurance Distribution to Owners",
        description: "Insurance certificate copies must be distributed annually",
        status: "warning",
        riskLevel: "high",
        daysRemaining: 15,
        penalty: "Regulatory fines up to $50,000",
        autoFixAvailable: true,
        authority: "Ontario Regulation 48/01 - Section 76",
        lastChecked: "2024-06-22"
      },
      {
        id: 3,
        rule: "AGM Notice Requirements",
        description: "Annual General Meeting notice must be given 15-50 days prior",
        status: "compliant",
        riskLevel: "low",
        daysRemaining: 28,
        penalty: "Meeting may be invalidated",
        autoFixAvailable: false,
        authority: "Condominium Act, 1998 - Section 45",
        lastChecked: "2024-06-22"
      },
      {
        id: 4,
        rule: "Audited Financial Statements",
        description: "Audited statements required within 180 days of year-end",
        status: "warning",
        riskLevel: "medium",
        daysRemaining: 32,
        penalty: "Regulatory sanctions possible",
        autoFixAvailable: false,
        authority: "Condominium Act, 1998 - Section 66",
        lastChecked: "2024-06-22"
      }
    ]
  };

  const complianceStats = {
    total: 47,
    compliant: 32,
    warnings: 11,
    violations: 4,
    overallScore: 68
  };

  const currentRules = emergencyRules[selectedJurisdiction] || [];

  const handleEmergencyScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setLastScanDate(new Date().toLocaleString());
    }, 3000);
  };

  const handleAutoFix = (ruleId) => {
    alert(`Initiating auto-fix for rule ${ruleId}. This will prepare required documents and schedule filing.`);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'compliant': return 'text-green-700 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'violation': return 'text-red-700 bg-red-50 border-red-200';
      default: return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'compliant': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning': return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'violation': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default: return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getRiskColor = (riskLevel) => {
    switch(riskLevel) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Compliance Checker</h1>
            <p className="text-gray-600">Real-time regulatory compliance monitoring with instant violation alerts</p>
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              value={selectedJurisdiction}
              onChange={(e) => setSelectedJurisdiction(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {jurisdictions.map(jurisdiction => (
                <option key={jurisdiction.id} value={jurisdiction.id}>
                  {jurisdiction.flag} {jurisdiction.name}
                </option>
              ))}
            </select>
            
            <button 
              onClick={handleEmergencyScan}
              disabled={scanning}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 flex items-center gap-2"
            >
              {scanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4" />
                  Emergency Scan
                </>
              )}
            </button>
          </div>
        </div>

        {/* Compliance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{complianceStats.overallScore}%</div>
              <div className="text-sm text-gray-600">Compliance Score</div>
              <div className={`text-xs mt-2 px-2 py-1 rounded-full ${complianceStats.overallScore >= 80 ? 'bg-green-100 text-green-800' : complianceStats.overallScore >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                {complianceStats.overallScore >= 80 ? 'Good' : complianceStats.overallScore >= 60 ? 'Fair' : 'Poor'}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{complianceStats.compliant}</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{complianceStats.warnings}</div>
                <div className="text-sm text-gray-600">Warnings</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{complianceStats.violations}</div>
                <div className="text-sm text-gray-600">Violations</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{complianceStats.total}</div>
                <div className="text-sm text-gray-600">Total Rules</div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Scan Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-medium">Last Emergency Scan: {lastScanDate}</span>
            </div>
            <div className="text-blue-700 text-sm">
              Next automated scan: {new Date(Date.now() + 24*60*60*1000).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Compliance Rules */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">
              Regulatory Requirements - {jurisdictions.find(j => j.id === selectedJurisdiction)?.name}
            </h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              {currentRules.map((rule) => (
                <div key={rule.id} className={`border rounded-lg p-6 ${getStatusColor(rule.status)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      {getStatusIcon(rule.status)}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{rule.rule}</h3>
                        <p className="text-gray-700 mb-2">{rule.description}</p>
                        <div className="text-sm text-gray-600 mb-3">
                          <strong>Authority:</strong> {rule.authority}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-sm font-medium ${getRiskColor(rule.riskLevel)} mb-1`}>
                        {rule.riskLevel.charAt(0).toUpperCase() + rule.riskLevel.slice(1)} Risk
                      </div>
                      <div className="text-sm text-gray-600">
                        {rule.daysRemaining > 0 ? `${rule.daysRemaining} days remaining` : `${Math.abs(rule.daysRemaining)} days overdue`}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-700">
                      <strong>Potential Penalty:</strong> {rule.penalty}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Last checked: {rule.lastChecked}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {rule.autoFixAvailable && (
                        <button 
                          onClick={() => handleAutoFix(rule.id)}
                          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 flex items-center gap-1"
                        >
                          <RefreshCw className="w-3 h-3" />
                          Auto-Fix
                        </button>
                      )}
                      
                      <button className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        View Details
                      </button>
                      
                      <button className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Legal Reference
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Emergency Actions</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border-2 border-red-200 rounded-lg hover:border-red-300 text-left">
                <AlertTriangle className="w-6 h-6 text-red-600 mb-2" />
                <div className="font-medium text-gray-900 mb-1">Generate Violation Report</div>
                <div className="text-sm text-gray-600">Export detailed compliance violation report</div>
              </button>
              
              <button className="p-4 border-2 border-yellow-200 rounded-lg hover:border-yellow-300 text-left">
                <Clock className="w-6 h-6 text-yellow-600 mb-2" />
                <div className="font-medium text-gray-900 mb-1">Set Deadline Alerts</div>
                <div className="text-sm text-gray-600">Configure automatic compliance reminders</div>
              </button>
              
              <button className="p-4 border-2 border-blue-200 rounded-lg hover:border-blue-300 text-left">
                <Download className="w-6 h-6 text-blue-600 mb-2" />
                <div className="font-medium text-gray-900 mb-1">Download Compliance Kit</div>
                <div className="text-sm text-gray-600">Get forms and templates for quick fixes</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyComplianceChecker;
