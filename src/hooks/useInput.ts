import { ChangeEvent, useCallback, useState } from 'react';

type InputHookType = [value: string, onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void];

export const useInput = (): InputHookType => {
  const [value, setValue] = useState('');
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, onChangeHandler];
};
