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
          
          {/* Left Text Content */}
          <div className="relative h-[400px] flex flex-col justify-center">
            <FeatureText 
              progress={scrollYProgress} 
              range={[0, 0.33]} 
              title="Totem Kiosk Facial"
              description="Controle de acesso e ponto eletrônico (REP-A) 100% automatizado na portaria. Segurança máxima com reconhecimento facial de última geração."
              icon={<KeySquare size={32} className="text-brand-primary" />}
            />
            <FeatureText 
              progress={scrollYProgress} 
              range={[0.33, 0.66]} 
              title="Painel de Gestão"
              description="Visão panorâmica do condomínio. Portaria em tempo real, funcionários ativos, relatórios financeiros e aprovação de ocorrências em um só lugar."
              icon={<MonitorSmartphone size={32} className="text-brand-secondary" />}
            />
            <FeatureText 
              progress={scrollYProgress} 
              range={[0.66, 1]} 
              title="App do Colaborador"
              description="A ferramenta no bolso da sua equipe. Recebimento de encomendas via escaneamento e notificações push de chamados de manutenção."
              icon={<Smartphone size={32} className="text-brand-accent" />}
            />
          </div>

          {/* Right Visual Content */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] bg-brand-light overflow-hidden flex items-center justify-center border border-brand-lighter shadow-inner">
            <FeatureImage progress={scrollYProgress} range={[0, 0.33]} label="Totem Kiosk" bg="bg-brand-dark" />
            <FeatureImage progress={scrollYProgress} range={[0.33, 0.66]} label="Painel Web" bg="bg-white" />
            <FeatureImage progress={scrollYProgress} range={[0.66, 1]} label="App Mobile" bg="bg-brand-primary" />
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureText({ progress, range, title, description, icon }: { progress: any, range: [number, number], title: string, description: string, icon: React.ReactNode }) {
  const opacity = useTransform(progress, [range[0] - 0.1, range[0] + 0.05, range[1] - 0.05, range[1] + 0.1], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0] - 0.1, range[0] + 0.05, range[1] - 0.05, range[1] + 0.1], [40, 0, 0, -40]);

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

function FeatureImage({ progress, range, label, bg }: { progress: any, range: [number, number], label: string, bg: string }) {
  const opacity = useTransform(progress, [range[0] - 0.1, range[0] + 0.05, range[1] - 0.05, range[1] + 0.1], [0, 1, 1, 0]);
  const scale = useTransform(progress, [range[0] - 0.1, range[0] + 0.05, range[1] - 0.05, range[1] + 0.1], [0.95, 1, 1, 1.05]);

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
