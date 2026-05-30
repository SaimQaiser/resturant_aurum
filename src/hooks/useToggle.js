import { useCallback, useState } from 'react';

// Simple boolean toggle hook (great for modals/drawers).
export default function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const open = useCallback(() => setValue(true), []);
  const close = useCallback(() => setValue(false), []);
  return { value, toggle, open, close, setValue };
}
