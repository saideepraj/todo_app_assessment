import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import rootReducer from './root.reducer';

enableMapSet();
export const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
