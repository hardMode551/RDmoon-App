import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import list from './listSlice';

export const store = configureStore({
  reducer: {
    list
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()

