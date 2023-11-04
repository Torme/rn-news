import { RouteName } from './common';

export interface RootStackParamList {
  [key: string]: object | undefined;
  [RouteName.HOME]: undefined;
  [RouteName.LOGIN]: undefined;
}
