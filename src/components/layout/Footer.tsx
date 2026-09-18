import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <div className="site-wrap flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            Mais que gestão, tranquilidade. Ecossistema para síndicos, portaria e moradores.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 font-semibold">Produto</p>
            <ul className="space-y-2 text-white/60">
              <li>
                <a className="hover:text-white" href="#sistema">
                  Sistema
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#funcionalidades">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#planos">
                  Planos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">Acesso</p>
            <ul className="space-y-2 text-white/60">
              <li>
                <a className="hover:text-white" href="https://app.facilicond.online">
                  Painel
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#faq">
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="site-wrap mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
        © {new Date().getFullYear()} FaciliCond. Todos os direitos reservados.
      </div>
    </footer>
  );
}
