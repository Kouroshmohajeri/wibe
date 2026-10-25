import type { Metadata } from "next";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import WhyUs from "@/components/WhyUs";
import CoverageCta from "@/components/CoverageCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Por qué elegir WiBe",
  description:
    "Fibra estable, atención humana y trato claro. Descubre por qué elegir WiBe para tu fibra y móvil.",
  alternates: {
    canonical: "https://www.wibeonline.es/porque",
  },
};

export default function PorquePage() {
  return (
    <>
      <TopStrip />
      <Header />
      <main className="flex-1">
        <WhyUs />
        <CoverageCta />
      </main>
      <Footer />
    </>
  );
}
