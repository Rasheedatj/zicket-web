import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function TrendingNews() {
  const articles = [
    {
      title: "Zicket x Substack: A New Night Scene",
      author: "Alex Turner",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Combining Format Enhanced",
      author: "Riley Johnson",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Designing for Private Discovery",
      author: "Morgan Davis",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Supporting Local Artists",
      author: "Jordan Lee",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Trending News</h2>
          <Button variant="outline">See All News →</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-gray-600">By {article.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
