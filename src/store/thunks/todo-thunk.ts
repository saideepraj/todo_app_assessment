import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodo } from '../../models/Todo';
import { createTodos, deleteTodos, fetchTodos, updateTodos } from '../../api/todoApi';


const fetchTodo = createAsyncThunk<ITodo[]>(
  'todos/fetchTodos',
  async () => {
    const todos = await fetchTodos();
    return todos;
  },
);

const createTodo = createAsyncThunk<ITodo, string>(
  'todos/createTodo',
  async (text) => {
    const newTodo = await createTodos(text);
    return newTodo;
  },
);

const updateTodo = createAsyncThunk<
  ITodo,
  { id: string; data: Partial<ITodo> }
>('todos/updateTodo', async ({ id, data }) => {
  const updatedTodo = await updateTodos(id, data);
  return updatedTodo;
});

const deleteTodo = createAsyncThunk<string, string>(
  'todos/deleteTodo',
  async (id) => {
    await deleteTodos(id);
    return id;
  },
);

const TodoThunk = {
  fetchTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default TodoThunk;
