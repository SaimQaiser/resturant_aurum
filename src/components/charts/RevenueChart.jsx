import { Card, Box, Typography } from '@mui/material';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { colors } from '@/theme/tokens';
import { formatCompact, formatCurrency } from '@/utils/format';

const tooltipStyle = {
  background: colors.charcoalSoft,
  border: `1px solid ${colors.goldDeep}`,
  borderRadius: 8,
  fontFamily: 'Jost, sans-serif',
  fontSize: 13,
};

export default function RevenueChart({ data = [] }) {
  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Typography variant="h5" sx={{ mb: 0.5 }}>Revenue Overview</Typography>
      <Typography variant="caption" color="text.secondary">Monthly revenue vs target</Typography>
      <Box sx={{ height: 320, mt: 3 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
            <defs>
              <linearGradient id="revGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colors.gold} stopOpacity={0.45} />
                <stop offset="100%" stopColor={colors.gold} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis dataKey="month" stroke={colors.textMuted} tickLine={false} axisLine={false} fontSize={12} />
            <YAxis stroke={colors.textMuted} tickLine={false} axisLine={false} fontSize={12} tickFormatter={formatCompact} />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(v, name) => [formatCurrency(v), name === 'revenue' ? 'Revenue' : 'Target']}
              cursor={{ stroke: colors.goldDeep, strokeDasharray: 4 }}
            />
            <Legend wrapperStyle={{ fontSize: 12, fontFamily: 'Jost' }} />
            <Area type="monotone" dataKey="target" stroke={colors.ash} strokeWidth={1.5} strokeDasharray="5 5" fill="transparent" name="Target" />
            <Area type="monotone" dataKey="revenue" stroke={colors.gold} strokeWidth={2.5} fill="url(#revGold)" name="Revenue" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}
