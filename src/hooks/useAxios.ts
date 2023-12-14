import API from '../api/axios';
import { Todo } from '../types/commonType';

export const useAxios = () => {
  const __getTodos = async () => {
    const response = await API.get('/todos');
    return response.data;
  };

  const __addTodos = async (newTodo: Todo) => {
    return await API.post('/todos', newTodo);
  };

  const __updateTodos = async (todo: Todo) => {
    return await API.patch(`/todos/${todo.id}`, { ...todo, isDone: !todo.isDone });
  };

  const __deleteTodos = async (id: string) => {
    return await API.delete(`/todos/${id}`);
  };

  return { __getTodos, __addTodos, __deleteTodos, __updateTodos };
};
