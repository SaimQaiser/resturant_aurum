import { Card, Box, Typography } from '@mui/material';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { colors } from '@/theme/tokens';

const tooltipStyle = {
  background: colors.charcoalSoft,
  border: `1px solid ${colors.goldDeep}`,
  borderRadius: 8,
  fontFamily: 'Jost, sans-serif',
  fontSize: 13,
};

export default function OrdersChart({ data = [] }) {
  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Typography variant="h5" sx={{ mb: 0.5 }}>Orders by Day</Typography>
      <Typography variant="caption" color="text.secondary">Dine-in vs takeaway · this week</Typography>
      <Box sx={{ height: 320, mt: 3 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis dataKey="day" stroke={colors.textMuted} tickLine={false} axisLine={false} fontSize={12} />
            <YAxis stroke={colors.textMuted} tickLine={false} axisLine={false} fontSize={12} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(200,162,75,0.08)' }} />
            <Legend wrapperStyle={{ fontSize: 12, fontFamily: 'Jost' }} />
            <Bar dataKey="dineIn" stackId="a" fill={colors.gold} name="Dine-in" radius={[0, 0, 0, 0]} maxBarSize={42} />
            <Bar dataKey="takeaway" stackId="a" fill={colors.ash} name="Takeaway" radius={[4, 4, 0, 0]} maxBarSize={42} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}
