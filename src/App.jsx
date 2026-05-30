import { BrowserRouter } from 'react-router-dom';
import AppProviders from '@/context/AppProviders';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import ScrollToTop from '@/components/common/ScrollToTop';
import AppRoutes from '@/routes';

// Root: error boundary → router → global providers → routes.
export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppProviders>
          <ScrollToTop />
          <AppRoutes />
        </AppProviders>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
