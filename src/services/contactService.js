import apiClient, { USE_MOCK } from './apiClient';
import mockApi from './mockApi';

export const contactService = {
  sendMessage: (payload) =>
    USE_MOCK
      ? mockApi.sendContactMessage(payload)
      : apiClient.post('/contact', payload),
  subscribe: (email) =>
    USE_MOCK
      ? mockApi.subscribeNewsletter(email)
      : apiClient.post('/newsletter', { email }),
};

export default contactService;
