import {
  Card, Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, Chip,
} from '@mui/material';
import { formatCurrency, capitalise } from '@/utils/format';

const statusColor = { completed: 'success', preparing: 'warning', pending: 'default' };

export default function OrdersTable({ rows = [] }) {
  return (
    <Card sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Recent Orders</Typography>
      <Box sx={{ overflowX: 'auto' }}>
        <Table size="small" sx={{ minWidth: 560 }}>
          <TableHead>
            <TableRow>
              {['Order', 'Table', 'Items', 'Server', 'Total', 'Status'].map((h) => (
                <TableCell key={h} sx={{ color: 'text.disabled', borderColor: 'divider', textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.1em' }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((o) => (
              <TableRow key={o.id} sx={{ '&:hover': { bgcolor: 'rgba(200,162,75,0.04)' } }}>
                <TableCell sx={{ borderColor: 'divider', fontWeight: 500, color: 'primary.light' }}>{o.id}</TableCell>
                <TableCell sx={{ borderColor: 'divider', color: 'text.secondary' }}>{o.table}</TableCell>
                <TableCell sx={{ borderColor: 'divider', color: 'text.secondary' }}>{o.items}</TableCell>
                <TableCell sx={{ borderColor: 'divider', color: 'text.secondary' }}>{o.server}</TableCell>
                <TableCell sx={{ borderColor: 'divider', fontWeight: 600 }}>{formatCurrency(o.total)}</TableCell>
                <TableCell sx={{ borderColor: 'divider' }}>
                  <Chip label={capitalise(o.status)} size="small" color={statusColor[o.status]} variant={o.status === 'pending' ? 'outlined' : 'filled'} sx={{ fontSize: 11, height: 24 }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}
