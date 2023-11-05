export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}

export interface ArticlesReturnType {
  status: string;
  totalResults: number;
  articles: Article[];
}
