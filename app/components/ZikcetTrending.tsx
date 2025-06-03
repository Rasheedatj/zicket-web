import { CalendarDays, Clock5, MapPin, TicketPercent } from "lucide-react"
import Image from "next/image"

const cards: {
    imagePath: string,
    title: string,
    date: string,
    time: string,
    location: string,
    price: string,
}[] = [
    {
        imagePath: "/images/taipei_city.jpg",
        title: "Taipei City Idol Expo",
        date: "Jun. 04, 2025",
        time: "4:00pm, (UTC + 01.00)",
        location: "London, UK",
        price: "$100.00"
    },
    {
        imagePath: "/images/solana_summer_game.jpg",
        title: "Solana Summer Game (Hackathon)",
        date: "Jun. 04, 2025",
        time: "4:00pm, (UTC + 01.00)",
        location: "London, UK",
        price: "$100.00"
    },
    {
        imagePath: "/images/open_de_france.jpg",
        title: "Open De France (3 x 3)",
        date: "Jun. 04, 2025",
        time: "4:00pm, (UTC + 01.00)",
        location: "London, UK",
        price: "$100.00"
    },
    {
        imagePath: "/images/hellow_festival.jpg",
        title: "Hellow Festival 2020 CDMX",
        date: "Jun. 04, 2025",
        time: "4:00pm, (UTC + 01.00)",
        location: "London, UK",
        price: "$100.00"
    },
]

export default function ZicketTrending () {
    return (
        <div className="flex flex-col gap-4 text-black px-20">
            <div>
                <p>Trending Now on Zicket</p>

                {/* Put the Carousel Controls here */}
                <div>

                </div>
            </div>

            <div className="flex justify-start items-center gap-5">
                {cards.map((card, index) => {
                    return (
                        <div key={index}>
                            <div className="relative h-48 w-[325px]">
                                <Image 
                                    alt={card.title}
                                    src={card.imagePath}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p>{card.title}</p>
                                <div>
                                    {/* Date */}
                                    <p>
                                        <CalendarDays />
                                        <span>{card.date}</span>
                                    </p>
                                    {/* Time */}
                                    <p>
                                        <Clock5 />
                                        <span>{card.time}</span>
                                    </p>
                                    {/* Location */}
                                    <p>
                                        <MapPin />
                                        <span>{card.location}</span>
                                    </p>
                                </div>

                                <hr />

                                <div>
                                    <p>
                                        <TicketPercent />
                                        <span>{card.price}</span>
                                    </p>
                                    <p>
                                        <span>Get Ticket</span>

                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}