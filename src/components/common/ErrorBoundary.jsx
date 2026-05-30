import { Component } from 'react';
import { Box, Button, Typography } from '@mui/material';

// Catches render errors and shows an on-brand fallback.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.assign('/');
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 3,
          px: 3,
        }}
      >
        <Typography variant="overline" color="primary.light">
          Something went wrong
        </Typography>
        <Typography variant="h3">An unexpected error occurred</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 460 }}>
          Our apologies — the kitchen hit a snag. Please return to the dining room
          and try again.
        </Typography>
        <Button variant="contained" color="primary" onClick={this.handleReset}>
          Back to Home
        </Button>
      </Box>
    );
  }
}
