import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeatureScroll } from "@/components/sections/FeatureScroll";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <FeatureScroll />
      
      {/* Footer / CTA */}
      <footer className="bg-brand-dark text-white pt-24 pb-12">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 tracking-tight">Pronto para transformar<br/>seu condomínio?</h2>
            <a 
              href="https://app.facilicond.online"
              className="inline-block bg-brand-primary hover:bg-brand-primary-light text-white px-10 py-5 rounded-full font-medium text-lg transition-colors shadow-xl shadow-brand-primary/20"
            >
              Acessar Painel Agora
            </a>
            <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
               <span className="font-heading font-bold text-xl tracking-tight">FaciliCond</span>
               <p className="text-white/50 text-sm">© {new Date().getFullYear()} FaciliCond. Todos os direitos reservados.</p>
            </div>
         </div>
      </footer>
    </main>
  );
}
