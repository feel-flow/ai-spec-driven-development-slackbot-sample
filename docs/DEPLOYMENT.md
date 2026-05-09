---
version: 0.1.0
last_updated: 2026-05-09
owner: sre
affects:
  - .env.example
  - scripts/**
---

# DEPLOYMENT.md

## Environments

| Environment | Purpose |
|---|---|
| local | Development and unit tests |
| staging | Slack sandbox workspace validation |
| production | Real workspace operation |

## Secrets

- `SLACK_SIGNING_SECRET`
- `SLACK_BOT_TOKEN`
- `DATABASE_URL`

Never commit real secrets. Use `.env.example` for names only.

## Slack App Settings

- Enable slash command `/apply`
- Enable interactivity for approve/reject buttons
- Add bot scopes: `commands`, `chat:write`, `users:read`

## Monitoring

- Health check endpoint must return 200 when DB is reachable
- Notification failure audit events must be counted
- Rollback target is the previous deployment image

