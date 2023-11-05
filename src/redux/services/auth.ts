import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginReturnType } from '../models/auth';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rn-news-pablogiraud-carrier-epitecheus-projects.vercel.app' }),
  endpoints: (builder) => ({
    login: builder.query<LoginReturnType, { username: string, password: string }>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLazyLoginQuery } = authApi;

export default authApi;
