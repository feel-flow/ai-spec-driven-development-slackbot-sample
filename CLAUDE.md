# CLAUDE.md

Before implementation, read `docs/MASTER.md` and the referenced document sections for the issue type.

Default workflow:

1. Inspect the issue and required references.
2. Create a branch from `develop`.
3. Implement the smallest change that satisfies acceptance criteria.
4. Run `npm test` and `npm run build`.
5. Open a PR with the referenced docs and verification result.
6. After merge, run the ACE cycle and update `docs/playbooks/ace-playbook.md` when a reusable lesson exists.

