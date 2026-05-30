import { Grid } from '@mui/material';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/cards/TestimonialCard';
import ScrollReveal from '@/components/common/ScrollReveal';
import { testimonials } from '@/data/content';

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" sx={{ background: 'rgba(14,14,16,0.5)' }}>
      <SectionHeading center eyebrow="In Their Words" title="Praise From Our Guests"
        subtitle="Critics, inspectors and regulars on the AURUM experience." />
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {testimonials.map((t, i) => (
          <Grid size={{ xs: 12, md: 6 }} key={t.id}>
            <ScrollReveal delay={i % 2}>
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
