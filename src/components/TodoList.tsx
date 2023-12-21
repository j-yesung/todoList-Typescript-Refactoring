import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';
import * as S from '../styles/TodoList.styled';
import { useTodosMutation } from '../hooks/useTodosMutation';

export const TodoList = () => {
  const { todos, isLoading } = useTodos();
  const { updateTodos } = useTodosMutation();

  if (isLoading) return <div>로딩 중입니다...</div>;

  const renderTodoList = (title: string, isDone: boolean) => (
    <>
      <h2>{title}</h2>
      <S.TodoList>
        {todos
          ?.filter(v => v.isDone === isDone)
          .map(todo => (
            <TodoItem key={todo.id} todo={todo} isLoading={isLoading} updateTodos={updateTodos} />
          ))}
      </S.TodoList>
    </>
  );

  return (
    <>
      {renderTodoList('🔥 할 일 목록', false)}
      {renderTodoList('✅ 완료 목록', true)}
    </>
  );
};
