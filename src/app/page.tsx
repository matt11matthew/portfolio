import Image from "next/image";
import Link from "next/link";
import { ProjectExplorer } from "@/components/project-explorer";
import { RepositoryCatalog } from "@/components/repository-catalog";
import { publicGitHubRepositories } from "@/data/github-repositories";

const stats = [
  { value: "10+", label: "years building" },
  { value: "900+", label: "plugin commissions" },
  { value: String(publicGitHubRepositories.length), label: "public repos indexed" },
  { value: "2,032", label: "contributions this year" },
];

const lifecycle = [
  {
    number: "01",
    title: "Design the system",
    description: "Turn real constraints into a clear product and architecture.",
  },
  {
    number: "02",
    title: "Build the path",
    description: "Ship interfaces, services, integrations, and resilient state.",
  },
  {
    number: "03",
    title: "Run production",
    description: "Containerize, deploy, observe, recover, and improve safely.",
  },
  {
    number: "04",
    title: "Support the humans",
    description: "Debug the customer-visible result, not just the status code.",
  },
];

const fieldNotes = [
  {
    type: "SYSTEM RECOVERY",
    title: "Recovering a memory-starved package repository",
    description:
      "Traced a public outage to OOM termination, restored service, and installed bounded recovery behavior.",
  },
  {
    type: "PRODUCTION REPAIR",
    title: "Preserving the venue name the customer actually submitted",
    description:
      "Repaired an SMS ingestion path and verified the result through CI, API state, and the rendered card.",
  },
  {
    type: "IT SUPPORT",
    title: "Cleaning phantom audio endpoints without breaking pairing",
    description:
      "Separated stale Windows PnP records from the healthy Bluetooth device before elevated cleanup.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Matthew E. home">
          MATTHEW E.
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#repositories">Repositories</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#field-notes">Field notes</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#work">Work</a>
            <a href="#repositories">Repositories</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#field-notes">Field notes</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              Full-stack engineer <span>·</span> Platform operator <span>·</span>{" "}
              Plugin developer
            </p>
            <h1 id="hero-title">I build, ship, and keep complex systems alive.</h1>
            <p className="hero-description">
              From product interfaces and Java backends to container platforms,
              automation, production recovery, and multiplayer systems—I own the
              path from idea to uptime.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore the systems <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Start a project <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="hero-signal">
              <span className="status-dot" aria-hidden="true" /> Florida · Building
              since 2014 · Available for select work
            </p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-glow" />
            <Image
              src="/images/systems-atlas-hero.png"
              alt=""
              fill
              priority
              sizes="(max-width: 860px) 100vw, 62vw"
            />
          </div>
        </section>

        <section className="proof-strip" aria-label="Experience highlights">
          {stats.map((stat) => (
            <div className="proof-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected systems / 2024–2026</p>
              <h2 id="work-title">Proof across the whole stack.</h2>
            </div>
            <p>
              Filter by the role you are hiring for. The work stays the same; the
              lens changes.
            </p>
          </div>
          <ProjectExplorer />
        </section>

        <section
          className="section repository-section"
          id="repositories"
          aria-labelledby="repositories-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">GitHub / public inventory</p>
              <h2 id="repositories-title">The public code trail.</h2>
            </div>
            <p>
              Search the public repositories across Matthew&apos;s authenticated
              GitHub inventory. Ownership is labeled explicitly; private repository
              metadata never enters the site bundle.
            </p>
          </div>
          <RepositoryCatalog repositories={publicGitHubRepositories} />
        </section>

        <section
          className="section lifecycle-section"
          id="capabilities"
          aria-labelledby="lifecycle-title"
        >
          <div className="section-heading section-heading-inverse">
            <div>
              <p className="section-kicker">One owner / every layer</p>
              <h2 id="lifecycle-title">From idea to uptime.</h2>
            </div>
            <p>Product thinking and operational discipline belong in the same room.</p>
          </div>

          <ol className="lifecycle-grid">
            {lifecycle.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="section notes-section"
          id="field-notes"
          aria-labelledby="notes-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">Field notes</p>
              <h2 id="notes-title">How the hard problems get handled.</h2>
            </div>
            <p>
              Diagnosis, safe action, and customer-visible verification—without the
              hero-story fluff.
            </p>
          </div>

          <div className="notes-grid">
            {fieldNotes.map((note, index) => (
              <article className="note-card" key={note.title}>
                <div className="note-number">0{index + 1}</div>
                <p className="note-type">{note.type}</p>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-label">
            <span className="status-dot" aria-hidden="true" /> About the operator
          </div>
          <div>
            <h2 id="about-title">Ten years of building things people actually depend on.</h2>
            <p>
              I’m Matthew—a Florida-based software engineer and longtime plugin
              developer. My work moves between customer-facing products, backend
              services, deployment platforms, automation, incident recovery, and
              hands-on technical support. The common thread is ownership: understand
              the real problem, ship the fix, and prove the result.
            </p>
            <a
              className="text-link"
              href="https://github.com/matt11matthew"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="section-kicker">Have a system to build—or one to rescue?</p>
          <h2 id="contact-title">Let’s make it work in production.</h2>
          <p>
            Available for select full-stack, backend, platform, automation, plugin,
            and technical consulting work.
          </p>
          <a className="button button-primary" href="mailto:hello@matthewe.me">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Matthew E.</span>
        <span>Designed and operated end to end.</span>
      </footer>
    </>
  );
}
