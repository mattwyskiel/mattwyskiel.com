export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  type: "personal" | "professional";
  date: string;
}

/** Formats a project date such as "2023-Present" as "2023–present". */
export function formatYears(date: string) {
  return date.replace("-Present", "–present").replace("-", "–");
}

export const allProjects: Project[] = [
  {
    title: "Whiskey",
    description:
      "The private platform behind my AI assistant, my smart home, my music, and my live streams.",
    tags: ["AWS", "AI", "Home automation"],
    link: "/projects/whiskey",
    type: "personal",
    date: "2023-Present",
  },
  {
    title: "A-List",
    description: "My DJ mixes, with track chapters and a podcast feed.",
    tags: ["Next.js", "DynamoDB", "Music"],
    link: "/projects/a-list",
    type: "personal",
    date: "2024-Present",
  },
  {
    title: "mattwyskiel.com",
    description:
      "This very website, custom-built and open source, showcasing myself and my work.",
    tags: ["Next.js", "Tailwind", "Portfolio"],
    link: "/projects/mattwyskiel-com",
    type: "personal",
    date: "2019-Present",
  },
  {
    title: "Prudential US Businesses CloudHelp",
    description:
      "Managed services and developer toolset enabling easier cloud resource management and deployment.",
    tags: ["Cloud", "DevOps", "Enterprise"],
    link: "#",
    type: "professional",
    date: "2023",
  },
  {
    title: "Prudential Individual Solutions Distribution Platform",
    description: "Backend system connecting distributors to Life products.",
    tags: ["Backend", "Enterprise", "Integration"],
    link: "#",
    type: "professional",
    date: "2022",
  },
  {
    title: "Capital One: Field AI Transformation",
    description:
      "Enabling Relationship Managers to do less busywork and close more deals with the power of Generative AI.",
    tags: ["Generative AI", "Finance", "Business"],
    link: "#",
    type: "professional",
    date: "2026-Present",
  },
  {
    title: "Capital One: Vendor Card Acceptance",
    description:
      "Unlocking insights for Small Business Cardholders in the Capital One Web App, enabling increased rewards earn.",
    tags: ["Backend", "Finance", "Business"],
    link: "#",
    type: "professional",
    date: "2025-2026",
  },
  {
    title: "PruXpress Annuities",
    description: "The web home for Financial Professionals.",
    tags: ["Frontend", "Finance", "Enterprise"],
    link: "#",
    type: "professional",
    date: "2020",
  },
];

export const archivedProjects = [
  {
    title: "Kingsmen Café",
    description:
      "A mobile pre-ordering app for a coffee shop in a school library, with Square payments.",
    tags: ["iOS", "Swift", "Mobile"],
    link: "/projects/kingsmen-cafe",
    date: "2017-2018",
  },
];
