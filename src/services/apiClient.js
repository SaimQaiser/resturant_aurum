import axios from 'axios';

// Centralised Axios instance. When VITE_API_BASE_URL is unset the app
// transparently falls back to the mock service layer (see mockApi.js).
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 12000,
  headers: { 'Content-Type': 'application/json' },
});

export const USE_MOCK = !import.meta.env.VITE_API_BASE_URL;

// Attach auth token if present.
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('aurum.token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Normalise errors into a predictable shape.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong. Please try again.';
    return Promise.reject({ message, status: error.response?.status });
  }
);

export default apiClient;
