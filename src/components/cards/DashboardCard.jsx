import { Card, Box, Typography, Stack } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { motion } from 'framer-motion';
import { formatNumber, formatPercent } from '@/utils/format';
import { fadeUp } from '@/utils/motion';

const MotionCard = motion.create(Card);

// KPI metric card for the admin dashboard.
export default function DashboardCard({ kpi, index = 0 }) {
  const positive = kpi.trend === 'up';
  const TrendIcon = positive ? TrendingUpIcon : TrendingDownIcon;

  return (
    <MotionCard
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      sx={{
        p: 3,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 3,
          background: (t) => t.brand.gradients.gold,
          opacity: 0.85,
        },
      }}
    >
      <Typography variant="overline" color="text.secondary">{kpi.label}</Typography>
      <Typography variant="h3" sx={{ mt: 1.5, fontFamily: '"Cormorant Garamond", serif' }}>
        {kpi.prefix || ''}{formatNumber(kpi.value)}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={0.6} sx={{ mt: 1.5 }}>
        <TrendIcon fontSize="small" sx={{ color: positive ? 'success.main' : 'error.main' }} />
        <Typography variant="caption" sx={{ color: positive ? 'success.main' : 'error.main', fontWeight: 600 }}>
          {formatPercent(kpi.delta)}
        </Typography>
        <Typography variant="caption" color="text.disabled">vs last month</Typography>
      </Stack>
    </MotionCard>
  );
}
