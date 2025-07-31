import axiosInstance from '@/shared/api/axiosInstance';
import { IApiResponse } from '@/shared/types/api';
import { IAnalyzeDocumentRes } from './documents.api.types';

class DocumentsApi {
  async analyzeDocument(formData: FormData): Promise<IApiResponse<IAnalyzeDocumentRes>> {
    try {
      const response = await axiosInstance.post('documents/analyze-document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: unknown) {
      throw error;
    }
  }
  async getReserveStudyAnalysis(): Promise<IApiResponse<IAnalyzeDocumentRes[]>> {
    try {
      const response = await axiosInstance.get('documents/reserve-study-analysis');
      return response.data;
    } catch (error: unknown) {
      throw error;
    }
  }
}

const documentsApi = new DocumentsApi();
export default documentsApi;
