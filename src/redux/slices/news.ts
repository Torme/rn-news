/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsState, SetNewsPayload } from '../models/news';

const initialState: NewsState = {
  news: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<SetNewsPayload>) {
      state.news = action.payload.news;
    },
  },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
