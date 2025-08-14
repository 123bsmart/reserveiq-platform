"use client";
import React from "react";
import { CheckCircle, Clock, AlertTriangle, FileText } from "lucide-react";

const mockItems = [
  { id: 1, title: "Fire Safety Certificate", status: "Pending", due: "2025-09-15", type: "Compliance" },
  { id: 2, title: "Elevator Inspection", status: "Overdue", due: "2025-07-30", type: "Compliance" },
  { id: 3, title: "Reserve Study Upload", status: "Completed", due: "2025-06-10", type: "Reserve Study" },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const map: Record<string, string> = {
    Completed: "bg-green-100 text-green-800",
    Pending: "bg-amber-100 text-amber-800",
    Overdue: "bg-red-100 text-red-800",
  };
  return <span className={`text-xs px-2 py-1 rounded-full ${map[status] || "bg-gray-100 text-gray-700"}`}>{status}</span>;
};

const Compliance: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-gray-900">Compliance Tracker</h2>
        <p className="text-gray-600">Read-only view for Board users</p>
      </div>

      <div className="bg-white rounded-lg shadow divide-y">
        {mockItems.map((item) => (
          <div key={item.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-medium text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-500">Due: {item.due} • Type: {item.type}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <StatusBadge status={item.status} />
              {item.status === "Completed" && <CheckCircle className="w-5 h-5 text-green-600" />}
              {item.status === "Pending" && <Clock className="w-5 h-5 text-amber-600" />}
              {item.status === "Overdue" && <AlertTriangle className="w-5 h-5 text-red-600" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compliance;
