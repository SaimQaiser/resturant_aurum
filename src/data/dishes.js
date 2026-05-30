// Example menu data. Images are sourced from Unsplash CDN so the project
// runs with zero local binary assets.

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const dishes = [
  {
    id: 'd1',
    name: 'Seared Hokkaido Scallops',
    category: 'seafood',
    price: 32,
    rating: 4.9,
    reviews: 214,
    tags: ['Signature', 'Gluten-free'],
    description:
      'Day-boat scallops, brown-butter dashi, charred leek and a whisper of yuzu.',
    image: img('1599021456807-25db0f974333'),
    featured: true,
  },
  {
    id: 'd2',
    name: 'Wagyu A5 Tenderloin',
    category: 'mains',
    price: 68,
    rating: 5.0,
    reviews: 388,
    tags: ['Signature', "Chef's Choice"],
    description:
      'Miyazaki A5, bone-marrow jus, smoked pommes purée and pickled enoki.',
    image: img('1546964124-0cce460f38ef'),
    featured: true,
  },
  {
    id: 'd3',
    name: 'Heirloom Beet Tartare',
    category: 'starters',
    price: 19,
    rating: 4.7,
    reviews: 142,
    tags: ['Vegan'],
    description:
      'Roasted heirloom beets, capers, shallot, smoked almond and rye crisp.',
    image: img('1512621776951-a57141f2eefd'),
    featured: false,
  },
  {
    id: 'd4',
    name: 'Black Truffle Risotto',
    category: 'mains',
    price: 42,
    rating: 4.9,
    reviews: 301,
    tags: ['Signature', 'Vegetarian'],
    description:
      'Carnaroli rice, aged parmigiano, fresh Périgord truffle, brown butter.',
    image: img('1476124369491-e7addf5db371'),
    featured: true,
  },
  {
    id: 'd5',
    name: 'Butter-Poached Lobster',
    category: 'seafood',
    price: 56,
    rating: 4.8,
    reviews: 197,
    tags: ['Signature'],
    description:
      'Maine lobster, vanilla beurre blanc, fennel pollen and sea herbs.',
    image: img('1625943553852-781c6dd46faa'),
    featured: true,
  },
  {
    id: 'd6',
    name: 'Foie Gras Torchon',
    category: 'starters',
    price: 28,
    rating: 4.6,
    reviews: 88,
    tags: ["Chef's Choice"],
    description:
      'Silken torchon, sauternes gelée, toasted brioche and fig compote.',
    image: img('1432139555190-58524dae6a55'),
    featured: false,
  },
  {
    id: 'd7',
    name: 'Valrhona Soufflé',
    category: 'desserts',
    price: 18,
    rating: 4.9,
    reviews: 256,
    tags: ['Signature', 'Vegetarian'],
    description:
      'Warm 70% chocolate soufflé, salted-caramel centre, crème anglaise.',
    image: img('1606313564200-e75d5e30476c'),
    featured: true,
  },
  {
    id: 'd8',
    name: 'Citrus Mille-Feuille',
    category: 'desserts',
    price: 16,
    rating: 4.7,
    reviews: 134,
    tags: ['Vegetarian'],
    description:
      'Caramelised puff pastry, blood-orange cream, candied zest, gold leaf.',
    image: img('1488477181946-6428a0291777'),
    featured: false,
  },
  {
    id: 'd9',
    name: 'Dover Sole Meunière',
    category: 'seafood',
    price: 49,
    rating: 4.8,
    reviews: 121,
    tags: ['Classic'],
    description:
      'Whole Dover sole, nut-brown butter, capers, lemon and parsley.',
    image: img('1519708227418-c8fd9a32b7a2'),
    featured: false,
  },
  {
    id: 'd10',
    name: 'Burrata & Stone Fruit',
    category: 'starters',
    price: 21,
    rating: 4.5,
    reviews: 76,
    tags: ['Vegetarian', 'Seasonal'],
    description:
      'Pugliese burrata, grilled peach, basil oil, aged balsamic, sea salt.',
    image: img('1505253758473-96b7015fcd40'),
    featured: false,
  },
  {
    id: 'd11',
    name: 'Vintage Champagne — Krug',
    category: 'wine',
    price: 38,
    rating: 4.9,
    reviews: 64,
    tags: ['By the glass'],
    description:
      'Krug Grande Cuvée. Brioche, citrus, almond — endless, layered finish.',
    image: img('1510812431401-41d2bd2722f3'),
    featured: false,
  },
  {
    id: 'd12',
    name: 'Barolo Riserva 2016',
    category: 'wine',
    price: 34,
    rating: 4.8,
    reviews: 52,
    tags: ['By the glass'],
    description:
      'Nebbiolo from Piedmont — rose, tar, dried cherry and fine tannin.',
    image: img('1474722883778-792e7990302f'),
    featured: false,
  },
];

export const featuredDishes = dishes.filter((d) => d.featured).slice(0, 6);
