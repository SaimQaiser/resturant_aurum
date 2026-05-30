# AURUM — Luxury Fine Dining Web Application

A production-ready, agency-grade restaurant website and admin dashboard built with
**React 19**, **Material UI v7**, **React Router v7**, **Framer Motion**, **Recharts**,
**React Hook Form** and **Axios**. Dark, gold-accented luxury aesthetic with
glassmorphism, scroll-reveal choreography and smooth page transitions.

---

## ✨ Highlights

- **8 fully-built pages** — Home, Menu, Reservations, About, Contact, Login, Dashboard, 404
- **Centralised MUI theme** — design tokens, typography scale, component overrides
- **Enterprise folder structure** — every component in its own file, custom hooks, service layer
- **Mock API layer** — the entire app runs with **zero backend** (simulated latency included)
- **Context API** — auth state + global app state (favourites, toast notifications)
- **Admin dashboard** — KPI cards, revenue/orders charts, category breakdown, live tables
- **Fully responsive** — mobile, tablet, desktop and large screens
- **Polished motion** — hero entrance, card hovers, scroll reveals, animated route changes

---

## 🛠 Tech Stack

| Concern         | Library                         |
| --------------- | ------------------------------- |
| UI framework    | React 19                        |
| Component lib   | Material UI v7                  |
| Routing         | React Router v7                 |
| Forms           | React Hook Form                 |
| Charts          | Recharts                        |
| Animation       | Framer Motion                   |
| HTTP            | Axios                           |
| Date pickers    | @mui/x-date-pickers + Day.js    |
| Build tool      | Vite 6                          |

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens http://localhost:5173)
npm run dev

# 3. Production build + local preview
npm run build
npm run preview
```

### Demo Login

The dashboard is gated. Use the pre-filled demo credentials:

```
Email:    chef@aurum.dining
Password: demo1234
```

---

## 🔌 Mock vs. Real API

Out of the box the app uses an in-memory mock API (`src/services/mockApi.js`) so it runs
with no backend. Each service (`menuService`, `reservationService`, etc.) switches between
mock and real requests via a single flag.

To point at a real backend, copy `.env.example` to `.env` and set:

```
VITE_API_BASE_URL=https://your-api.example.com
```

When `VITE_API_BASE_URL` is set, the services call the live endpoints through the shared
Axios client (`src/services/apiClient.js`) instead of the mock layer.

---

## 📁 Project Structure

```
src/
├── assets/            # icons, images, fonts
├── components/
│   ├── common/        # Logo, LoadingScreen, ErrorBoundary, SectionHeading, PageHero…
│   ├── layout/        # Navbar, Footer
│   ├── navigation/    # MobileDrawer, Sidebar, Topbar
│   ├── sections/      # Hero, FeaturedDishes, ChefSpotlight, Gallery, CTA, Newsletter…
│   ├── cards/         # FoodCard, TestimonialCard, TeamCard, DashboardCard
│   ├── forms/         # ReservationForm, ContactForm, NewsletterForm, LoginForm
│   ├── charts/        # RevenueChart, OrdersChart, CategoryPieChart
│   ├── tables/        # ReservationsTable, OrdersTable
│   └── modals/        # DishModal
├── pages/             # Home, Menu, Reservations, About, Contact, Login, Dashboard, NotFound
├── layouts/           # MainLayout (public), DashboardLayout (admin)
├── routes/            # route table + ProtectedRoute
├── context/           # AuthContext, AppContext, AppProviders
├── hooks/             # useAuth, useApp, useToggle, useLocalStorage, useScrollReveal
├── services/          # apiClient, mockApi + per-domain services
├── theme/             # tokens, typography, component overrides, theme entry
├── utils/             # formatters, validators, motion variants
├── constants/         # brand config, nav links, business hours, menu categories
├── data/              # example dishes, content (team/gallery/timeline), dashboard data
├── App.jsx
└── main.jsx
```

---

## 📜 Scripts

| Script            | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start Vite dev server             |
| `npm run build`   | Production build to `/dist`       |
| `npm run preview` | Preview the production build      |

---

## 🎨 Design Notes

- **Palette:** deep black `#0A0A0B`, charcoal `#16161A`, warm gold `#C8A24B`, cream `#F5EFE2`
- **Type:** *Cormorant Garamond* (display serif) + *Jost* (body), loaded via Google Fonts
- **Imagery:** sourced from the Unsplash CDN (swap freely in `src/data` and section files)

All design decisions are centralised in `src/theme` — adjust tokens once and the whole
experience updates.

---

Built as a portfolio-grade showcase. Enjoy. 🍷
