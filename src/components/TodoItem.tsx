import React from 'react';
import { useTodos } from '../hooks/useTodos';

interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}
interface ItemProps {
  todo: Todo;
  isLoading: boolean;
}

export const TodoItem = (props: ItemProps) => {
  const { todo, isLoading } = props;
  const { id, title, content, isDone } = todo;
  const { updateTodos, deleteTodos } = useTodos();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <p>{title}</p>
      <p>{content}</p>
      <button onClick={() => updateTodos(todo)}>{isDone ? '취소' : '완료'}</button>
      <button onClick={() => deleteTodos(id)}>삭제</button>
    </>
  );
};
