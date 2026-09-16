"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, MonitorSmartphone, KeySquare } from "lucide-react";

export function FeatureScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="funcionalidades" ref={containerRef} className="relative bg-white" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden py-24">
        <div className="container mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="relative h-[400px] flex flex-col justify-center">
            <FeatureText 
              progress={scrollYProgress} 
              points={[0, 0.1, 0.23, 0.33]} 
              title="Acesso e Encomendas"
              description="Controle de acesso de visitantes e bipagem ágil de pacotes na portaria. O morador é notificado instantaneamente e assina via celular, sem papelada perdida."
              icon={<KeySquare size={32} className="text-brand-primary" />}
            />
            <FeatureText 
              progress={scrollYProgress} 
              points={[0.33, 0.43, 0.56, 0.66]} 
              title="Transparência Financeira"
              description="Visão panorâmica para o síndico. Monitore a inadimplência, emita multas e advertências com rastreabilidade, e feche o caixa sem dor de cabeça no Painel de Gestão."
              icon={<MonitorSmartphone size={32} className="text-brand-secondary" />}
            />
            <FeatureText 
              progress={scrollYProgress} 
              points={[0.66, 0.76, 0.9, 1]} 
              title="Conveniência no Bolso"
              description="Ocorrências virtuais, reserva de áreas comuns, comunicados oficiais e liberação de visitantes. A comunicação flui sem precisar do WhatsApp."
              icon={<Smartphone size={32} className="text-brand-accent" />}
            />
          </div>

          {/* Right Visual Content */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] bg-brand-light overflow-hidden flex items-center justify-center border border-brand-lighter shadow-inner">
            <FeatureImage progress={scrollYProgress} points={[0, 0.1, 0.23, 0.33]} label="Totem Kiosk" bg="bg-brand-dark" />
            <FeatureImage progress={scrollYProgress} points={[0.33, 0.43, 0.56, 0.66]} label="Painel Web" bg="bg-white" />
            <FeatureImage progress={scrollYProgress} points={[0.66, 0.76, 0.9, 1]} label="App Mobile" bg="bg-brand-primary" />
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureText({ progress, points, title, description, icon }: { progress: any, points: number[], title: string, description: string, icon: React.ReactNode }) {
  const opacity = useTransform(progress, points, [0, 1, 1, 0]);
  const y = useTransform(progress, points, [40, 0, 0, -40]);

  return (
    <motion.div style={{ opacity, y, pointerEvents: 'none' }} className="absolute inset-x-0 flex flex-col gap-6">
      <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center border border-brand-lighter shadow-sm">
        {icon}
      </div>
      <div>
         <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark tracking-tight mb-4">{title}</h2>
         <p className="text-lg md:text-xl text-brand-dark/70 leading-relaxed max-w-md">{description}</p>
      </div>
    </motion.div>
  );
}

function FeatureImage({ progress, points, label, bg }: { progress: any, points: number[], label: string, bg: string }) {
  const opacity = useTransform(progress, points, [0, 1, 1, 0]);
  const scale = useTransform(progress, points, [0.95, 1, 1, 1.05]);

  return (
    <motion.div style={{ opacity, scale }} className={`absolute inset-0 flex items-center justify-center ${bg} p-12 text-center`}>
      <div className="flex flex-col items-center">
         <span className={`font-heading font-bold text-2xl ${bg === 'bg-white' ? 'text-brand-dark' : 'text-white'}`}>
            Mockup {label}
         </span>
         <p className={`mt-2 max-w-xs mx-auto ${bg === 'bg-white' ? 'text-brand-dark/50' : 'text-white/50'}`}>
            Substitua esse bloco pela Tag Image do Next.js com as capturas de tela reais do seu sistema.
         </p>
      </div>
    </motion.div>
  );
}
