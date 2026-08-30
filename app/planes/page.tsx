import type { Metadata } from "next";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Plans from "@/components/Plans";
import CoverageCta from "@/components/CoverageCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tarifas de Fibra y Móvil",
  description:
    "Consulta las tarifas de fibra y móvil de WiBe desde 31€/mes. Fibra 600 Mb, 1 Gb y móvil con datos ilimitados, sin complicaciones.",
  alternates: {
    canonical: "https://wibeonline.es/planes",
  },
};

export default function PlanesPage() {
  return (
    <>
      <TopStrip />
      <Header />
      <main className="flex-1">
        <Plans />
        <CoverageCta />
      </main>
      <Footer />
    </>
  );
}
