import { RouteName } from './common';

export interface RootStackParamList {
  [key: string]: object | undefined;
  [RouteName.SIGNEDIN]: undefined;
  [RouteName.LOGIN]: undefined;
}
