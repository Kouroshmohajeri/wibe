import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://wibeonline.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WiBe | Fibra y Móvil desde 31€/mes",
    template: "%s | WiBe",
  },
  description:
    "Fibra y móvil desde 31€/mes, sin complicaciones. Precio claro, fibra rápida y atención humana. Comprueba tu cobertura con WiBe.",
  keywords: [
    "fibra y móvil",
    "fibra móvil barata",
    "fibra 600 Mb",
    "fibra 1 Gb",
    "tarifas fibra móvil",
    "WiBe fibra",
    "WiBe móvil",
    "WiBe cobertura",
    "fibra óptica España",
  ],
  authors: [{ name: "WiBe" }],
  creator: "WiBe",
  publisher: "WiBe",
  applicationName: "WiBe",
  icons: {
    icon: "/assets/logo.webp",
    shortcut: "/assets/logo.webp",
    apple: "/assets/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "WiBe",
    title: "WiBe | Fibra y Móvil desde 31€/mes",
    description:
      "Fibra y móvil desde 31€/mes, sin complicaciones. Precio claro, fibra rápida y atención humana.",
    images: [
      {
        url: "/assets/logo.webp",
        width: 512,
        height: 512,
        alt: "WiBe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WiBe | Fibra y Móvil desde 31€/mes",
    description:
      "Fibra y móvil desde 31€/mes, sin complicaciones. Precio claro, fibra rápida y atención humana.",
    images: ["/assets/logo.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WiBe",
  url: siteUrl,
  logo: `${siteUrl}/assets/logo.webp`,
  description:
    "WiBe ofrece tarifas de fibra y móvil en España, con precio claro y atención humana.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-681-800-455",
    contactType: "customer service",
    email: "soporte@wibeonline.es",
    areaServed: "ES",
    availableLanguage: ["Spanish"],
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WiBe",
  url: siteUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f6f9fc] text-[#0b2d55]">
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
