"use client";
import React from "react";
import {
  DollarSign,
  Calendar,
  AlertTriangle,
  FileText,
  Shield,
  BarChart3,
  Eye,
} from "lucide-react";
import { div } from "framer-motion/client";

const StatCard: React.FC<{
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
}> = ({ title, value, subtitle, icon }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      {icon}
    </div>
    {subtitle && (
      <div className="mt-2">
        <span className="text-sm text-gray-500">{subtitle}</span>
      </div>
    )}
  </div>
);

const ToolTile: React.FC<{
  title: string;
  desc: string;
  color: "blue" | "green" | "purple" | "orange";
  icon: React.ReactNode;
}> = ({ title, desc, color, icon }) => {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    green: "bg-green-100 text-green-600 hover:bg-green-200",
    purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
    orange: "bg-amber-100 text-amber-600 hover:bg-amber-200",
  };
  return (
    <div className={`p-4 rounded-lg cursor-pointer transition-colors ${colorMap[color]}`}>
      <div className="w-8 h-8 mb-3">{icon}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm opacity-80 mb-2">{desc}</p>
      <p className="text-xs opacity-70">Updated 2 days ago</p>
    </div>
  );
};

const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = "blue" }) => {
  const classMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
  };
  return <span className={`px-2 py-1 ${classMap[color]} text-xs font-medium rounded-full`}>{children}</span>;
};

const BoardOverviewV2: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Board Dashboard Overview</h1>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 ">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Pinewood Towers</h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600 mb-1">71</div>
              <div className="text-sm text-gray-500">Health Score</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Reserve Balance"
            value="$140,000"
            subtitle="56% of target"
            icon={<DollarSign className="w-8 h-8 text-green-600" />}
          />
          <StatCard
            title="Next Meeting"
            value="9/15/2025"
            subtitle="33 days away"
            icon={<Calendar className="w-8 h-8 text-blue-600" />}
          />
          <StatCard
            title="Pending Items"
            value="3"
            subtitle="Require Board action"
            icon={<AlertTriangle className="w-8 h-8 text-amber-600" />}
          />
          <StatCard
            title="New Documents"
            value="2"
            subtitle="AI analyzed"
            icon={<FileText className="w-8 h-8 text-purple-600" />}
          />
        </div>

        {/* Tools + Critical Issues */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Board Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              <ToolTile
                title="Reserve Health"
                desc="View AI health score and risk analysis"
                color="blue"
                icon={<Shield className="w-8 h-8" />}
              />
              <ToolTile
                title="Funding Scenarios"
                desc="Compare assessment and funding options"
                color="green"
                icon={<BarChart3 className="w-8 h-8" />}
              />
              <ToolTile
                title="Documents"
                desc="AI analyzed files"
                color="purple"
                icon={<FileText className="w-8 h-8" />}
              />
              <ToolTile
                title="Compliance"
                desc="Policies and notices"
                color="orange"
                icon={<Eye className="w-8 h-8" />}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Critical Issues</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-lg border-l-4 border-red-500 bg-red-50">
                <div>
                  <h3 className="font-semibold text-gray-900">Roof Replacement Required</h3>
                  <p className="text-sm text-gray-600">Major roof work needed within 18 months</p>
                  <div className="text-xs text-gray-500 mt-1 flex gap-6">
                    <span>Cost: $45,000</span>
                    <span>Timeline: 18 months</span>
                  </div>
                </div>
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border-l-4 border-amber-400 bg-amber-50">
                <div>
                  <h3 className="font-semibold text-gray-900">Reserve Funding Below Target</h3>
                  <p className="text-sm text-gray-600">Current funding level at 56% of recommended target</p>
                  <div className="text-xs text-gray-500 mt-1 flex gap-6">
                    <span>Cost: $110,000</span>
                    <span>Timeline: Ongoing</span>
                  </div>
                </div>
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Board Actions</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Review Special Assessment Proposal</h3>
                  <p className="text-sm text-gray-500">Due: 2025-08-15</p>
                </div>
              </div>
              <Badge>decision</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Approve Annual Budget</h3>
                  <p className="text-sm text-gray-500">Due: 2025-09-01</p>
                </div>
              </div>
              <Badge>approval</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Insurance Policy Renewal</h3>
                  <p className="text-sm text-gray-500">Due: 2025-09-30</p>
                </div>
              </div>
              <Badge>review</Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardOverviewV2;
