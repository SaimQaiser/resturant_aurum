import { Drawer, Box, List, ListItemButton, ListItemText, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '@/components/common/Logo';
import { NAV_LINKS } from '@/constants';

// Slide-in navigation for mobile/tablet.
export default function MobileDrawer({ open, onClose }) {
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '82vw', sm: 360 },
          background: (t) => t.brand.gradients.dark,
          borderLeft: '1px solid rgba(200,162,75,0.18)',
          px: 3,
          py: 3,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Logo size={34} />
        <IconButton onClick={onClose} sx={{ color: 'text.primary' }} aria-label="Close menu">
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flex: 1 }}>
        {NAV_LINKS.map((link, i) => (
          <ListItemButton
            key={link.path}
            component={NavLink}
            to={link.path}
            onClick={onClose}
            end={link.path === '/'}
            sx={{
              py: 1.6,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              '&.active .MuiListItemText-primary': { color: 'primary.main' },
            }}
          >
            <ListItemText
              primary={`0${i + 1}`}
              sx={{ flex: '0 0 40px' }}
              primaryTypographyProps={{
                variant: 'caption',
                color: 'primary.light',
                sx: { letterSpacing: '0.2em' },
              }}
            />
            <ListItemText
              primary={link.label}
              primaryTypographyProps={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 26,
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => {
          onClose();
          navigate('/reservations');
        }}
      >
        Reserve a Table
      </Button>
    </Drawer>
  );
}
