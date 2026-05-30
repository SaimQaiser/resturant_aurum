// React Hook Form validation rules, kept centralised for reuse.

export const emailRule = {
  required: 'Email is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email address',
  },
};

export const phoneRule = {
  required: 'Phone number is required',
  pattern: {
    value: /^[+]?[\d\s()-]{7,}$/,
    message: 'Enter a valid phone number',
  },
};

export const requiredRule = (label = 'This field') => ({
  required: `${label} is required`,
});

export const nameRule = {
  required: 'Name is required',
  minLength: { value: 2, message: 'Name is too short' },
};
