import { RootState } from '../configureStore';

export const selectUsername = (state: RootState) => state.user.username;
export const selectIsUserSignedIn = (state: RootState) => state.user.isSignedIn;
