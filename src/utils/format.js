// Formatting helpers used across the app.

export const formatCurrency = (value, currency = 'USD') =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);

export const formatNumber = (value) =>
  new Intl.NumberFormat('en-US').format(value);

export const formatCompact = (value) =>
  new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(value);

export const formatDate = (date) =>
  new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(date));

export const formatPercent = (value) => `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;

export const capitalise = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);
