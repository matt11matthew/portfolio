import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const inputPath = resolve(root, "src/data/public-github-repos.json");
const repositories = JSON.parse(readFileSync(inputPath, "utf8"));
const allowedKeys = new Set([
  "id",
  "name",
  "fullName",
  "owner",
  "ownerType",
  "description",
  "url",
  "homepage",
  "language",
  "topics",
  "stars",
  "forks",
  "isFork",
  "isArchived",
  "visibility",
  "updatedAt",
  "pushedAt",
]);

if (!Array.isArray(repositories)) throw new Error("Repository catalog must be an array.");

const ids = new Set();
for (const repository of repositories) {
  const keys = Object.keys(repository);
  if (keys.some((key) => !allowedKeys.has(key))) {
    throw new Error("Repository catalog contains a non-public schema field.");
  }
  if (repository.visibility !== "public") {
    throw new Error("Repository catalog contains a non-public repository.");
  }
  if (!Number.isInteger(repository.id) || ids.has(repository.id)) {
    throw new Error("Repository catalog contains an invalid or duplicate ID.");
  }
  if (!["User", "Organization"].includes(repository.ownerType)) {
    throw new Error("Repository catalog contains an invalid owner type.");
  }
  if (
    typeof repository.name !== "string" ||
    typeof repository.owner !== "string" ||
    repository.fullName !== `${repository.owner}/${repository.name}`
  ) {
    throw new Error("Repository catalog contains invalid identity metadata.");
  }
  if (repository.url !== `https://github.com/${repository.fullName}`) {
    throw new Error("Repository catalog contains an unexpected repository URL.");
  }
  if (
    repository.homepage !== null &&
    (typeof repository.homepage !== "string" || !/^https?:\/\//i.test(repository.homepage))
  ) {
    throw new Error("Repository catalog contains an unsafe homepage URL.");
  }
  ids.add(repository.id);
}

process.stdout.write(`Verified ${repositories.length} public repositories.\n`);
