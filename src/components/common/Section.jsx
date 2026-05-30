import { Box, Container } from '@mui/material';

// Standard vertical section rhythm wrapper.
export default function Section({ children, id, py = { xs: 8, md: 14 }, bg, sx }) {
  return (
    <Box component="section" id={id} sx={{ py, position: 'relative', background: bg, ...sx }}>
      <Container>{children}</Container>
    </Box>
  );
}
