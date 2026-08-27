# matthewe.me — Product and Design Plan

Status: design discovery started 2026-08-26

## North star

Build a portfolio that feels like a working system, not a résumé template. It should establish Matthew as the engineer who can own the entire lifecycle:

> I build, ship, and keep complex systems alive.

Supporting position:

> Full-stack engineer, platform operator, and plugin developer working across product UI, backend systems, automation, infrastructure, incident response, and client support.

Primary visitor outcomes:

1. A technical lead can understand Matthew's depth in under 30 seconds.
2. A client can find a relevant capability and credible shipped example in under 60 seconds.
3. A recruiter can distinguish hands-on production ownership from a list of technologies.
4. Every major claim can be supported by a public repository, live product, approved metric, screenshot, architecture artifact, or clearly labeled private-work summary.

## Verified discovery snapshot

Source account: `matt11matthew` — the supplied `mat11matthew` URL is not a GitHub account.

- 94 public repositories.
- 2,032 GitHub contributions in the trailing contribution year at discovery time.
- 19 organization memberships visible to the authenticated GitHub account.
- Public profile states 10+ years of experience, 900+ plugin commissions, and $80,000+ generated through AtherialLib-backed freelance work.
- Recent public work spans Java, TypeScript, Shell, Android/Kotlin, C, JavaScript, Docker, and web technologies.
- Strong current portfolio candidates include Activities Manager, QueuePulse/UniversalAPI, TareTrend, MatchOps, the matthewe.me deployment platform, AGeekOnDemand automation, AtherialLib, Android applications, systems-programming work, and Minecraft plugin systems.

Organization membership must not be presented as employment or contribution by itself. The public site should feature only approved affiliations backed by concrete work. Strong evidence-backed organization candidates are QueuePulse, TareTrend, MatchOpsNet, AGeekOnDemandCom, and MatthewEDevelopment. Other memberships require explicit review before display.

## Experience architecture

The central interaction is a set of role lenses. The same project can appear under multiple lenses, showing breadth without duplicating content.

### 1. Full-stack product engineering

- React/TypeScript interfaces and responsive product UX.
- Spring Boot services, data models, authentication, media, maps, and user workflows.
- Evidence candidates: Activities Manager, MatchOps, TareTrend, AGOD mobile and scheduling systems.

### 2. Backend, APIs, and integrations

- Java services, provider integrations, caching, queues, Redis, MongoDB, PostgreSQL, MySQL, and real-time data.
- Evidence candidates: QueuePulse/UniversalAPI, simulation and telemetry work described within approved confidentiality boundaries, texting and scheduling services.

### 3. Platform engineering and DevOps

- Docker, GHCR, GitHub Actions, Caddy, scoped Watchtower, health checks, deployment isolation, rollback design, Nexus, Harbor, Bamboo, and Kubernetes experience.
- Evidence candidates: `matt11matthew/deployment`, MatchOps deployment, QueuePulse production platform, TareTrend platform.

### 4. Systems administration and IT support

- Linux/VPS operations, service recovery, storage and memory incidents, TLS/routing, registry authentication, Windows diagnostics, PnP/device repair, customer support, and runbook-quality verification.
- Present this as incident and operations stories with symptoms, diagnosis, safe action, verification, and prevention—not as a generic skills cloud.

### 5. Plugin and game systems

- Paper, Spigot, Bukkit, BungeeCord, Brigadier, Fabric/NeoForge, Redis-backed cross-server systems, GUIs, minigames, state persistence, and commissioned delivery.
- Evidence candidates: AtherialLib, RolePvP, ThornFallsFixes, NeoTone, SimpleClans, Dungeon Realms Enhanced, and selected public plugin repositories.

### 6. AI, agents, and automation

- OpenAI-backed workflows, operational agents, MCP integrations, lead automation, classification, scheduling, messaging, and human-safe failure handling.
- Evidence candidates: AGOD agents and automation platform, MatchOps analysis flows, customer-support automation.

### 7. Mobile, visualization, and systems fundamentals

- Android, Kotlin/Java, Unity3D, CesiumJS, C, compilers, MIPS, and systems coursework/projects.
- Evidence candidates: QueuePulseAndroid, TareTrend Android, Fuel Calculator, Minesweeper, SystemSoftware, and MIPS Compiler.

## Information architecture

### `/` — Home

1. Compact navigation: Work, Capabilities, Field Notes, About, Contact.
2. Hero with the positioning line, short proof-based subhead, two CTAs, and the Systems Atlas artwork.
3. Proof rail: 10+ years, 900+ commissions, 94 public repos, and a live/refreshed contribution metric.
4. Role-lens switcher that filters real projects and operational stories.
5. Four flagship case studies with outcome-first summaries.
6. “From idea to uptime” lifecycle showing architecture → build → deploy → operate → support.
7. Incident-response strip with short, concrete recovery stories.
8. Plugin-development scale section focused on systems and client outcomes.
9. GitHub activity and selected open-source work.
10. About/contact close with availability and preferred work types.

### `/work`

Filterable project archive. Filters use capabilities and outcomes, not only languages. Each card must show Matthew's role, the system boundary, the production status, and the strongest available proof.

### `/work/[slug]`

Case-study template:

1. Outcome and system status.
2. Problem and constraints.
3. Matthew's ownership and collaborators.
4. Architecture with a small code-native diagram.
5. Hard decisions and tradeoffs.
6. Delivery path and production operations.
7. Visible result, metrics, and proof links.
8. What changed after launch.
9. Technologies as supporting metadata, not the story.

Initial flagship case studies:

- QueuePulse: live multi-park data, frontend/API integration, reliability, and production delivery.
- Activities Manager: SMS ingestion, location/media workflows, routing, and customer-visible repair.
- matthewe.me Platform: isolated Docker modules, Caddy discovery, GHCR, Watchtower, and safe reconciliation.
- AtherialLib and plugin practice: reusable architecture behind a decade of commissioned systems.

Second wave:

- TareTrend.
- MatchOps.
- AGeekOnDemand automation.
- Defense simulation and telemetry, sanitized and approved before publication.
- Mobile and systems-programming collection.

### `/capabilities`

Seven role lenses, each with evidence, technologies, typical engagements, and links into relevant work. Avoid proficiency bars and self-rated percentages.

### `/field-notes`

Short engineering notes and incident retrospectives. This is where systems administration and IT-support expertise becomes credible:

- Restoring a memory-starved package repository.
- Repairing container-registry automation safely.
- Diagnosing a provider/API regression through the rendered UI.
- Cleaning phantom Windows audio devices without breaking a healthy pairing.
- Designing crash-safe state for a multiplayer plugin.

No secrets, customer data, proprietary code, or unapproved employer details.

### `/about` and `/contact`

Human narrative, working principles, timeline, selected affiliations, and a concise inquiry form. Testimonials appear only when supplied or verifiably sourced—never fabricated.

## Homepage design direction: Systems Atlas

The page combines a premium editorial portfolio with the precision of an operations console.

### Visual language

- Background: near-black graphite, not pure black.
- Primary text: warm off-white.
- System color: electric cyan.
- Depth color: cobalt.
- Healthy/complete signal: mint.
- Attention signal: restrained amber/coral.
- Surfaces: smoked glass, subtle borders, matte panels, and quiet grain.
- Typography: expressive geometric sans for display, highly readable sans for body, and mono only for labels/metadata.
- Layout: asymmetric editorial grid with generous negative space and dense detail only where it communicates system depth.

### Motion language

- Signals travel through the Systems Atlas only in response to scroll or pointer focus.
- Project cards reveal architecture layers progressively.
- Role-lens transitions preserve spatial context instead of replacing the whole page.
- No scroll hijacking, cursor replacement, intro gate, constant parallax, or animation that blocks reading.
- Full `prefers-reduced-motion` behavior is required.

### AI artwork

- `design/concepts/systems-atlas-hero.png`: preferred hero direction. It has correct negative space for copy and connects web, mobile, infrastructure, and game systems.
- `design/concepts/operators-field-guide.png`: alternate modular direction, useful as a case-study-cover language or the basis of an interactive capability map.
- `design/mockups/homepage-desktop.png`: high-fidelity desktop homepage direction.
- `design/mockups/homepage-mobile.png`: responsive mobile homepage direction with the verified commission metric.
- `design/mockups/queuepulse-case-study.png`: proof-oriented flagship case-study direction.
- AI images remain atmospheric. UI, type, charts, diagrams, icons, and proof are implemented as accessible HTML/CSS/SVG.
- Final raster assets must be cropped responsively, compressed to AVIF/WebP, and given empty alt text when decorative.

## Initial homepage copy direction

Eyebrow:

> FULL-STACK ENGINEER · PLATFORM OPERATOR · PLUGIN DEVELOPER

Headline:

> I build, ship, and keep complex systems alive.

Subhead:

> From polished product interfaces and Java backends to container platforms, production recovery, automation, and multiplayer systems—I own the path from idea to uptime.

Primary CTA: `Explore the systems`

Secondary CTA: `Start a project`

Supporting signal: `Florida · Building since 2014 · Available for select work`

Alternative headline for testing:

> From plugin hooks to production platforms.

## Recommended implementation

- Next.js App Router with TypeScript for statically generated case studies plus server-side contact and GitHub refresh functions.
- MDX or typed content files for case studies and field notes; no database is required for the first release.
- Custom design tokens and components. Avoid a recognizable template or an unmodified component-library aesthetic.
- CSS/SVG for interactive system diagrams; use the generated raster art as an optimized background, not a replacement for interface structure.
- GitHub data fetched at build/revalidation time with a server-only token. Never expose credentials or make every visitor wait on GitHub.
- Contact endpoint with schema validation, honeypot, rate limiting, and a non-JavaScript fallback.
- Multi-stage Docker image with a real health endpoint and non-root runtime.
- GHCR immutable image plus `prod` tag, deployed through `matthewe-deployment` as an isolated portfolio module.
- Caddy routing for apex `matthewe.me`; redirect `www.matthewe.me` to the apex while preserving path and query string.

Exact framework versions and package commands will be pinned during scaffolding from current official releases and recorded in the repository.

## Content and truth model

Every content item carries:

- `status`: live, shipped, archived, private, or concept.
- `roles`: one or more role lenses.
- `ownership`: sole, lead, contributor, operator, or support.
- `proof`: repository, live URL, workflow, screenshot, artifact, approved metric, or testimonial.
- `confidentiality`: public, sanitized, permission-needed, or private.
- `lastVerified`: date of the latest live/content check.

Metrics are either pulled from a source at build time or labeled with their date. Organization logos and employer/client names require permission or public evidence.

## Quality bar

- WCAG 2.2 AA minimum; target automated accessibility score 100 on primary pages.
- Mobile Lighthouse performance target of 95+ on the production build.
- Core Web Vitals targets: LCP under 2.5 s, INP under 200 ms, CLS under 0.05.
- Fully keyboard operable, visible focus, semantic headings, correct landmarks, and tested contrast.
- Responsive checks at small mobile, large mobile, tablet, laptop, desktop, and ultrawide widths.
- No console errors, hydration warnings, broken routes, dead links, or failed production assets.
- Open Graph, canonical URLs, sitemap, robots, structured data, custom 404/500 states, and favicon set.
- Unit tests for data/content transforms, component tests for important interactive states, and Playwright coverage for navigation, filters, contact, reduced motion, and critical responsive paths.
- Production proof follows `AGENTS.md`: source → CI/image → deployment repo → SSH runtime → public HTTPS → rendered behavior.

## Delivery phases

### Phase 0 — Truth and assets

- Confirm which private work, clients, employers, metrics, logos, screenshots, and testimonials are approved for publication.
- Create the case-study evidence matrix.
- Select a portrait strategy: professional photo, no portrait, or an abstract identity treatment.

### Phase 1 — Foundation

- Initialize Git and scaffold the application with pinned versions.
- Add formatting, linting, type checking, tests, accessibility checks, and CI.
- Build tokens, typography, responsive grid, navigation, footer, and content schema.

### Phase 2 — Flagship homepage

- Implement the hero, proof rail, role lenses, flagship project cards, lifecycle section, field-note strip, and contact close.
- Integrate the preferred Systems Atlas art with responsive crops and reduced-motion behavior.

### Phase 3 — Proof-rich case studies

- Build the case-study template and publish the first four flagship stories.
- Add code-native architecture visuals and sanitized operational evidence.

### Phase 4 — Live signals and contact

- Add cached GitHub metrics and selected repository activity.
- Build and secure the contact workflow.
- Add SEO metadata and social preview assets.

### Phase 5 — Hardening

- Run accessibility, responsive, browser, performance, content, security-header, and failure-state QA.
- Optimize images/fonts and remove unnecessary JavaScript.

### Phase 6 — Production

- Publish the GHCR image.
- Extend the deployment schema/generator or create a reviewed hand-written portfolio module for the apex domain.
- Deploy through `matthewe-deployment`, verify via SSH, and test apex/`www` HTTPS plus rendered behavior.

## Immediate build queue

1. Approve Systems Atlas as the primary direction or choose the Operator's Field Guide alternative.
2. Scaffold the Next.js application and repository tooling.
3. Implement the design-token page and responsive hero prototype.
4. Build the typed project/case-study data model.
5. Populate the first four evidence matrices from public repos and live systems.
6. Review the prototype in-browser before building the remaining pages.
