/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetUserPayload, AuthState } from '../models/auth';

const initialState: AuthState = {
  user: undefined,
};

const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<SetUserPayload>) {
      state.user = action.payload.user;
    },
    clearUser(state) {
      state.user = undefined;
    },
  },
});

export const {
  setUser,
  clearUser,
} = authSlide.actions;

export default authSlide.reducer;
