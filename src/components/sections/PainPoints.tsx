"use client";

import { motion } from "framer-motion";
import { MessageSquareOff, PackageX, FileWarning } from "lucide-react";

const painPoints = [
  {
    icon: <MessageSquareOff size={32} className="text-white" />,
    title: "Grupos de WhatsApp caóticos",
    description: "Mensagens perdidas, cobranças em público e ruído constante de comunicação entre moradores e a gestão.",
    solution: "Mural Oficial e Ocorrências Virtuais organizadas."
  },
  {
    icon: <PackageX size={32} className="text-white" />,
    title: "Encomendas perdidas",
    description: "Moradores não sabem quando a entrega chegou, o caderno da portaria some e a segurança fica comprometida.",
    solution: "Gestão inteligente com notificação push direto no App."
  },
  {
    icon: <FileWarning size={32} className="text-white" />,
    title: "Falta de controle e inadimplência",
    description: "Síndico perdido em planilhas financeiras, com dificuldades para rastrear pagamentos, emitir multas e advertências.",
    solution: "Transparência financeira e relatórios de fácil acesso."
  }
];

export function PainPoints() {
  return (
    <section id="problema" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Administrar condomínios <br/>não precisa ser um caos.</h2>
          <p className="text-lg text-white/70">
            Nós sabemos o quão exaustivo é lidar com cadernos informais e ferramentas genéricas que não foram feitas para a dinâmica de um condomínio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#1e293b] border border-white/10 rounded-3xl p-8 transition-all hover:bg-[#253247] hover:border-brand-primary/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20">
                {point.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{point.title}</h3>
              <p className="text-white/60 mb-6 line-clamp-3">{point.description}</p>
              
              <div className="pt-4 border-t border-white/10 mt-auto">
                <span className="text-xs uppercase tracking-wider text-brand-secondary font-bold block mb-1">A solução FaciliCond</span>
                <span className="text-sm text-white/90 font-medium">{point.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
