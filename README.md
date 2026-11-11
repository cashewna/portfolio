# Krishna Khong — portfolio and Discord bot legal pages

A small, dependency-free static site for Krishna Khong, plus the public Terms of
Service and Privacy Policy for the Discord bot.

Live URLs (after deployment):

- <https://portfolio.khong.dev> — portfolio
- <https://portfolio.khong.dev/discord/tos> — Discord bot Terms of Service
- <https://portfolio.khong.dev/discord/privacy> — Discord bot Privacy Policy
- <https://apps.khong.dev> — Relay Desk (ticket-queue) live demo

## Stack

Hand-written HTML, CSS and a zero-dependency Node build script. No framework, no
runtime dependencies, no external fonts, no analytics, no cookies. The build
emits static files into `dist/`; nginx serves them from the container.

## Develop

Requires Node 22 or newer.

```bash
npm run dev     # build, then serve http://127.0.0.1:4321
npm run build   # write dist/
npm run check   # build, then assert pages, links, content and no private phone number
```

`npm run check` is the acceptance check. It verifies that every page exists, every
internal link resolves, the contact email and project links are present, the
Discord disclaimer and policy sections are present, and the private phone number
from the CV does not appear anywhere in the output.

## Edit content

- `src/data.mjs` — name, summary, experience, education, projects, skills.
- `src/legal.mjs` — Discord bot Terms of Service and Privacy Policy.
- `src/render.mjs` — page layout and section markup.
- `static/styles.css` — responsive light/dark styles.

The content is derived from `~/Projects/career-ops/cv.md`. Do not add roles,
dates, metrics or links that the CV or a public repository does not support. The
CV phone number is deliberately excluded; use `krishna@khong.dev` and
<https://github.com/cashewna> as contact.

## Build the container

```bash
docker build -t portfolio:local .
docker run --rm -p 8080:8080 portfolio:local
```

The image is a multi-stage build: Node 24 builds `dist/`, then nginx 1.29 serves
it on port 8080 with a strict Content-Security-Policy, gzip and a `/healthz`
endpoint. It is architecture-neutral; build it on the target architecture (bee
is aarch64).

## Deploy on bee (Argo CD)

The GitOps repository is <https://github.com/cashewna/bee-gitops>. The portfolio
application manifests live in `apps/portfolio/` there.

```bash
# On bee, as a user that can run podman and k3s ctr:
git clone https://github.com/cashewna/portfolio.git /srv/build/portfolio
cd /srv/build/portfolio
sudo nix shell nixpkgs#podman --command podman build \
  -t docker.io/cashewna/portfolio:2026-11-12 .
sudo podman save docker.io/cashewna/portfolio:2026-11-12 \
  | sudo k3s ctr -n k8s.io images import -

sudo k3s kubectl -n portfolio rollout restart deploy/portfolio
sudo k3s kubectl -n portfolio rollout status deploy/portfolio
```

Argo CD reconciles `apps/portfolio` from the public GitOps repository. The
Ingress is `portfolio.khong.dev`; cert-manager issues the certificate with the
Let's Encrypt DNS-01 ClusterIssuer. DNS lives in Cloudflare as a DNS-only A
record for `portfolio` pointing at `137.23.18.86`.

To publish an update, bump the image tag in the GitOps manifests, build and
import the new tag on bee, then push the GitOps change. Argo CD syncs it.

## Discord bot setup

The setup guide, including the URLs to paste into the Discord Developer Portal,
is in [`docs/discord-bot.md`](docs/discord-bot.md). The policy pages must stay
accurate: if the bot starts processing new data, update `src/legal.mjs` and
redeploy before enabling the feature.

## Privacy

The built site contains no phone number, analytics, third-party scripts or
cookies. The only contact details published are `krishna@khong.dev` and the
GitHub profile.
