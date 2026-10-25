import type { MetadataRoute } from "next";

const baseUrl = "https://www.wibeonline.es";

const routes = [
  "/",
  "/planes",
  "/plan-amigo",
  "/comparador",
  "/porque",
  "/soporte",
  "/contacto",
  "/aviso-legal",
  "/politica-privacidad",
  "/politica-cookies",
  "/terminos-y-condiciones",
  "/fibra-optica",
  "/fibra-movil",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
