import { TodoForm } from './components/TodoForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TodoList } from './components/TodoList';
import { Layout } from './layout/Layout';
import { GlobalStyle } from './styles/GlobalStyle';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Layout>
          <TodoForm />
          <TodoList />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default App;
