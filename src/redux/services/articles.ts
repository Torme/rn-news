import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { KEY_NEWSAPI_1, KEY_NEWSAPI_2 } from '../../constants';
import { ArticlesReturnType } from '../models/articles';

const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2' }),
  endpoints: (builder) => ({
    getAllArticlesBySearch:
      builder.query<ArticlesReturnType, { page?: number, search?: string, newKey?: boolean }>({
        query: (parameters) => `/everything?q=${parameters.search}&sortBy=relevancy&apiKey=${parameters.newKey ? KEY_NEWSAPI_2 : KEY_NEWSAPI_1}&pageSize=25&page=${parameters.page}`,
        serializeQueryArgs: ({ queryArgs }) => {
          const newQueryArgs = { ...queryArgs };

          if (newQueryArgs.page) {
            delete newQueryArgs.page;
          }
          return newQueryArgs;
        },
        merge: (currentCache, newItems) => {
          if (currentCache && currentCache.articles && newItems) {
            return {
              ...currentCache,
              ...newItems,
              articles: [...currentCache.articles, ...newItems.articles],
            };
          }
          return newItems;
        },
      }),
    getTopHeadlinesArticles:
      builder.query<ArticlesReturnType, { page?: number, newKey?: boolean }>({
        query: (parameters) => `/top-headlines?country=fr&apiKey=${parameters.newKey ? KEY_NEWSAPI_2 : KEY_NEWSAPI_1}&pageSize=25&page=${parameters.page}`,
        serializeQueryArgs: ({ queryArgs }) => {
          const newQueryArgs = { ...queryArgs };

          if (newQueryArgs.page) {
            delete newQueryArgs.page;
          }
          return newQueryArgs;
        },
        merge: (currentCache, newItems) => {
          if (currentCache && currentCache.articles && newItems) {
            return {
              ...currentCache,
              ...newItems,
              articles: [...currentCache.articles, ...newItems.articles],
            };
          }
          return newItems;
        },
      }),
  }),
});

export const {
  useLazyGetAllArticlesBySearchQuery,
  useLazyGetTopHeadlinesArticlesQuery,
} = articlesApi;

export default articlesApi;
