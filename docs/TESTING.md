---
version: 0.1.0
last_updated: 2026-05-09
owner: qa-lead
affects:
  - tests/**
---

# TESTING.md

## Test Layers

| Layer | Purpose |
|---|---|
| Unit | State transitions and pure domain rules |
| Integration | Handler, store, and notifier collaboration |
| E2E | Slack payload to persisted result in a test workspace |

## Acceptance Criteria Format

Write acceptance criteria in Given-When-Then form.

```text
Given a draft request
When the requester submits it
Then the request becomes pending
And an audit event is recorded
```

## State Machine Coverage

Every legal transition in `DOMAIN.md` must have a positive test. Important illegal transitions must have negative tests.

## Slack API Mocking

Mock Slack API writes at the adapter boundary. Domain tests must not import Slack SDK types.

