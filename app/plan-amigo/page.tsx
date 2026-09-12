import type { Metadata } from "next";

import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import PlanAmigo from "@/components/PlanAmigo";
import CoverageCta from "@/components/CoverageCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plan My Best Friend",
  description:
    "Trae a tu mejor amigo a WiBe y disfrutad de 2€ de descuento en vuestra cuota para siempre, hasta un máximo de 5 amigos.",
  alternates: {
    canonical: "https://wibeonline.es/plan-amigo",
  },
};

export default function PlanAmigoPage() {
  return (
    <>
      <TopStrip />
      <Header />

      <main className="flex-1">
        <PlanAmigo />
        <CoverageCta />
      </main>

      <Footer />
    </>
  );
}
