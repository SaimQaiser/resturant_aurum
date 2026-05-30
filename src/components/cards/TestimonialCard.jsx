import { Card, Box, Typography, Avatar, Rating, Stack } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Guest testimonial card with glass surface and gilded quote mark.
export default function TestimonialCard({ testimonial }) {
  return (
    <Card
      sx={{
        p: { xs: 3, md: 4 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: (t) => t.brand.gradients.cardGlass,
        backdropFilter: 'blur(14px)',
      }}
    >
      <FormatQuoteIcon sx={{ fontSize: 48, color: 'primary.main', opacity: 0.5, transform: 'scaleX(-1)' }} />
      <Typography
        variant="subtitle1"
        sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 22, lineHeight: 1.5, mb: 3, flex: 1, fontStyle: 'italic' }}
      >
        {testimonial.quote}
      </Typography>
      <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 2 }} />
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 52, height: 52, border: '1px solid rgba(200,162,75,0.4)' }} />
        <Box>
          <Typography variant="subtitle2">{testimonial.name}</Typography>
          <Typography variant="caption" color="primary.light">{testimonial.role}</Typography>
        </Box>
      </Stack>
    </Card>
  );
}
