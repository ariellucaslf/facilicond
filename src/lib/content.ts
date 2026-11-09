/**
 * Conteúdo da landing page.
 *
 * Tudo aqui reflete funcionalidades que existem no código do ecossistema
 * (facili-api e facili-web). Antes de anunciar algo novo,
 * confirme que a rota/tela existe — nada de promessa de slide.
 */

export const WEB_URL = "https://web.facilicond.online";
export const CONTACT_EMAIL = "contato@facilicond.com.br";

/* ---------------- Preço (facili-api/src/services/billing.service.ts) ---------------- */

export const PRICING = {
  baseUnits: 40,
  basePrice: 109.99,
  perUnit: 3.1,
  perEmployeeTimeclock: 10,
  trialDays: 7,
} as const;

export function calculateMonthlyPrice(units: number, timeclockEmployees: number): number {
  const base = units <= PRICING.baseUnits ? PRICING.basePrice : units * PRICING.perUnit;
  return base + timeclockEmployees * PRICING.perEmployeeTimeclock;
}

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* ---------------- Eventos do ticker (exemplos de registros reais do sistema) ---------------- */

export interface LiveEvent {
  time: string;
  label: string;
  detail: string;
}

export const LIVE_EVENTS: LiveEvent[] = [
  { time: "08:02", label: "Ponto", detail: "Entrada registrada no totem com selfie + PIN" },
  { time: "08:47", label: "Encomenda", detail: "Pacote recebido para o 304-B · morador avisado" },
  { time: "09:15", label: "Visitante", detail: "Prestador pré-autorizado liberado na portaria" },
  { time: "10:30", label: "Comunicado", detail: "Aviso de obra publicado · 62% de leitura" },
  { time: "11:04", label: "Reserva", detail: "Salão de festas confirmado para sábado" },
  { time: "13:20", label: "Preventiva", detail: "Checklist da bomba d'água concluído" },
  { time: "14:32", label: "Retirada", detail: "QR validado · comprovante gerado" },
  { time: "16:10", label: "Ocorrência", detail: "Barulho no 7º andar · status atualizado" },
  { time: "18:45", label: "Enquete", detail: "Votação da fachada encerrada com 71% de adesão" },
];

/* ---------------- Antes x Depois ---------------- */

export interface BeforeAfter {
  area: string;
  before: string;
  after: string;
}

export const BEFORE_AFTER: BeforeAfter[] = [
  {
    area: "Portaria",
    before: "Caderno de encomendas, assinatura ilegível e “quem retirou meu pacote?”",
    after: "Recebimento registrado, aviso no celular e retirada com QR de uso único.",
  },
  {
    area: "Comunicação",
    before: "Aviso importante enterrado entre bom-dias no grupo do prédio.",
    after: "Mural oficial com push e confirmação de leitura por unidade.",
  },
  {
    area: "Manutenção",
    before: "Revisão do gerador lembrada só quando o gerador falha.",
    after: "Rotinas preventivas com checklist, foto e OS corretiva aberta sozinha.",
  },
  {
    area: "Equipe",
    before: "Folha de ponto em papel e discussão no fim do mês.",
    after: "Ponto no totem com selfie, PIN, espelho mensal e exportação AFD.",
  },
];

/* ---------------- Públicos ---------------- */

export type AudienceId = "sindico" | "morador" | "portaria" | "equipe";

export interface Audience {
  id: AudienceId;
  label: string;
  channel: string;
  title: string;
  body: string;
  features: string[];
}

export const AUDIENCES: Audience[] = [
  {
    id: "sindico",
    label: "Síndico",
    channel: "Painel da administração",
    title: "O prédio inteiro numa tela que abre de manhã.",
    body: "Uma visão de “hoje” com o que pede decisão: ocorrências abertas, reservas, manutenções vencendo e pedidos dos moradores para revisar.",
    features: [
      "Blocos, unidades e importação de moradores por planilha",
      "Convites com link de aceite único",
      "Advertências e multas com provas e PDF",
      "Livro caixa e prestação de contas em PDF",
      "Tarefas atribuídas para a equipe",
      "Exportação completa dos dados (CSV/ZIP)",
    ],
  },
  {
    id: "morador",
    label: "Morador",
    channel: "Portal do morador",
    title: "Tudo do condomínio no bolso — sem baixar mais um grupo.",
    body: "O morador acompanha encomendas, reserva o salão, vota em enquetes e fala com a administração por um canal com histórico.",
    features: [
      "Encomendas com QR de retirada e autorização para terceiros",
      "Pré-autorização de visitantes",
      "Reservas de áreas comuns com convidados",
      "Enquetes, ocorrências e chat com a administração",
      "Documentos do condomínio sempre na versão vigente",
      "Veículos, pets, classificados e achados e perdidos",
    ],
  },
  {
    id: "portaria",
    label: "Portaria",
    channel: "Totem em tablet",
    title: "Um tablet pareado substitui o caderno da guarita.",
    body: "O totem roda em modo quiosque, vinculado ao condomínio por PIN de pareamento. A portaria registra, consulta e entrega sem papel.",
    features: [
      "Recebimento e entrega de encomendas por QR",
      "Visitantes e prestadores com registro de entrada",
      "Consulta de moradores, veículos e reservas",
      "Achados e perdidos com foto",
      "Ponto eletrônico da equipe no mesmo aparelho",
    ],
  },
  {
    id: "equipe",
    label: "Equipe",
    channel: "Portal do colaborador",
    title: "Zelador e porteiro sabem o que fazer — e provam que fizeram.",
    body: "Cada colaborador vê sua escala, as tarefas atribuídas pelo síndico e executa checklists de inspeção direto do celular.",
    features: [
      "Escala, jornada e folgas da semana",
      "Espelho de ponto e PDF mensal",
      "Pedidos de abono e envio de atestado",
      "Tarefas e checklists de manutenção preventiva",
      "Registro de encomendas recebidas",
    ],
  },
];

/* ---------------- Módulos (bento) ---------------- */

export interface Module {
  title: string;
  body: string;
}

export const MORE_MODULES: Module[] = [
  { title: "Comunicados", body: "Rascunho, publicação, push e confirmação de leitura." },
  { title: "Ocorrências", body: "Histórico de status, opção anônima e PDF." },
  { title: "Reservas", body: "Áreas comuns, regras e lista de convidados." },
  { title: "Enquetes", body: "Votações com resultado consolidado no painel." },
  { title: "Advertências", body: "Provas anexas, envio por e-mail e versão assinada." },
  { title: "Financeiro", body: "Livro caixa e extrato de prestação de contas." },
  { title: "Veículos e pets", body: "Cadastro por unidade, consulta na portaria." },
  { title: "Classificados", body: "Anúncios entre vizinhos e imóveis para alugar." },
  { title: "Chat", body: "Conversa 1:1 entre morador e administração." },
  { title: "Achados e perdidos", body: "Itens com foto, do totem para o portal do morador." },
  { title: "Suporte", body: "Chamados com anexos direto para o time FaciliCond." },
  { title: "Rotinas", body: "Tarefas recorrentes para a equipe não esquecer." },
];

/* ---------------- Segurança ---------------- */

export interface TrustItem {
  title: string;
  body: string;
}

export const TRUST_ITEMS: TrustItem[] = [
  {
    title: "Isolamento por condomínio",
    body: "Cada registro pertence a um condomínio. Políticas de segurança no banco impedem que um prédio enxergue os dados de outro.",
  },
  {
    title: "Arquivos em cofre privado",
    body: "Documentos, provas e fotos ficam em armazenamento privado. O download usa links assinados que expiram em 60 segundos.",
  },
  {
    title: "Aparelhos pareados",
    body: "O totem só opera depois de vinculado ao condomínio. Sessões usam cookies httpOnly — nada de token exposto no navegador.",
  },
  {
    title: "LGPD de verdade",
    body: "Aceite de termos registrado, pedidos de exclusão e exportação integral dos dados do condomínio quando ele quiser sair.",
  },
];

/* ---------------- FAQ ---------------- */

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Quanto custa?",
    a: "Até 40 unidades, R$ 109,99 por mês. Acima disso, R$ 3,10 por unidade. O ponto eletrônico é opcional: R$ 10,00 por colaborador. Condomínios maiores podem ter valor negociado.",
  },
  {
    q: "Dá para testar antes de contratar?",
    a: "Sim. São 7 dias de teste com o sistema completo, para o síndico ver o painel da administração, o portal do morador e o totem funcionando com os dados do próprio prédio.",
  },
  {
    q: "Preciso comprar equipamento para a portaria?",
    a: "Não há hardware proprietário. O totem roda em um tablet comum, em modo quiosque, pareado uma única vez com o condomínio.",
  },
  {
    q: "Como os moradores entram no sistema?",
    a: "O síndico importa unidades e contatos por planilha e o sistema envia convites com link de aceite único. Cada morador entra já vinculado à sua unidade.",
  },
  {
    q: "O ponto eletrônico segue a Portaria 671?",
    a: "O registro acontece no totem com selfie e PIN, cada batida recebe um hash anti-adulteração e o sistema exporta o arquivo AFD. O colaborador acompanha o espelho pelo portal no celular.",
  },
  {
    q: "E se o condomínio quiser sair?",
    a: "Os dados são do condomínio. O painel gera uma exportação completa em CSV/ZIP, sem pedido por e-mail e sem multa de dados presos.",
  },
];
