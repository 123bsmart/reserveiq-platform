import axiosInstance from '@/shared/api/axiosInstance';
import { ILoginReq, ILoginRespData, ISignUpReq } from './auth.api.types';
import { IApiResponse } from '@/shared/types/api';
import { IUser } from '@/shared/types/user';

class AuthApi {
  async signup(data: ISignUpReq): Promise<IApiResponse<IUser>> {
    console.log('signup');
    try {
      const response = await axiosInstance.post('auth/sign-up', data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }
  async login(data: ILoginReq): Promise<IApiResponse<ILoginRespData>> {
    try {
      const response = await axiosInstance.post('auth/login', data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }
}

export default new AuthApi();
