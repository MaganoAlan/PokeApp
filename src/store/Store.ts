import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import pokemonsReducer from './Pokemon.store';

// a linha 11 middleware: está desabilitando um warn chato que dizia que o state
// era muito grande

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
