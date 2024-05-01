"use client";
import { useSearchParams } from "next/navigation"; // Import useRouter from 'next/router' instead of 'next/navigation'
import Link from "next/link";
import React from "react";

export default function NewsSlug() {
  const searchParams = useSearchParams();

  return (
    <div>
      <div className="mx-auto container px-3 py-6">
        <img
          src={searchParams.get("urlToImage") || ""}
          width={500}
          height={400}
          alt="News Image"
          className="rounded shadow-md w-full"
        />
        <div className="text-4xl mt-3">{searchParams.get("title")}</div>
        <p className="text-lg mt-5">{searchParams.get("description")}</p>
        <p className="text-lg mt-5">{searchParams.get("content")}</p>
        <Link
          href={searchParams.get("url") || ""}
          className="text-blue-500 mt-5 block hover:underline"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
