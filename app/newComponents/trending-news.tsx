import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function TrendingNews() {
  const articles = [
    {
      title: "Zicket x Substack: A New Night Scene",
      author: "Alex Turner",
      image: "/Rec3.svg?height=200&width=300",
    },
    {
      title: "Combining Format Enhanced",
      author: "Riley Johnson",
      image: "/Rect2.svg?height=200&width=300",
    },
    {
      title: "Designing for Private Discovery",
      author: "Morgan Davis",
      image: "/Rect4.svg?height=200&width=300",
    },
    {
      title: "Supporting Local Artists",
      author: "Jordan Lee",
      image: "/Rect4.svg?height=200&width=300",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Trending News</h2>
          <button className="bg-none border-b border-[#2C0A4A] text-[16px] font-bold text-[#2C0A4A] flex">
            See All News <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="p-0 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-[16px] mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-[#5C6170]">By {article.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
