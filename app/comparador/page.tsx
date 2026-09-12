import type { Metadata } from "next";
import Link from "next/link";
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
    canonical: "https://wibeonline.es/comparador",
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

        <div className="max-w-[640px] mx-auto mt-8 flex items-start justify-center gap-2 text-xs text-slate-400 text-center">
          <ShieldCheck size={16} className="shrink-0 mt-0.5" />

          <p>
            Tu factura se analiza automáticamente para realizar la comparación
            solicitada. WiBe no almacena la factura en sus propios sistemas una
            vez finalizado el análisis. El análisis utiliza tecnología de
            inteligencia artificial de Google Gemini.{" "}
            <Link
              href="/politica-privacidad"
              className="font-semibold text-[#0b2d55] underline underline-offset-2 hover:text-[#2fae60]"
            >
              Consulta nuestra Política de Privacidad
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
