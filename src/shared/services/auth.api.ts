import axiosInstance from '@/shared/api/axiosInstance';
import { ILoginReq, ILoginRespData, ISignUpReq } from './auth.api.types';
import { IApiResponse } from '@/shared/types/api';
import { IUser } from '@/shared/types/user';

class AuthApi {
  async signup(data: ISignUpReq): Promise<IApiResponse<IUser>> {
    try {
      const response = await axiosInstance.post('auth/sign-up', data);
      return response.data;
    } catch (error: unknown) {
      throw error;
    }
  }
  async login(data: ILoginReq): Promise<IApiResponse<ILoginRespData>> {
    try {
      const response = await axiosInstance.post('auth/login', data);
      return response.data;
    } catch (error: unknown) {
      throw error;
    }
  }
  async refreshToken(): Promise<boolean> {
    try {
      const response = await axiosInstance.post('auth/refresh-token');
      localStorage.setItem('access_token', response.data.data.access_token);
      return !!response.data.data.access_token;
    } catch (error: unknown) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await axiosInstance.post('auth/logout');
    } catch (error: unknown) {
      throw error;
    }
  }
}

const authApi = new AuthApi();
export default authApi;
