"use client";
import React, { useMemo, useState } from "react";
import { CheckCircle, Clock, AlertTriangle, Plus, Trash2, FileText } from "lucide-react";

export type ComplianceStatus = "Pending" | "Completed" | "Overdue";

type ComplianceItem = {
  id: string;
  title: string;
  status: ComplianceStatus;
  due: string; // ISO Date
  type: string;
};

const initialItems: ComplianceItem[] = [
  { id: "1", title: "Fire Safety Certificate", status: "Pending", due: "2025-09-15", type: "Compliance" },
  { id: "2", title: "Elevator Inspection", status: "Overdue", due: "2025-07-30", type: "Compliance" },
  { id: "3", title: "Reserve Study Upload", status: "Completed", due: "2025-06-10", type: "Reserve Study" },
];

const StatusBadge: React.FC<{ status: ComplianceStatus }> = ({ status }) => {
  const map: Record<ComplianceStatus, string> = {
    Completed: "bg-green-100 text-green-800",
    Pending: "bg-amber-100 text-amber-800",
    Overdue: "bg-red-100 text-red-800",
  };
  return <span className={`text-xs px-2 py-1 rounded-full ${map[status]}`}>{status}</span>;
};

const ComplianceTracker: React.FC = () => {
  const [items, setItems] = useState<ComplianceItem[]>(initialItems);
  const [form, setForm] = useState<{ title: string; due: string; type: string; status: ComplianceStatus }>(
    { title: "", due: "", type: "Compliance", status: "Pending" }
  );
  const [filter, setFilter] = useState<ComplianceStatus | "All">("All");

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.status === filter)),
    [items, filter]
  );

  const addItem = () => {
    if (!form.title || !form.due) return;
    setItems((prev) => [
      ...prev,
      { id: Math.random().toString(36).slice(2), title: form.title, due: form.due, type: form.type, status: form.status },
    ]);
    setForm({ title: "", due: "", type: "Compliance", status: "Pending" });
  };

  const deleteItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const updateStatus = (id: string, status: ComplianceStatus) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));

  return (
    <div className="space-y-6">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-gray-900">Compliance Tracker</h2>
        <p className="text-gray-600">Add, edit, and complete compliance items</p>
      </div>

      {/* Add form */}
      <div className="bg-white rounded-lg shadow p-4 grid grid-cols-1 md:grid-cols-5 gap-3">
        <input
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          className="border rounded-lg px-3 py-2"
          placeholder="Item title"
        />
        <input
          type="date"
          value={form.due}
          onChange={(e) => setForm((f) => ({ ...f, due: e.target.value }))}
          className="border rounded-lg px-3 py-2"
        />
        <select
          value={form.type}
          onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
          className="border rounded-lg px-3 py-2"
        >
          <option>Compliance</option>
          <option>Reserve Study</option>
          <option>Other</option>
        </select>
        <select
          value={form.status}
          onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as ComplianceStatus }))}
          className="border rounded-lg px-3 py-2"
        >
          <option>Pending</option>
          <option>Completed</option>
          <option>Overdue</option>
        </select>
        <button onClick={addItem} className="bg-blue-600 text-white rounded-lg px-3 py-2 inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {(["All", "Pending", "Completed", "Overdue"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1 rounded-full text-sm border ${filter === s ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-white text-gray-700"}`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="bg-white rounded-lg shadow divide-y">
        {filtered.map((item) => (
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
              <button onClick={() => updateStatus(item.id, "Completed")} className="px-2 py-1 text-green-700 hover:text-green-900">
                <CheckCircle className="w-5 h-5" />
              </button>
              <button onClick={() => updateStatus(item.id, "Pending")} className="px-2 py-1 text-amber-700 hover:text-amber-900">
                <Clock className="w-5 h-5" />
              </button>
              <button onClick={() => updateStatus(item.id, "Overdue")} className="px-2 py-1 text-red-700 hover:text-red-900">
                <AlertTriangle className="w-5 h-5" />
              </button>
              <button onClick={() => deleteItem(item.id)} className="px-2 py-1 text-gray-600 hover:text-gray-800">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="p-6 text-center text-gray-500">No items</div>
        )}
      </div>
    </div>
  );
};

export default ComplianceTracker;
