export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  type: "personal" | "professional";
  date: string;
  isActive: boolean;
  featured: boolean;
}

export const allProjects: Project[] = [
  {
    title: "Whiskey",
    description:
      "My second brain. My OS. My personal automation system. Cloud-native, data-rich, and private.",
    tags: ["AWS", "Data", "AI"],
    link: "/projects/whiskey",
    type: "personal",
    date: "2023-Present",
    isActive: true,
    featured: true,
  },
  {
    title: "A-List",
    description: "An audio player for my DJ mixes.",
    tags: ["Next.js", "Web Audio", "Music"],
    link: "/projects/a-list",
    type: "personal",
    date: "2024-Present",
    isActive: true,
    featured: false,
  },
  {
    title: "mattwyskiel.com",
    description:
      "This very website, custom-built and open source, showcasing myself and my work.",
    tags: ["Next.js", "Tailwind", "Portfolio"],
    link: "/projects/mattwyskiel-com",
    type: "personal",
    date: "2019-Present",
    isActive: true,
    featured: false,
  },
  {
    title: "Prudential US Businesses CloudHelp",
    description:
      "Managed services and developer toolset enabling easier cloud resource management and deployment.",
    tags: ["Cloud", "DevOps", "Enterprise"],
    link: "/projects/prudential-cloudhelp",
    type: "professional",
    date: "2023",
    isActive: false,
    featured: false,
  },
  {
    title: "Prudential Individual Solutions Distribution Platform",
    description: "Backend system connecting distributors to Life products.",
    tags: ["Backend", "Enterprise", "Integration"],
    link: "/projects/prudential-distribution",
    type: "professional",
    date: "2022",
    isActive: false,
    featured: false,
  },
  {
    title: "Capital One: Vendor Card Acceptance",
    description:
      "Unlocking insights for Small Business Cardholders in the Capital One Web App, enabling increased rewards earn.",
    tags: ["Backend", "Finance", "Business"],
    link: "/projects/capital-one-card-accept",
    type: "professional",
    date: "2025-Present",
    isActive: true,
    featured: true,
  },
  {
    title: "PruXpress Annuities",
    description: "The web home for Financial Professionals.",
    tags: ["Frontend", "Finance", "Enterprise"],
    link: "/projects/pruxpress-annuities",
    type: "professional",
    date: "2020",
    isActive: false,
    featured: false,
  },
];

export const archivedProjects = [
  {
    title: "Kingsmen Café",
    description:
      "A mobile pre-ordering experience for a small local coffee chain with Square payments.",
    tags: ["iOS", "Swift", "Mobile"],
    link: "/projects/kingsmen-cafe",
    date: "2018",
  },
];

export function getFeaturedProjects(limit: number = 2): Project[] {
  return allProjects
    .filter((project) => project.featured)
    .sort((a, b) => {
      // Sort by date descending
      return b.date.localeCompare(a.date);
    })
    .slice(0, limit);
}

export function getSortedProjects(sortType: "featured" | "date"): Project[] {
  if (sortType === "featured") {
    return allProjects.sort((a, b) => {
      if (a.featured !== b.featured) {
        return b.featured ? 1 : -1;
      }
      // Within same featured status, sort by date
      return b.date.localeCompare(a.date);
    });
  } else {
    return allProjects.sort((a, b) => {
      if (a.date !== b.date) {
        return b.date.localeCompare(a.date);
      }
      return b.isActive ? 1 : -1;
    });
  }
}
