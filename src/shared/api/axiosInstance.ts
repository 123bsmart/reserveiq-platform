import axios from 'axios';
import refreshAccessToken from './refreshAccessToken';
import { getCookie } from 'cookies-next';

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const access_token = getCookie('access_token');
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
      config.headers.Accept = '*/*';
      config.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/platform`;
      config.withCredentials = true;
      return config;
    } catch (error) {
      console.error('Error retrieving access token:', error);
      return Promise.reject(error);
    }
  },
  async (error) => {
    console.warn('axiosInstance error', error);
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response || {};
    if (status === 401) {
      const refresh_token = getCookie('refresh_token');
      if (refresh_token) {
        try {
          const newAccessToken = await refreshAccessToken(refresh_token);
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(error.config);
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
          return Promise.reject(refreshError);
        }
      }
    }
    console.warn('axiosInstance response error', error.message, error.config.url);

    return Promise.reject(error);
  }
);

export default axiosInstance;
