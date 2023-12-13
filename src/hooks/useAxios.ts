import API from '../api/axios';

export const useAxios = () => {
  const __getTodos = async () => {
    const response = await API.get('/todos');
    return response.data;
  };

  const __addTodos = async (newTodo: any) => {
    return await API.post('/todos', newTodo);
  };

  const __updateTodos = async (todo: any) => {
    return await API.patch(`/todos/${todo.id}`, { ...todo, isDone: !todo.isDone });
  };

  const __deleteTodos = async (id: string) => {
    return await API.delete(`/todos/${id}`);
  };

  return { __getTodos, __addTodos, __deleteTodos, __updateTodos };
};
