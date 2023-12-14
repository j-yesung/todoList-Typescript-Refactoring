import { useInput } from '../hooks/useInput';
import { useTodos } from '../hooks/useTodos';
import shortid from 'shortid';
import * as S from '../styles/TodoList.styled';

export const TodoInput = () => {
  const [title, onChangeTitle] = useInput();
  const [content, onChangeContent] = useInput();
  const { addTodos } = useTodos();

  const onClickAddHandler = () => {
    addTodos({ id: shortid.generate(), title, content, isDone: false });
  };

  return (
    <div>
      <S.TodoTitle>TODO LIST</S.TodoTitle>
      <S.TodoForm>
        제목 : <S.TodoInput type="text" value={title} onChange={onChangeTitle} />
        할일 : <S.TodoInput type="text" value={content} onChange={onChangeContent} />
        <S.Button onClick={onClickAddHandler} color="#e31c5f">
          추가
        </S.Button>
      </S.TodoForm>
    </div>
  );
};
