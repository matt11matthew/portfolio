"use client";

import { useMemo, useState } from "react";

type Lens =
  | "all"
  | "full-stack"
  | "platform"
  | "plugins"
  | "automation"
  | "operations";

type Project = {
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  proof: string;
  href: string;
  liveHref?: string;
  lenses: Lens[];
  accent: string;
};

const lenses: Array<{ id: Lens; label: string }> = [
  { id: "all", label: "All systems" },
  { id: "full-stack", label: "Full stack" },
  { id: "platform", label: "DevOps" },
  { id: "plugins", label: "Plugin systems" },
  { id: "automation", label: "AI + automation" },
  { id: "operations", label: "IT + operations" },
];

const projects: Project[] = [
  {
    name: "QueuePulse",
    eyebrow: "Live data · API · Web · Operations",
    headline: "Theme-park intelligence, built end to end.",
    description:
      "A guest-facing platform for live waits, park hours, shows, alerts, and operational data across changing providers.",
    proof: "Java · React · Redis · MongoDB · Docker · Caddy",
    href: "https://github.com/QueuePulse/UniversalAPI",
    liveHref: "https://queuepulse.io",
    lenses: ["full-stack", "platform", "operations"],
    accent: "blue",
  },
  {
    name: "matthewe.me Control Plane",
    eyebrow: "Platform · CI/CD · Reliability",
    headline: "Deploy one service without gambling the platform.",
    description:
      "Repository-controlled, module-isolated Docker deployments with automatic Caddy discovery, scoped image updates, and guarded reconciliation.",
    proof: "Docker Compose · GHCR · Caddy · Watchtower · GitHub Actions",
    href: "https://github.com/matt11matthew/deployment",
    lenses: ["platform", "operations", "automation"],
    accent: "cyan",
  },
  {
    name: "Activities Manager",
    eyebrow: "Product · Messaging · Maps",
    headline: "From an SMS to a useful, trustworthy plan.",
    description:
      "A full-stack activity workflow spanning message ingestion, venue parsing, media, maps, routing, and customer-visible data repair.",
    proof: "Spring Boot · TypeScript · Twilio · Mapbox · PostgreSQL",
    href: "https://github.com/matt11matthew/activities-manager",
    lenses: ["full-stack", "automation", "operations"],
    accent: "mint",
  },
  {
    name: "AtherialLib",
    eyebrow: "SDK · Plugins · Architecture",
    headline: "Reusable foundations for hundreds of commissioned systems.",
    description:
      "A modular Java toolkit for events, commands, data, scheduling, menus, and shared infrastructure across production Minecraft plugins.",
    proof: "Java · Paper · Spigot · Redis · Maven",
    href: "https://github.com/matt11matthew/AtherialLib",
    lenses: ["plugins", "automation"],
    accent: "amber",
  },
  {
    name: "TareTrend",
    eyebrow: "Android · API · Product",
    headline: "Mobile and backend engineering as one product surface.",
    description:
      "An Android application and Spring Boot platform designed, secured, and operated with the delivery path treated as part of the product.",
    proof: "Android · Kotlin · Java · Spring Boot · PostgreSQL",
    href: "https://github.com/TareTrend/taretrend",
    lenses: ["full-stack", "platform", "operations"],
    accent: "coral",
  },
  {
    name: "AGeekOnDemand Automation",
    eyebrow: "Agents · Integrations · Support",
    headline: "Automation with evidence and safe failure boundaries.",
    description:
      "Operational agents, scheduling, messaging, lead-state workflows, and support tooling built around real external systems.",
    proof: "OpenAI · MCP · Java · TypeScript · Webhooks · CI/CD",
    href: "https://github.com/AGeekOnDemandCom/agod-agents",
    lenses: ["automation", "full-stack", "operations"],
    accent: "violet",
  },
];

export function ProjectExplorer() {
  const [activeLens, setActiveLens] = useState<Lens>("all");
  const visibleProjects = useMemo(
    () =>
      activeLens === "all"
        ? projects
        : projects.filter((project) => project.lenses.includes(activeLens)),
    [activeLens],
  );

  return (
    <div className="project-explorer">
      <div className="lens-list" aria-label="Filter projects by role">
        {lenses.map((lens) => (
          <button
            className={activeLens === lens.id ? "active" : ""}
            key={lens.id}
            type="button"
            aria-pressed={activeLens === lens.id}
            onClick={() => setActiveLens(lens.id)}
          >
            {lens.label}
          </button>
        ))}
      </div>

      <p className="project-count" aria-live="polite">
        Showing {visibleProjects.length}{" "}
        {visibleProjects.length === 1 ? "system" : "systems"}
      </p>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article
            className={`project-card project-card-${project.accent}`}
            key={project.name}
          >
            <div className="project-card-topline">
              <span>0{index + 1}</span>
              <span>{project.eyebrow}</span>
            </div>
            <div className="project-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <h3>{project.name}</h3>
            <h4>{project.headline}</h4>
            <p>{project.description}</p>
            <p className="project-proof">{project.proof}</p>
            <div className="project-links">
              <a href={project.href} target="_blank" rel="noreferrer">
                View source <span aria-hidden="true">↗</span>
              </a>
              {project.liveHref ? (
                <a href={project.liveHref} target="_blank" rel="noreferrer">
                  Open live site <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
