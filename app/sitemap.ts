import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.wibeonline.es";

  const routes = [
    {
      path: "/",
      lastModified: "2026-09-12",
    },
    {
      path: "/planes",
      lastModified: "2026-09-12",
    },
    {
      path: "/plan-amigo",
      lastModified: "2026-09-12",
    },
    {
      path: "/comparador",
      lastModified: "2026-09-12",
    },
    {
      path: "/porque",
      lastModified: "2026-09-12",
    },
    {
      path: "/soporte",
      lastModified: "2026-09-12",
    },
    {
      path: "/contacto",
      lastModified: "2026-09-12",
    },

    // Legal pages
    {
      path: "/aviso-legal",
      lastModified: "2026-09-12",
    },
    {
      path: "/politica-privacidad",
      lastModified: "2026-09-12",
    },
    {
      path: "/politica-cookies",
      lastModified: "2026-09-12",
    },
    {
      path: "/terminos-y-condiciones",
      lastModified: "2026-09-12",
    },
    {
      path: "/fibra-optica",
      lastModified: "2026-09-29",
    },
    {
      path: "/fibra-movil",
      lastModified: "2026-09-29",
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified,
  }));
}
