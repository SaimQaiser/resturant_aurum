import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '@/components/common/Logo';
import { DASHBOARD_LINKS } from '@/constants';

export const SIDEBAR_WIDTH = 264;

const ICONS = {
  Dashboard: DashboardIcon,
  EventSeat: EventSeatIcon,
  ReceiptLong: ReceiptLongIcon,
  RestaurantMenu: RestaurantMenuIcon,
  Groups: GroupsIcon,
  Settings: SettingsIcon,
};

function SidebarContent() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ px: 3 }}>
        <Logo />
      </Toolbar>
      <Divider sx={{ borderColor: 'divider' }} />
      <Typography variant="overline" sx={{ px: 3, pt: 3, pb: 1, color: 'text.secondary' }}>
        Management
      </Typography>
      <List sx={{ px: 1.5, flexGrow: 1 }}>
        {DASHBOARD_LINKS.map((link) => {
          const Icon = ICONS[link.icon] || DashboardIcon;
          const active =
            link.path === '/dashboard'
              ? location.pathname === '/dashboard'
              : location.pathname + location.search === link.path;
          return (
            <ListItemButton
              key={link.label}
              selected={active}
              onClick={() => navigate(link.path)}
              sx={{
                borderRadius: 1.5,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'rgba(200,162,75,0.12)',
                  '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                    color: 'primary.light',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={link.label} primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          );
        })}
      </List>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            p: 2.5,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            background: (t) => t.brand.gradients.cardGlass,
          }}
        >
          <Typography variant="subtitle2" sx={{ color: 'primary.light' }}>
            Service Notes
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Two private rooms booked tonight. Tasting menu #18 in service.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// Permanent sidebar on desktop, temporary drawer on mobile.
export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <Box component="nav" sx={{ width: { lg: SIDEBAR_WIDTH }, flexShrink: { lg: 0 } }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: SIDEBAR_WIDTH,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <SidebarContent />
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            width: SIDEBAR_WIDTH,
            boxSizing: 'border-box',
            backgroundColor: 'rgba(18,18,22,0.6)',
            backdropFilter: 'blur(12px)',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <SidebarContent />
      </Drawer>
    </Box>
  );
}
