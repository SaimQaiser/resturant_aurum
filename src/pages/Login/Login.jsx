import { Box, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Logo from '@/components/common/Logo';
import { Eyebrow } from '@/components/common/SectionHeading';
import LoginForm from '@/components/forms/LoginForm';
import { fadeUp, fadeIn } from '@/utils/motion';

const sideImg =
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80';

const MotionBox = motion.create(Box);

// Split-screen admin login.
export default function Login() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Grid container sx={{ minHeight: '100vh' }}>
        {/* Visual side */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'relative',
            alignItems: 'flex-end',
            p: 6,
            backgroundImage: `linear-gradient(180deg, rgba(10,10,11,0.45) 0%, rgba(10,10,11,0.92) 100%), url(${sideImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <MotionBox variants={fadeUp} initial="hidden" animate="visible">
            <Eyebrow>The Pass</Eyebrow>
            <Typography variant="h2" sx={{ mt: 2, maxWidth: 420 }}>
              Command Every Service with Clarity
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 420 }}>
              Reservations, covers, revenue and the night's flow — all in one
              quiet, considered view.
            </Typography>
          </MotionBox>
        </Grid>

        {/* Form side */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 3, md: 6 } }}
        >
          <MotionBox
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            sx={{ width: '100%', maxWidth: 420 }}
          >
            <Stack spacing={1} sx={{ mb: 4, alignItems: 'center', textAlign: 'center' }}>
              <Logo />
              <Typography variant="h3" sx={{ mt: 2 }}>
                Welcome Back
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Sign in to the AURUM management suite.
              </Typography>
            </Stack>

            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: (t) => `${t.brand.layout.radiusLg}px`,
                border: '1px solid',
                borderColor: 'divider',
                background: (t) => t.brand.gradients.cardGlass,
                backdropFilter: 'blur(14px)',
              }}
            >
              <LoginForm />
              <Typography
                variant="caption"
                sx={{ display: 'block', mt: 3, textAlign: 'center', color: 'text.disabled' }}
              >
                Demo access — chef@aurum.dining / demo1234
              </Typography>
            </Box>
          </MotionBox>
        </Grid>
      </Grid>
    </Box>
  );
}
