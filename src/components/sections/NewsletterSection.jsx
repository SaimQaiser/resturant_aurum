import { Box, Grid, Typography } from '@mui/material';
import Section from '@/components/common/Section';
import { Eyebrow } from '@/components/common/SectionHeading';
import NewsletterForm from '@/components/forms/NewsletterForm';
import ScrollReveal from '@/components/common/ScrollReveal';

// Newsletter sign-up band, presented as a refined glass card.
export default function NewsletterSection() {
  return (
    <Section py={{ xs: 8, md: 12 }}>
      <ScrollReveal>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: (t) => `${t.brand.layout.radiusLg}px`,
            border: '1px solid',
            borderColor: 'divider',
            background: (t) => t.brand.gradients.cardGlass,
            backdropFilter: 'blur(14px)',
            p: { xs: 4, md: 8 },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: -120,
              right: -120,
              width: 360,
              height: 360,
              background: (t) => t.brand.gradients.radialGlow,
              opacity: 0.5,
              pointerEvents: 'none',
            },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Eyebrow>The AURUM Circle</Eyebrow>
              <Typography variant="h2" sx={{ mt: 2 }}>
                Join Our Private List
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2.5, color: 'text.secondary' }}>
                Be the first to receive seasonal menus, chef collaborations and
                invitations to members-only evenings.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <NewsletterForm />
            </Grid>
          </Grid>
        </Box>
      </ScrollReveal>
    </Section>
  );
}
