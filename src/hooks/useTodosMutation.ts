import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAxios } from './useAxios';

const enum queryKey {
  TODO = 'TODO',
}

export const useTodosMutation = () => {
  const queryClient = useQueryClient();
  const { __addTodos, __updateTodos, __deleteTodos } = useAxios();

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
    addTodos: addTodoMutation.mutate,
    deleteTodos: deleteTodoMutation.mutate,
    updateTodos: updateTodoMutation.mutate,
  };
};
