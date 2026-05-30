import { useState } from 'react';
import { Box, Grid, Button, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormTextField from './FormTextField';
import { contactService } from '@/services/contactService';
import useApp from '@/hooks/useApp';
import { emailRule, nameRule, requiredRule } from '@/utils/validators';

export default function ContactForm() {
  const { notify } = useApp();
  const [submitting, setSubmitting] = useState(false);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { name: '', email: '', subject: '', message: '' },
    mode: 'onBlur',
  });

  const onSubmit = async (values) => {
    setSubmitting(true);
    try {
      await contactService.sendMessage(values);
      notify('Thank you — we will respond within 24 hours.', 'success');
      reset();
    } catch (err) {
      notify(err.message || 'Could not send your message.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormTextField name="name" control={control} rules={nameRule} label="Name" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormTextField name="email" control={control} rules={emailRule} label="Email" type="email" />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormTextField name="subject" control={control} rules={requiredRule('Subject')} label="Subject" />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormTextField name="message" control={control} rules={requiredRule('Message')} label="Message" multiline rows={5} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button type="submit" variant="contained" color="primary" size="large" disabled={submitting}
            startIcon={submitting ? <CircularProgress size={18} color="inherit" /> : null}>
            {submitting ? 'Sending…' : 'Send Message'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
