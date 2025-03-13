import axios from 'axios';
import { ITodo } from '../models/Todo';

const API_URL = 'http://localhost:4000/todos';

export const fetchTodos = async (): Promise<ITodo[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodos = async (text: string): Promise<ITodo> => {
  const response = await axios.post(API_URL, { text });
  return response.data;
};

export const updateTodos = async (
  id: string,
  data: Partial<ITodo>,
): Promise<ITodo> => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteTodos = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
