import { useState } from 'react';
import { Box, Button, CircularProgress, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormTextField from './FormTextField';
import useAuth from '@/hooks/useAuth';
import useApp from '@/hooks/useApp';
import { emailRule, requiredRule } from '@/utils/validators';

export default function LoginForm() {
  const { login } = useAuth();
  const { notify } = useApp();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: { email: 'chef@aurum.dining', password: 'demo1234' },
    mode: 'onBlur',
  });

  const onSubmit = async (values) => {
    setSubmitting(true);
    try {
      await login(values);
      notify('Welcome back, Chef.', 'success');
      navigate('/dashboard');
    } catch (err) {
      notify(err.message || 'Login failed.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={1}>
        <FormTextField name="email" control={control} rules={emailRule} label="Email" type="email" />
        <FormTextField name="password" control={control} rules={requiredRule('Password')} label="Password" type="password" />
        <Button type="submit" variant="contained" color="primary" size="large" fullWidth disabled={submitting} sx={{ mt: 1 }}
          startIcon={submitting ? <CircularProgress size={18} color="inherit" /> : null}>
          {submitting ? 'Signing in…' : 'Sign In'}
        </Button>
      </Stack>
    </Box>
  );
}
