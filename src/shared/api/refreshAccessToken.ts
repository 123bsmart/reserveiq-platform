import axios from 'axios';
import { setCookie, deleteCookie } from 'cookies-next';

export default async function refreshAccessToken(refresh_token: string): Promise<string | null> {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh-token`, {
      refresh_token,
    });
    const { access_token, refresh_token: newRefreshToken } = response.data;

    setCookie('access_token', access_token);
    setCookie('refresh_token', newRefreshToken);

    return access_token;
  } catch (error) {
    deleteCookie('access_token');
    deleteCookie('refresh_token');
    console.error('Failed to refresh access token:', error);
    throw error;
  }
}
