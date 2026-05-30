import { useState } from 'react';
import { Box, TextField, Button, CircularProgress, InputAdornment } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useForm, Controller } from 'react-hook-form';
import { contactService } from '@/services/contactService';
import useApp from '@/hooks/useApp';
import { emailRule } from '@/utils/validators';

export default function NewsletterForm() {
  const { notify } = useApp();
  const [submitting, setSubmitting] = useState(false);
  const { control, handleSubmit, reset } = useForm({ defaultValues: { email: '' } });

  const onSubmit = async ({ email }) => {
    setSubmitting(true);
    try {
      await contactService.subscribe(email);
      notify('Welcome to the table — you are subscribed.', 'success');
      reset();
    } catch (err) {
      notify(err.message || 'Subscription failed.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.5, maxWidth: 520, mx: 'auto' }}
    >
      <Controller
        name="email"
        control={control}
        rules={emailRule}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            placeholder="Your email address"
            type="email"
            fullWidth
            error={Boolean(error)}
            helperText={error?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon fontSize="small" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary" disabled={submitting}
        sx={{ minWidth: 150, height: 56 }}
        startIcon={submitting ? <CircularProgress size={18} color="inherit" /> : null}>
        {submitting ? '…' : 'Subscribe'}
      </Button>
    </Box>
  );
}
