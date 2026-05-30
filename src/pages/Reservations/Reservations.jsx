import { Box, Grid, Typography, Stack, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PageHero from '@/components/common/PageHero';
import Section from '@/components/common/Section';
import { Eyebrow } from '@/components/common/SectionHeading';
import ReservationForm from '@/components/forms/ReservationForm';
import ScrollReveal from '@/components/common/ScrollReveal';
import { BRAND, BUSINESS_HOURS } from '@/constants';

const heroImg =
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80';

function InfoRow({ icon, title, children }) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Box sx={{ color: 'primary.light', mt: 0.3 }}>{icon}</Box>
      <Box>
        <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
          {title}
        </Typography>
        <Box sx={{ color: 'text.secondary', fontSize: 14 }}>{children}</Box>
      </Box>
    </Stack>
  );
}

// Reservation page: booking form alongside practical details.
export default function Reservations() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Reservations"
        subtitle="We accept bookings up to sixty days in advance. For parties larger than eight, please contact us directly."
        image={heroImg}
      />

      <Section>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal>
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: (t) => `${t.brand.layout.radiusLg}px`,
                  border: '1px solid',
                  borderColor: 'divider',
                  background: (t) => t.brand.gradients.cardGlass,
                  backdropFilter: 'blur(14px)',
                }}
              >
                <Eyebrow>Book a Table</Eyebrow>
                <Typography variant="h3" sx={{ mt: 1.5, mb: 4 }}>
                  Request Your Reservation
                </Typography>
                <ReservationForm />
              </Box>
            </ScrollReveal>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal delay={0.1}>
              <Stack spacing={3.5} sx={{ pl: { md: 2 } }}>
                <Typography variant="h4">Good to Know</Typography>
                <InfoRow icon={<AccessTimeIcon />} title="Opening Hours">
                  {BUSINESS_HOURS.map((h) => (
                    <Box
                      key={h.day}
                      sx={{ display: 'flex', justifyContent: 'space-between', gap: 3, maxWidth: 320 }}
                    >
                      <span>{h.day}</span>
                      <span>{h.hours}</span>
                    </Box>
                  ))}
                </InfoRow>
                <Divider sx={{ borderColor: 'divider' }} />
                <InfoRow icon={<PlaceIcon />} title="Location">
                  {BRAND.address}
                </InfoRow>
                <InfoRow icon={<LocalPhoneIcon />} title="Reservations Line">
                  {BRAND.phone}
                </InfoRow>
                <Box
                  sx={{
                    mt: 1,
                    p: 2.5,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    A credit card is required to secure tables of six or more.
                    Cancellations within 48 hours are subject to a per-guest fee.
                    We kindly ask for smart attire.
                  </Typography>
                </Box>
              </Stack>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
