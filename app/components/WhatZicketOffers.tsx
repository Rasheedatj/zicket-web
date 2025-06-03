import Image from "next/image"

const images: {
    src: string,
    alt: string,
}[] = [
    {
        src: "/images/Vector0.png",
        alt: "Web3 & Crypto Meetups",
    },
    {
        src: "/images/Vector1.png",
        alt: "Career & Innovation"
    },
    {
        src: "/images/Vector2.png",
        alt: "Art & Digital Culture"
    },
    {
        src: "/images/Vector3.png",
        alt: "Music & Nightlife"
    },
    {
        src: "/images/Vector4.png",
        alt: "Wellness & Retreats",
    },
    {
        src: "/images/Vector5.png",
        alt: "Talks & Panels",
    },
    {
        src: "/images/Vector6.png",
        alt: "Workshop & Builder Labs"
    },
    {
        src: "/images/Vector7.png",
        alt: "Social & Underground Vibes"
    },
]

export default function WhatZicketOffers () {
    return (
        <div className="w-full mx-auto px-22 flex justify-between py-20">

            <div className="max-w-[30%] flex flex-col gap-4">
                <p className="text-[38px] text-[#2C0A4A] font-semibold">
                    Private, powerful and perfectly your vibe
                </p>
                <p className="text-[16px] text-[#1C1C1C]">
                    Host, mint, and attend events without revealing your identity. 
                    Zicket is the privacy-native event platform built on Aztec Network.
                </p>

                <button className="border-[1.5px] border-[#2C0A4A] text-[#1C1C1C] bg-transparent rounded-4xl px-6 py-2 w-fit mt-5">
                    Explore Events <span className="font-bold">&#8599;</span>
                </button>
            </div>

            <div className="flex flex-wrap gap-4 max-w-[50%]">
                {
                    images.map((image, index) => {
                        return (
                            <div key={index} className="w-[134px] h-[134px] border-[0.2px] border-[#1C1C1C] rounded-md flex items-center justify-center">
                                <Image 
                                    alt={image.alt}
                                    src={image.src}
                                    width={50}
                                    height={50}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}