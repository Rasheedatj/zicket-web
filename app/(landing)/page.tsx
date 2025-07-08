import HowItWorks from "../components/HowItWorks";
import Header from "../components/Header";
import { Description } from "../components/Description";
import WhatZicketOffers from "../components/WhatZicketOffers";
import ZicketTrending from "../components/ZikcetTrending";
import WhyZicket from "../components/About/WhyZicket";
import Host from "../components/Host";
import News from "../components/News";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <div className="bg-[#FEF7F1] dark:bg-[#141414]">
        <div className="bg-[#2C0A4A] px-5 py-5 rounded-b-[2rem]">
          <Description />
        </div>

        <div>
          <WhatZicketOffers />
        </div>

      </div>

      <div className="bg-white dark:bg-[#0D0D0D]">
        <ZicketTrending />

        <WhyZicket />

        <FAQ />

        <Host />

        <News />
      </div>

    </>
  );
}
