import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div
      className="min-h-screen relative overflow-hidden -top-32 pt-32 flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/Herosection.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold text-white mb-6 leading-tight">
          Public or Private Events.
          <br />
          <span className="text-[#FFFFFF]">Host Freely. Attend Silently.</span>
        </h1>
        <p className="text-[16px] md:text-xl text-[#A8ADBD] mb-12">
          Empowering hosts. Shielding guests. Reinventing event privacy.
        </p>
        <Button
          size="lg"
          className="bg-[#4B107C] hover:bg-purple-600 text-white border-none px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-[#751AC63D] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <span>Explore Events Anonymously</span>
          <ArrowUpRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Trust Markers */}
      <div className="w-full flex items-center justify-center">
        <Image src="/Buttons.svg" alt="" width="420" height="100" />
      </div>
    </div>
  );
}
