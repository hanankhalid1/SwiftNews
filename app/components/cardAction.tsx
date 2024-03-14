"use client"
import React from "react";
import Link from "next/link";
import { cardActionType } from "@/types/newsType";

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
    <div className="flex justify-end space-x-4">
      <button
        className="border-2 px-3 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
        onClick={share}
      >
        Share
      </button>
      <Link target="_blank" href={news.url || ""}>
        <button className="bg-violet-600 text-white px-3 py-2 rounded-md hover:bg-violet-700">
          Show Details
        </button>
      </Link>
      <Link href={`/${encodeURIComponent(news.title)}?${convertObjectToURL()}`}>
        <button className="bg-violet-600 text-white px-3 py-2 rounded-md hover:bg-violet-700">
          Open
        </button>
      </Link>
    </div>
  );
};

export default CardAction;
