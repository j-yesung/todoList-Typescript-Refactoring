import React from 'react';
import { TodoInput } from './components/TodoInput';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TodoInput />
      </QueryClientProvider>
    </>
  );
};

export default App;
