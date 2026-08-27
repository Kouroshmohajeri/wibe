"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin } from "@phosphor-icons/react/ssr";
import GoogleButton from "./GoogleButton";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=900&q=80",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&q=80",
  "https://images.unsplash.com/photo-1591382696684-38c427c7547a?w=900&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b2d55] via-[#14508a] to-[#1f8a5f] text-white">
      <div className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(94,194,106,0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-28 w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(33,150,243,0.25),transparent_70%)]" />

      <div className="relative z-10 max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center px-6 py-20">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 py-2 px-4 rounded-full text-[13px] font-bold tracking-wide mb-6">
            <span className="h-2 w-2 rounded-full bg-[#5ec26a]" />
            FIBRA PROPIA · ATENCIÓN DE VERDAD
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            Fibra{" "}
            <span className="bg-gradient-to-r from-[#5ec26a] to-[#8fe3ff] bg-clip-text text-transparent">
              rápida y estable
            </span>
            .<br />
            Atención de verdad.
          </h1>
          <p className="text-lg text-white/85 max-w-md mb-8">
            Conexión simétrica hasta 1 Gb y móvil desde 31€/mes. Instalación
            rápida y una persona real al otro lado del teléfono.
          </p>
          <div className="flex flex-wrap gap-4 mb-7">
            <a
              href="#planes"
              className="inline-flex items-center gap-2 bg-white text-[#0b2d55] py-4 px-7 rounded-2xl font-extrabold text-[15px] shadow-2xl hover:scale-[1.02] transition-transform"
            >
              Ver planes desde 31€/mes <ArrowRight size={18} weight="bold" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 border-[1.5px] border-white/50 text-white py-4 px-7 rounded-2xl font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              <MapPin size={18} weight="bold" /> Comprobar cobertura
            </a>
          </div>
          <GoogleButton />
        </div>

        <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-white/15 h-[420px]">
          {HERO_IMAGES.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="Familia disfrutando de internet WiBe en casa"
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d55]/80 via-transparent to-transparent" />

          <div className="absolute top-5 right-5 flex gap-1.5">
            {HERO_IMAGES.map((src, i) => (
              <span
                key={src}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 text-[#0b2d55]">
            <div className="text-[11px] font-bold text-[#5b7290] uppercase tracking-wider">
              Fibra WiBe destacada
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-[#1565c0]">
                600Mb
              </span>
              <span className="text-sm font-bold text-[#2fae60]">+ 2×30GB</span>
              <span className="ml-auto text-2xl font-extrabold">
                35€
                <span className="text-xs font-semibold text-[#5b7290]">
                  /mes
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
