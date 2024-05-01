import React from "react";
import NewsApi from "@/lib/NewsApi";
import Card from "./components/card";

export default async function Home() {
  const headlines = await NewsApi.getHeadlines();
  return (
    <main>
      <div className="px-3 py-2 container mx-auto">
        <h1 className="text-4xl my-6 font-serif font-semibold text-center">
          Headlines
        </h1>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
          {headlines.map((news) => (
            <Card news={news} key={news.title} />
          ))}
        </div>
      </div>
    </main>
  );
}
