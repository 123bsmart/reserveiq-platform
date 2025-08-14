"use client";
import React from "react";
import { FileText, Download, Eye } from "lucide-react";

const studies = [
  { id: 1, name: "Reserve Study 2023.pdf", uploaded: "2023-11-02", summary: "Updated remaining useful life for roof and HVAC; funding target increased by 8%.", size: "1.2 MB" },
  { id: 2, name: "Reserve Study 2021.pdf", uploaded: "2021-09-18", summary: "Baseline assessment. Identified elevator modernization in 2027.", size: "980 KB" },
];

const mockSeries = [
  { year: 2025, balance: 140 },
  { year: 2026, balance: 152 },
  { year: 2027, balance: 130 },
  { year: 2028, balance: 165 },
  { year: 2029, balance: 175 },
];

const ReserveStudies: React.FC = () => {
  const downloadPNG = () => {
    const svg = document.getElementById("rs-chart-svg") as SVGSVGElement | null;
    if (!svg) return;
    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(unescape(encodeURIComponent(xml)));
    const image64 = `data:image/svg+xml;base64,${svg64}`;

    const a = document.createElement("a");
    a.href = image64;
    a.download = "reserve-study-chart.svg";
    a.click();
  };

  const exportPDF = () => {
    const svg = document.getElementById("rs-chart-svg") as SVGSVGElement | null;
    const svgSerialized = svg ? new XMLSerializer().serializeToString(svg) : '';
    const html = `
      <html>
        <head>
          <title>Reserve Study Export</title>
          <meta charset="utf-8" />
          <style>
            body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; padding: 24px; color: #111827; }
            h1 { font-size: 20px; margin: 0 0 8px; }
            p { margin: 0 0 16px; color: #4b5563; }
            .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 16px; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>Reserve Study Summary</h1>
            <p>Latest analysis with balance trend. This export is print-ready; use your browser's "Save as PDF".</p>
          </div>
          <div class="card">
            <h1>Balance Trend</h1>
            ${svgSerialized}
          </div>
        </body>
      </html>`;
    const w = window.open('', 'reserve-study-export');
    if (!w) return;
    w.document.open();
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 300);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Reserve Studies</h2>
        <p className="text-gray-600">Latest study with a simple balance trend chart. Client-side only.</p>
      </div>

      {/* Chart card */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Balance Trend (mock)</h3>
          <div className="flex items-center gap-2">
            <button onClick={() => window.print()} className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">Print</button>
            <button onClick={downloadPNG} className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Download Chart</button>
            <button onClick={exportPDF} className="px-3 py-1.5 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg">Export PDF</button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <svg id="rs-chart-svg" viewBox="0 0 500 220" className="w-full h-56">
            <rect x="0" y="0" width="500" height="220" fill="#ffffff" />
            {/* axes */}
            <line x1="40" y1="180" x2="480" y2="180" stroke="#e5e7eb" />
            <line x1="40" y1="20" x2="40" y2="180" stroke="#e5e7eb" />
            {/* labels */}
            {mockSeries.map((p, i) => (
              <text key={p.year} x={60 + i * 100} y={200} fontSize="10" fill="#6b7280">{p.year}</text>
            ))}
            {/* line */}
            {mockSeries.map((p, i) => {
              const x = 60 + i * 100;
              const y = 180 - (p.balance - 120) * 2; // simple scale
              const prev = mockSeries[i - 1];
              if (!prev) return null;
              const px = 60 + (i - 1) * 100;
              const py = 180 - (prev.balance - 120) * 2;
              return <line key={i} x1={px} y1={py} x2={x} y2={y} stroke="#3b82f6" strokeWidth="3" />;
            })}
            {/* points */}
            {mockSeries.map((p, i) => {
              const x = 60 + i * 100;
              const y = 180 - (p.balance - 120) * 2;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r={4} fill="#3b82f6" />
                  <text x={x} y={y - 8} fontSize="10" fill="#374151">${p.balance}k</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Studies list */}
      <div className="bg-white rounded-lg shadow divide-y">
        {studies.map((d) => (
          <div key={d.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-medium text-gray-900">{d.name}</div>
                <div className="text-sm text-gray-500">Uploaded: {d.uploaded} • {d.size}</div>
                <div className="text-sm text-gray-600 mt-1">{d.summary}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"><Eye className="w-4 h-4" /> View</button>
              <button className="px-2 py-1 text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"><Download className="w-4 h-4" /> Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReserveStudies;
