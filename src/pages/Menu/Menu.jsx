import { useEffect, useMemo, useState } from 'react';
import { Box, Grid, TextField, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PageHero from '@/components/common/PageHero';
import Section from '@/components/common/Section';
import CategoryFilter from '@/components/common/CategoryFilter';
import FoodCard from '@/components/cards/FoodCard';
import DishModal from '@/components/modals/DishModal';
import LoadingScreen from '@/components/common/LoadingScreen';
import { MENU_CATEGORIES } from '@/constants';
import { menuService } from '@/services/menuService';

const heroImg =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80';

// Full menu with live search + category filtering.
export default function Menu() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let active = true;
    menuService
      .getDishes()
      .then(({ data }) => active && setDishes(data))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dishes.filter((d) => {
      const matchCat = category === 'all' || d.category === category;
      const matchQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        (d.tags || []).some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [dishes, category, query]);

  const openDish = (dish) => {
    setSelected(dish);
    setModalOpen(true);
  };

  if (loading) return <LoadingScreen />;

  return (
    <>
      <PageHero
        eyebrow="The Carte"
        title="Our Menu"
        subtitle="A seasonal expression of land and sea, composed each morning around the day's finest produce."
        image={heroImg}
      />

      <Section py={{ xs: 6, md: 10 }}>
        <Box sx={{ maxWidth: 520, mx: 'auto', mb: { xs: 4, md: 6 } }}>
          <TextField
            fullWidth
            placeholder="Search dishes, ingredients, tags…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <CategoryFilter
          categories={MENU_CATEGORIES}
          active={category}
          onChange={setCategory}
        />

        {filtered.length === 0 ? (
          <Typography
            align="center"
            sx={{ color: 'text.secondary', py: 8, fontStyle: 'italic' }}
          >
            No dishes match your search. Try another term.
          </Typography>
        ) : (
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {filtered.map((dish, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dish.id}>
                <FoodCard dish={dish} index={i} onSelect={openDish} />
              </Grid>
            ))}
          </Grid>
        )}
      </Section>

      <DishModal dish={selected} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
