'use client';
import React from 'react';
import AddBuildingForm from '@/features/onboarding/AddBuildingForm';

const AddBuildingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Add Building</h1>
          <p className="text-gray-600">Provide basic details to get started. You can add more buildings later from the dashboard.</p>
        </div>
        <AddBuildingForm
          onSubmit={(payload) => {
            // Client-only: simulate success
            console.log('Onboarding AddBuilding payload', payload);
            alert('Building captured locally. Backend integration pending.');
          }}
        />
      </div>
    </div>
  );
};

export default AddBuildingPage;
