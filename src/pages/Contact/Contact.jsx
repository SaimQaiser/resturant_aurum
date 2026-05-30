import { Box, Grid, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PageHero from '@/components/common/PageHero';
import Section from '@/components/common/Section';
import { Eyebrow } from '@/components/common/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
import ScrollReveal from '@/components/common/ScrollReveal';
import { BRAND, BUSINESS_HOURS, SOCIALS } from '@/constants';

const heroImg =
  'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1920&q=80';

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Pinterest: PinterestIcon,
};

function XIcon(props) {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, fill: 'currentColor' }} {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </Box>
  );
}

function ContactRow({ icon, title, children }) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Box sx={{ color: 'primary.light', mt: 0.3 }}>{icon}</Box>
      <Box>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>{children}</Typography>
      </Box>
    </Stack>
  );
}

// Contact page: enquiry form, location map, hours and socials.
export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    'TriBeCa, New York'
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Say Hello"
        title="Contact"
        subtitle="Whether it is a private event, a press enquiry or a simple question — we would love to hear from you."
        image={heroImg}
      />

      <Section>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal>
              <Eyebrow>Send a Message</Eyebrow>
              <Typography variant="h3" sx={{ mt: 1.5, mb: 4 }}>
                Get in Touch
              </Typography>
              <ContactForm />
            </ScrollReveal>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal delay={0.1}>
              <Stack spacing={3.5}>
                <ContactRow icon={<PlaceIcon />} title="Visit">
                  {BRAND.address}
                </ContactRow>
                <ContactRow icon={<LocalPhoneIcon />} title="Call">
                  {BRAND.phone}
                </ContactRow>
                <ContactRow icon={<EmailOutlinedIcon />} title="Email">
                  {BRAND.email}
                </ContactRow>

                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                    Opening Hours
                  </Typography>
                  <Stack spacing={0.75} sx={{ maxWidth: 340 }}>
                    {BUSINESS_HOURS.map((h) => (
                      <Box
                        key={h.day}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          color: 'text.secondary',
                          fontSize: 14,
                        }}
                      >
                        <span>{h.day}</span>
                        <span>{h.hours}</span>
                      </Box>
                    ))}
                  </Stack>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                    Follow
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {SOCIALS.map((s) => {
                      const Icon = SOCIAL_ICONS[s.icon] || XIcon;
                      return (
                        <Tooltip key={s.label} title={s.label}>
                          <IconButton
                            component="a"
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              border: '1px solid',
                              borderColor: 'divider',
                              color: 'text.secondary',
                              '&:hover': { color: 'primary.light', borderColor: 'primary.main' },
                            }}
                          >
                            <Icon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      );
                    })}
                  </Stack>
                </Box>
              </Stack>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Section>

      {/* Map */}
      <Box sx={{ px: { xs: 0 }, pb: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            position: 'relative',
            height: { xs: 320, md: 460 },
            mx: 'auto',
            maxWidth: (t) => t.brand.layout.maxWidth,
            borderRadius: (t) => `${t.brand.layout.radiusLg}px`,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            filter: 'grayscale(1) contrast(1.05) brightness(0.85)',
          }}
        >
          <Box
            component="iframe"
            title="AURUM location"
            src={mapSrc}
            sx={{ width: '100%', height: '100%', border: 0, display: 'block' }}
            loading="lazy"
          />
        </Box>
      </Box>
    </>
  );
}
