'use client';

import documentsApi from '@/shared/services/documents.api';
import { useQuery } from '@tanstack/react-query';
import { FileText } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { IApiResponse } from '@/shared/types/api';
import { IAnalyze, IAnalyzeDocumentRes } from '@/shared/services/documents.api.types';

type Props = {
  setAnalysisResult: (val: IAnalyze | null) => void;
};

const StudiesLibrary: React.FC<Props> = ({ setAnalysisResult }) => {
  const { data, isLoading } = useQuery<IApiResponse<IAnalyzeDocumentRes[]>>({
    queryKey: ['GET_RESERVE_ANALYSIS'],
    queryFn: documentsApi.getReserveStudyAnalysis,
  });

  if (isLoading) return <p className="p-4">Loading...</p>;

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Your Reserve Studies</h3>
      </div>
      <div className="p-6 space-y-4">
        {data?.data?.map((item: IAnalyzeDocumentRes) => {
          const analysis = item.analyze;
          const riskLevel = analysis.riskAssessment?.financialHealth;
          const shortfall = analysis.financialSummary?.projectedShortfall?.fiveYear || 0;

          const riskColor =
            riskLevel === 'poor'
              ? 'bg-red-100 text-red-800'
              : riskLevel === 'moderate'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800';

          return (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">AI Reserve Study Report</h4>
                    <p className="text-sm text-gray-600">Uploaded • AI Analysis Complete</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`${riskColor} text-xs px-2 py-1 rounded`}>
                        {riskLevel?.toUpperCase() || 'Unknown Risk'}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        ${shortfall.toLocaleString()} Shortfall
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setAnalysisResult(analysis)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                  >
                    View Analysis
                  </button>
                  <Link
                    href={item.file_url}
                    target="_blank"
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-200"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudiesLibrary;
