import { ChangeEvent, useCallback, useState } from 'react';
import shortid from 'shortid';
import { getDayMinuteCounter } from '../utils/date';

type UserTodo = { [key: string]: string };

export const useInput = (initialState: UserTodo) => {
  const [values, setValues] = useState<UserTodo>(initialState);
  const addTodoObject = {
    id: shortid.generate(),
    title: values.title,
    content: values.content,
    date: getDayMinuteCounter(new Date()),
    isDone: false,
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const reset = useCallback(() => setValues(initialState), [initialState]);
  return { values, addTodoObject, onChangeHandler, reset };
};
