import API from '../api/base';

export const useAxios = () => {
  const __getTodos = async () => {
    const response = await API.get<Todo[]>('/todos');
    return response.data;
  };

  const __addTodos = async (newTodo: Todo) => {
    await API.post('/todos', newTodo);
  };

  const __updateTodos = async (todo: Todo) => {
    await API.patch(`/todos/${todo.id}`, { ...todo, isDone: !todo.isDone });
  };

  const __deleteTodos = async (id: string) => {
    await API.delete(`/todos/${id}`);
  };

  return { __getTodos, __addTodos, __deleteTodos, __updateTodos };
};
