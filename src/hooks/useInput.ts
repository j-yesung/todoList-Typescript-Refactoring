import { ChangeEvent, useCallback, useState } from 'react';
import shortid from 'shortid';

type InputState = { [key: string]: string };

export const useInput = (initialState: InputState) => {
  const [values, setValues] = useState<InputState>(initialState);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const addTodoObject = { id: shortid.generate(), title: values.title, content: values.content, isDone: false };

  const reset = useCallback(() => setValues(initialState), [initialState]);
  return { values, onChangeHandler, reset, addTodoObject };
};
