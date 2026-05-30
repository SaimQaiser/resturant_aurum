import { Card, CardMedia, Box, Typography, Chip, IconButton, Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion } from 'framer-motion';
import useApp from '@/hooks/useApp';
import { formatCurrency } from '@/utils/format';
import { fadeUp } from '@/utils/motion';

const MotionCard = motion.create(Card);

// Premium dish card with image zoom, glass price tag and favourite toggle.
export default function FoodCard({ dish, index = 0, onSelect }) {
  const { favorites, toggleFavorite } = useApp();
  const isFav = favorites.includes(dish.id);

  return (
    <MotionCard
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      onClick={() => onSelect?.(dish)}
      sx={{
        cursor: onSelect ? 'pointer' : 'default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        '&:hover .dish-img': { transform: 'scale(1.08)' },
        '&:hover': { boxShadow: (t) => t.brand.shadows.cardHover, borderColor: 'rgba(200,162,75,0.4)' },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '4 / 3' }}>
        <CardMedia
          component="img"
          image={dish.image}
          alt={dish.name}
          className="dish-img"
          sx={{ height: '100%', objectFit: 'cover', transition: 'transform .7s cubic-bezier(.22,1,.36,1)' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,10,11,0.85) 100%)',
          }}
        />

        <IconButton
          aria-label="Toggle favourite"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(dish.id);
          }}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            color: isFav ? 'primary.main' : 'common.white',
            background: 'rgba(10,10,11,0.45)',
            backdropFilter: 'blur(6px)',
            '&:hover': { background: 'rgba(10,10,11,0.7)' },
          }}
          size="small"
        >
          {isFav ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
        </IconButton>

        <Box
          sx={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            px: 1.6,
            py: 0.6,
            borderRadius: 1,
            background: (t) => t.brand.gradients.gold,
            color: 'common.black',
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          {formatCurrency(dish.price)}
        </Box>
      </Box>

      <Box sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" spacing={0.8} sx={{ mb: 1.2, flexWrap: 'wrap', gap: 0.8 }}>
          {dish.tags.slice(0, 2).map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" sx={{ fontSize: 10 }} />
          ))}
        </Stack>

        <Typography variant="h5" sx={{ mb: 1 }}>{dish.name}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1 }}>
          {dish.description}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Rating value={dish.rating} precision={0.1} size="small" readOnly />
          <Typography variant="caption" color="text.secondary">
            {dish.rating.toFixed(1)} · {dish.reviews} reviews
          </Typography>
        </Stack>
      </Box>
    </MotionCard>
  );
}
