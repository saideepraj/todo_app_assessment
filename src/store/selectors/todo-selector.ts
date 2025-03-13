import { get } from 'lodash';
import { RootState } from '../store';

const selectTodos = (state: RootState) => get(state,'todos.todos');
const selectLoading = (state: RootState) => get(state,'todos.loading');
const selectError = (state: RootState) => get(state,'todos.error');

const TodoSelector = {
  selectTodos,
  selectLoading,
  selectError,
};

export default TodoSelector;