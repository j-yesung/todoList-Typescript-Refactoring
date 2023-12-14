import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAxios } from './useAxios';

enum queryKey {
  TODO = 'TODO',
}

export const useTodos = () => {
  const queryClient = useQueryClient();
  const { __getTodos, __addTodos, __updateTodos, __deleteTodos } = useAxios();

  const { data: todos, isLoading } = useQuery({
    queryKey: [queryKey.TODO],
    queryFn: __getTodos,
  });

  const addTodoMutation = useMutation({
    mutationFn: __addTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.TODO] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: __updateTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.TODO] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: __deleteTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.TODO] });
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
