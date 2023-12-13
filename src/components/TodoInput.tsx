import React from 'react';
import { useInput } from '../hooks/useInput';
import { useTodos } from '../hooks/useTodos';
import shortid from 'shortid';

export const TodoInput = () => {
  const [title, onChangeTitle] = useInput();
  const [content, onChangeContent] = useInput();
  const { addTodos } = useTodos();

  const onClickAddHandler = () => {
    addTodos({ id: shortid.generate(), title, content, isDone: false });
  };

  return (
    <>
      <div>TodoInput</div>
      제목 : <input type="text" value={title} onChange={onChangeTitle} />
      할일 : <input type="text" value={content} onChange={onChangeContent} />
      <button onClick={onClickAddHandler}>추가</button>
    </>
  );
};
