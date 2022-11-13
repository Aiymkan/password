import { configureStore } from '@reduxjs/toolkit';
import passwordsReducer from '../features/password/passwordSlice';

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer,
  },
});
