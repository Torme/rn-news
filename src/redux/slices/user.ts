/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetUserPayload, UserState } from '../models/user';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSignedIn: null,
    username: null,
  } as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      state.isSignedIn = true;
      state.username = action.payload.username;
    },
    clearUser: (state) => {
      state.isSignedIn = false;
      state.username = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice;
