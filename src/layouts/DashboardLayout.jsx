import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar, { SIDEBAR_WIDTH } from '@/components/navigation/Sidebar';
import Topbar from '@/components/navigation/Topbar';
import useAuth from '@/hooks/useAuth';

// Authenticated admin shell. Redirects to /login when signed out.
export default function DashboardLayout() {
  const { isAuthenticated } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Topbar onMenuClick={() => setMobileOpen((v) => !v)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
