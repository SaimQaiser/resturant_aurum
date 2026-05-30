import { Box, Container, Grid, Typography, Stack, IconButton, Divider, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '@/components/common/Logo';
import { BRAND, NAV_LINKS, BUSINESS_HOURS } from '@/constants';

const socialIcons = { Instagram: InstagramIcon, Facebook: FacebookIcon, Pinterest: PinterestIcon, X: XIcon };
const socials = ['Instagram', 'Facebook', 'X', 'Pinterest'];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        mt: 'auto',
        pt: { xs: 8, md: 12 },
        pb: 5,
        borderTop: '1px solid rgba(200,162,75,0.16)',
        background: (t) => t.brand.gradients.dark,
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Logo size={42} />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 3, maxWidth: 320 }}>
              {BRAND.tagline}. A sensory journey of seasonal tasting menus, rare wines
              and quietly impeccable service — since {BRAND.established}.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              {socials.map((s) => {
                const Icon = socialIcons[s];
                return (
                  <IconButton
                    key={s}
                    aria-label={s}
                    sx={{
                      border: '1px solid rgba(200,162,75,0.25)',
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="overline" color="primary.light">Explore</Typography>
            <Stack spacing={1.4} sx={{ mt: 2.5 }}>
              {NAV_LINKS.map((l) => (
                <Link key={l.path} component={RouterLink} to={l.path} color="text.secondary" variant="body2">
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="overline" color="primary.light">Hours</Typography>
            <Stack spacing={1.1} sx={{ mt: 2.5 }}>
              {BUSINESS_HOURS.map((h) => (
                <Box key={h.day} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                  <Typography variant="body2" color="text.secondary">{h.day}</Typography>
                  <Typography variant="body2" color="text.primary">{h.hours}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="overline" color="primary.light">Visit</Typography>
            <Stack spacing={1.6} sx={{ mt: 2.5 }}>
              <Typography variant="body2" color="text.secondary">{BRAND.address}</Typography>
              <Link href={`tel:${BRAND.phone}`} color="text.primary" variant="body2">{BRAND.phone}</Link>
              <Link href={`mailto:${BRAND.email}`} color="text.primary" variant="body2">{BRAND.email}</Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 1.5 }}>
          <Typography variant="caption" color="text.disabled">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography variant="caption" color="text.disabled">Privacy</Typography>
            <Typography variant="caption" color="text.disabled">Terms</Typography>
            <Typography variant="caption" color="text.disabled">Careers</Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
