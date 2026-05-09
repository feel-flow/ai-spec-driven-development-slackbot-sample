---
version: 0.1.0
last_updated: 2026-05-09
owner: platform-team
affects:
  - docs/*
---

# MASTER.md

This file is the index for the core seven documents.

## Core Documents

| Document | Role | Must update when |
|---|---|---|
| PROJECT.md | Purpose, scope, stakeholders | Goal or scope changes |
| ARCHITECTURE.md | Components and boundaries | Technical structure changes |
| DOMAIN.md | Terms, states, business rules | Workflow or rule changes |
| PATTERNS.md | Reusable implementation patterns | Repeated review comments appear |
| TESTING.md | Acceptance criteria and test policy | Test strategy changes |
| DEPLOYMENT.md | Runtime, secrets, operations | Environment or release path changes |

## Update Rule

Any PR that changes a core document must mention whether `MASTER.md` also needs an index or version update.

