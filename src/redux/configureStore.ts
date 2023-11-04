
import { configureStore } from '@reduxjs/toolkit';

import news from './slices/news';
import auth from './slices/auth';
import authApi from './services/auth';

const store = configureStore({
  reducer: {
    news,
    auth,
    authApi: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
