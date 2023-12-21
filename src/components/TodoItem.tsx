import { useEffect, useState } from 'react';
import { useConfirm } from '../hooks/useConfirm';
import { useTodos } from '../hooks/useTodos';
import * as S from '../styles/TodoList.styled';
import 'react-toastify/dist/ReactToastify.css';
import { displayCreateAt } from '../utils/date';

export const TodoItem = ({ todo, isLoading }: { todo: Todo; isLoading: boolean }) => {
  const { id, title, content, date, isDone } = todo;
  const { updateTodos } = useTodos();
  const { checkDeleteTodo } = useConfirm(id);
  const [time, settime] = useState('');

  useEffect(() => {
    settime(displayCreateAt(date));
  }, [date]);

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
          {/* <button onClick={() => updateTodos(todo)}>{isDone ? '취소' : '완료'}</button>
          <button onClick={checkDeleteTodo}>삭제</button> */}
        </S.ButtonBox>
      </S.TodoItem>
    </>
  );
};
