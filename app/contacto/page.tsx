import type { Metadata } from "next";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import CoverageCta from "@/components/CoverageCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Comprobar Cobertura",
  description:
    "Comprueba la cobertura de fibra y móvil de WiBe en tu dirección y te llamamos con la mejor oferta disponible.",
  alternates: {
    canonical: "https://wibeonline.es/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <TopStrip />
      <Header />
      <main className="flex-1">
        <CoverageCta />
      </main>
      <Footer />
    </>
  );
}
