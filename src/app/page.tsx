import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { ProductTour } from "@/components/sections/ProductTour";
import { Plans } from "@/components/sections/Plans";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-paper">
      <Navbar />
      <Hero />
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
