import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAxios } from './useAxios';

const QUERY_KEY = 'todos';

export const useTodos = () => {
  const queryClient = useQueryClient();
  const { __getTodos, __addTodos, __updateTodos, __deleteTodos } = useAxios();

  const { data: todos, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: __getTodos,
  });

  const addTodoMutation = useMutation({
    mutationFn: __addTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: __updateTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: __deleteTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return {
    todos,
    isLoading,
    addTodos: addTodoMutation.mutate,
    deleteTodos: deleteTodoMutation.mutate,
    updateTodos: updateTodoMutation.mutate,
  };
};
