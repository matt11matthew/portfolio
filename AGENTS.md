# Portfolio project guidance

@C:\Users\matt1\.codex\RTK.md

## Scope and production ownership

- This repository is the source workspace for Matthew's public portfolio. Its intended production hostname is `matthewe.me`.
- Deployment control lives in `C:\Users\matt1\Documents\GitHub\matthewe-deployment` (`matt11matthew/deployment`), not in the UniversalAPI application repository and not in ad-hoc files on the VPS.
- `C:\Users\matt1\Documents\GitHub\UniversalAPI` is the theme-park/QueuePulse application repository. It is useful as a proven deployment reference, but portfolio work must not modify or redeploy UniversalAPI unless the user explicitly puts it in scope.
- The VPS-side deployment checkout is `/opt/matthewe-deployment`; deployment secrets live under `/opt/matthewe-secrets` and must never be read into chat, logged, or committed.
- At this project's initial setup, `matthewe-deployment` had no `portfolio` module. Reinspect the deployment repository before every deployment and do not claim the portfolio is wired to production until that module and route actually exist.

## Start-of-task checks

- Read this file, inspect `git status`, and identify the actual framework and package/build files before choosing commands. Do not invent a stack or copy UniversalAPI's build commands into this project.
- Preserve user work and unrelated changes. Do not discard, overwrite, reformat, commit, or push changes outside the requested scope.
- Inspect the deployment repository when work affects hosting, domains, images, CI, health checks, environment variables, or production behavior.
- Treat deployment state, container IDs, image digests, GitHub Actions runs, DNS, certificates, and public responses as live data that must be freshly verified.

## RTK enforcement

- In Codex/AI sessions, prefix every shell command with `rtk`, including Git, search, inspection, build, test, Docker, GitHub CLI, SSH, and network commands.
- Prefer `rtk git status`, `rtk git diff`, `rtk git log`, `rtk rg`, `rtk find`, and `rtk read` for compact orientation.
- Use `rtk proxy <command>` only when correctness requires unfiltered or exact output, such as JSON, hashes, headers, machine parsing, or a narrowly scoped PowerShell command.
- Inspect the complete raw final diff before committing. If RTK saves full failed output, inspect that saved output instead of rerunning a noisy command.
- MCP and connector calls are not shell commands and are not wrapped with RTK. Extract only the evidence needed; do not dump secrets or broad logs into chat.
- Before handoff, verify that shell usage followed the RTK rule and disclose any exception.

## CodeGraphContext

- For cross-file structural questions, use CodeGraphContext first to inspect symbols, callers, callees, dependencies, inheritance, and likely change impact.
- Use graph results for orientation only. Read the exact implementation and tests before editing or making behavior claims.
- Use exact repository search for literals, configuration keys, routes, CSS classes, generated files, deployment manifests, and other non-code assets.
- Keep graph queries narrow. If the repository is not indexed, is still empty, or a symbol is missing, fall back to `rtk rg` and normal file inspection without blocking the task.
- After changing indexed source, refresh/reindex the affected paths before relying on later graph-based impact results.
- CodeGraph is not deployment proof; pair it with source, CI, SSH/runtime, HTTP, and rendered-browser evidence as appropriate.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Development and verification

- Prefer the repository's checked-in package manager, lockfile, scripts, and tool versions. Do not introduce a second package manager or replace the lockfile casually.
- Run the narrowest relevant lint, typecheck, test, or build first, then the repository's required full verification when the change warrants it.
- For user-visible work, verify the rendered result at representative desktop and mobile widths. Check navigation, keyboard access, focus, contrast, loading/error states, console errors, and failed network requests when relevant.
- A successful build or HTTP 200 is not sufficient for a production UI change. Verify the actual public page and the specific visible behavior the user requested.

## Deployment architecture

- Application CI should build and publish an immutable image plus the moving `prod` tag to GHCR. The deployment repository owns Compose, Caddy routing, health checks, registry configuration, Watchtower scope, and VPS reconciliation.
- Normal source delivery must not manually edit the VPS. Deployment configuration changes belong in `C:\Users\matt1\Documents\GitHub\matthewe-deployment` and should flow through its validation and GitHub Actions workflow.
- Every deployment must be scoped to the portfolio module. Never use `docker compose down`, never tear down the whole platform, and never restart unrelated modules to deploy this site.
- Generated modules normally live at `modules/<name>/module.json`, start with `enabled: false`, and are enabled only after the image and any required secret file exist.
- At initial setup, apex `matthewe.me` resolved to the VPS and `www.matthewe.me` was an alias of the apex; plain HTTP already reached Caddy. Reverify this live before deployment, but do not treat DNS as the missing application route.
- The deployment schema inspected at initial setup accepts hostnames below the apex, such as `portfolio.matthewe.me`, but not bare `matthewe.me`. The portfolio's apex route therefore requires an intentional, reviewed deployment-repository change (for example, extending the schema/generator or using an appropriate hand-written module). Do not bypass validation or patch Caddy directly on the VPS.
- Decide and verify the canonical relationship between `matthewe.me` and `www.matthewe.me`; preserve paths and query strings in any redirect.
- Never commit credentials, `.env` contents, registry tokens, SSH keys, or values from `/opt/matthewe-secrets`.

## SSH and production safety

- Use the allowlisted `matthewe.me` SSH integration from the deployment repository for routine VPS status, module status, bounded logs, container inventory, and Caddy validation. Use direct SSH only when the allowlisted operation is insufficient and the action is within scope.
- Direct access is key-only as `ubuntu` to the VPS defined by the deployment configuration. Never place passwords or private-key contents in commands, files, commits, or chat.
- Before any production mutation, capture a read-only baseline: VPS health, affected module status, relevant bounded logs, current image/container identity, Caddy health, and unrelated service health.
- Prefer repository-driven deployment. Do not invoke an ad-hoc remote reconciliation, `deploy_module`, Compose mutation, or manual Caddy change unless the user explicitly requests a recovery action and the checked-out deployment configuration matches the intended state.
- Keep logs narrowly bounded and redact tokens, cookies, authorization headers, user data, and environment values.

## Production proof and handoff

- Prove the complete path when deploying: source change -> focused/local verification -> application CI and published image -> deployment-repository configuration/workflow -> SSH runtime health -> public HTTP/TLS -> rendered `matthewe.me` behavior.
- Confirm the expected image or digest is running, the portfolio container is healthy, Caddy has the intended route, bounded logs show no new errors, and unrelated services remain healthy.
- Verify both `matthewe.me` and `www.matthewe.me` according to the chosen canonical-domain policy, including HTTPS, redirects, deep paths, and query-string preservation.
- Report exactly what was changed, what was deployed, the commits/workflow runs or image digest used, the runtime and rendered checks performed, and any remaining limitation. Do not describe production as fixed or deployed when only local or CI evidence exists.

## Git and external-change boundaries

- Do not commit, push, create deployment-repository changes, trigger workflows, or mutate production unless the user's request authorizes that step.
- When deployment is authorized, use small, reviewable commits and keep application-source changes separate from deployment-control changes.
- Never rewrite shared history, force-push, or use destructive cleanup commands without explicit authorization.
