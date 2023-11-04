import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginReturnType } from '../models/api';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    login: builder.query<LoginReturnType, { username: string, password: string }>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body: JSON.stringify(body),
      }),
    }),
  }),
});

export const { useLazyLoginQuery } = authApi;

export default authApi;
