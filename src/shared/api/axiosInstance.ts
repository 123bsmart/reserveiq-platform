import axios from 'axios';
import authApi from '@/shared/services/auth.api';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/platform/`,
  withCredentials: true, // Important for cookies
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor for logging (debugging)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor with proper 401 handling
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    // Handle 401 (Unauthorized) - attempt token refresh
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await authApi.refreshToken();
        return axiosInstance(originalRequest);
      } catch {
        localStorage.removeItem('access_token');
        await authApi.logout();

        // Redirect to auth page
        if (typeof window !== 'undefined') {
          window.location.href = '/auth';
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
