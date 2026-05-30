import { Box, Grid, Typography, Stack } from '@mui/material';
import PageHero from '@/components/common/PageHero';
import Section from '@/components/common/Section';
import SectionHeading, { Eyebrow } from '@/components/common/SectionHeading';
import TeamCard from '@/components/cards/TeamCard';
import GoldDivider from '@/components/common/GoldDivider';
import ScrollReveal from '@/components/common/ScrollReveal';
import { team, timeline } from '@/data/content';
import { BRAND } from '@/constants';

const heroImg =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80';
const storyImg =
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80';

// About: brand narrative, the team, and a milestone timeline.
export default function About() {
  return (
    <>
      <PageHero
        eyebrow={`Established ${BRAND.established}`}
        title="Our Story"
        subtitle="A decade in pursuit of a single, fleeting moment — the one perfect bite that stays with you long after the evening ends."
        image={heroImg}
      />

      {/* Brand story */}
      <Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: (t) => `${t.brand.layout.radiusLg}px`,
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid rgba(200,162,75,0.35)',
                    borderRadius: 'inherit',
                    transform: 'translate(16px, 16px)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box
                  component="img"
                  src={storyImg}
                  alt="The AURUM kitchen"
                  sx={{ width: '100%', display: 'block', aspectRatio: '4/5', objectFit: 'cover' }}
                />
              </Box>
            </ScrollReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Eyebrow>The Philosophy</Eyebrow>
            <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
              Reverence for the Season
            </Typography>
            <Stack spacing={2.5} sx={{ color: 'text.secondary' }}>
              <Typography>
                AURUM began as a twelve-seat counter and an uncompromising idea:
                that fine dining should feel personal, intimate and quietly
                thrilling. Every service is a conversation between our kitchen and
                the produce that arrives at dawn.
              </Typography>
              <Typography>
                We cook with restraint — never more than three voices on a plate —
                allowing each ingredient to speak at the height of its season. The
                result is a tasting menu that is never quite the same twice.
              </Typography>
              <Typography>
                Ten years and two Michelin stars later, our obsession remains
                unchanged: to create the one perfect, fleeting moment at the table.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Section>

      <GoldDivider />

      {/* Team */}
      <Section>
        <SectionHeading
          center
          eyebrow="The People"
          title="Meet the Team"
          subtitle="The hands and minds behind every plate, pour and welcome."
        />
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {team.map((member, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.id}>
              <TeamCard member={member} index={i} />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Timeline */}
      <Section bg="rgba(18,18,22,0.5)">
        <SectionHeading
          center
          eyebrow="Milestones"
          title="A Decade in the Making"
        />
        <Box sx={{ maxWidth: 820, mx: 'auto' }}>
          {timeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.05}>
              <Stack
                direction="row"
                spacing={{ xs: 3, md: 5 }}
                sx={{
                  position: 'relative',
                  pb: i === timeline.length - 1 ? 0 : 5,
                  pl: 1,
                  '&::before':
                    i === timeline.length - 1
                      ? {}
                      : {
                          content: '""',
                          position: 'absolute',
                          left: { xs: 39, md: 71 },
                          top: 32,
                          bottom: 0,
                          width: '1px',
                          bgcolor: 'divider',
                        },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    minWidth: { xs: 64, md: 96 },
                    color: 'primary.light',
                    textAlign: 'right',
                  }}
                >
                  {item.year}
                </Typography>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    mt: 1.2,
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: (t) => t.brand.gradients.gold,
                    boxShadow: '0 0 0 4px rgba(200,162,75,0.15)',
                  }}
                />
                <Box sx={{ pb: 1 }}>
                  <Typography variant="h5" sx={{ mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{item.text}</Typography>
                </Box>
              </Stack>
            </ScrollReveal>
          ))}
        </Box>
      </Section>
    </>
  );
}
