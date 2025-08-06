'use client';
import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

interface UploadedDocument {
  id: string;
  name: string;
  category: string;
  size: string;
  uploadedAt: Date;
  status: 'uploaded' | 'processing' | 'completed' | 'error';
}

const DocumentUpload: React.FC = () => {
  const [uploadedDocuments, setUploadedDocuments] = useState<UploadedDocument[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'budget', name: 'Budget Documents', icon: '📊' },
    { id: 'minutes', name: 'Board Minutes', icon: '📝' },
    { id: 'quotes', name: 'Contractor Quotes', icon: '💰' },
    { id: 'other', name: 'Other', icon: '📄' },
  ];

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];
    if (!file || !selectedCategory) return;

    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      const newDocument: UploadedDocument = {
        id: Date.now().toString(),
        name: file.name,
        category: selectedCategory,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        uploadedAt: new Date(),
        status: 'uploaded',
      };

      setUploadedDocuments((prev) => [newDocument, ...prev]);
      setIsUploading(false);
      setSelectedCategory('');

      // Clear the file input
      const input = event.target;
      input.value = '';
    }, 1500);
  };

  const getStatusIcon = (status: string): React.ReactNode => {
    switch (status) {
      case 'uploaded':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing':
        return <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'uploaded':
        return 'Uploaded successfully';
      case 'processing':
        return 'Processing...';
      case 'completed':
        return 'Analysis complete';
      case 'error':
        return 'Upload failed';
      default:
        return '';
    }
  };

  return (
    <div className="w-full">
      <p className="text-gray-600 mb-6">
        Upload board documents, budgets, and other important files for secure storage and easy access.
      </p>

      {/* Category Selection */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Select Document Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-medium text-sm">{category.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Upload Area */}
      {selectedCategory && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">
            Upload {categories.find((c) => c.id === selectedCategory)?.name}
          </h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
            <div className="text-center">
              <Upload className="mx-auto w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop your file here</p>
              <p className="text-sm text-gray-500 mb-4">or</p>

              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={isUploading}
                />
                <span className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  {isUploading ? 'Uploading...' : 'Choose File'}
                </span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Uploaded Documents */}
      {uploadedDocuments.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Uploaded Documents</h3>
          <div className="space-y-3">
            {uploadedDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-600">
                      {categories.find((c) => c.id === doc.category)?.name} • {doc.size} •
                      {doc.uploadedAt.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(doc.status)}
                  <span className="text-sm text-gray-600">{getStatusText(doc.status)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="text-center">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="font-medium text-gray-900">Secure Storage</h3>
          <p className="text-sm text-gray-600">All documents stored securely in the cloud</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-medium text-gray-900">Easy Access</h3>
          <p className="text-sm text-gray-600">Find documents quickly with smart categorization</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Upload className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="font-medium text-gray-900">Board Ready</h3>
          <p className="text-sm text-gray-600">Professional document management for boards</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
