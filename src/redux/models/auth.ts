export interface User {
  username: string;
  token: string;
}

export interface AuthState {
  user?: User;
}

export interface SetUserPayload {
  user: User;
}
