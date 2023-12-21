import * as S from '../styles/TodoList.styled';
import { useMemo } from 'react';
import { useConfirm } from '../hooks/useConfirm';
import { MyButton } from './common/MyButton';
import { displayCreateAt } from '../utils/date';

type Props = {
  todo: Todo;
  isLoading: boolean;
  updateTodos: (todo: Todo) => void;
};

export const TodoItem = ({ todo, isLoading, updateTodos }: Props) => {
  const { id, title, content, date, isDone } = todo;
  const { checkDeleteTodo } = useConfirm(id);

  const time = useMemo(() => displayCreateAt(date), [date]);

  if (isLoading) return <div>로딩 중입니다...</div>;

  return (
    <>
      <S.TodoItem>
        <S.TodoItemDate>{time}</S.TodoItemDate>
        <S.TodoItemTitle>{title}</S.TodoItemTitle>
        <S.TodoItemContent>{content}</S.TodoItemContent>
        <S.ButtonBox>
          <MyButton color="success" onClick={() => updateTodos(todo)}>
            {isDone ? '취소' : '완료'}
          </MyButton>
          <MyButton color="warning" onClick={checkDeleteTodo}>
            삭제
          </MyButton>
        </S.ButtonBox>
      </S.TodoItem>
    </>
  );
};
