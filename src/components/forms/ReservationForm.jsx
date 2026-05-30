import { useState } from 'react';
import { Box, Grid, MenuItem, Button, CircularProgress } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import FormTextField from './FormTextField';
import { reservationService } from '@/services/reservationService';
import useApp from '@/hooks/useApp';
import { emailRule, phoneRule, nameRule } from '@/utils/validators';
import { GUEST_OPTIONS } from '@/constants';

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  guests: 2,
  date: dayjs().add(1, 'day'),
  time: dayjs().hour(19).minute(30),
  occasion: '',
  notes: '',
};

export default function ReservationForm({ onSuccess }) {
  const { notify } = useApp();
  const [submitting, setSubmitting] = useState(false);
  const { control, handleSubmit, reset } = useForm({ defaultValues, mode: 'onBlur' });

  const onSubmit = async (values) => {
    setSubmitting(true);
    try {
      const payload = {
        ...values,
        date: dayjs(values.date).format('YYYY-MM-DD'),
        time: dayjs(values.time).format('HH:mm'),
      };
      const { data } = await reservationService.create(payload);
      notify('Your table is reserved. A confirmation is on its way.', 'success');
      reset(defaultValues);
      onSuccess?.(data);
    } catch (err) {
      notify(err.message || 'Reservation failed. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const pickerSx = {
    '& .MuiInputBase-root': { borderRadius: 1 },
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormTextField name="name" control={control} rules={nameRule} label="Full name" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormTextField name="email" control={control} rules={emailRule} label="Email" type="email" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormTextField name="phone" control={control} rules={phoneRule} label="Phone" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormTextField name="guests" control={control} label="Guests" select>
            {GUEST_OPTIONS.map((n) => (
              <MenuItem key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</MenuItem>
            ))}
          </FormTextField>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Date"
                disablePast
                sx={pickerSx}
                slotProps={{ textField: { fullWidth: true, helperText: ' ' } }}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <TimePicker
                {...field}
                label="Time"
                minutesStep={30}
                sx={pickerSx}
                slotProps={{ textField: { fullWidth: true, helperText: ' ' } }}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <FormTextField name="occasion" control={control} label="Occasion (optional)" select>
            {['None', 'Birthday', 'Anniversary', 'Business', 'Celebration'].map((o) => (
              <MenuItem key={o} value={o === 'None' ? '' : o}>{o}</MenuItem>
            ))}
          </FormTextField>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormTextField name="notes" control={control} label="Special requests" multiline rows={3} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={submitting}
            startIcon={submitting ? <CircularProgress size={18} color="inherit" /> : null}
          >
            {submitting ? 'Reserving…' : 'Confirm Reservation'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
