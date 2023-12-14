import { TodoInput } from './components/TodoInput';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TodoList } from './components/TodoList';
import { Layout } from './layout/Layout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <TodoInput />
          <TodoList />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default App;
