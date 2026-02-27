import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/contentful";
import { allProjects, archivedProjects } from "@/lib/projects";

const BASE_URL = "https://mattwyskiel.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getPosts();

    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
        { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/stories`, changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/music`, changeFrequency: "monthly", priority: 0.7 },
    ];

    const projectPages: MetadataRoute.Sitemap = [
        ...allProjects,
        ...archivedProjects,
    ]
        .filter((p) => p.link.startsWith("/projects/"))
        .map((p) => ({
            url: `${BASE_URL}${p.link}`,
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));

    const storyPages: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${BASE_URL}/stories/${post.slug}`,
        lastModified: post.publishDate,
        changeFrequency: "yearly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...projectPages, ...storyPages];
}
