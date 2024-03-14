import React from "react";
import NewsApi from "@/lib/NewsApi";
import Card from "./components/card";
import Header from "./components/header";
import Footer from "./components/footer";

export default async function Home() {
  const headlines = await NewsApi.getHeadlines();
  return (
    <main>
      <Header/>
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl my-6 font-serif font-semibold text-center">Headlines</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {headlines.map((news) => (
          <Card news={news} key={news.title} />
        ))}
      </div>
    </div>
    <Footer/>
  </main>
  );
}
