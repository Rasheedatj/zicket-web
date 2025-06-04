import { UpAndRightArrow } from "./SvgComponents";

export default function Host () {
    return (
        <div className="bg-[#fcfdfd] text-black px-2 md:px-30 py-6 md:py-20 mx-auto flex flex-col items-center gap-3">
            <p className="text-[30px] md:text-[60px] text-center w-full md:w-[60%] text-[#2C0A4A] font-[600]">
                Host in Peace. No Spreadsheets or Stalkers.
            </p>

            <p className="text-center mx-auto w-full md:w-[40%] text-[16px] text-[#6C6C6C]">
                Zicket gives creators and organizers tools to launch, 
                ticket, and manage events without compromising guest privacy.
            </p>

            <button className="border-2 border-[#2C0A4A] text-[#1C1C1C] bg-transparent rounded-4xl px-6 py-2 w-fit mt-5 self-center flex gap-1">
                <span>Host Event</span>
                <UpAndRightArrow colour="black" />
            </button>
        </div>
    )
}