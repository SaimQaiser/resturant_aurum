import apiClient, { USE_MOCK } from './apiClient';
import mockApi from './mockApi';

export const dashboardService = {
  getDashboard: () =>
    USE_MOCK ? mockApi.getDashboard() : apiClient.get('/dashboard'),
};

export default dashboardService;
