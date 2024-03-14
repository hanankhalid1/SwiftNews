import next from "next";
import { NewsTypeProp } from "@/types/newsType";
// class of NewsApi for geting  news from api

class NewsApi {
  //Get News Method
  static getNews(url: string) {
    return fetch(url, {
      next: {
        revalidate: 60 * 60 * 2,
      },
    }).then((res) => res.json().then((data) => data.articles as NewsTypeProp[]));
  }
  static getHeadlines(): Promise<NewsTypeProp[]> {
    let apiKey = process.env.NEWS_API_KEY;
    // Get url form NewsApi
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    return this.getNews(url);
  }
}

export default NewsApi;
