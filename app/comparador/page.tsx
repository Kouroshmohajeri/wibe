import type { Metadata } from "next";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import InvoiceComparator from "@/components/InvoiceComparator";
import Footer from "@/components/Footer";
import { ShieldCheck } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "Compara tu Factura Gratis",
  description:
    "Sube tu factura actual de fibra y móvil y descubre al instante cuánto podrías ahorrar con WiBe.",
  alternates: {
    canonical: "https://wibeonline.es/comparador-factura",
  },
};

export default function ComparadorFacturaPage() {
  return (
    <>
      <TopStrip />
      <Header />
      <main className="flex-1 py-20 px-6 bg-[#f6f9fc]">
        <div className="max-w-[640px] mx-auto text-center mb-10">
          <div className="text-[#2fae60] font-extrabold text-[13px] tracking-wider uppercase">
            Comparador de factura
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold my-2.5 text-[#0b2d55]">
            ¿Cuánto podrías ahorrar con WiBe?
          </h1>
          <p className="text-[#5b7290]">
            Sube tu factura actual y en segundos te decimos si hay un plan de
            WiBe que se ajuste mejor a lo que necesitas, y cuánto ahorrarías al
            año.
          </p>
        </div>

        <InvoiceComparator />

        <div className="max-w-[640px] mx-auto mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck size={16} />
          Tu factura se analiza automáticamente y no se comparte con terceros.
        </div>
      </main>
      <Footer />
    </>
  );
}
