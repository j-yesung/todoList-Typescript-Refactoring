import { useQuery } from '@tanstack/react-query';
import { useAxios } from './useAxios';

const enum queryKey {
  TODO = 'TODO',
}

export const useTodos = () => {
  const { __getTodos } = useAxios();

  const { data: todos, isLoading } = useQuery({
    queryKey: [queryKey.TODO],
    queryFn: __getTodos,
    refetchOnWindowFocus: false,
  });

  return {
    todos,
    isLoading,
  };
};
