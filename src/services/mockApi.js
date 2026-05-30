import { dishes, featuredDishes } from '@/data/dishes';
import { testimonials, team, gallery, timeline } from '@/data/content';
import {
  kpis,
  revenueSeries,
  ordersSeries,
  categoryShare,
  recentReservations,
  recentOrders,
} from '@/data/dashboard';

// Simulates network latency so loading states are realistic in the demo.
const delay = (ms = 600) => new Promise((res) => setTimeout(res, ms));

const ok = async (data, ms) => {
  await delay(ms);
  return { data };
};

export const mockApi = {
  // Menu
  getDishes: () => ok(dishes),
  getFeaturedDishes: () => ok(featuredDishes),
  getDishById: (id) => ok(dishes.find((d) => d.id === id)),

  // Content
  getTestimonials: () => ok(testimonials),
  getTeam: () => ok(team),
  getGallery: () => ok(gallery),
  getTimeline: () => ok(timeline),

  // Reservations
  createReservation: (payload) =>
    ok({ id: `res_${Date.now()}`, status: 'confirmed', ...payload }, 900),

  // Contact / newsletter
  sendContactMessage: (payload) => ok({ received: true, ...payload }, 800),
  subscribeNewsletter: (email) => ok({ subscribed: true, email }, 700),

  // Dashboard
  getDashboard: () =>
    ok(
      {
        kpis,
        revenueSeries,
        ordersSeries,
        categoryShare,
        recentReservations,
        recentOrders,
      },
      700
    ),

  // Auth
  login: ({ email }) =>
    ok(
      {
        token: 'demo.jwt.token',
        user: { id: 'u1', name: 'Aurélie Mercer', email, role: 'admin' },
      },
      800
    ),
};

export default mockApi;
