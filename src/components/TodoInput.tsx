import { useInput } from '../hooks/useInput';
import { useTodos } from '../hooks/useTodos';
import shortid from 'shortid';
import * as S from '../styles/TodoList.styled';

export const TodoInput = () => {
  const { values, onChangeHandler, reset } = useInput({ title: '', content: '' });
  const { addTodos } = useTodos();

  const onClickAddHandler = () => {
    addTodos({ id: shortid.generate(), title: values.title, content: values.content, isDone: false });
    reset();
  };

  return (
    <div>
      <S.TodoTitle>TODO LIST</S.TodoTitle>
      <S.TodoForm>
        제목 : <S.TodoInput type="text" name="title" value={values.title} onChange={onChangeHandler} />
        내용 : <S.TodoInput type="text" name="content" value={values.content} onChange={onChangeHandler} />
        <S.Button onClick={onClickAddHandler} color="#e31c5f">
          추가
        </S.Button>
      </S.TodoForm>
    </div>
  );
};
