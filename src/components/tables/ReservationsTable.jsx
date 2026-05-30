import {
  Card, Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, Chip,
} from '@mui/material';
import { formatDate } from '@/utils/format';
import { capitalise } from '@/utils/format';

const statusColor = {
  confirmed: 'primary',
  seated: 'success',
  pending: 'warning',
  cancelled: 'error',
};

export function StatusChip({ status }) {
  return (
    <Chip
      label={capitalise(status)}
      size="small"
      color={statusColor[status] || 'default'}
      variant={status === 'cancelled' ? 'outlined' : 'filled'}
      sx={{
        fontSize: 11,
        height: 24,
        ...(statusColor[status] === 'primary' && { bgcolor: 'rgba(200,162,75,0.18)', color: 'primary.light' }),
      }}
    />
  );
}

export default function ReservationsTable({ rows = [] }) {
  return (
    <Card sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Recent Reservations</Typography>
      <Box sx={{ overflowX: 'auto' }}>
        <Table size="small" sx={{ minWidth: 520 }}>
          <TableHead>
            <TableRow>
              {['Guest', 'Date', 'Time', 'Party', 'Status'].map((h) => (
                <TableCell key={h} sx={{ color: 'text.disabled', borderColor: 'divider', textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.1em' }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id} sx={{ '&:hover': { bgcolor: 'rgba(200,162,75,0.04)' } }}>
                <TableCell sx={{ borderColor: 'divider', fontWeight: 500 }}>{r.guest}</TableCell>
                <TableCell sx={{ borderColor: 'divider', color: 'text.secondary' }}>{formatDate(r.date)}</TableCell>
                <TableCell sx={{ borderColor: 'divider', color: 'text.secondary' }}>{r.time}</TableCell>
                <TableCell sx={{ borderColor: 'divider', color: 'text.secondary' }}>{r.guests}</TableCell>
                <TableCell sx={{ borderColor: 'divider' }}><StatusChip status={r.status} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}
