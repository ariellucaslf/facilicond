import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { Plans } from "@/components/sections/Plans";
import { Problem } from "@/components/sections/Problem";
import { ProductTour } from "@/components/sections/ProductTour";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-paper">
      <Navbar />
      <Hero />
      <LiveTicker />
      <Problem />
      <Ecosystem />
      <ProductTour />
      <Plans />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
