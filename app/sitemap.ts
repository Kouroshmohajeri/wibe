import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wibeonline.es";
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/planes", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/plan-amigo", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/comparador", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/porque", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/soporte", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
