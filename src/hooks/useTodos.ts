import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAxios } from './useAxios';

const QUERY_KEY = 'todos';

export const useTodos = () => {
  const queryClient = useQueryClient();
  const { __getTodos, __addTodos } = useAxios();

  // 조회
  const { data: todos } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: __getTodos,
  });

  // 추가
  const addTodoMutation = useMutation({
    mutationFn: __addTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  // 삭제

  return { todos, addTodos: addTodoMutation.mutate };
};
