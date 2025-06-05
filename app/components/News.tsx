'use client'

import Image from "next/image";
import { UpAndRightArrow } from "./SvgComponents";
import { useTheme } from "next-themes";

const newsCards = [
    {
        genre: 'Tech',
        date: '03 June, 2025',
        title: 'Zicket X Builders: A Hack Night Recap',
        subject: 'How the dev crowd used zicket for a private demo series',
        author: 'ZKC Node',
        avatar: "/images/avatar1.jpg",
        image: "/images/News1.jpg"
    },
    {
        genre: 'Behind the Scenes',
        date: '03 June, 2025',
        title: 'Designing for Private Discovery',
        subject: 'Why our Interface hides what doesnt matter',
        author: 'Studio Delta',
        avatar: "/images/avatar2.jpg",
        image: "/images/News2.jpg"
    },
    {
        genre: 'Ecosystem',
        date: '03 June, 2025',
        title: 'CircleDrop Format Explained',
        subject: 'Smaller, faster events for high trust groups',
        author: 'Indie Venue Club',
        avatar: "/images/avatar3.jpg",
        image: "/images/News-3.jpg"
    }
]

export default function News () {

    const { theme } = useTheme();
    if (!theme) return

    return (
        <div className="text-black px-2 md:px-30 py-6 md:py-16 flex flex-col gap-10 items-center">
            <div className="mb-10">
                <h1 className="text-[60px] text-center font-bold text-[#2C0A4A] dark:text-[#D7B5F5]">News</h1>
                <p className="text-center w-full md:w-[90%] mx-auto text-[#6C6C6C]">The latest drops, updates, and behind-the-scenes from the Zicket ecosystem.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto md:max-w-[90%] lg:max-w-full overflow-x-auto
                            pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {newsCards.map((card, index) => {
                    return (
                        <div key={index} className="dark:border dark:border-[#282828] w-fit pb-4 dark:rounded-md">
                            <div className="relative w-[300px] md:w-[380px] h-[158px] md:h-[200px]">
                                <Image
                                    fill
                                    src={card.image}
                                    alt={card.title}
                                    className="object-cover rounded-md"
                                />
                            </div>

                            <div className="px-4 py-6 flex flex-col gap-2.5">
                                <p className="text-[12px] text-[#5C6170]">{card.genre} - {card.date}</p>

                                <p className="font-bold text-[16px] dark:text-[#D7B5F5]">{card.title}</p>

                                <p className="text-[12px] text-[#5C6170]">{card.subject}</p>
                            </div>

                            <div className="px-4 flex items-center justify-normal gap-3">
                                <div className="relative w-6 h-6">
                                    <Image src={card.avatar} fill alt="My Avatar" className="rounded-full" />
                                </div>
                                <span className="text-[14px] text-[#1E1E1E] dark:text-[#D7B5F5]">{card.author}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button className="border-2 border-[#2C0A4A] dark:border-[#D7B5F5] text-[#1C1C1C] dark:text-[#D7B5F5] bg-transparent rounded-4xl px-6 py-2 w-fit mt-5 self-center flex gap-1">
                <span>See Recent News</span>
                <UpAndRightArrow colour={theme === 'dark' ? '#D7B5F5':"black"} />
            </button>
        </div>
    )
}
