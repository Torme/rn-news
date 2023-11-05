import { Article } from '../../redux/models/articles';
import { RouteName } from './common';

export interface ArticlesStackParamList {
  [key: string]: object | undefined;
  [RouteName.ALLPOSTS]: undefined;
  [RouteName.POSTDETAIL]: { article: Article };
}
