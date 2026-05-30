// Mock analytics + operational data for the admin dashboard.

export const kpis = [
  { id: 'revenue', label: 'Revenue (30d)', value: 184250, prefix: '$', delta: 12.4, trend: 'up' },
  { id: 'covers', label: 'Covers Served', value: 3192, delta: 8.1, trend: 'up' },
  { id: 'reservations', label: 'Reservations', value: 842, delta: 5.6, trend: 'up' },
  { id: 'avgCheck', label: 'Avg. Check', value: 218, prefix: '$', delta: -2.3, trend: 'down' },
];

export const revenueSeries = [
  { month: 'Jan', revenue: 121000, target: 110000 },
  { month: 'Feb', revenue: 132500, target: 120000 },
  { month: 'Mar', revenue: 128900, target: 125000 },
  { month: 'Apr', revenue: 151200, target: 135000 },
  { month: 'May', revenue: 162800, target: 145000 },
  { month: 'Jun', revenue: 158400, target: 150000 },
  { month: 'Jul', revenue: 173600, target: 160000 },
  { month: 'Aug', revenue: 184250, target: 165000 },
];

export const ordersSeries = [
  { day: 'Mon', dineIn: 64, takeaway: 18 },
  { day: 'Tue', dineIn: 72, takeaway: 22 },
  { day: 'Wed', dineIn: 81, takeaway: 25 },
  { day: 'Thu', dineIn: 96, takeaway: 31 },
  { day: 'Fri', dineIn: 142, takeaway: 44 },
  { day: 'Sat', dineIn: 168, takeaway: 52 },
  { day: 'Sun', dineIn: 121, takeaway: 38 },
];

export const categoryShare = [
  { name: 'Mains', value: 38 },
  { name: 'Seafood', value: 24 },
  { name: 'Wine', value: 19 },
  { name: 'Starters', value: 11 },
  { name: 'Desserts', value: 8 },
];

export const recentReservations = [
  { id: 'r1', guest: 'O. Castellano', date: '2025-08-22', time: '20:00', guests: 4, status: 'confirmed' },
  { id: 'r2', guest: 'M. Delacroix', date: '2025-08-22', time: '19:30', guests: 2, status: 'seated' },
  { id: 'r3', guest: 'H. Nakamura', date: '2025-08-23', time: '21:00', guests: 6, status: 'pending' },
  { id: 'r4', guest: 'R. Abernathy', date: '2025-08-23', time: '18:30', guests: 2, status: 'confirmed' },
  { id: 'r5', guest: 'L. Fontaine', date: '2025-08-24', time: '20:30', guests: 8, status: 'cancelled' },
];

export const recentOrders = [
  { id: '#A-2941', table: 'Table 12', items: 6, total: 642, status: 'completed', server: 'Naomi' },
  { id: '#A-2942', table: 'Table 4', items: 4, total: 388, status: 'preparing', server: 'Liam' },
  { id: '#A-2943', table: 'Counter 2', items: 9, total: 1024, status: 'completed', server: 'Tomás' },
  { id: '#A-2944', table: 'Table 8', items: 3, total: 214, status: 'pending', server: 'Sofia' },
  { id: '#A-2945', table: 'Private Room', items: 14, total: 2860, status: 'preparing', server: 'Daniel' },
];
