"use client";

import Link from "next/link";
import { UpAndRightArrow } from "./SvgComponents";
import { useTheme } from "next-themes";
import { NewsCard } from "@/app/components/NewsCard";
import { articles } from "@/lib/data";

export default function News() {
  const { theme } = useTheme();
  if (!theme) return;

  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="text-black px-2 md:px-30 py-6 md:py-16 flex flex-col gap-10 items-center">
      <div className="mb-10">
        <h1 className="text-[60px] text-center font-bold text-[#2C0A4A] dark:text-[#D7B5F5]">
          News
        </h1>
        <p className="text-center w-full md:w-[90%] mx-auto text-[#6C6C6C]">
          The latest drops, updates, and behind-the-scenes from the Zicket
          ecosystem.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto md:max-w-[90%] lg:max-w-full overflow-x-auto
                            pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {featuredArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <Link
        href="/news"
        className="border-2 border-[#2C0A4A] dark:border-[#D7B5F5] text-[#1C1C1C] dark:text-[#D7B5F5] bg-transparent rounded-4xl px-6 py-2 w-fit mt-5 self-center flex gap-1"
      >
        <span>See Recent News</span>
        <UpAndRightArrow colour={theme === "dark" ? "#D7B5F5" : "black"} />
      </Link>
    </div>
  );
}
