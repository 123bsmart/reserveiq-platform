'use client';
import React, { useState } from 'react';
import ReserveStudyAnalyzer from './ReserveStudyAnalyzer';
import documentsApi from '@/shared/services/documents.api';
import { IAnalyzeDocumentRes } from '@/shared/services/documents.api.types';

interface ReserveStudyUploadProps {
  onAnalysisComplete?: (analysisData: any) => void;
}

const ReserveStudyUpload: React.FC<ReserveStudyUploadProps> = ({ onAnalysisComplete }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [analysisData, setAnalysisData] = useState<IAnalyzeDocumentRes | null>(null);

  const [error, setError] = useState<string | null>(null);

  const analyzeReserveStudy = async (file: File): Promise<{ analysisId: string }> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('documentType', 'reserve_study');

    try {
      const response = await documentsApi.analyzeDocument(formData);
      if (!response.data) {
        throw new Error('No data received from analysis');
      }
      return response.data;
    } catch (error) {
      console.error('Error analyzing document:', error);
      throw new Error('Failed to analyze Reserve Study. Please try again.');
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      setError('Please upload a PDF file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    setIsUploading(true);
    setError(null);
    setUploadProgress(0);

    let eventSource: EventSource | undefined;

    try {
      // Start analysis and get analysisId
      const { analysisId } = await analyzeReserveStudy(file);

      // Connect to SSE for real-time progress
      eventSource = new EventSource(
        `${process.env.NEXT_PUBLIC_API_URL}/api/platform/documents/analysis-progress/${analysisId}`
      );

      eventSource.onmessage = (event) => {
        const progress = JSON.parse(event.data);
        // console.log('progress', progress);
        // Update progress based on actual server progress
        const progressPercentage = (progress.progress / progress.totalSteps) * 100;
        setUploadProgress(progressPercentage);

        // Update progress message
        setProgressMessage(progress.currentStep);

        // Check if analysis is complete
        if (progress.isComplete) {
          eventSource?.close();
          setUploadProgress(100);

          // Small delay to show 100% progress
          setTimeout(() => {
            setIsUploading(false);
            setUploadProgress(0);
            setProgressMessage('');
            fetchAnalysisResults(analysisId);
          }, 500);
        }
      };

      eventSource.onerror = (error) => {
        console.error('SSE Error:', error);
        eventSource?.close();
        setError('Connection lost. Please check your internet connection.');
        setIsUploading(false);
        setUploadProgress(0);
      };
    } catch (error) {
      eventSource?.close();
      setIsUploading(false);
      setUploadProgress(0);
      setError(error instanceof Error ? error.message : 'Upload failed');
    }
  };

  const fetchAnalysisResults = async (analysisId: string) => {
    try {
      const response = await documentsApi.getAnalysisResults(analysisId);
      if (response.success && response.data) {
        setAnalysisData(response.data);
        onAnalysisComplete?.(response.data);
      }
    } catch (error) {
      console.error('Error fetching analysis results:', error);
      setError('Failed to fetch analysis results');
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const input = document.createElement('input');
      input.type = 'file';
      input.files = event.dataTransfer.files;
      await handleFileUpload({ target: { files: [file] } } as any);
    }
  };

  if (analysisData) {
    console.log('if analysisData', analysisData);
    return (
      <div className="space-y-6">
        <ReserveStudyAnalyzer analysisData={analysisData.analyze} />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Reserve Study</h3>
        <p className="text-sm text-gray-600">
          Upload a PDF Reserve Study to analyze building components, financial health, and generate funding scenarios.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {isUploading ? (
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 mb-2">{progressMessage}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{uploadProgress}% Complete</p>
          </div>
        </div>
      ) : (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 mt-1">PDF files only, max 10MB</p>
            </div>
          </div>
        </div>
      )}

      <input id="file-upload" type="file" accept=".pdf" onChange={handleFileUpload} className="hidden" />
    </div>
  );
};

export default ReserveStudyUpload;
