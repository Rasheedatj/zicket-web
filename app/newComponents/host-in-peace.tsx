import { ArrowUpRight } from "lucide-react";
export function HostInPeace() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[30px] md:text-[40px] text-[#2C0A4A] font-bold mb-4">
          Host in Peace. No
          <br />
          Spreadsheets or Stalkers.
        </h2>
        <p className="text-[#6C6C6C] text-[16px] mb-8">
          Zicket gives creators and organizers tools to launch, ticket, <br />
          and manage events without compromising guest privacy.
        </p>
        <button className="flex mx-auto border border-[#2C0A4A] rounded-full py-2 px-3 text-[#2C0A4a] cursor-pointer">
          Host An Event <ArrowUpRight w-5 h-5/>
        </button>
      </div>
    </section>
  );
}
