"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ImpactCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-brand-primary">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-brand-dark rounded-[3rem] p-12 md:p-20 shadow-2xl border border-white/10"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 tracking-tight">
            Pare de usar ferramentas genéricas no seu condomínio.
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Abandone os cadernos físicos e os grupos barulhentos de mensagens. Adote um sistema desenhado exclusivamente para síndicos e administradoras que exigem alta performance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://app.facilicond.online"
              className="group relative flex items-center justify-center gap-2 bg-white text-brand-dark px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
            >
              <span className="relative z-10">Transformar Meu Condomínio</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
