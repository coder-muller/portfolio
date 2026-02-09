export const personalInfo = {
  name: "Guilherme Müller",
  role: "Desenvolvedor Full Stack",
  username: "coder-muller",
  location: "Canguçu, Brasil",
  education: "ADS — Unisenac Pelotas",
  email: "guilhermemullerxx@gmail.com",
  github: "https://github.com/coder-muller",
  twitter: "https://x.com/codermuller",
  photo: "/me.jpeg",
};

export const heroDescription =
  "Desenvolvedor Full Stack focado em criar soluções web modernas e eficientes, Combinando dedicação e criatividade para transformar ideias em aplicações reais.";

export const aboutTexts = [
  "Sou estudante de Análise e Desenvolvimento de Sistemas na Faculdade Unisenac, em Pelotas. Minha paixão por tecnologia veio lá da infância e, desde então, venho trilhando um caminho voltado ao desenvolvimento Full Stack.",
  "Gosto de criar aplicações web que realmente fazem diferença no dia a dia das pessoas. Tenho experiência tanto com startups quanto com empresas locais, sempre buscando entregar algo útil de verdade.",
  "Hoje trabalho com tecnologias modernas como React, Next.js e Node.js e estou sempre de olho em novidades para construir experiências cada vez melhores.",
];

export const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Vite", "TypeScript", "Tailwind", "Shadcn UI"] },
  { category: "Backend", items: ["Node.js","Bun", "Elysia", "Express"] },
  { category: "DevOps", items: ["Docker", "Cloud Computing", "CI/CD"] },
  { category: "Database", items: ["PostgreSQL", "Prisma", "Drizzle", "Convex"] },
];

export const projects = [
  {
    title: "Veltro",
    description:
      "Consolidador de carteiras de investimentos de Renda Variável e Renda Fixa. Aplicação completa para gerenciamento e análise de investimentos com dashboard intuitivo.",
    link: "https://veltro.vercel.app",
    status: "Beta",
  },
  {
    title: "Fidera",
    description:
      "Sistema de gerenciamento de mensalidades de clientes desenvolvido com Next.js, Prisma ORM e PostgreSQL. Controle completo de pagamentos e cobranças recorrentes.",
    link: "https://fidera.cgmcloud.com.br",
    status: "Beta",
  },
  {
    title: "Minimal Strings",
    description:
      "Aplicativo para registrar frases marcantes de livros, permitindo que você revisite citações inspiradoras todos os dias de forma motivacional.",
    link: "https://minimal-strings.vercel.app",
    status: "Production",
  },
  {
    title: "GourmetFlow",
    description:
      "Aplicação completa para restaurantes, oferecendo sistema de atendimento, gestão de pedidos e dashboard administrativo para análise e controle do estabelecimento.",
    link: "https://gourmet-flow.vercel.app",
    status: "Production",
  },
];

export const testimonials = [
  {
    client: "Rádio Cultura",
    sector: "Comunicação",
    quote:
      "O sistema revolucionou nossa gestão administrativa. A interface intuitiva e os recursos automatizados nos permitem focar no que realmente importa: criar conteúdo de qualidade para nossos ouvintes.",
    author: "Dir. Administrativa",
    since: 2025,
  },
  {
    client: "Clínica & Fisioterapia Linear",
    sector: "Agendamento",
    quote:
      "Desde que implementamos o sistema, nossa produtividade aumentou significativamente. A facilidade de uso e o agendamento automatizado reduziram o tempo gasto em tarefas administrativas.",
    author: "Dr. Gabriel",
    since: 2025,
  },
  {
    client: "Burger Klug",
    sector: "Gastronomia",
    quote:
      "Com o GourmetFlow, revolucionamos nossa operação diária. O sistema simplificou nosso processo de pedidos e o dashboard com métricas de vendas nos permite tomar decisões mais estratégicas.",
    author: "Gerente de Marketing",
    since: 2024,
  },
];

export const stats = [
  { value: "10+", label: "Clientes" },
  { value: "500+", label: "Usuários" },
  { value: "99.9%", label: "Uptime" },
];

export const timeline = [
  {
    year: "2010",
    title: "O Despertar da Curiosidade Tecnológica",
    summary:
      "Com 7-8 anos já desmontava computador em casa. Não sabia o que tava fazendo, mas achava o máximo.",
  },
  {
    year: "2012",
    title: "Primeiro sistema de verdade",
    summary:
      "Sistema em xHarbour pra oficina do meu tio. Controle de vendas e recebimentos.",
  },
  {
    year: "2020",
    title: "IF-Sul",
    summary:
      "Curso técnico de Eletrônica. Aprendi C e lógica de programação de forma estruturada pela primeira vez.",
  },
  {
    year: "2021",
    title: "Primeiro Hello World",
    summary:
      "Comecei com Java pra Android. Aquele momento de ver algo rodando na tela pela primeira vez.",
  },
  {
    year: "2022",
    title: "Mergulhei de cabeça",
    summary:
      "Java, Spring Boot, apps Android pra empresa da família. Código virou rotina.",
  },
  {
    year: "2024",
    title: "Formação Acadêmica Superior",
    summary:
      "Entrei na Unisenac pra ADS. Migrei pro mundo web com React e Next.js. Sem volta.",
  },
  {
    year: "2025",
    title: "Retorno Financeiro",
    summary:
      "Sistema pra rádio, app de agendamento pra clínica. Primeiro dinheiro vindo de código.",
  },
  {
    year: "→",
    title: "Próximo passo",
    summary:
      "Montar meu primeiro SaaS. Escalar. Viver de produto próprio.",
  },
];

export const statusColor: Record<string, string> = {
  Alpha: "text-red-400 bg-red-500/15",
  Beta: "text-yellow-400 bg-yellow-500/15",
  Production: "text-green-400 bg-green-500/15",
  Learning: "text-blue-400 bg-blue-500/15",
  Development: "text-purple-400 bg-purple-500/15",
};
