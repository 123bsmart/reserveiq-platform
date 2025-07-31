'use client';
import documentsApi from '@/shared/services/documents.api';
import { IAnalyze } from '@/shared/services/documents.api.types';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Upload } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import StudiesLibrary from './StudiesLibrary';

const ReserveStudies: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<IAnalyze | null>();
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const mutation = useMutation({
    mutationFn: documentsApi.analyzeDocument,
    onSuccess: (data) => {
      setIsAnalyzing(false);
      setSelectedFile(null);
      if (data.success && data.data) {
        setAnalysisResult(data.data.analyze);
        setFileUrl(data.data.file_url);
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      setIsAnalyzing(false);
      setSelectedFile(null);
      toast.error(error.response?.data.message || 'Unexpected error');
    },
  });

  const handleRunAnalysis = (): void => {
    if (!selectedFile) return;
    setIsAnalyzing(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    mutation.mutate(formData);
  };

  return (
    <div>
      {analysisResult && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">AI Analysis Summary</h2>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Document Type:</strong> {analysisResult.documentInfo.type}
              </p>
              <p>
                <strong>Confidence:</strong> {analysisResult.documentInfo.confidence}%
              </p>
              <p>
                <strong>Page Count:</strong> {analysisResult.documentInfo.pageCount}
              </p>
              <p>
                <strong>Processing Time:</strong> {Math.round(analysisResult.documentInfo.processingTime / 1000)} sec
              </p>

              <hr className="my-2" />

              <p>
                <strong>Reserve Balance:</strong> $
                {analysisResult.financialSummary?.currentReserveBalance?.toLocaleString()}
              </p>
              <p>
                <strong>Annual Contribution:</strong> $
                {analysisResult.financialSummary?.annualContribution?.toLocaleString()}
              </p>
              <p>
                <strong>Funded Ratio:</strong> {analysisResult.financialSummary?.fundingRatio}%
              </p>
              <p>
                <strong>5-Year Projected Shortfall:</strong> $
                {analysisResult.financialSummary?.projectedShortfall?.fiveYear?.toLocaleString()}
              </p>

              <hr className="my-2" />

              {/* 🔧 Top Projects */}
              <div>
                <strong>Top Projects (Costliest)</strong>
                <ul className="list-disc pl-5 mt-1">
                  {analysisResult.topProjects?.slice(0, 5).map((project, idx) => (
                    <li key={idx}>
                      {project.name} — ${project.replacementCost.toLocaleString()}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 🔧 AI Risk Summary */}
              <div className="mt-2">
                <strong>AI Risk Summary:</strong>
                <p className="mt-1 text-gray-700 italic">
                  {analysisResult.summaryInsight || 'No critical insight extracted'}
                </p>
                <p>
                  <strong>Risk Level:</strong>{' '}
                  <span
                    className={`inline-block px-2 py-1 rounded text-white ${
                      analysisResult.riskAssessment?.financialHealth === 'high'
                        ? 'bg-red-600'
                        : analysisResult.riskAssessment?.financialHealth === 'medium'
                          ? 'bg-yellow-500'
                          : 'bg-green-600'
                    }`}
                  >
                    {analysisResult.riskAssessment?.financialHealth?.toUpperCase()}
                  </span>
                </p>
              </div>
            </div>

            {/* 📥 Download Summary Button */}
            <div className="mt-6 flex justify-between">
              {fileUrl && (
                <Link
                  href={fileUrl}
                  target="_blank"
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200"
                >
                  Download Summary PDF
                </Link>
              )}

              <button
                onClick={() => setAnalysisResult(null)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">🏆 Reserve Fund Studies</h1>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-800 font-medium">Crisis Prevention Command Center</p>
        <p className="text-blue-600 text-sm mt-1">
          Upload your reserve studies for comprehensive AI analysis and crisis prediction
        </p>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-lg shadow-sm border p-8 mb-6 text-center">
        <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Reserve Study</h3>

        {/* File Picker */}
        {!selectedFile && (
          <>
            <p className="text-gray-600 mb-4">Drag and drop your reserve fund study or click to browse</p>
            <label className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer inline-block">
              Choose File
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </>
        )}

        {selectedFile && (
          <>
            {!isAnalyzing && (
              <button
                onClick={() => setSelectedFile(null)}
                className={`mt-4 px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition`}
              >
                Clear File
              </button>
            )}

            {/* Show file name */}
            <div className="mt-4 text-sm text-gray-800">
              Selected file: <strong>{selectedFile.name}</strong>
            </div>
            {/* Run Analysis Button */}
            <button
              onClick={handleRunAnalysis}
              className={`mt-4 px-6 py-2 rounded-lg ${
                isAnalyzing ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              } text-white transition`}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing...' : 'Run Analysis'}
            </button>
          </>
        )}
      </div>

      {/* Studies Library */}
      <StudiesLibrary setAnalysisResult={setAnalysisResult} />
    </div>
  );
};

export default ReserveStudies;
