import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PartnersSection from "@/components/partners-section";
import CarriersSection from "@/components/carriers-section";
import NetworkSection from "@/components/network-section";
import NewsSection from "@/components/news-section";
import CareersSection from "@/components/careers-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PartnersSection />
      <CarriersSection />
      <NetworkSection />
      <NewsSection />
      <CareersSection />
      <Footer />
    </div>
  );
}
