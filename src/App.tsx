import React from 'react';
import { TodoInput } from './components/TodoInput';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TodoList } from './components/TodoList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TodoInput />
        <TodoList />
      </QueryClientProvider>
    </>
  );
};

export default App;
