import { Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const MotionChip = motion.create(Chip);

// Animated category pill filter for the menu page.
export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1.2,
        flexWrap: 'wrap',
        justifyContent: 'center',
        mb: { xs: 4, md: 6 },
      }}
    >
      {categories.map((cat) => {
        const selected = active === cat.id;
        return (
          <MotionChip
            key={cat.id}
            label={cat.label}
            onClick={() => onChange(cat.id)}
            whileTap={{ scale: 0.94 }}
            clickable
            sx={{
              px: 1.5,
              py: 2.4,
              fontSize: 13,
              letterSpacing: '0.08em',
              borderRadius: 999,
              border: '1px solid',
              borderColor: selected ? 'primary.main' : 'rgba(255,255,255,0.14)',
              color: selected ? 'common.black' : 'text.secondary',
              background: selected ? (t) => t.brand.gradients.gold : 'transparent',
              transition: 'all .3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                color: selected ? 'common.black' : 'primary.light',
                background: selected ? (t) => t.brand.gradients.gold : 'rgba(200,162,75,0.08)',
              },
            }}
          />
        );
      })}
    </Box>
  );
}
