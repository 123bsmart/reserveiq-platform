'use client';

import { DollarSign, Shield, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

type RiskItem = {
    severity: 'Critical' | 'Warning' | 'Planned' | 'Info';
    project: string;
    due_year: number;
    cost: number;
    months_away: number;
    description: string;
};

type FinancialHealthData = {
    building_name: string;
    health_score: number; // 0-100
    health_status: string;
    last_updated: string; // ISO or human
    reserve_balance: number;
    target_balance: number;
    risk_factors: RiskItem[];
};

const mockData: FinancialHealthData = {
    building_name: 'Pinewood Towers',
    health_score: 71,
    health_status: 'Moderate Risk',
    last_updated: '2025-08-05',
    reserve_balance: 140000,
    target_balance: 250000,
    risk_factors: [
        {
            severity: 'Critical',
            project: 'Roof Replacement',
            due_year: 2027,
            cost: 45000,
            months_away: 18,
            description: 'Major roof work required within 18 months',
        },
        {
            severity: 'Warning',
            project: 'Elevator Modernization',
            due_year: 2029,
            cost: 40000,
            months_away: 48,
            description: 'Elevator system approaching end of life',
        },
        {
            severity: 'Planned',
            project: 'Boiler System',
            due_year: 2032,
            cost: 25000,
            months_away: 84,
            description: 'Routine replacement, adequately funded',
        },
    ],
};

function scoreTextColor(score: number): string {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
}

function scoreBgColor(score: number): string {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
}

function RiskBadge({ severity }: { severity: RiskItem['severity'] }): JSX.Element {
    switch (severity) {
        case 'Critical':
            return (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                    <XCircle className="w-3 h-3 mr-1" /> Critical
                </span>
            );
        case 'Warning':
            return (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                    <AlertCircle className="w-3 h-3 mr-1" /> Warning
                </span>
            );
        case 'Planned':
            return (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" /> Planned
                </span>
            );
        default:
            return (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                    Info
                </span>
            );
    }
}

function HealthScoreCard({ data }: { data: FinancialHealthData }): JSX.Element {
    return (
        <div className={`rounded-lg p-6 text-center ${scoreBgColor(data.health_score)}`}>
            <Shield className={`w-8 h-8 mx-auto mb-3 ${scoreTextColor(data.health_score)}`} />
            <div className={`text-4xl font-bold mb-2 ${scoreTextColor(data.health_score)}`}>{data.health_score}</div>
            <div className="text-lg font-medium text-gray-900 mb-1">{data.health_status}</div>
            <div className="text-sm text-gray-600">out of 100</div>
            <div className="text-xs text-gray-500 mt-3">Last updated: {data.last_updated}</div>
        </div>
    );
}

function ReserveBalanceCard({ data }: { data: FinancialHealthData }): JSX.Element {
    const pct = Math.min(100, Math.round((data.reserve_balance / data.target_balance) * 100));
    return (
        <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Reserve Balance</h3>
                <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-2">${data.reserve_balance.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mb-4">Target: ${data.target_balance.toLocaleString()}</div>
            <div className="w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${pct}%` }} />
            </div>
            <div className="text-right text-xs text-gray-600 mt-1">{pct}% funded</div>
        </div>
    );
}

function QuickStats({ data }: { data: FinancialHealthData }): JSX.Element {
    const shortfall = Math.max(0, data.target_balance - data.reserve_balance);
    const riskCount = data.risk_factors.length;
    const criticalCount = data.risk_factors.filter((r) => r.severity === 'Critical').length;
    return (
        <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Shortfall:</span>
                    <span className="text-sm font-medium text-red-600">${shortfall.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Risk Factors:</span>
                    <span className="text-sm font-medium">{riskCount}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Critical Issues:</span>
                    <span className="text-sm font-medium text-red-600">{criticalCount}</span>
                </div>
            </div>
        </div>
    );
}

function RiskList({ items }: { items: RiskItem[] }): JSX.Element {
    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Top Risk Factors</h3>
            <div className="space-y-3">
                {items.map((r, idx) => (
                    <div key={idx} className="flex items-start justify-between p-3 rounded-lg border border-gray-100">
                        <div className="flex-1 pr-4">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-900">{r.project}</span>
                                <RiskBadge severity={r.severity} />
                            </div>
                            <p className="text-sm text-gray-600">{r.description}</p>
                            <div className="text-xs text-gray-500 mt-1">Due {r.due_year} • ~{r.months_away} months • ${r.cost.toLocaleString()}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const FinancialHealth: React.FC = () => {
    const data = mockData; // TODO: replace with real data via API/React Query
    return (
        <div className="space-y-6">
            <div className="mb-2">
                <h2 className="text-2xl font-semibold text-gray-900">Reserve Health Overview</h2>
                <p className="text-gray-600">Financial health assessment and risk analysis</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <HealthScoreCard data={data} />
                    <ReserveBalanceCard data={data} />
                    <QuickStats data={data} />
                </div>
                <div className="pt-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Factors & Timeline</h3>
                    <RiskList items={data.risk_factors} />
                </div>
            </div>
        </div>
    );
};

export default FinancialHealth;
