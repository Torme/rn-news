import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';
import { User } from '../models/auth';

export const selectUser = (state: RootState) => state.auth.user;

const getIsUserSignedIn = (user: User) => !!user?.token;

export const isUserSignedIn = createSelector(
  [selectUser],
  getIsUserSignedIn,
);
