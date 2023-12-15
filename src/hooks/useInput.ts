import { ChangeEvent, useCallback, useState } from 'react';
import shortid from 'shortid';

type T = { [key: string]: string };

export const useInput = (initialState: T) => {
  const [values, setValues] = useState<T>(initialState);
  const addTodoObject = { id: shortid.generate(), title: values.title, content: values.content, isDone: false };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const reset = useCallback(() => setValues(initialState), [initialState]);
  return { values, addTodoObject, onChangeHandler, reset };
};
