import { Card, Box, Typography, Stack } from '@mui/material';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { colors } from '@/theme/tokens';

const palette = [colors.gold, colors.goldLight, colors.goldDeep, colors.ash, colors.graphite];
const tooltipStyle = {
  background: colors.charcoalSoft,
  border: `1px solid ${colors.goldDeep}`,
  borderRadius: 8,
  fontFamily: 'Jost, sans-serif',
  fontSize: 13,
};

export default function CategoryPieChart({ data = [] }) {
  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Typography variant="h5" sx={{ mb: 0.5 }}>Sales by Category</Typography>
      <Typography variant="caption" color="text.secondary">Share of revenue</Typography>
      <Box sx={{ height: 230, mt: 2 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={3} stroke="none">
              {data.map((entry, i) => (
                <Cell key={entry.name} fill={palette[i % palette.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} formatter={(v) => `${v}%`} />
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <Stack spacing={1} sx={{ mt: 1 }}>
        {data.map((entry, i) => (
          <Stack key={entry.name} direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box sx={{ width: 10, height: 10, borderRadius: '2px', bgcolor: palette[i % palette.length] }} />
              <Typography variant="body2" color="text.secondary">{entry.name}</Typography>
            </Stack>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>{entry.value}%</Typography>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
