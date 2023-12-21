import { ChangeEvent, useCallback, useState } from 'react';
import shortid from 'shortid';
import Swal from 'sweetalert2';

type UserTodo = Record<string, string>;

export const useInput = (initialState: UserTodo) => {
  const [values, setValues] = useState(initialState);
  const addTodoObject = {
    id: shortid.generate(),
    title: values.title,
    content: values.content,
    date: new Date(),
    isDone: false,
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const reset = useCallback(() => setValues(initialState), [initialState]);

  const checkValidation = () => {
    if (values.title === '' || values.content === '') {
      return Swal.fire('빈칸을 채워주세요.', '', 'warning');
    }
  };

  return { values, addTodoObject, onChangeHandler, reset, checkValidation };
};
