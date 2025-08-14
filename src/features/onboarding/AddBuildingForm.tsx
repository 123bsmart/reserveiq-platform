"use client";
import React, { useState } from "react";

type AddBuildingFormProps = {
  onClose?: () => void;
  onSubmit?: (payload: { name: string; address: string; units?: number; reserveStudyFile?: File | null }) => void;
};

const AddBuildingForm: React.FC<AddBuildingFormProps> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [units, setUnits] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name, address, units: units ? Number(units) : undefined, reserveStudyFile: file };
    onSubmit?.(payload);
    onClose?.();
  };

  const disabled = !name.trim() || !address.trim();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Building Name<span className="text-red-500"> *</span></label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="e.g., Pinewood Towers"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address<span className="text-red-500"> *</span></label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="123 Main St, City, ST"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Units (optional)</label>
          <input
            type="number"
            min={0}
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="e.g., 48"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Reserve Study (optional)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full border rounded-lg px-3 py-2"
          />
          {file && <p className="text-xs text-gray-500 mt-1">Selected: {file.name}</p>}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">Cancel</button>
        <button type="submit" disabled={disabled} className={`px-4 py-2 rounded-lg text-white ${disabled ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"}`}>Add Building</button>
      </div>
    </form>
  );
};

export default AddBuildingForm;
