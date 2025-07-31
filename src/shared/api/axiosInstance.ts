import axios from 'axios';
import authApi from '../services/auth.api';

let _retry = false;

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/platform/`,
  withCredentials: true,
  headers: {
    Accept: '*/*',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    if (status === 401 && !_retry) {
      _retry = true;

      try {
        await authApi.refreshToken();
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        if (typeof window !== 'undefined') {
          window.location.href = '/auth';
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
