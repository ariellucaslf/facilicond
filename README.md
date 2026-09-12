<div align="center">
  
  # Facili - SaaS de Gestão Condominial & Portaria 671/MTE
  
  **O ecossistema definitivo que transforma a portaria analógica em uma operação digital, segura e rastreável.**

  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)]()
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)]()
  [![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
  [![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)]()
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)]()

  <br />



</div>

---

## O Problema do Mundo Real

A administração de condomínios sofre cronicamente com o excesso de papelada, a falta de segurança nos controles de acesso e a comunicação fragmentada. Na prática, isso se traduz em:

- **Gargalos na Portaria:** Filas de visitantes e prestadores de serviço devido a controles manuais em cadernos, além da dificuldade do porteiro em contatar os moradores.
- **Insegurança Trabalhista (Furos de Ponto):** Folhas de ponto analógicas que são facilmente adulteradas, gerando passivos trabalhistas graves para o condomínio.
- **Desorganização de Encomendas:** Extravios, moradores sem aviso de que o pacote chegou, e a falta de assinatura no momento da retirada.
- **Controles Paralelos e Informais:** Uso indiscriminado do WhatsApp para solicitar reparos, reservar áreas comuns ou notificar ocorrências, pulverizando dados importantes.

## A Solução

O **FaciliCond** é um produto SaaS (Software as a Service) focado no segmento B2B (condomínios comerciais e residenciais) que ataca diretamente esses problemas operacionais. Ele integra uma tríade de aplicações:
1. **Totem de Autoatendimento:** Um kiosk digital que roda em tablets na portaria para registro eletrônico de ponto (REP-A) e validação de acessos.
2. **Painel do Síndico (Web):** Centro de controle gerencial, financeiro e operacional.
3. **App do Colaborador (Mobile):** Ferramenta no bolso do funcionário para controle da própria jornada, registro de entregas e comunicados.

---

## Destaques de Engenharia (Engineering Highlights)

Como engenheiro responsável pela concepção e arquitetura deste sistema, estruturei a aplicação com foco na escalabilidade, segurança e integridade de dados críticos.

### 1. Isolamento Rigoroso de Dados (Multi-tenancy)
Por ser um SaaS atendendo a múltiplos condomínios simultaneamente no mesmo banco de dados, a arquitetura exige um isolamento perfeito dos tenants. 
- Implementei o modelo **Row-Level Security / Tenant ID**, onde a chave `condominioId` permeia todas as entidades principais do banco (PostgreSQL + Prisma ORM). 
- A camada de *Services / Repositories* assegura que nenhuma query vaze dados entre diferentes clientes, sendo o `condominioId` injetado diretamente pelo token JWT decodificado no middleware de autenticação.

### 2. Autenticação Segura e Controle de Dispositivos (Kiosk Mode)
O Totem de portaria fica em um ambiente físico público e vulnerável. Para mitigar riscos:
- **Device Tokens:** O Totem não usa login humano tradicional. Ele é pareado uma única vez através de um token de dispositivo exclusivo (Device Access Token).
- **Kiosk Mode:** O aplicativo React Native (Expo) opera confinado na tela, impedindo que os usuários saiam do app e acessem o sistema operacional do tablet. Toda comunicação via biometria/câmera com o backend é cifrada e assinada.

### 3. Persistência Imutável (Event Sourcing Light) e REP-A
Atendendo rigorosamente à **Portaria 671 do Ministério do Trabalho (MTE)**:
- Os registros de ponto (`records`) são projetados como tabelas *append-only* (imutáveis). 
- Qualquer "correção" ou abono (justificativas) gera um novo registro relacionado (trilha de auditoria), garantindo que o espelho de ponto jamais perca sua integridade legal.

### 4. Background Jobs e Resiliência
Para garantir que a API principal não sofra latência e continue respondendo em poucos milissegundos (sub-50ms):
- Rotinas pesadas (ex: disparos de e-mails emergenciais da portaria, geração e fechamento da folha de ponto em PDF no final do mês) foram completamente extraídas do *Event Loop* principal do Node.js.
- Utilizei **Redis** acoplado ao **BullMQ** para criar uma estrutura resiliente de *Message Queuing* com políticas de retry automáticas.

### 5. Padrões de Projeto (MVC & SOLID)
- O backend está rigorosamente organizado seguindo o padrão MVC adaptado, com separação clara de responsabilidades: **Rotas (Routes) ➔ Controladores (Controllers) ➔ Filas (Queues)**.
- O uso de TypeScript strict garante previsibilidade em tempo de compilação, eliminando bugs silenciosos no tráfego de cargas dinâmicas.

---

## Arquitetura do Sistema

Abaixo o fluxograma de comunicação entre os clientes, a API Restful e os serviços de infraestrutura de dados:

```mermaid
graph TD
    %% Define Styles
    classDef client fill:#2d3748,stroke:#4a5568,stroke-width:2px,color:#fff,rx:8px,ry:8px;
    classDef api fill:#2b6cb0,stroke:#2c5282,stroke-width:2px,color:#fff,rx:8px,ry:8px;
    classDef db fill:#2f855a,stroke:#276749,stroke-width:2px,color:#fff,rx:8px,ry:8px;
    classDef external fill:#c53030,stroke:#9b2c2c,stroke-width:2px,color:#fff,rx:8px,ry:8px;

    subgraph "Frontend Clients (Views)"
        A[📱 Facili App<br/>React Native / Expo<br/>App Totem & App Staff]:::client
        B[💻 Facili Web<br/>Next.js / App Router<br/>Painel Web do Síndico]:::client
    end

    subgraph "Backend Services (Controllers)"
        C[⚙️ Facili API<br/>Node.js / Express / TypeScript<br/>Core de Regras de Negócio e Gateways]:::api
    end

    subgraph "Data & Queues Layer (Models)"
        D[(PostgreSQL)<br/>Banco de Dados Relacional<br/>PostGIS / Isolamento Multi-Tenant]:::db
        E[(Redis)<br/>Cache em Memória &<br/>BullMQ para Filas de Tarefas]:::db
    end

    %% Connections
    A -- REST API (HTTPS / JWT) --> C
    B -- REST API (HTTPS / JWT) --> C
    C -- Prisma ORM (TCP) --> D
    C -- BullMQ Job Scheduler --> E
```

---



## Stack Tecnológico

A escolha tecnológica foi guiada pela busca de estabilidade, tipagem forte e desenvolvimento rápido de um ecossistema multiplataforma (Web e Mobile).

### Frontend (Client-side)
- **Painel Administrativo:** Next.js 16 (App Router), React 19
- **Estilização (Web):** Tailwind CSS v4, Server Components
- **Mobile (Staff & Totem):** React Native, Expo SDK 57
- **Estilização (Mobile):** NativeWind v4 (Tailwind para React Native)

### Backend (Server-side)
- **Runtime:** Node.js (v20+ LTS)
- **Framework & Roteamento:** Express.js
- **Linguagem:** TypeScript Estrito (`--strict` mode)
- **Validação de Dados:** Zod (Schemas nas bordas da aplicação)

### Infraestrutura & Dados
- **Banco de Dados Relacional:** PostgreSQL
- **ORM / Query Builder:** Prisma ORM (com migrations versionadas)
- **Cache e Message Broker:** Redis
- **Background Jobs:** BullMQ (Disparo de E-mails, PDFs de Fechamento)
- **Containerização:** Docker e Docker Compose (para ambientes locais e CI)
