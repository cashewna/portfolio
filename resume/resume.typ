#let phone = sys.inputs.at("phone", default: none)

#set document(
  title: "Krishna Khong — Resume",
  author: "Krishna Khong",
)

#set page(
  paper: "a4",
  margin: (x: 14mm, y: 13.5mm),
)

#let ink = rgb("#14161a")
#let muted = rgb("#4a4e57")
#let accent = rgb("#a63a1c")
#let rule-color = rgb("#d8d3c8")

#set text(
  font: "Liberation Sans",
  size: 8.8pt,
  fill: ink,
  lang: "en",
)

#set par(leading: 0.48em, spacing: 0.42em)

#let section(title) = {
  v(4.5pt)
  block(
    width: 100%,
    below: 3.5pt,
    stroke: (bottom: 0.7pt + rule-color),
    inset: (bottom: 2pt),
    text(
      size: 8.6pt,
      weight: "bold",
      tracking: 0.08em,
      fill: accent,
      upper(title),
    ),
  )
}

#let entry-head(title, right-meta, subtitle: none) = {
  grid(
    columns: (1fr, auto),
    column-gutter: 8pt,
    [
      #text(weight: "bold", size: 9.2pt)[#title]
      #if subtitle != none [
        #text(fill: muted, size: 8.5pt)[ · #subtitle]
      ]
    ],
    align(right, text(fill: muted, size: 8.3pt)[#right-meta]),
  )
}

#let bullets(items) = {
  set list(
    indent: 2pt,
    body-indent: 5pt,
    spacing: 2.2pt,
    marker: text(fill: accent)[•],
  )
  for item in items {
    [- #item]
  }
}

// Header
#align(center)[
  #text(font: "Libertinus Serif", size: 19pt, weight: "bold")[Krishna Khong]
  #v(-2pt)
  #let contact-parts = (
    [Sydney, Australia (Australian Citizen)],
    link("mailto:krishna@khong.dev")[krishna\@khong.dev],
    link("https://portfolio.khong.dev")[portfolio.khong.dev],
    link("https://github.com/cashewna")[github.com/cashewna],
  )
  #if phone != none {
    contact-parts = (phone, ..contact-parts)
  }
  #text(size: 8.5pt, fill: muted)[#contact-parts.join("  ·  ")]
]

#v(2pt)
#text(size: 8.7pt, fill: ink)[
  Final-year UNSW Computer Science student (2023–2026) building tested backend and systems software in TypeScript, Rust, Java, and SQL, alongside self-hosted Kubernetes (`k3s`), GitOps, observability, and Linux operations. Backed by software support experience and five years of customer operations.
]

#section("Education")
#entry-head(
  "University of New South Wales (UNSW)",
  "2023 – 2026 · Sydney, Australia",
  subtitle: "Bachelor of Computer Science",
)
#v(1pt)
#text(size: 8.4pt, fill: muted)[
  Coursework & engineering focus: C, C++, Python, Java, TypeScript, and Rust; unit, integration, and end-to-end testing in GitHub Actions CI.
]

#section("Selected Projects")

#entry-head(
  link("https://github.com/cashewna/ticket-queue")[Relay Desk (`ticket-queue`)],
  "TypeScript · Node · Fastify · PostgreSQL",
  subtitle: link("https://demo.ticket-queue.khong.dev")[demo.ticket-queue.khong.dev],
)
#bullets((
  [Built a server-rendered IT service-desk application with strict TypeScript, PostgreSQL SQL migrations, role-based access control, priority-computed SLA clocks, and an append-only audit log enforced at the database level.],
  [Modelled an explicit 5-state workflow (`new -> assigned -> in_progress -> resolved -> closed`) verified by 30 unit/integration tests against PostgreSQL and a Docker Compose HTTP acceptance suite in CI; hosted as an auto-resetting Kubernetes demo.],
))

#v(2.5pt)
#entry-head(
  "EPI Trainer",
  "React 19 · TypeScript · Spring Boot · Java 21",
  subtitle: link("https://epi-trainer.khong.dev")[epi-trainer.khong.dev],
)
#bullets((
  [Built a study console and spaced-review scheduler backed by a Spring Boot judge that compiles and runs Java solutions against EPIJudge TSV test suites, returning the first failing input, expected, and actual values.],
  [Verified across 96 Vitest frontend/domain tests, 33 JUnit 5 backend tests, Python data-pipeline tests, and an automated browser smoke test.],
))

#v(2.5pt)
#entry-head(
  link("https://github.com/cashewna/netregister")[netregister],
  "Rust · SQLite · Docker Compose",
)
#bullets((
  [Implemented an ARP and TCP port local network asset register in Rust with SQLite migrations and idempotent MAC-keyed upserts preserving `first_seen` history.],
  [Enforced target-network allow-listing before sending packets (exit code `2` on violation); verified by 5 rootless integration tests and an isolated multi-container Docker Compose ARP lab proof.],
))

#v(2.5pt)
#entry-head(
  link("https://github.com/cashewna/ai-eval-checker")[ai-eval-checker],
  "TypeScript · Node.js (Zero Dependencies)",
)
#bullets((
  [Built an offline evaluation harness scoring IT ticket classification and reply drafting against a 52-ticket hand-labelled golden set across 6 classes, generating per-class precision/recall/F1, confusion matrices, and failure diagnostics.],
  [Verified by 60 automated unit tests and a zero-network CI reproducibility check (`env -u`).],
))

#section("Self-Hosted Infrastructure & SecOps")
#entry-head(
  link("https://github.com/cashewna/bee-gitops")[Oracle Cloud k3s Platform & GitOps (`bee-gitops` / `Infrastructure`)],
  "NixOS · OpenTofu · Argo CD",
)
#bullets((
  [Provisioned an OCI Always Free Arm server (`2 OCPU / 12 GB`) with OpenTofu tenancy quota and budget guardrails; deployed single-node `k3s` reconciled via Argo CD, Traefik ingress, `cert-manager` (DNS-01 TLS), and OpenBao + External Secrets Operator.],
  [Built observability with VictoriaMetrics (`vmagent`, `vmalert`, Alertmanager), Grafana, blackbox, node, and kube-state exporters; operated Stalwart Mail + Bulwark JMAP webmail with OpenTofu-provisioned AWS SES (`ap-southeast-2`) outbound fallback, CrowdSec firewall bouncer, and Headscale/Tailscale mesh VPN.],
  [Previously operated a Proxmox VE homelab running VMs and containers with Caddy reverse proxy/TLS, self-hosted Gitea, Plex, and automated media services.],
))

#section("Experience")
#entry-head("Junior Software Developer", "2023 · Perth, Australia", subtitle: "TFS Timeframe Systems")
#bullets((
  [Reproduced and diagnosed client-reported software and environment defects across Windows, macOS, and Linux, isolating application bugs from OS and hardware configuration issues.],
  [Collaborated with developers to trace root causes, validate practical fixes, and document clear resolution steps for non-technical clients.],
))

#v(2pt)
#entry-head("Sales Associate", "2020 – 2025 · Perth, Australia", subtitle: "Shahi Investments Pty Ltd")
#bullets((
  [Scoped customer needs, resolved enquiries and escalations end-to-end, supported inventory operations, and trained new staff on store procedures.],
))

#v(2pt)
#entry-head("Service Crew", "2011 – 2013 · Singapore", subtitle: "Each-A-Cup")
#bullets((
  [Processed high-volume customer orders and payments accurately while maintaining stock and store operations during peak trading periods.],
))

#section("Technical Skills")
#text(size: 8.4pt)[
  *Languages:* TypeScript / JavaScript, Rust, Java, C / C++, Python, SQL \
  *Systems & Web:* Node.js, Fastify, Spring Boot, React, PostgreSQL, SQLite, Linux (NixOS), Windows, macOS \
  *Infra, SecOps & Observability:* Kubernetes (`k3s`), Argo CD, OpenTofu / Terraform, Docker, Proxmox VE, Traefik, Caddy, OpenBao, CrowdSec, Tailscale / Headscale, Stalwart, AWS SES, Gitea, VictoriaMetrics, Grafana, Alertmanager, Blackbox Exporter \
  *Testing & CI:* GitHub Actions CI, Vitest, JUnit 5, `node --test`, `cargo test`, deterministic fixtures
]
