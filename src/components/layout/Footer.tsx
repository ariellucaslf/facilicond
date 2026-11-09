import { Logo } from "@/components/ui/Logo";
import { CONTACT_EMAIL, WEB_URL } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy py-16 text-white">
      <div className="site-wrap">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Plataforma integrada para administração condominial, moradores,
              portaria em modo totem e equipe operacional.
            </p>
            <p className="mt-4 font-mono text-xs text-brand-mint">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-white/45">
                Plataforma
              </p>
              <ul className="mt-3.5 space-y-2.5 text-white/70">
                <li>
                  <a className="transition-colors hover:text-white" href="#contraste">
                    O que muda
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-white" href="#papeis">
                    Perfis de acesso
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-white" href="#modulos">
                    Módulos
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-white" href="#seguranca">
                    Segurança e LGPD
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-white/45">
                Comercial
              </p>
              <ul className="mt-3.5 space-y-2.5 text-white/70">
                <li>
                  <a className="transition-colors hover:text-white" href="#planos">
                    Simulador de preço
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-white" href="#faq">
                    Perguntas frequentes
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-white"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    Contato direto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-white/45">
                Acesso
              </p>
              <ul className="mt-3.5 space-y-2.5 text-white/70">
                <li>
                  <a className="transition-colors hover:text-white" href={WEB_URL}>
                    Entrar no sistema
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-white"
                    href={WEB_URL}
                  >
                    Painel Web
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} FaciliCond. Todos os direitos reservados.</p>
          <p className="font-mono">
            Isolamento multi-condomínio · Exportação LGPD · AFD Portaria 671
          </p>
        </div>
      </div>
    </footer>
  );
}
