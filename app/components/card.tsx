import React from "react";
import { cardActionType } from "@/types/newsType";
import Image from "next/image";
import CardAction from "./cardAction";

// Here passing the whole news as prop
export default function Card({ news }: cardActionType) {
  return (
    <div className="p-2 shadow-md">
     <img
    className="w-full"
    src={
        news.urlToImage ||
        "https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1"
    }
    alt={news.author}
    width={400}
    height={500}
/>

      <div className="p-3">
        <div className="text-xl truncate block">{news.title}...</div>
        <CardAction news={news} />
      </div>
    </div>
  );
}
