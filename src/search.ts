import { experience, projects, skillGroups } from "./content";

export type SearchItem = {
  title: string;
  href: string;
  description: string;
  keywords: string;
};

export const searchItems: SearchItem[] = [
  {
    title: "About Kenneth Rios",
    href: "/about",
    description: "AI engineer and backend developer in David, Chiriqui, Panama.",
    keywords:
      "Kenneth Rios AI engineer backend developer David Chiriqui Panama LLM systems automation Cloudflare Workers"
  },
  ...projects.map((project) => ({
    title: project.title,
    href: `/projects/${project.slug}`,
    description: project.summary,
    keywords: [project.title, project.category, project.summary, ...project.tech, ...project.details].join(" ")
  })),
  ...experience.map((item) => ({
    title: `${item.role} at ${item.company}`,
    href: "/experience",
    description: `${item.period}, ${item.location}`,
    keywords: [item.role, item.company, item.period, item.location, ...(item.notes ?? []), ...item.highlights].join(
      " "
    )
  })),
  ...skillGroups.map((group) => ({
    title: group.title,
    href: "/skills",
    description: group.summary,
    keywords: [group.title, group.summary, ...group.items].join(" ")
  }))
];

export function searchPortfolio(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return searchItems.slice(0, 6);

  return searchItems
    .map((item) => {
      const haystack = `${item.title} ${item.description} ${item.keywords}`.toLowerCase();
      const score =
        (item.title.toLowerCase().includes(normalized) ? 4 : 0) +
        (item.description.toLowerCase().includes(normalized) ? 2 : 0) +
        (haystack.includes(normalized) ? 1 : 0);
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item)
    .slice(0, 8);
}
