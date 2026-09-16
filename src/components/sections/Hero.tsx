"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Building } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-light">
      {/* Elementos abstratos baseados no branding */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] rounded-[100px] rotate-12 bg-brand-primary/5 blur-3xl" />
        <div className="absolute top-[30%] -left-[10%] w-[40%] h-[60%] rounded-full bg-brand-secondary/5 blur-3xl" />
        <div className="absolute bottom-[0%] right-[20%] w-[30%] h-[30%] rounded-full bg-brand-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark text-white text-sm font-medium mb-8 shadow-lg"
          >
            <Building size={16} className="text-brand-secondary" />
            <span>A evolução da gestão condominial chegou.</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-brand-dark leading-[1.1] tracking-tight max-w-5xl"
          >
            Mais que gestão, <br/>
            <span className="text-brand-primary relative">
              tranquilidade.
              {/* Detalhe visual sublinhado sutil (opcional) */}
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-brand-secondary/20 rounded-full" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-xl md:text-2xl text-brand-dark/70 max-w-3xl leading-relaxed"
          >
            O ecossistema definitivo que elimina a desorganização de encomendas, a falta de transparência financeira e as eternas discussões no WhatsApp.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="https://app.facilicond.online"
              className="group relative flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105 hover:bg-brand-primary-darker active:scale-95 shadow-xl shadow-brand-primary/30 w-full sm:w-auto"
            >
              <span className="relative z-10">Acessar o Painel</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#problema"
              className="flex items-center justify-center gap-2 bg-white text-brand-dark border border-brand-lighter px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-light transition-colors shadow-sm w-full sm:w-auto"
            >
              <Zap size={20} className="text-brand-secondary" />
              <span>Ver como funciona</span>
            </a>
          </motion.div>
        </div>

        {/* Dashboard Mockup Representation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 relative mx-auto w-full max-w-5xl"
        >
          <div className="aspect-[16/9] rounded-2xl md:rounded-[2rem] bg-brand-dark shadow-[0_20px_50px_rgba(15,23,42,0.5)] overflow-hidden border border-brand-dark/10 ring-1 ring-white/10 flex items-center justify-center relative">
             <div className="absolute top-0 inset-x-0 h-10 bg-[#1e293b] flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
             </div>
             
             <div className="text-white/30 font-medium flex flex-col items-center">
                <span className="text-2xl mb-2 font-heading">Dashboard Interativo</span>
                <span className="text-sm font-sans max-w-sm text-center">Insira a imagem de alta resolução do painel web aqui usando a Tag Image.</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
