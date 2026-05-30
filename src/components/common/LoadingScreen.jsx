import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Full-screen branded loader shown during route/data suspense.
export default function LoadingScreen({ label = 'Setting the table…' }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        bgcolor: 'background.default',
        backgroundImage: (t) => t.brand.gradients.radialGlow,
      }}
    >
      <Box sx={{ position: 'relative', width: 64, height: 64 }}>
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid rgba(200,162,75,0.15)',
            borderTopColor: 'primary.main',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 26,
            color: 'primary.main',
          }}
        >
          A
        </Box>
      </Box>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {label}
      </Typography>
    </Box>
  );
}
