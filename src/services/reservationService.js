import apiClient, { USE_MOCK } from './apiClient';
import mockApi from './mockApi';

export const reservationService = {
  create: (payload) =>
    USE_MOCK
      ? mockApi.createReservation(payload)
      : apiClient.post('/reservations', payload),
};

export default reservationService;
