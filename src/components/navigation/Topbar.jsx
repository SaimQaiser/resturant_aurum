import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Stack,
  Avatar,
  Tooltip,
  Badge,
  Button,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate } from 'react-router-dom';
import { SIDEBAR_WIDTH } from '@/components/navigation/Sidebar';
import useAuth from '@/hooks/useAuth';

// Sticky top bar for the admin area.
export default function Topbar({ onMenuClick }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        ml: { lg: `${SIDEBAR_WIDTH}px` },
        backgroundColor: 'rgba(10,10,11,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ gap: 1 }}>
        <IconButton
          edge="start"
          onClick={onMenuClick}
          sx={{ display: { lg: 'none' }, color: 'text.primary' }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2" sx={{ color: 'text.primary', lineHeight: 1.2 }}>
            Good evening, {user?.name?.split(' ')[0] || 'Chef'}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Here is what is happening at AURUM tonight
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            size="small"
            variant="text"
            color="inherit"
            startIcon={<OpenInNewIcon fontSize="small" />}
            onClick={() => navigate('/')}
            sx={{ display: { xs: 'none', sm: 'inline-flex' }, color: 'text.secondary' }}
          >
            View Site
          </Button>
          <Tooltip title="Notifications">
            <IconButton sx={{ color: 'text.secondary' }}>
              <Badge color="primary" variant="dot">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'divider', my: 1.5 }} />
          <Avatar
            sx={{
              width: 36,
              height: 36,
              background: (t) => t.brand.gradients.gold,
              color: '#0A0A0B',
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            {(user?.name || 'A')[0]}
          </Avatar>
          <Tooltip title="Sign out">
            <IconButton onClick={handleLogout} sx={{ color: 'text.secondary' }}>
              <LogoutIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
