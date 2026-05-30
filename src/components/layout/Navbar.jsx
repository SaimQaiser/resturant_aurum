import { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Stack,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '@/components/common/Logo';
import MobileDrawer from '@/components/navigation/MobileDrawer';
import useToggle from '@/hooks/useToggle';
import { NAV_LINKS } from '@/constants';

const MotionAppBar = motion.create(AppBar);

export default function Navbar() {
  const navigate = useNavigate();
  const drawer = useToggle(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <MotionAppBar
        initial={{ y: -100 }}
        animate={{ y: mounted ? 0 : -100 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'rgba(10,10,11,0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,162,75,0.14)' : '1px solid transparent',
          transition: 'all .4s ease',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ height: { xs: 72, md: 84 }, justifyContent: 'space-between' }}>
            <Logo size={scrolled ? 34 : 38} />

            <Stack
              direction="row"
              spacing={4}
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
            >
              {NAV_LINKS.map((link) => (
                <Box
                  key={link.path}
                  component={NavLink}
                  to={link.path}
                  end={link.path === '/'}
                  sx={{
                    position: 'relative',
                    fontSize: 13,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'text.secondary',
                    py: 1,
                    transition: 'color .25s',
                    '&:hover': { color: 'text.primary' },
                    '&.active': { color: 'primary.main' },
                    '&.active::after': { width: '100%' },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      height: '1px',
                      width: 0,
                      bgcolor: 'primary.main',
                      transition: 'width .3s ease',
                    },
                    '&:hover::after': { width: '100%' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button variant="contained" color="primary" onClick={() => navigate('/reservations')}>
                Reserve
              </Button>
            </Box>

            <IconButton
              onClick={drawer.open}
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </MotionAppBar>

      <MobileDrawer open={drawer.value} onClose={drawer.close} />
    </>
  );
}
