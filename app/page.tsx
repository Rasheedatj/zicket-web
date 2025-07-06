// import { Header } from "./newComponents/header"
import { HeroSection } from "./newComponents/hero-section";
import { HowItWorks } from "./newComponents/how-it-works";
import { NoSignupsSection } from "./newComponents/no-signups-section";
import { TrendingEvents } from "./newComponents/trending-events";
import { PowerfulTools } from "./newComponents/powerful-tools";
import { FAQSection } from "./newComponents/faq-section";
import { HostInPeace } from "./newComponents/host-in-peace";
import { TrendingNews } from "./newComponents/trending-news";
// import { Footer } from "@/components/footer"

  return (
    <div className="min-h-screen bg-[#f6f0fb]">
      {/* <Header /> */}
      <HeroSection />
      <HowItWorks />
      <NoSignupsSection />
      <TrendingEvents />
      <PowerfulTools />
      <FAQSection />
      <HostInPeace />
      <TrendingNews />
      {/* <Footer /> */}
    </div>
  );
}
