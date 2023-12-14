import { useTodos } from '../hooks/useTodos';
import { Todo } from '../types/commonType';
import * as S from '../styles/TodoList.styled';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface ItemProps {
  todo: Todo;
  isLoading: boolean;
}

export const TodoItem = ({ todo, isLoading }: ItemProps) => {
  const { id, title, content, isDone } = todo;
  const { updateTodos, deleteTodos } = useTodos();

  const deleteTodoHandler = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      deleteTodos(id);
      toast.success('삭제되었습니다.');
    }
  };

  if (isLoading) return <div>로딩 중입니다...</div>;

  return (
    <>
      <S.TodoItem>
        <S.TodoItemTitle>{title}</S.TodoItemTitle>
        <S.TodoItemContent>{content}</S.TodoItemContent>
        <S.ButtonBox>
          <S.Button onClick={() => updateTodos(todo)} color="#0abd00">
            {isDone ? '취소' : '완료'}
          </S.Button>
          <S.Button onClick={deleteTodoHandler} color="#ff4444">
            삭제
          </S.Button>
        </S.ButtonBox>
      </S.TodoItem>
    </>
  );
};
