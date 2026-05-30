import apiClient, { USE_MOCK } from './apiClient';
import mockApi from './mockApi';

// Each service hides the mock/real switch from the rest of the app.
export const menuService = {
  getDishes: () => (USE_MOCK ? mockApi.getDishes() : apiClient.get('/dishes')),
  getFeatured: () =>
    USE_MOCK ? mockApi.getFeaturedDishes() : apiClient.get('/dishes/featured'),
  getById: (id) =>
    USE_MOCK ? mockApi.getDishById(id) : apiClient.get(`/dishes/${id}`),
};

export default menuService;
