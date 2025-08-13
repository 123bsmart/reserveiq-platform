"use client";
import { useMemo, useState } from "react";
import { Calendar, DollarSign, Download, Mail, TrendingUp, AlertTriangle, Copy as CopyIcon, BarChart2 } from "lucide-react";

type TemplateKey = "assessment" | "funding" | "meeting" | "compliance" | "summary";

const TEMPLATE_LABELS: Record<TemplateKey, { label: string; icon: JSX.Element }> = {
  assessment: { label: "Assessment Notice", icon: <DollarSign className="w-5 h-5 text-blue-600 mr-3" /> },
  funding: { label: "Funding Update", icon: <TrendingUp className="w-5 h-5 text-blue-600 mr-3" /> },
  meeting: { label: "Meeting Notice", icon: <Calendar className="w-5 h-5 text-blue-600 mr-3" /> },
  compliance: { label: "Compliance Alert", icon: <AlertTriangle className="w-5 h-5 text-blue-600 mr-3" /> },
  summary: { label: "Annual Summary", icon: <BarChart2 className="w-5 h-5 text-blue-600 mr-3" /> },
};

const BUILDINGS = ["Pinewood Towers", "Lakeside Villas", "Oakridge Court"];
const RECIPIENT_GROUPS = ["All Owners", "Board Members", "Maintenance", "Accounting"];

const seedBody = (tpl: TemplateKey, building: string) => {
  switch (tpl) {
    case "assessment":
      return `Subject: Assessment Notice for ${building}\n\nDear Residents,\n\nThis is a notice regarding the upcoming assessment...`;
    case "funding":
      return `Subject: Reserve Funding Update - ${building}\n\nDear Stakeholders,\n\nHere is the latest update on reserve funding...`;
    case "meeting":
      return `Subject: Meeting Notice - ${building}\n\nDear Owners,\n\nYou are invited to the upcoming meeting...`;
    case "compliance":
      return `Subject: Compliance Alert - ${building}\n\nPlease review the following compliance requirements...`;
    case "summary":
      return `Subject: Annual Summary - ${building}\n\nPlease find the annual summary of operations and finances...`;
  }
};

const TemplateItem: React.FC<{
  active: boolean;
  onClick: () => void;
  icon: JSX.Element;
  label: string;
}> = ({ active, onClick, icon, label }) => (
  <div
    onClick={onClick}
    className={
      "border rounded-lg p-4 cursor-pointer transition-all " +
      (active ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300")
    }
  >
    <div className="flex items-center">
      {icon}
      <span className="font-medium text-gray-900">{label}</span>
    </div>
  </div>
);

const PMEmailGenerator: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateKey>("funding");
  const [building, setBuilding] = useState(BUILDINGS[0]);
  const [recipients, setRecipients] = useState(RECIPIENT_GROUPS[0]);
  const [body, setBody] = useState("");

  const rightPlaceholder = "Click 'Generate Email' to create a professional email template...";

  const handleGenerate = () => {
    setBody(seedBody(selectedTemplate, building));
  };

  const templateList = useMemo(() => (
    <div className="space-y-3 mb-6">
      {(Object.keys(TEMPLATE_LABELS) as TemplateKey[]).map((key) => (
        <TemplateItem
          key={key}
          active={selectedTemplate === key}
          onClick={() => setSelectedTemplate(key)}
          icon={TEMPLATE_LABELS[key].icon}
          label={TEMPLATE_LABELS[key].label}
        />
      ))}
    </div>
  ), [selectedTemplate]);

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Board Email Generator</h2>
        <p className="text-gray-600">Create professional communications for owners and stakeholders</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Template</h3>
          {templateList}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Building</label>
            <select
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
            >
              {BUILDINGS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Recipients</label>
            <select
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
            >
              {RECIPIENT_GROUPS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <button
              className="px-3 py-2 text-sm font-medium rounded-lg transition-colors bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleGenerate}
            >
              Generate Email
            </button>
            <button className="px-3 py-2 text-sm font-medium rounded-lg transition-colors bg-blue-100 text-blue-700 border border-blue-200">
              Email Generator
            </button>
          </div>
        </div>

        {/* Right column */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Generated Email</h3>
          <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 h-[420px]">
            <textarea
              className="w-full h-full border-none bg-transparent resize-none focus:outline-none text-sm"
              placeholder={rightPlaceholder}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={20}
            />
          </div>

          <div className="flex items-center gap-3 mt-4">
            <button className="flex items-center gap-2 px-3 py-2 text-sm border rounded-lg">
              <CopyIcon className="w-4 h-4" />
              Copy
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm border rounded-lg">
              <Download className="w-4 h-4" />
              Download
            </button>
            <button className="ml-auto flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors bg-blue-600 text-white hover:bg-blue-700">
              <Mail className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMEmailGenerator;
