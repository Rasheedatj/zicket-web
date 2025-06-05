import Image from "next/image"
import { Aztec, Starknet, UpAndRightArrow } from "./SvgComponents"

export const Description = () => {
    return (
        <div className="flex flex-col gap-5 mx-auto w-[80%] md:w-[70%] mt-20 text-white ">
            <div className="flex flex-col gap-2">
                <p className="text-[20px] md:text-[72px] text-center font-bold">
                    End-to-end private ticketing powered by zero-knowledge.
                </p>
                <p className="text-center text-[#EAECEF]">
                    Host, mint, and attend events without revealing your identity.
                    Zicket is the privacy-native platform built on Aztec Network.
                </p>
            </div>

            <div className="flex flex-col md:flex-row mt-3 justify-center items-center gap-x-2 gap-y-2">
                <button className="border border-white text-[16px] rounded-4xl px-6 py-2 flex gap-1 items-center w-[185px]">
                    <span>Explore Events</span> 
                    <span className="hidden lg:block font-bold"><UpAndRightArrow /></span>
                </button>

                <button className="bg-[#6917AF] text-[16px] rounded-4xl px-10 py-2 text-center items-center w-[185px]">
                    Host Event
                </button>
            </div>

            <div className="flex mt-12 justify-center gap-x-10 items-center max-w-full flex-wrap gap-y-3">
                <div className="bg-[#9747FF] px-7 py-2">
                    Trust markers
                </div>

                <div>
                    <Starknet />
                </div>

                <div>
                    <Aztec />
                </div>
            </div>

        </div>
    )
}