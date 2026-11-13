# ADR-0001 — Aesthetic lock: Refined Editorial (draft A)

Status: accepted
Date: 2026-11-13
Tokens: tokens/locked.json (sha256:8f8a0b25fffef66f)

## Stance
editorial, warm, technical, quiet, measured

## Deliberately not
playful, SaaS-template, retail-first

## Axes
- displayType: serif
- bodyType: grotesque
- baseUnit: 8
- density: spacious
- radius: 14
- chroma: 0.25
- accentHue: 15
- borderWeight: hairline
- motionMs: 160
- scheme: light

## Rejected
- B: dark-first console loses personal editorial warmth
- C: 0px sharp monospace grid feels too austere

## Why
Refined Editorial keeps the distinctive warm paper + serif identity while elevating engineering proof frames and 2x2 grid balance

## Costs accepted
- warm paper + serif reads more editorial than hardcore systems-engineering
- spacious padding reduces above-the-fold project density on 1280px screens
- requires careful visual framing so project previews feel integrated rather than pasted on

## Consequences
Every later screen, component and code change references token names from
`tokens/locked.json`, never literals. `check-code` fails the build on drift.
Changing this decision requires ADR-0002.
