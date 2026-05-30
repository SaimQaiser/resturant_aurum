// Static configuration used throughout the app.

export const BRAND = {
  name: 'AURUM',
  tagline: 'Contemporary Fine Dining',
  established: '2014',
  phone: '+1 (212) 555-0147',
  email: 'reservations@aurum.dining',
  address: '124 Gilded Row, TriBeCa, New York, NY 10013',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'Contact', path: '/contact' },
];

export const DASHBOARD_LINKS = [
  { label: 'Overview', path: '/dashboard', icon: 'Dashboard' },
  { label: 'Reservations', path: '/dashboard?tab=reservations', icon: 'EventSeat' },
  { label: 'Orders', path: '/dashboard?tab=orders', icon: 'ReceiptLong' },
  { label: 'Menu', path: '/menu', icon: 'RestaurantMenu' },
  { label: 'Guests', path: '/dashboard?tab=guests', icon: 'Groups' },
  { label: 'Settings', path: '/dashboard?tab=settings', icon: 'Settings' },
];

export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'Facebook' },
  { label: 'X', href: 'https://x.com', icon: 'X' },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: 'Pinterest' },
];

export const BUSINESS_HOURS = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday – Thursday', hours: '17:30 – 23:00' },
  { day: 'Friday', hours: '17:00 – 00:00' },
  { day: 'Saturday', hours: '12:00 – 00:00' },
  { day: 'Sunday', hours: '12:00 – 22:00' },
];

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Mains' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'wine', label: 'Wine & Spirits' },
];

export const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const TIME_SLOTS = [
  '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30', '22:00',
];
