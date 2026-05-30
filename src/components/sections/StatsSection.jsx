import { Box, Container, Grid, Typography } from '@mui/material';
import ScrollReveal from '@/components/common/ScrollReveal';

const stats = [
  { value: '2', label: 'Michelin Stars' },
  { value: '9,000', label: 'Cellar Bottles' },
  { value: '10', label: 'Years of Service' },
  { value: '#14', label: "World's 50 Best" },
];

export default function StatsSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, borderBlock: '1px solid rgba(200,162,75,0.16)', background: 'rgba(14,14,16,0.6)' }}>
      <Container>
        <Grid container spacing={4}>
          {stats.map((s, i) => (
            <Grid size={{ xs: 6, md: 3 }} key={s.label}>
              <ScrollReveal delay={i} sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ background: (t) => t.brand.gradients.goldText, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {s.value}
                </Typography>
                <Typography variant="overline" color="text.secondary">{s.label}</Typography>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
