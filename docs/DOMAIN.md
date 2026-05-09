---
version: 0.1.0
last_updated: 2026-05-09
owner: domain-owner
affects:
  - src/state-machine.ts
  - tests/state-machine.test.ts
---

# DOMAIN.md

## Terms

| Term | Definition |
|---|---|
| Request | A business action submitted for approval |
| Requester | Slack user who submits a request |
| Approver | Slack user allowed to approve or reject |
| Substitute Approver | User allowed to act when the primary approver is unavailable |
| Audit Event | Immutable record of a state transition |

## State Machine

```mermaid
stateDiagram-v2
  [*] --> draft
  draft --> pending: submit
  pending --> approved: approve
  pending --> rejected: reject
  approved --> archived: archive
  rejected --> archived: archive
```

## Events

- `submit`: requester submits a draft
- `approve`: approver accepts a pending request
- `reject`: approver rejects a pending request with a reason
- `archive`: system archives a completed request

