import { combineReducers } from 'redux';
import TodoSlice from './slices/todo-slice';


export default combineReducers({
  todos: TodoSlice.reducer,
});
