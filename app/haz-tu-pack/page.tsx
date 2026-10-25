import type { Metadata } from "next";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BuildPack from "@/components/BuildPack";

export const metadata: Metadata = {
  title: "Haz tu Pack de Fibra y Móvil | WiBe",
  description:
    "Configura tu pack de fibra y móvil con WiBe. Elige tu velocidad de fibra, añade las líneas móviles que necesites y consulta el precio total mensual.",
  alternates: {
    canonical: "https://www.wibeonline.es/haz-tu-pack",
  },
};

export default function HazTuPackPage() {
  return (
    <>
      <TopStrip />
      <Header />

      <main className="min-h-screen bg-slate-50">
        <BuildPack />
      </main>

      <Footer />
    </>
  );
}
