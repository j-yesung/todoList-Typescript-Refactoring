import API from '../api/axios';

export const useAxios = () => {
  const __getTodos = async () => {
    const response = await API.get('/todos');
    console.log('response: ', response.data);
    return response.data;
  };

  const __addTodos = async (newTodo: any) => {
    await API.post('/todos', newTodo);
  };

  return { __getTodos, __addTodos };
};
