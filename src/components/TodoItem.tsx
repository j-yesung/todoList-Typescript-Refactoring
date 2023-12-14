import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { Todo } from '../types/goodType';

interface ItemProps {
  todo: Todo;
  isLoading: boolean;
}

export const TodoItem = (props: ItemProps) => {
  const { todo, isLoading } = props;
  const { id, title, content, isDone } = todo;
  const { updateTodos, deleteTodos } = useTodos();

  if (isLoading) return <div>로딩 중입니다...</div>;

  return (
    <>
      <p>{title}</p>
      <p>{content}</p>
      <button onClick={() => updateTodos(todo)}>{isDone ? '취소' : '완료'}</button>
      <button onClick={() => deleteTodos(id)}>삭제</button>
    </>
  );
};
