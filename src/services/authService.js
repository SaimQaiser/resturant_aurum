import apiClient, { USE_MOCK } from './apiClient';
import mockApi from './mockApi';

export const authService = {
  login: (credentials) =>
    USE_MOCK ? mockApi.login(credentials) : apiClient.post('/auth/login', credentials),
};

export default authService;
