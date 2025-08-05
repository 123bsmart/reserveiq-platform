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
    console.log('🚀 Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor with proper 401 handling
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('✅ Response:', response.status, response.config.url);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    console.log('❌ Response Error:', status, error.config?.url);

    // Handle 401 (Unauthorized) - attempt token refresh
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log('🔄 Attempting token refresh...');
        await authApi.refreshToken();
        console.log('✅ Token refreshed successfully');
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('❌ Token refresh failed:', refreshError);
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
