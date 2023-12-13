import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos, isLoading } = useTodos();

  // ..todos undefined 대기 로딩
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <h1>🔥 할 일</h1>
        {todos
          .filter((v: any) => !v.isDone)
          .map((todo: any) => (
            <TodoItem key={todo.id} todo={todo} isLoading={isLoading} />
          ))}
      </div>
      <div>
        <h1>✅ 완료</h1>
        {todos
          .filter((v: any) => v.isDone)
          .map((todo: any) => (
            <TodoItem key={todo.id} todo={todo} isLoading={isLoading} />
          ))}
      </div>
    </>
  );
};
