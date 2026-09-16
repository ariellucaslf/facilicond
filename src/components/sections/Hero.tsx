"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden -z-10 bg-brand-light">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-primary/5 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8"
          >
            <ShieldCheck size={16} />
            <span>Portaria 671/MTE 100% Homologada</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold text-brand-dark leading-tight tracking-tight max-w-4xl"
          >
            Gestão Inteligente. <br/>
            <span className="text-brand-primary">Condomínios em perfeita harmonia.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-brand-dark/70 max-w-2xl"
          >
            O ecossistema definitivo que transforma a portaria analógica em uma operação digital, segura e rastreável. Tudo o que o seu condomínio precisa em um só lugar.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="https://app.facilicond.online"
              className="group relative flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-primary/30"
            >
              <span className="relative z-10">Acessar o Painel</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#funcionalidades"
              className="flex items-center gap-2 bg-white text-brand-dark border border-brand-lighter px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-lighter/50 transition-colors"
            >
              <Zap size={20} className="text-brand-secondary" />
              <span>Ver Funcionalidades</span>
            </a>
          </motion.div>
        </div>

        {/* Dashboard Mockup Representation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative mx-auto w-full max-w-5xl"
        >
          <div className="aspect-[16/9] rounded-2xl md:rounded-[2rem] bg-brand-dark shadow-2xl overflow-hidden border border-brand-dark/10 ring-1 ring-white/10 flex items-center justify-center relative">
             <div className="absolute top-0 inset-x-0 h-10 bg-[#1e293b] flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
             </div>
             
             {/* Text placeholder for Dashboard image - Substituir por tag <Image> do Next.js depois */}
             <div className="text-white/30 font-medium flex flex-col items-center">
                <MonitorSmartphone className="mb-4 opacity-50" size={48} />
                <span className="text-2xl mb-2">Painel Web Dashboard</span>
                <span className="text-sm font-sans">Insira a imagem (screenshot real) do seu sistema aqui</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Just importing the icon for the mockup
import { MonitorSmartphone } from "lucide-react";
