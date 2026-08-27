import { execFileSync } from "node:child_process";
import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(root, "src/data/public-github-repos.json");
const temporaryPath = `${outputPath}.tmp`;

const raw = execFileSync(
  "gh",
  [
    "api",
    "--paginate",
    "--slurp",
    "-H",
    "Accept: application/vnd.github+json",
    "/user/repos?visibility=all&affiliation=owner,collaborator,organization_member&sort=updated&direction=desc&per_page=100",
  ],
  {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
    windowsHide: true,
  },
);

const pages = JSON.parse(raw);
const ingested = pages.flat();
const unique = [...new Map(ingested.map((repo) => [repo.id, repo])).values()];
const publicOnly = unique
  .filter(
    (repo) =>
      repo.private === false &&
      repo.visibility === "public" &&
      typeof repo.html_url === "string" &&
      repo.html_url.startsWith("https://github.com/"),
  )
  .map((repo) => ({
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    owner: repo.owner.login,
    ownerType: repo.owner.type,
    description: repo.description,
    url: repo.html_url,
    homepage:
      typeof repo.homepage === "string" && /^https?:\/\//i.test(repo.homepage)
        ? repo.homepage
        : null,
    language: repo.language,
    topics: Array.isArray(repo.topics) ? repo.topics : [],
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    isFork: repo.fork,
    isArchived: repo.archived,
    visibility: "public",
    updatedAt: repo.updated_at,
    pushedAt: repo.pushed_at,
  }))
  .sort((left, right) => {
    if (left.isArchived !== right.isArchived) return left.isArchived ? 1 : -1;
    if (left.isFork !== right.isFork) return left.isFork ? 1 : -1;
    return Date.parse(right.pushedAt) - Date.parse(left.pushedAt);
  });

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(temporaryPath, `${JSON.stringify(publicOnly, null, 2)}\n`, "utf8");
renameSync(temporaryPath, outputPath);

const filteredCount = unique.length - publicOnly.length;
process.stdout.write(
  `Ingested ${unique.length} repositories; published ${publicOnly.length}; filtered ${filteredCount} non-public repositories.\n`,
);
