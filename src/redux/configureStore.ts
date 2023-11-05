
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authApi from './services/auth';
import articlesApi from './services/articles';
import user from './slices/user';
import { UserState } from './models/user';

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
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

export type RootState = { user: UserState };
export type AppDispatch = typeof store.dispatch;

export default store;
