import { ChangeEvent, useState } from 'react';

export function useInput(initilValue = '') {
  const [value, setValue] = useState(initilValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
