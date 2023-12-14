import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';
import { Todo } from '../types/goodType';

export const TodoList = () => {
  const { todos, isLoading } = useTodos();

  if (isLoading) return <div>로딩 중입니다...</div>;

  return (
    <>
      <div>
        <h1>🔥 할 일 목록</h1>
        {todos
          .filter((v: Todo) => !v.isDone)
          .map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} isLoading={isLoading} />
          ))}
      </div>
      <div>
        <h1>✅ 완료 목록</h1>
        {todos
          .filter((v: Todo) => v.isDone)
          .map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} isLoading={isLoading} />
          ))}
      </div>
    </>
  );
};
