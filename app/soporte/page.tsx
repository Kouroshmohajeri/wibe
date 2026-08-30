import type { Metadata } from "next";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Support from "@/components/Support";
import CoverageCta from "@/components/CoverageCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Soporte y Atención al Cliente",
  description:
    "Contacta con el soporte de WiBe por teléfono o correo. Atención humana real, respuesta en menos de 24h.",
  alternates: {
    canonical: "https://wibeonline.es/soporte",
  },
};

export default function SoportePage() {
  return (
    <>
      <TopStrip />
      <Header />
      <main className="flex-1">
        <Support />
        <CoverageCta />
      </main>
      <Footer />
    </>
  );
}
