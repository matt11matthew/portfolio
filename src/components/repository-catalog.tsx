"use client";

import { useMemo, useState } from "react";
import type { PublicGitHubRepository } from "@/data/github-repositories";

const PAGE_SIZE = 12;
const personalOwner = "matt11matthew";

type Scope = "all" | "personal" | "organizations" | "collaborations";

function formatActivity(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function RepositoryCatalog({
  repositories,
}: {
  repositories: PublicGitHubRepository[];
}) {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<Scope>("all");
  const [language, setLanguage] = useState("all");
  const [expanded, setExpanded] = useState(false);

  const languages = useMemo(
    () =>
      [...new Set(repositories.map((repository) => repository.language).filter(Boolean))]
        .sort((left, right) => left!.localeCompare(right!)) as string[],
    [repositories],
  );

  const filteredRepositories = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return repositories.filter((repository) => {
      const matchesScope =
        scope === "all" ||
        (scope === "personal" && repository.owner === personalOwner) ||
        (scope === "organizations" && repository.ownerType === "Organization") ||
        (scope === "collaborations" &&
          repository.owner !== personalOwner &&
          repository.ownerType === "User");
      const matchesLanguage =
        language === "all" || repository.language === language;
      const searchable = [
        repository.fullName,
        repository.description,
        repository.language,
        ...repository.topics,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase();

      return (
        matchesScope &&
        matchesLanguage &&
        (!normalizedQuery || searchable.includes(normalizedQuery))
      );
    });
  }, [language, query, repositories, scope]);

  const visibleRepositories = expanded
    ? filteredRepositories
    : filteredRepositories.slice(0, PAGE_SIZE);

  function resetExpansion() {
    setExpanded(false);
  }

  return (
    <div className="repository-catalog">
      <div className="repository-toolbar">
        <label className="repository-search">
          <span>Search public repositories</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              resetExpansion();
            }}
            placeholder="Name, topic, language..."
          />
        </label>

        <label>
          <span>Ownership</span>
          <select
            value={scope}
            onChange={(event) => {
              setScope(event.target.value as Scope);
              resetExpansion();
            }}
          >
            <option value="all">All public sources</option>
            <option value="personal">Personal account</option>
            <option value="organizations">Organizations</option>
            <option value="collaborations">Collaborations</option>
          </select>
        </label>

        <label>
          <span>Language</span>
          <select
            value={language}
            onChange={(event) => {
              setLanguage(event.target.value);
              resetExpansion();
            }}
          >
            <option value="all">All languages</option>
            {languages.map((languageName) => (
              <option value={languageName} key={languageName}>
                {languageName}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="repository-results">
        <p aria-live="polite">
          {filteredRepositories.length} public{" "}
          {filteredRepositories.length === 1 ? "repository" : "repositories"}
        </p>
        <span>Private repositories are excluded before build.</span>
      </div>

      {visibleRepositories.length ? (
        <div className="repository-grid">
          {visibleRepositories.map((repository) => (
            <article className="repository-card" key={repository.id}>
              <div className="repository-card-flags">
                <span>
                  {repository.owner === personalOwner
                    ? "Personal"
                    : repository.ownerType === "Organization"
                      ? "Organization"
                      : "Collaboration"}
                </span>
                {repository.isFork ? <span>Fork</span> : null}
                {repository.isArchived ? <span>Archived</span> : null}
              </div>

              <p className="repository-owner">{repository.owner}</p>
              <h3>{repository.name}</h3>
              <p className="repository-description">
                {repository.description || "Public source and history available on GitHub."}
              </p>

              {repository.topics.length ? (
                <ul className="repository-topics" aria-label="Repository topics">
                  {repository.topics.slice(0, 4).map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              ) : null}

              <div className="repository-meta">
                <span>{repository.language || "Mixed stack"}</span>
                <span>★ {repository.stars}</span>
                <span>Updated {formatActivity(repository.pushedAt)}</span>
              </div>

              <div className="repository-links">
                <a href={repository.url} target="_blank" rel="noreferrer">
                  Repository <span aria-hidden="true">↗</span>
                </a>
                {repository.homepage ? (
                  <a href={repository.homepage} target="_blank" rel="noreferrer">
                    Live link <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="repository-empty">
          No public repositories match those filters.
        </div>
      )}

      {!expanded && filteredRepositories.length > PAGE_SIZE ? (
        <button
          className="repository-expand button button-secondary"
          type="button"
          onClick={() => setExpanded(true)}
        >
          Show all {filteredRepositories.length} public repositories
          <span aria-hidden="true">↓</span>
        </button>
      ) : null}
    </div>
  );
}
