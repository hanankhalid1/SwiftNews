"use client";
import React from "react";
import Link from "next/link";
import { cardActionType } from "@/types/newsType";
import { FaBookOpen } from "react-icons/fa";

const CardAction: React.FC<cardActionType> = ({ news }) => {
  // function to convert  date format
  const convertObjectToURL = () => {
    let url = "";
    for (let key in news) {
      //@ts-ignore
      url += key + "=" + encodeURIComponent(news[key]) + "&";
    }
    return url;
  };

  // web dev share api call function which then I used this onClick share button
  const share = () => {
    // code from web dev share api
    if (navigator.share) {
      navigator
        .share({
          title: news.title,
          text: news.description,
          url: news.url,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  };

  return (
    <div className="space-x-4 flex justify-end">
    <button
      className="border-2 border-violet-600 px-4 py-2 flex-grow hover:bg-violet-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
      onClick={share}
    >
      Share
    </button>
    <Link target="_blank" href={news.url || ""}>
      <button className="bg-violet-600 text-white px-4 py-2 flex-grow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
        Show Details
      </button>
    </Link>
    <Link href={`/${encodeURIComponent(news.title)}?${convertObjectToURL()}`}>
      <span className="flex items-center justify-center">
        <FaBookOpen className="text-violet-600 h-8 w-8" />
      </span>
    </Link>
  </div>
  
  
  );
};

export default CardAction;
