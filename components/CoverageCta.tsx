"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Clock, ArrowUpRight } from "@phosphor-icons/react/ssr";

const WHATSAPP_NUMBER = "34681800455";
const WHATSAPP_MESSAGE =
  "Hola WiBe, quiero comprobar la cobertura de fibra y móvil disponible en mi zona.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export default function CoverageCta() {
  return (
    <section id="contacto" className="py-20 px-6 bg-[#f6f9fc]">
      <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-[#0b2d55] via-[#14508a] to-[#1f8a5f] rounded-[28px] overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] items-center">
          <div className="text-white text-center lg:text-left px-6 sm:px-14 py-16">
            <h2 className="text-3xl font-extrabold mb-3.5">
              Comprueba tu cobertura ahora
            </h2>
            <p className="text-white/80 mb-7 max-w-md mx-auto lg:mx-0">
              Escríbenos por WhatsApp y te decimos al instante la mejor oferta
              disponible en tu zona.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white py-4 px-8 rounded-2xl font-extrabold text-[15px] hover:bg-[#1ebe5b] hover:scale-[1.02] transition-all"
            >
              Hablar por WhatsApp <ArrowUpRight size={18} weight="bold" />
            </a>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs mt-5 text-white/60">
              <Clock size={16} /> Respuesta en menos de 24h
            </div>
          </div>

          <div className="hidden lg:flex relative items-end justify-center overflow-visible">
            <div className="w-full max-w-[640px] scale-125 -mb-10">
              <DotLottieReact src="/assets/WhatsApp.json" autoplay loop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
