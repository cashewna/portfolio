export const site = {
  name: 'Krishna Khong',
  title: 'Krishna Khong | Software, Systems & Infrastructure Engineering',
  description:
    'Krishna Khong is a UNSW Computer Science student building tested systems in TypeScript, Rust, Java, and SQL, backed by Kubernetes (k3s) GitOps, observability, and software support.',
  url: 'https://portfolio.khong.dev',
  email: 'krishna@khong.dev',
  github: 'https://github.com/cashewna',
  githubLabel: 'github.com/cashewna',
  resume: '/static/resume.pdf',
  ogImage: '/static/og-image.png',
  location: 'Sydney, Australia',
  updated: '14 November 2026',
};

export const hero = {
  eyebrow: 'Sydney, Australia · UNSW Computer Science',
  headlineLines: ['A true master', 'is an eternal', 'student.'],
  intro:
    'Computer Science student at UNSW building tested systems in TypeScript, Rust, Java, and SQL, backed by self-hosted Kubernetes (k3s) infrastructure, software support, and five years of customer operations.',
  facts: [
    { label: 'Degree', value: 'BSc Computer Science, UNSW' },
    { label: 'Graduation', value: '2023–2026' },
    { label: 'Core stack', value: 'TypeScript, Rust, Java, C/C++, SQL' },
    { label: 'Infra', value: 'k3s, Argo CD, OpenTofu, VictoriaMetrics' },
    { label: 'Target', value: 'Graduate software & systems roles' },
  ],
};

export const about = [
  'I build small, complete systems with explicit state, real databases, and automated tests: a TypeScript and PostgreSQL service desk with an append-only audit trail, a Spring Boot Java study console, an offline LLM evaluation harness, and a Rust ARP asset register.',
  'I also run the platform these demos live on: an Always Free Oracle Cloud ARM node provisioned with OpenTofu on NixOS, running single-node k3s reconciled by Argo CD, VictoriaMetrics and Grafana observability, OpenBao secrets, CrowdSec, Headscale/Tailscale mesh access, and a Stalwart mail stack with AWS SES fallback.',
  'At UNSW I have worked across C, C++, Python, Java, TypeScript and Rust, writing unit, integration, and end-to-end test suites in GitHub Actions CI. Outside coursework, software support and five years on the retail floor trained me to reproduce failures methodically and explain technical trade-offs without jargon.',
];

export const experience = [
  {
    role: 'Sales Associate',
    company: 'Shahi Investments Pty Ltd',
    place: 'Perth, Australia',
    period: '2020–2025',
    points: [
      'Helped customers choose products by identifying their needs and explaining relevant trade-offs clearly.',
      'Processed sales and transactions accurately while keeping service friendly and efficient.',
      'Handled enquiries, complaints, returns and product issues with patience and end-to-end follow-through.',
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
      'Reproduced and diagnosed client-reported software and environment defects across Windows, macOS, and Linux, isolating application bugs from OS and hardware configuration faults.',
      'Collaborated with developers to trace root causes, validate practical fixes, and document clear resolution steps for non-technical clients.',
      'Built broad familiarity with computer hardware, software, and operating systems through hands-on troubleshooting and issue triage.',
    ],
  },
  {
    role: 'Service Crew',
    company: 'Each-A-Cup',
    place: 'Singapore',
    period: '2011–2013',
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
  period: '2023–2026',
};

export const projects = [
  {
    name: 'Relay Desk',
    repo: 'ticket-queue',
    kicker: 'Service-desk application',
    description:
      'An IT service-desk ticketing app built with strict TypeScript on Node, PostgreSQL with SQL migrations, role-based access, an append-only audit trail, and an SLA clock computed from a documented policy.',
    detail:
      'Server-rendered HTML that works without JavaScript, an explicit 5-state workflow, and tests covering every transition and database trigger.',
    metrics: ['30 automated tests', 'PostgreSQL + CI', '30m reset demo'],
    stack: ['TypeScript', 'Node', 'PostgreSQL', 'Fastify', 'Docker'],
    screenshot: {
      src: '/static/images/relay-desk.webp',
      width: 960,
      height: 600,
      alt: 'Relay Desk queue view showing open, unassigned, and breached ticket counters, filter controls, and SLA status badges',
    },
    preview: {
      title: 'State machine & CI',
      lines: [
        'NEW -> ASSIGNED -> IN_PROGRESS -> RESOLVED -> CLOSED',
        '30 tests on PostgreSQL + Docker Compose acceptance check in CI',
      ],
    },
    demo: {
      href: 'https://demo.ticket-queue.khong.dev',
      accounts: [
        { role: 'Requester', email: 'requester@example.com' },
        { role: 'Agent', email: 'agent@example.com' },
      ],
      password: 'demo-pass-123',
      note: 'Public demo: the queue is shared, anyone can change it, and it resets every 30 minutes via a k3s CronJob. Do not enter personal information.',
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
      'The statement, hint ladder, CodeMirror editor, timer and outcome stay on one page; the judge returns the first failing case with its input, expected value and actual value.',
    metrics: ['96 Vitest tests', '33 JUnit 5 tests', 'Java 21 judge'],
    stack: ['React 19', 'Vite', 'Spring Boot', 'Java 21'],
    screenshot: {
      src: '/static/images/epi-trainer.webp',
      width: 960,
      height: 600,
      alt: 'EPI Trainer workspace showing the problem statement, hint ladder, 45-minute countdown timer, and Java 21 CodeMirror editor',
    },
    preview: {
      title: 'Judge workspace & verification',
      lines: [
        'Statement · Hint ladder · Vim/Java editor · Spaced review',
        '96 Vitest + 33 JUnit 5 tests · returns first failing input/actual',
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
      'An evaluation harness for IT ticket classification and reply drafting. It scores output against a committed, hand-labelled golden set of 52 tickets across 6 classes and lets you read every failure individually.',
    detail:
      'A deterministic rules baseline runs offline with no API key and zero dependencies; a provider interface leaves room for a live model without changing the scoring path.',
    metrics: ['60 unit tests', '52 golden tickets', '0 dependencies'],
    stack: ['TypeScript', 'Zero dependencies', 'CI fixtures'],
    preview: {
      title: 'Offline golden-set CLI output',
      lines: [
        '$ node src/cli.js eval --fixtures',
        'MODE: fixtures (offline replay, rules-baseline, network: no)',
        'Tickets 52 | matched 52 | multi-label 3 | invalid 0',
        'Primary accuracy 0.558 · micro F1 0.561 · macro F1 0.548',
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
      'An asset register for a single local network segment. It discovers hosts with ARP, checks configured TCP ports, stores them in SQLite, and tracks what equipment is on the network and when it was last seen.',
    detail:
      'The scanner refuses any network outside its configured allow-list with exit code 2 before sending a packet, and ships with an isolated multi-container Docker Compose ARP lab proof.',
    metrics: ['5 integration tests', 'Compose ARP lab', 'Allow-list enforced'],
    stack: ['Rust', 'SQLite', 'Docker Compose', 'CLI'],
    preview: {
      title: 'Allow-list & scan CLI output',
      lines: [
        '$ netregister --config netregister.toml scan --network 192.168.1.0/24',
        'scan network=192.168.1.0/24 discovered=27 inserted=4 updated=23 unchanged=0',
        '$ netregister --config config/example.toml scan --network 10.99.0.0/24',
        'refusing to scan: target network 10.99.0.0/24 is not within allowed_networks',
      ],
    },
    links: [
      { label: 'GitHub', href: 'https://github.com/cashewna/netregister' },
    ],
  },
];

export const infrastructure = {
  intro:
    'This site and all live demos run on a single Oracle Cloud Always Free ARM server (NixOS, provisioned declaratively with OpenTofu), backed by GitOps reconciliation, host SecOps, observability, and a prior Proxmox homelab.',
  diagram: {
    lightSrc: '/static/images/infra-light.svg',
    darkSrc: '/static/images/infra-dark.svg',
    alt: 'Architecture diagram showing Cloudflare DNS and CrowdSec filtering incoming traffic into Traefik ingress on an Oracle Cloud NixOS k3s cluster managed by Argo CD and OpenBao, serving portfolio.khong.dev, Relay Desk, EPI Trainer, and Bulwark webmail alongside VictoriaMetrics and Grafana observability, Stalwart mail with AWS SES fallback, Headscale/Tailscale mesh administration, and a prior Proxmox VE homelab running Caddy, Gitea, Plex, and media services.',
    caption: 'Sanitized production & homelab topology generated from diagrams/infra.d2 with d2 --sketch.',
  },
  cards: [
    {
      label: 'Cluster & GitOps',
      title: 'k3s · Argo CD · OpenTofu · OpenBao',
      description:
        'OpenTofu enforces Always Free OCI tenancy quotas and budget guardrails. Argo CD reconciles Traefik ingress, cert-manager DNS-01 TLS certificates, and External Secrets synced from OpenBao.',
    },
    {
      label: 'Observability & alerting',
      title: 'VictoriaMetrics · Grafana · Blackbox',
      description:
        'vmagent, vmalert, Alertmanager, node-exporter, kube-state-metrics, and blackbox-exporter probe public HTTPS endpoints, mail ports, OpenBao seal state, and certificate expiry.',
    },
    {
      label: 'Mail & cloud fallback',
      title: 'Stalwart · Bulwark · AWS SES',
      description:
        'Self-hosted Stalwart mail server and Bulwark JMAP webmail on Oracle Cloud, paired with an OpenTofu-managed AWS SES (ap-southeast-2) IAM/SMTP relay for resilient outbound delivery.',
    },
    {
      label: 'SecOps & prior homelab',
      title: 'CrowdSec · Headscale · Proxmox VE',
      description:
        'CrowdSec firewall bouncer and self-hosted Headscale/Tailscale control plane protect the live host; built on prior Proxmox VE homelab VMs running Caddy, Gitea, Plex, and automated media services.',
    },
  ],
  links: [
    { label: 'GitOps manifests (bee-gitops)', href: 'https://github.com/cashewna/bee-gitops' },
    { label: 'OpenTofu infra (Infrastructure)', href: 'https://github.com/cashewna/Infrastructure' },
  ],
};

export const skills = [
  {
    label: 'Languages',
    items: ['TypeScript / JavaScript', 'Rust', 'C / C++', 'Java', 'Python', 'SQL'],
    note: 'UNSW coursework and self-directed systems projects',
  },
  {
    label: 'Testing & CI',
    items: [
      'Unit, integration & E2E testing',
      'GitHub Actions CI',
      'Vitest & JUnit 5',
      'node --test & cargo test',
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
      'Linux (NixOS) / macOS / Windows',
    ],
  },
  {
    label: 'Infra, SecOps & observability',
    items: [
      'Kubernetes (k3s) & Argo CD',
      'OpenTofu / Terraform',
      'Oracle Cloud & AWS SES',
      'VictoriaMetrics & Grafana',
      'Traefik · Caddy · OpenBao',
      'CrowdSec · Tailscale / Headscale',
      'Stalwart · Proxmox VE · Gitea',
    ],
  },
  {
    label: 'Support & operations',
    items: [
      'Hardware & OS troubleshooting',
      'Root-cause reproduction',
      'Client communication',
      'Staff training',
      'High-volume retail operations',
    ],
  },
];
