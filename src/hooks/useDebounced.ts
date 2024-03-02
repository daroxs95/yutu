import { useEffect, useState } from 'react';

function useDebounced<T>(
  value: T,
  delay: number,
  trigger?: (value: T) => void,
  useTriggerOnly?: boolean,
) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (trigger) trigger(value);
      if (!useTriggerOnly) setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(debounce);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounced;
