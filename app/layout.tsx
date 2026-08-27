import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "WiBe Fibra | Fibra propia. Atención de verdad.",
    template: "%s | WiBe Fibra",
  },
  description:
    "Fibra simétrica hasta 1 Gb y móvil desde 31€/mes. Sin permanencia, instalación rápida y atención personalizada. Comprueba tu cobertura con WiBe Fibra.",
  keywords: [
    "fibra óptica",
    "fibra y móvil",
    "internet sin permanencia",
    "WiBe Fibra",
    "fibra Barcelona",
    "tarifas fibra móvil España",
  ],
  authors: [{ name: "WiBe Fibra by JSMILE" }],
  creator: "WiBe Fibra",
  publisher: "WiBe Fibra",
  applicationName: "WiBe Fibra",
  icons: {
    icon: "/assets/logo.webp",
    shortcut: "/assets/logo.webp",
    apple: "/assets/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "WiBe Fibra",
    title: "WiBe Fibra | Fibra propia. Atención de verdad.",
    description:
      "Fibra simétrica hasta 1 Gb y móvil desde 31€/mes. Sin permanencia, instalación rápida y atención personalizada.",
    images: [
      {
        url: "/assets/logo.webp",
        width: 512,
        height: 512,
        alt: "WiBe Fibra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WiBe Fibra | Fibra propia. Atención de verdad.",
    description:
      "Fibra simétrica hasta 1 Gb y móvil desde 31€/mes. Sin permanencia, instalación rápida y atención personalizada.",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f6f9fc] text-[#0b2d55]">
        {children}
      </body>
    </html>
  );
}
