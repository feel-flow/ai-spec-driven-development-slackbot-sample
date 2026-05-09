# AI Spec Driven Slack Approval Bot

Zenn book sample repository for "AI仕様駆動開発ハンズオン".

This repository demonstrates how to drive a Slack approval bot implementation from the core seven documents:

- `docs/MASTER.md`
- `docs/PROJECT.md`
- `docs/ARCHITECTURE.md`
- `docs/DOMAIN.md`
- `docs/PATTERNS.md`
- `docs/TESTING.md`
- `docs/DEPLOYMENT.md`

## Quick Start

```bash
npm install
npm test
```

## Sample Scenario

The bot handles request approval workflows in Slack:

1. A requester submits `/apply`.
2. The bot records the request as `pending`.
3. One or more approvers approve or reject it.
4. The bot sends a result notification and writes an audit event.

## Book Mapping

Each major commit in this repository corresponds to a chapter in the Zenn book.

