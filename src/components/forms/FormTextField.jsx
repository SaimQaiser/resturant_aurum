import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

// A thin wrapper that connects MUI TextField to react-hook-form.
export default function FormTextField({
  name,
  control,
  rules,
  label,
  type = 'text',
  multiline = false,
  rows,
  select = false,
  children,
  ...props
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          multiline={multiline}
          rows={rows}
          select={select}
          fullWidth
          error={Boolean(error)}
          helperText={error?.message || ' '}
          {...props}
        >
          {children}
        </TextField>
      )}
    />
  );
}
