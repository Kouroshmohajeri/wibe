import Image from "next/image";
import {
  PhoneCall,
  EnvelopeSimpleOpen,
  ArrowUpRight,
} from "@phosphor-icons/react/ssr";
import { PHONE_NUMBER, PHONE_TEL, SUPPORT_EMAIL } from "@/lib/constants";

export default function Support() {
  return (
    <section id="soporte" className="py-20 px-6 bg-[#eef6f1]">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
        <div className="relative rounded-[24px] overflow-hidden shadow-lg h-full min-h-[260px]">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
            alt="Equipo de soporte de WiBe Fibra"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d55]/70 to-transparent" />
        </div>

        <div>
          <div className="text-[#2fae60] font-extrabold text-[13px] tracking-wider uppercase mb-2">
            Estamos aquí para ayudarte
          </div>
          <h2 className="text-3xl font-extrabold mb-8 text-[#0b2d55]">
            Soporte y atención al cliente
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-[20px] shadow-lg p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#eaf7ee] text-[#2fae60] flex items-center justify-center mb-4">
                <PhoneCall size={22} />
              </div>
              <h4 className="text-base font-extrabold text-[#0b2d55] mb-1.5">
                Teléfono
              </h4>
              <p className="text-[13px] text-[#5b7290] mb-3">
                Lun–vie, 9:00–20:00h.
              </p>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-1.5 font-extrabold text-[#1565c0] text-sm"
              >
                {PHONE_NUMBER} <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="bg-white rounded-[20px] shadow-lg p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#eaf7ee] text-[#2fae60] flex items-center justify-center mb-4">
                <EnvelopeSimpleOpen size={22} />
              </div>
              <h4 className="text-base font-extrabold text-[#0b2d55] mb-1.5">
                Correo
              </h4>
              <p className="text-[13px] text-[#5b7290] mb-3">
                Respuesta en menos de 24h.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-1.5 font-extrabold text-[#1565c0] text-sm break-all"
              >
                {SUPPORT_EMAIL} <ArrowUpRight size={15} className="shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
