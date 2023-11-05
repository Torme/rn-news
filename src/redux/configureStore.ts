
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, Storage } from 'redux-persist';
import thunk from 'redux-thunk';
import { MMKV } from 'react-native-mmkv';

import authApi from './services/auth';
import articlesApi from './services/articles';
import user from './slices/user';

const storage = new MMKV();

export const mmkvStorage: Storage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);

    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'user',
  storage: mmkvStorage,
  whitelist: ['user'],
};

const reducers = combineReducers({
  authApi: authApi.reducer,
  articlesApi: articlesApi.reducer,
  user: user.reducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/REHYDRATE', 'persist/PERSIST'],
    },
  })
    .concat(authApi.middleware)
    .concat(articlesApi.middleware)
    .concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
