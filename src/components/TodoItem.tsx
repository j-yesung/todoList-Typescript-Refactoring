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
  const [tiem, setTiem] = useState('');

  useEffect(() => {
    setTiem(displayCreateAt(date));
  }, [date]);

  if (isLoading) return <div>로딩 중입니다...</div>;

  return (
    <>
      <S.TodoItem>
        {/* <S.TodoItemDate>
        </S.TodoItemDate> */}
        <S.TodoItemDate>{tiem}</S.TodoItemDate>
        <S.TodoItemTitle>{title}</S.TodoItemTitle>
        <S.TodoItemContent>{content}</S.TodoItemContent>
        <S.ButtonBox>
          <S.Button onClick={() => updateTodos(todo)} color="#0abd00">
            {isDone ? '취소' : '완료'}
          </S.Button>
          <S.Button onClick={checkDeleteTodo} color="#ff4444">
            삭제
          </S.Button>
        </S.ButtonBox>
      </S.TodoItem>
    </>
  );
};
