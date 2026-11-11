export const site = {
  name: 'Krishna Khong',
  title: 'Krishna Khong — software and customer operations',
  description:
    'Krishna Khong is a computer science student at UNSW and a customer-facing retail professional in Sydney, building careful software with TypeScript, Rust and SQL.',
  url: 'https://portfolio.khong.dev',
  email: 'krishna@khong.dev',
  github: 'https://github.com/cashewna',
  githubLabel: 'github.com/cashewna',
  location: 'Sydney, Australia',
  updated: '12 November 2026',
};

export const hero = {
  eyebrow: 'Sydney, Australia',
  headlineLines: ['Customer-facing', 'by trade.', 'Systems-minded', 'by training.'],
  intro:
    'I am a computer science student at UNSW with five years in retail sales and a year in software support. I like work where clear communication and careful debugging matter equally.',
  facts: [
    { label: 'Studying', value: 'BSc Computer Science, UNSW' },
    { label: 'Studied', value: '2023 — 2026' },
    { label: 'Based in', value: 'Sydney, Australia' },
    { label: 'Open to', value: 'Graduate software and support roles' },
  ],
};

export const about = [
  'Most of my working life has been on a shop floor: listening to what a customer actually needs, explaining the options without jargon, and fixing the problem when the first answer is wrong. That habit carries into software. I read the error, reproduce the failure, and keep going until the cause is clear.',
  'At university I have worked in C, C++, TypeScript/JavaScript and Rust. Outside coursework I build small, complete systems — a service-desk application with a real database and audit trail, an evaluation harness that runs without a network, and a Rust asset register with an allow-list it enforces in code.',
  'I am looking for a graduate role where I can keep learning from people who care about the details, and where explaining technical work to non-technical people is part of the job rather than an afterthought.',
];

export const experience = [
  {
    role: 'Sales Associate',
    company: 'Shahi Investments Pty Ltd',
    place: 'Perth, Australia',
    period: '2020 — 2025',
    points: [
      'Helped customers choose products by identifying their needs and explaining the relevant options clearly.',
      'Processed sales and transactions accurately while keeping service friendly and efficient.',
      'Handled enquiries, complaints, returns and product issues with patience and follow-through.',
      'Trained new staff in customer service, sales procedures, product knowledge and daily store operations.',
      'Replenished and organised stock, maintained presentation, and supported inventory and general store operations.',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'TFS Timeframe Systems',
    place: 'Perth, Australia',
    period: '2023',
    points: [
      'Worked directly with clients to understand technical issues, troubleshoot problems and explain solutions in accessible language.',
      'Collaborated with team members to diagnose software and system issues and deliver practical fixes.',
      'Built broad familiarity with computer hardware, software and operating systems through hands-on troubleshooting.',
    ],
  },
  {
    role: 'Service Crew',
    company: 'Each-A-Cup',
    place: 'Singapore',
    period: '2011 — 2013',
    points: [
      'Delivered fast, friendly service in a high-volume retail environment while staying accurate during busy periods.',
      'Processed orders and payments, responded to requests and resolved service issues professionally.',
      'Maintained stock, cleanliness and presentation while balancing several operational tasks each shift.',
    ],
  },
];

export const education = {
  school: 'UNSW',
  place: 'Sydney, Australia',
  degree: 'Bachelor of Computer Science',
  period: '2023 — 2026',
};

export const projects = [
  {
    name: 'Relay Desk',
    repo: 'ticket-queue',
    kicker: 'Service-desk application',
    description:
      'A production-shaped IT service-desk ticketing app: strict TypeScript on Node, PostgreSQL with SQL migrations, role-based access, an append-only audit trail and an SLA clock computed from a documented policy.',
    detail:
      'Server-rendered HTML that works without JavaScript, a small explicit status machine, and tests that cover every status transition.',
    stack: ['TypeScript', 'Node', 'PostgreSQL', 'Fastify'],
    demo: {
      href: 'https://demo.ticket-queue.khong.dev',
      accounts: [
        { role: 'Requester', email: 'requester@example.com' },
        { role: 'Agent', email: 'agent@example.com' },
      ],
      password: 'demo-pass-123',
      note: 'Public demo: the queue is shared, anyone can change it, and it resets every 30 minutes. Do not enter personal information.',
    },
    links: [
      { label: 'GitHub', href: 'https://github.com/cashewna/ticket-queue' },
      { label: 'Live demo', href: 'https://demo.ticket-queue.khong.dev' },
    ],
  },
  {
    name: 'EPI Trainer',
    repo: 'epi-trainer',
    kicker: 'Study console',
    description:
      'A local study console for Elements of Programming Interviews in Java: a React workspace, a spaced-review scheduler and a Spring Boot judge that compiles and runs Java against the EPIJudge test data.',
    detail:
      'The statement, hint ladder, editor, timer and outcome stay on one page; the judge returns the first failing case with its input, expected value and actual value.',
    stack: ['React 19', 'Vite', 'Spring Boot', 'Java 21'],
    accessNote: 'Read-only public demo. Run and full access are password-gated.',
    links: [
      { label: 'Live demo', href: 'https://epi-trainer.khong.dev' },
      { label: 'Full access', href: 'https://epi-trainer-auth.khong.dev' },
    ],
  },
  {
    name: 'ai-eval-checker',
    repo: 'ai-eval-checker',
    kicker: 'Evaluation harness',
    description:
      'An evaluation harness for IT ticket classification and reply drafting. It scores output against a committed, hand-labelled golden set and lets you read every failure individually.',
    detail:
      'A deterministic rules baseline runs offline with no key and no dependencies; a provider interface leaves room for a live model without changing the scoring path.',
    stack: ['TypeScript', 'Zero dependencies', 'CI fixtures'],
    links: [
      { label: 'GitHub', href: 'https://github.com/cashewna/ai-eval-checker' },
    ],
  },
  {
    name: 'netregister',
    repo: 'netregister',
    kicker: 'Network asset register',
    description:
      'A small, honest asset register for one local network segment. It finds hosts with ARP, records them in SQLite, and answers the support question: what equipment do we have, and when was it last seen?',
    detail:
      'The scanner refuses any network outside its configured allow-list before sending a packet, and the CLI exports table, TSV or JSON.',
    stack: ['Rust', 'SQLite', 'CLI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/cashewna/netregister' },
    ],
  },
];

export const skills = [
  {
    label: 'Programming',
    items: ['C', 'C++', 'TypeScript / JavaScript', 'Rust'],
    note: 'University coursework and self-directed study',
  },
  {
    label: 'Retail & sales',
    items: [
      'Customer needs identification',
      'Product recommendations',
      'Sales transactions',
      'Returns and enquiries',
      'Stock replenishment',
      'Store presentation',
    ],
  },
  {
    label: 'Customer service',
    items: [
      'Active listening',
      'Clear communication',
      'Problem resolution',
      'Relationship building',
      'Adapting to different customers',
    ],
  },
  {
    label: 'Teamwork & operations',
    items: [
      'Staff training',
      'Fast-paced operations',
      'Prioritisation',
      'Teamwork',
      'Adaptability',
      'Inventory support',
    ],
  },
  {
    label: 'Technology',
    items: [
      'Hardware and software troubleshooting',
      'Windows',
      'macOS',
      'Linux',
      'General computer knowledge',
    ],
  },
];
