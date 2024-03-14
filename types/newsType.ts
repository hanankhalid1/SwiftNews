export interface NewsTypeProp {
    id: string;
    name: string;
    title: string;
    description: string;
    url: string;
    author: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    slug : string
  }
  // Card action types
   export interface cardActionType {
    news: NewsTypeProp;
  }