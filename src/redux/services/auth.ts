import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_API } from '../../constants';
import { LoginReturnType } from '../models/auth';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_API }),
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
