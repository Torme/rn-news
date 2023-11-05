export interface ArticleSource {

}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ArticleSource;
  title: string;
  url: string;
  urlToImage: string;
}

export interface ArticlesReturnType {
  status: string;
  totalResults: number;
  articles: Article[];
}
