const img = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const testimonials = [
  {
    id: 't1',
    name: 'Eleanor Whitmore',
    role: 'Food Critic, The Metropolitan',
    rating: 5,
    quote:
      'AURUM does not serve dinner — it composes it. Each course arrived like a movement in a symphony, restrained yet utterly indulgent.',
    avatar: img('1494790108377-be9c29b29330', 200),
  },
  {
    id: 't2',
    name: 'Marcus Lindqvist',
    role: 'Michelin Inspector (Anonymous)',
    rating: 5,
    quote:
      'A rare temple of technique and warmth. The wagyu was flawless, the service telepathic. Few rooms in the city come close.',
    avatar: img('1500648767791-00dcc994a43e', 200),
  },
  {
    id: 't3',
    name: 'Priya Anand',
    role: 'Returning Guest',
    rating: 5,
    quote:
      'We celebrated our tenth anniversary here. From the candlelight to the soufflé, every detail felt designed for us alone.',
    avatar: img('1438761681033-6461ffad8d80', 200),
  },
  {
    id: 't4',
    name: 'James Okonkwo',
    role: 'Sommelier & Guest',
    rating: 5,
    quote:
      'The cellar is extraordinary and the pairings were intuitive. I have rarely been guided through a meal with such grace.',
    avatar: img('1507003211169-0a1dd7228f2d', 200),
  },
];

export const team = [
  {
    id: 'm1',
    name: 'Chef Aurélie Mercer',
    role: 'Executive Chef & Founder',
    bio: 'Two Michelin stars by 34. Aurélie blends French classicism with Nordic restraint and a deep reverence for the seasons.',
    image: img('1577219491135-ce391730fb2c', 600),
  },
  {
    id: 'm2',
    name: 'Tomás Rivera',
    role: 'Head Sommelier',
    bio: 'Curator of a 9,000-bottle cellar spanning seven decades, Tomás reads a table the way others read a label.',
    image: img('1583394838336-acd977736f90', 600),
  },
  {
    id: 'm3',
    name: 'Naomi Sato',
    role: 'Pastry Chef',
    bio: 'A former architect, Naomi treats dessert as structure — precise, weightless and quietly theatrical.',
    image: img('1607631568010-a87245c0daf8', 600),
  },
  {
    id: 'm4',
    name: 'Daniel Brookes',
    role: 'Restaurant Director',
    bio: 'Twenty years across the worlds finest dining rooms. Daniel makes the impossible feel effortless.',
    image: img('1556157382-97eda2d62296', 600),
  },
];

export const gallery = [
  { id: 'g1', src: img('1414235077428-338989a2e8c0', 900), alt: 'Dining room ambience', span: 'tall' },
  { id: 'g2', src: img('1517248135467-4c7edcad34c4', 900), alt: 'Plated dish' },
  { id: 'g3', src: img('1592861956120-e524fc739696', 900), alt: 'Cocktail bar' },
  { id: 'g4', src: img('1551218808-94e220e084d2', 900), alt: 'Chef plating', span: 'wide' },
  { id: 'g5', src: img('1424847651672-bf20a4b0982b', 900), alt: 'Dessert course' },
  { id: 'g6', src: img('1559339352-11d035aa65de', 900), alt: 'Private dining' },
  { id: 'g7', src: img('1466978913421-dad2ebd01d17', 900), alt: 'Wine cellar', span: 'tall' },
  { id: 'g8', src: img('1540189549336-e6e99c3679fe', 900), alt: 'Garnish detail' },
];

export const timeline = [
  { year: '2014', title: 'The First Service', text: 'AURUM opens its doors with a twelve-seat counter and a single tasting menu.' },
  { year: '2016', title: 'First Michelin Star', text: 'Recognised for technical precision and a singular point of view.' },
  { year: '2019', title: 'The Cellar', text: 'A subterranean wine cellar of 9,000 bottles is unveiled to guests.' },
  { year: '2021', title: 'Second Michelin Star', text: 'Elevated to two stars; named among the worlds 50 Best.' },
  { year: '2024', title: 'A Decade of AURUM', text: 'Ten years, one obsession — the perfect, fleeting moment at the table.' },
];

export const heroSlides = [
  img('1414235077428-338989a2e8c0', 1920),
  img('1559339352-11d035aa65de', 1920),
  img('1592861956120-e524fc739696', 1920),
];
