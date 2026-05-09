# ACE Playbook

## ACE-001: Slack Signature Verification Must Stay at the Adapter Boundary

- helpful: 0
- harmful: 0

### Context

Slack request verification uses raw request bodies and signing secrets. If domain code imports this concern, tests become brittle and secrets leak into unrelated layers.

### Rule

Keep Slack signature verification inside the HTTP or Bolt adapter. Domain code receives trusted commands only.

### Applies To

- `src/**`
- `docs/ARCHITECTURE.md`
- `docs/PATTERNS.md`

