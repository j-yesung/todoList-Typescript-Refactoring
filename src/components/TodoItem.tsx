import { useTodos } from '../hooks/useTodos';
import { Todo } from '../types/commonType';
import * as S from '../styles/TodoList.styled';

interface ItemProps {
  todo: Todo;
  isLoading: boolean;
}

export const TodoItem = ({ todo, isLoading }: ItemProps) => {
  const { id, title, content, isDone } = todo;
  const { updateTodos, deleteTodos } = useTodos();

  if (isLoading) return <div>로딩 중입니다...</div>;

  return (
    <S.TodoItem>
      <S.TodoItemTitle>{title}</S.TodoItemTitle>
      <p>{content}</p>
      <S.ButtonBox>
        <S.Button onClick={() => updateTodos(todo)} color="#0abd00">
          {isDone ? '취소' : '완료'}
        </S.Button>
        <S.Button onClick={() => deleteTodos(id)} color="#ff4444">
          삭제
        </S.Button>
      </S.ButtonBox>
    </S.TodoItem>
  );
};
