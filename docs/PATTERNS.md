---
version: 0.1.0
last_updated: 2026-05-09
owner: tech-lead
affects:
  - src/**
  - tests/**
---

# PATTERNS.md

## Idempotent Slack Event Handling

Use the Slack event ID as an idempotency key. Store it before applying a state transition. If the same event ID arrives again, return the existing result.

Use when:

- Handling slash commands
- Handling interactive button actions

Do not use when:

- Running manual repair scripts

## Retry Policy

Use exponential backoff for Slack API writes:

- 1st retry: 1 second
- 2nd retry: 3 seconds
- 3rd retry: 9 seconds
- After 3 retries: record a notification failure audit event

## Error Classes

- Domain errors: invalid transition, unauthorized approver, missing reason
- Technical errors: Slack API timeout, database lock, secret misconfiguration

