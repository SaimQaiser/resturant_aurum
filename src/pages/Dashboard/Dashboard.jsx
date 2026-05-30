import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Card } from '@mui/material';
import DashboardCard from '@/components/cards/DashboardCard';
import RevenueChart from '@/components/charts/RevenueChart';
import OrdersChart from '@/components/charts/OrdersChart';
import CategoryPieChart from '@/components/charts/CategoryPieChart';
import ReservationsTable from '@/components/tables/ReservationsTable';
import OrdersTable from '@/components/tables/OrdersTable';
import LoadingScreen from '@/components/common/LoadingScreen';
import { dashboardService } from '@/services/dashboardService';

function Panel({ title, action, children, sx }) {
  return (
    <Card sx={{ p: { xs: 2.5, md: 3 }, height: '100%', ...sx }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2.5,
        }}
      >
        <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 22 }}>
          {title}
        </Typography>
        {action}
      </Box>
      {children}
    </Card>
  );
}

// Admin overview — KPIs, analytics and operational tables.
export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    dashboardService
      .getDashboard()
      .then(({ data }) => active && setData(data))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  if (loading || !data) return <LoadingScreen />;

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 0.5 }}>
        Overview
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 4 }}>
        Performance at a glance for the past thirty days.
      </Typography>

      {/* KPIs */}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 2, md: 3 } }}>
        {data.kpis.map((kpi, i) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={kpi.id}>
            <DashboardCard kpi={kpi} index={i} />
          </Grid>
        ))}
      </Grid>

      {/* Charts row */}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 2, md: 3 } }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Panel title="Revenue vs Target">
            <RevenueChart data={data.revenueSeries} />
          </Panel>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Panel title="Sales by Category">
            <CategoryPieChart data={data.categoryShare} />
          </Panel>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 2, md: 3 } }}>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Panel title="Orders This Week">
            <OrdersChart data={data.ordersSeries} />
          </Panel>
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Panel title="Recent Reservations">
            <ReservationsTable rows={data.recentReservations} />
          </Panel>
        </Grid>
      </Grid>

      {/* Orders table */}
      <Panel title="Recent Orders">
        <OrdersTable rows={data.recentOrders} />
      </Panel>
    </Box>
  );
}
