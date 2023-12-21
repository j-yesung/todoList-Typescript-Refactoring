import * as S from '../styles/TodoList.styled';
import { useInput } from '../hooks/useInput';
import { useConfirm } from '../hooks/useConfirm';
import { MyButton } from './common/MyButton';
import { useTodosMutation } from '../hooks/useTodosMutation';

export const TodoForm = () => {
  const { values, addTodoObject, onChangeHandler, reset, checkValidation } = useInput({ title: '', content: '' });
  const { checkAddTodo } = useConfirm('');
  const { addTodos } = useTodosMutation();

  const onClickAddHandler = () => {
    if (checkValidation()) return;
    addTodos(addTodoObject);
    checkAddTodo();
    reset();
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <S.TodoForm>
        제목 : <S.TodoInput type="text" name="title" value={values.title} onChange={onChangeHandler} />
        내용 : <S.TodoInput type="text" name="content" value={values.content} onChange={onChangeHandler} />
        <MyButton color="default" onClick={onClickAddHandler}>
          추가
        </MyButton>
      </S.TodoForm>
    </div>
  );
};
