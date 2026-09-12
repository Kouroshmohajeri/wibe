import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, House, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Global site header */}
      <TopStrip />
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Soft brand background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#eaf3ff] blur-3xl opacity-70" />

            <div className="absolute -bottom-48 -right-32 w-[520px] h-[520px] rounded-full bg-[#eaf7ee] blur-3xl opacity-80" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
            {/* 404 content */}
            <div className="text-center">
              {/* Disconnected WiFi illustration */}
              <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[460px]">
                <Image
                  src="/assets/404.png"
                  alt="Router WiBe sin conexión"
                  width={900}
                  height={900}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Error code */}
              <div className="mt-1 sm:mt-0">
                <p
                  className="text-[88px] sm:text-[110px] lg:text-[130px] leading-none font-extrabold tracking-[-0.06em] bg-gradient-to-r from-[#0d47a1] via-[#0288d1] to-[#2fae60] bg-clip-text text-transparent"
                  aria-hidden="true"
                >
                  404
                </p>

                <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0b2d55]">
                  Parece que esta página se ha desconectado
                </h1>

                <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-[#5b7290]">
                  No hemos podido encontrar la página que buscas.
                  <br className="hidden sm:block" />
                  Puede que el enlace esté incorrecto o que la página ya no
                  exista.
                </p>
              </div>

              {/* Main actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[210px] rounded-full bg-gradient-to-r from-[#0d47a1] to-[#2fae60] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0d47a1]/15 hover:scale-[1.02] hover:shadow-xl transition-all"
                >
                  <House size={19} weight="bold" />
                  Volver al inicio
                </Link>

                <Link
                  href="/planes"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[210px] rounded-full border-2 border-[#0288d1] bg-white px-7 py-3 text-sm font-bold text-[#0288d1] hover:bg-[#eaf3ff] transition-colors"
                >
                  Ver nuestros planes
                </Link>
              </div>

              {/* Support */}
              <div className="mt-10 sm:mt-12">
                <p className="text-sm sm:text-base text-[#5b7290]">
                  ¿Necesitas ayuda? Estamos a un mensaje de distancia.
                </p>

                <Link
                  href="/contacto"
                  className="mt-3 inline-flex items-center gap-2 text-[#2fae60] font-bold hover:text-[#1f8a5f] transition-colors"
                >
                  <WhatsappLogo size={22} weight="fill" />
                  Habla con nosotros
                  <ArrowLeft size={15} weight="bold" className="rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom brand waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 pointer-events-none overflow-hidden">
            <svg
              viewBox="0 0 1440 180"
              preserveAspectRatio="none"
              className="absolute bottom-0 w-full h-full"
              aria-hidden="true"
            >
              <path
                d="M0,100 C220,10 350,170 600,130 C850,90 920,30 1130,80 C1280,115 1360,150 1440,100 L1440,180 L0,180 Z"
                fill="#eaf3ff"
                opacity="0.8"
              />

              <path
                d="M0,125 C230,45 360,185 620,145 C870,105 960,55 1160,105 C1290,138 1370,165 1440,120 L1440,180 L0,180 Z"
                fill="#eaf7ee"
                opacity="0.75"
              />
            </svg>
          </div>
        </section>
      </main>

      {/* Global site footer */}
      <Footer />
    </div>
  );
}
