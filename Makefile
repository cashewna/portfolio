.PHONY: all assets resume resume-private diagrams og check dev build

all: assets build

assets: resume diagrams og

resume:
	typst compile resume/resume.typ static/resume.pdf
	chmod 644 static/resume.pdf

# Optional local copy including phone number (never commit or publish to static/)
resume-private:
	@test -n "$(PHONE)" || (echo "Usage: make resume-private PHONE='0403 358 628'" && exit 1)
	typst compile --input phone="$(PHONE)" resume/resume.typ resume/resume-private.pdf

diagrams:
	d2 --sketch --layout elk --theme 0 diagrams/infra-light.d2 static/images/infra-light.svg
	d2 --sketch --layout elk --theme 200 diagrams/infra-dark.d2 static/images/infra-dark.svg
	chmod 644 static/images/infra-light.svg static/images/infra-dark.svg

og:
	typst compile --ppi 72 -f png design/og-image.typ static/og-image.png
	chmod 644 static/og-image.png

build:
	npm run build

check:
	npm run check

dev:
	npm run dev
