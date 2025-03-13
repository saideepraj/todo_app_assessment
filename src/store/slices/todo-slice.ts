import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../../models/Todo';
import TodoThunk from '../thunks/todo-thunk';
import { get, isEqual } from 'lodash';

interface TodoState {
  todos: ITodo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TodoThunk.fetchTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(TodoThunk.fetchTodo.fulfilled, (state, action) => {
        Object.assign(state, {
          loading: false,
          todos: get(action, 'payload'),
        });
      })
      .addCase(TodoThunk.fetchTodo.rejected, (state, action) => {
        Object.assign(state, {
          loading: false,
          error: get(action, 'error.message') || 'Failed to fetch todos',
        });
      })
      .addCase(TodoThunk.createTodo.fulfilled, (state, action) => {
        Object.assign(state, {
          todos: [...state.todos, get(action, 'payload')],
        });
      })
      .addCase(TodoThunk.updateTodo.fulfilled, (state, action) => {
        Object.assign(state, {
          todos: state.todos.map((todo) =>
            isEqual(todo._id, action.payload._id)
              ? get(action, 'payload')
              : todo,
          ),
        });
      })
      .addCase(TodoThunk.deleteTodo.fulfilled, (state, action) => {
        Object.assign(state, {
          todos: state.todos.filter(
            (todo) => todo._id.toString() !== action.payload.toString(),
          ),
        });
      });
  },
});

export default TodoSlice;
