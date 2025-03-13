import { ChakraProvider } from '@chakra-ui/react';
import TodoApp from './components/TodoApp';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <TodoApp />
      </ChakraProvider>
    </Provider>
  )
}

export default App;