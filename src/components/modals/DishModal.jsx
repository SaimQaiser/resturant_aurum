import { Dialog, Box, Typography, IconButton, Chip, Stack, Rating, Button, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '@/utils/format';

const MotionBox = motion.create(Box);

// Detailed dish view shown when a FoodCard is selected.
export default function DishModal({ dish, open, onClose }) {
  const navigate = useNavigate();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: (t) => t.brand.gradients.dark,
          border: '1px solid rgba(200,162,75,0.2)',
          overflow: 'hidden',
        },
      }}
    >
      <AnimatePresence>
        {dish && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box
              sx={{
                position: 'relative',
                flex: 1,
                minHeight: { xs: 240, md: 420 },
                backgroundImage: `url(${dish.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Box sx={{ flex: 1, p: { xs: 3, md: 4 }, position: 'relative' }}>
              <IconButton
                onClick={onClose}
                sx={{ position: 'absolute', top: 12, right: 12, color: 'text.secondary' }}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>

              <Stack direction="row" spacing={0.8} sx={{ mb: 2, flexWrap: 'wrap', gap: 0.8 }}>
                {dish.tags.map((t) => (
                  <Chip key={t} label={t} size="small" variant="outlined" color="primary" />
                ))}
              </Stack>

              <Typography variant="h3" sx={{ mb: 1 }}>{dish.name}</Typography>

              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2.5 }}>
                <Rating value={dish.rating} precision={0.1} size="small" readOnly />
                <Typography variant="caption" color="text.secondary">
                  {dish.rating.toFixed(1)} · {dish.reviews} reviews
                </Typography>
              </Stack>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {dish.description}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h4" color="primary.light" sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  {formatCurrency(dish.price)}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => { onClose(); navigate('/reservations'); }}>
                  Reserve to Taste
                </Button>
              </Stack>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
