import api from './apiClient';
import { saveTokens } from '../storage/tokenStorage';

export const loginUser = async (
  email: string,
  password: string,
) => {
  try {
    const res = await api.post('/auth/login', {
      email,
      password,
    });

    if (!res.data?.access_token || !res.data?.refresh_token) {
      throw new Error('Invalid login response');
    }

    await saveTokens(
      res.data.access_token,
      res.data.refresh_token,
    );

    return res.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('INVALID_CREDENTIALS');
    }

    if (error.code === 'ECONNABORTED') {
      throw new Error('REQUEST_TIMEOUT');
    }

    throw new Error('LOGIN_FAILED');
  }
};
