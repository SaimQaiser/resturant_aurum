import { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import FoodCard from '@/components/cards/FoodCard';
import DishModal from '@/components/modals/DishModal';
import { featuredDishes } from '@/data/dishes';

export default function FeaturedDishes() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <Section id="featured">
      <SectionHeading
        center
        eyebrow="Signature Selections"
        title="Dishes That Define Us"
        subtitle="A curated glimpse of the season's most celebrated plates, composed daily by our kitchen."
      />
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {featuredDishes.map((dish, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dish.id}>
            <FoodCard dish={dish} index={i} onSelect={setSelected} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button variant="outlined" color="primary" size="large" onClick={() => navigate('/menu')}>
          View Full Menu
        </Button>
      </Box>
      <DishModal dish={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </Section>
  );
}
