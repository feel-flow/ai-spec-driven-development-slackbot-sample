---
version: 0.1.0
last_updated: 2026-05-09
owner: product-owner
affects:
  - src/**
  - docs/DOMAIN.md
---

# PROJECT.md

## Purpose

Build a Slack bot that lets teams submit, approve, reject, and audit lightweight business requests without leaving Slack.

## In Scope

- `/apply` command for request creation
- Single-step approval
- Multi-step approval for high-risk requests
- Result notification to requester
- Audit log records for every state transition

## Out of Scope

- AI-generated approval summaries
- Payroll or legal approval automation
- Cross-workspace federation

## Stakeholders

- Requester: submits a request and receives the result
- Approver: approves or rejects a request
- Auditor: checks the history after the fact
- Operator: manages secrets and deployment

## Success Conditions

- 95% of requests receive an approval or rejection within one business day
- Duplicate Slack events do not create duplicate requests
- Operators can roll back within 10 minutes

