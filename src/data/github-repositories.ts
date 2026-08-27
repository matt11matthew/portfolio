import repositories from "./public-github-repos.json";

export type PublicGitHubRepository = {
  id: number;
  name: string;
  fullName: string;
  owner: string;
  ownerType: "User" | "Organization";
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  isFork: boolean;
  isArchived: boolean;
  visibility: "public";
  updatedAt: string;
  pushedAt: string;
};

export const publicGitHubRepositories = repositories.map(
  (repository): PublicGitHubRepository => ({
    ...repository,
    ownerType:
      repository.ownerType === "Organization" ? "Organization" : "User",
    visibility: "public",
  }),
);
