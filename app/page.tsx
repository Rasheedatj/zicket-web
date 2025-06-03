import Image from "next/image";
import Header from "./components/Header";
import { Description } from "./components/Description";
import WhatZicketOffers from "./components/WhatZicketOffers";
import ZicketTrending from "./components/ZikcetTrending";

export default function Home() {
  return (
    <>
    <div className="bg-[#FEF7F1]">
      <div className="bg-[#2C0A4A] px-5 py-5 rounded-b-[2rem]">
        <Description />
      </div>

      <div>
        <WhatZicketOffers />
      </div>

      <div>
        <ZicketTrending />
      </div>
    </div>
    </>
  );
}