import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { FeatureScroll } from "@/components/sections/FeatureScroll";
import { ImpactCTA } from "@/components/sections/ImpactCTA";

export default function Home() {
  return (
    <main className="flex flex-col bg-brand-light">
      <Navbar />
      <Hero />
      <PainPoints />
      <FeatureScroll />
      <ImpactCTA />
      
      {/* Footer Minimalista */}
      <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-white/5">
         <div className="container mx-auto px-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-inner">
                   <span className="text-white font-bold text-xl leading-none">F</span>
                 </div>
                 <span className="font-heading font-bold text-2xl tracking-tight">FaciliCond</span>
               </div>
               
               <p className="text-white/50 text-sm font-medium">
                 © {new Date().getFullYear()} FaciliCond. Mais que gestão, tranquilidade. Todos os direitos reservados.
               </p>
            </div>
         </div>
      </footer>
    </main>
  );
}
