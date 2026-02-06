import axios from 'axios';
import {
  getTokens,
  saveTokens,
  clearTokens,
} from '../storage/tokenStorage';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  timeout: 10000, //
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach access token to every request
api.interceptors.request.use(
  async config => {
    const tokens = await getTokens();
    if (tokens?.accessToken) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Refresh token logic
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // Prevent infinite retry loop
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const tokens = await getTokens();
        if (!tokens?.refreshToken) {
          throw new Error('No refresh token');
        }

        const res = await axios.post(
          'https://api.escuelajs.co/api/v1/auth/refresh-token',
          { refreshToken: tokens.refreshToken },
        );

        await saveTokens(
          res.data.access_token,
          res.data.refresh_token,
        );

        originalRequest.headers.Authorization =
          `Bearer ${res.data.access_token}`;

        return api(originalRequest);
      } catch (refreshError) {
        await clearTokens();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
