import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import Image from "next/image"

export function TrendingEvents() {
  const events = [
    {
      title: "Space City Sci-Expo",
      price: "FREE",
      attendees: "2.1k",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Galactic Gamers - Retro Night",
      price: "$15",
      attendees: "847",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Neon Art Show 2024",
      price: "$25",
      attendees: "1.2k",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Virtual Reality Expo 2024",
      price: "$30",
      attendees: "956",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Trending Now on Zicket</h2>
          <Button variant="outline">Browse Events →</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-white text-black">{event.price}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  {event.attendees} attending
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
