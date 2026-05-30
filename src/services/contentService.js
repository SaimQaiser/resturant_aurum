import apiClient, { USE_MOCK } from './apiClient';
import mockApi from './mockApi';

export const contentService = {
  getTestimonials: () =>
    USE_MOCK ? mockApi.getTestimonials() : apiClient.get('/testimonials'),
  getTeam: () => (USE_MOCK ? mockApi.getTeam() : apiClient.get('/team')),
  getGallery: () => (USE_MOCK ? mockApi.getGallery() : apiClient.get('/gallery')),
  getTimeline: () =>
    USE_MOCK ? mockApi.getTimeline() : apiClient.get('/timeline'),
};

export default contentService;
