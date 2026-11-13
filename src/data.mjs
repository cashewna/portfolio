export const site = {
  name: 'Krishna Khong',
  title: 'Krishna Khong — Software & Systems Engineering',
  description:
    'Krishna Khong is a UNSW Computer Science student building tested, production-shaped systems in TypeScript, Rust, Java and SQL, backed by software support and customer operations.',
  url: 'https://portfolio.khong.dev',
  email: 'krishna@khong.dev',
  github: 'https://github.com/cashewna',
  githubLabel: 'github.com/cashewna',
  location: 'Sydney, Australia',
  updated: '13 November 2026',
};

export const hero = {
  eyebrow: 'Sydney, Australia · UNSW Computer Science',
  headlineLines: ['A true master', 'is an eternal', 'student.'],
  intro:
    'Computer Science student at UNSW building tested systems in TypeScript, Rust, Java and SQL — from PostgreSQL service desks to ARP asset registers — backed by software support and five years of customer operations.',
  facts: [
    { label: 'Degree', value: 'BSc Computer Science, UNSW (2023 — 2026)' },
    { label: 'Core stack', value: 'TypeScript, Rust, Java, C/C++, SQL' },
    { label: 'Based in', value: 'Sydney, Australia' },
    { label: 'Target', value: 'Graduate software & systems roles' },
  ],
};

export const about = [
  'I build small, complete systems with explicit state, real databases, and automated tests: a TypeScript and PostgreSQL service desk with an append-only audit trail, a Spring Boot Java study console, an offline LLM evaluation harness, and a Rust ARP asset register.',
  'At UNSW I have worked across C, C++, Python, Java, TypeScript and Rust, writing unit, integration, and end-to-end test suites in GitHub Actions CI. Outside coursework, a year in software support and five years on the retail floor trained me to reproduce failures methodically and explain technical trade-offs without jargon.',
  'I am looking for a graduate software engineering or systems role where correctness, maintainability, and clear communication with users matter equally.',
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
    preview: {
      title: 'State machine & queue',
      lines: [
        'OPEN -> TRIAGED -> IN_PROGRESS -> RESOLVED',
        'PostgreSQL migrations · Fastify SSR · SLA clock',
      ],
    },
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
    preview: {
      title: 'Java 21 judge workspace',
      lines: [
        'Statement · Hint ladder · Editor · Timer',
        'Returns first failing input, expected & actual',
      ],
    },
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
    preview: {
      title: 'Offline golden-set eval',
      lines: [
        '$ node eval.mjs --baseline rules',
        'Deterministic scoring · 0 network dependencies',
      ],
    },
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
    preview: {
      title: 'Allow-list & CLI export',
      lines: [
        '$ netregister scan 192.168.1.0/24 --json',
        'ARP -> SQLite · allow-list enforced before send',
      ],
    },
    links: [
      { label: 'GitHub', href: 'https://github.com/cashewna/netregister' },
    ],
  },
];

export const skills = [
  {
    label: 'Languages',
    items: ['TypeScript / JavaScript', 'Rust', 'C / C++', 'Java', 'Python', 'SQL'],
    note: 'UNSW coursework and self-directed systems projects',
  },
  {
    label: 'Testing & CI',
    items: [
      'Unit testing',
      'Integration testing',
      'End-to-end testing',
      'GitHub Actions CI',
      'Deterministic fixtures',
    ],
  },
  {
    label: 'Systems & platforms',
    items: [
      'PostgreSQL',
      'SQLite',
      'Node / Fastify',
      'React / Vite',
      'Spring Boot',
      'Linux / macOS / Windows',
    ],
  },
  {
    label: 'Support & operations',
    items: [
      'Hardware & software troubleshooting',
      'Client communication',
      'Staff training',
      'Needs discovery & escalation',
      'High-volume retail operations',
    ],
  },
];
