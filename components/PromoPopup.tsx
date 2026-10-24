"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PROMO_ANIMATION =
  "https://lottie.host/0c98665e-6384-4950-9314-712b2f095f4c/1RJyuRzI8F.lottie";

type PopupState = "hidden" | "open" | "minimized";

export default function PromoPopup() {
  const [state, setState] = useState<PopupState>("hidden");

  // Minimize the popup but keep the floating launcher visible.
  const minimize = useCallback(() => {
    setState("minimized");

    try {
      sessionStorage.setItem("wibe-promo-state", "minimized");
    } catch {
      // Continue if browser storage is unavailable.
    }
  }, []);

  // Reopen the offer from the floating launcher.
  const openPopup = useCallback(() => {
    setState("open");

    try {
      sessionStorage.setItem("wibe-promo-state", "open");
    } catch {
      // Continue if browser storage is unavailable.
    }
  }, []);

  // Show the popup after a short delay, unless previously minimized.
  useEffect(() => {
    try {
      if (sessionStorage.getItem("wibe-promo-state") === "minimized") {
        setState("minimized");
        return;
      }
    } catch {
      // Continue without session storage.
    }

    const timer = window.setTimeout(() => setState("open"), 1800);

    return () => window.clearTimeout(timer);
  }, []);

  // Prevent background scrolling while the modal is open.
  useEffect(() => {
    if (state !== "open") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") minimize();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [state, minimize]);

  if (state === "hidden") return null;

  // Floating launcher remains visible after the modal closes.
  if (state === "minimized") {
    return (
      <button
        type="button"
        onClick={openPopup}
        aria-label="Ver la oferta especial de WiBe"
        className="group fixed bottom-5 right-5 z-[100] flex items-center
                   gap-2 rounded-full border border-white/70 bg-white/95
                   p-2 pr-4 shadow-[0_8px_35px_rgba(0,90,160,0.28)]
                   backdrop-blur-xl transition-all duration-300
                   hover:-translate-y-1 hover:shadow-xl
                   focus-visible:outline-none focus-visible:ring-4
                   focus-visible:ring-cyan-400/50"
      >
        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/25" />

          <span className="relative h-14 w-14">
            <DotLottieReact
              src={PROMO_ANIMATION}
              autoplay
              loop
              className="h-full w-full"
            />
          </span>
        </span>

        <span className="text-left">
          <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-700">
            Oferta de octubre
          </span>

          <span className="block text-sm font-extrabold text-slate-900">
            ¡Descúbrela!
          </span>
        </span>

        <span className="ml-1 text-lg text-slate-400 transition-transform group-hover:translate-x-0.5">
          ›
        </span>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center
                 overflow-y-auto bg-slate-950/65 p-3 backdrop-blur-md
                 sm:p-6"
      onClick={minimize}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="wibe-promo-title"
        className="relative my-auto grid w-full max-w-5xl
                   overflow-hidden rounded-[28px] border border-white/70
                   bg-white shadow-[0_30px_100px_rgba(0,20,60,0.4)]
                   md:grid-cols-[1.05fr_0.95fr]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={minimize}
          aria-label="Minimizar oferta"
          className="absolute right-3 top-3 z-20 flex h-10 w-10
                     items-center justify-center rounded-full
                     border border-white/30 bg-slate-950/65
                     text-2xl leading-none text-white shadow-lg
                     transition hover:rotate-90 hover:bg-slate-950
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-cyan-400"
        >
          &times;
        </button>

        {/* Larger promotional poster */}
        <div
          className="relative flex min-h-0 items-center justify-center
                     overflow-hidden bg-gradient-to-br from-sky-50
                     via-white to-emerald-50 px-4 py-5
                     sm:px-8 sm:py-7 md:px-2 md:py-8"
        >
          <div
            className="pointer-events-none absolute -left-20 top-1/4
                       h-48 w-48 rounded-full bg-cyan-300/25 blur-3xl"
          />

          <div
            className="pointer-events-none absolute -right-16 bottom-0
                       h-48 w-48 rounded-full bg-emerald-300/25 blur-3xl"
          />

          <Image
            src="/assets/promo.jpg"
            alt="WiBe Fibra: oferta exclusiva de octubre"
            width={1024}
            height={1446}
            priority
            sizes="(max-width: 767px) 90vw, 480px"
            className="relative z-10 block h-auto max-h-[42dvh]
                       w-auto max-w-full object-contain
                       sm:max-h-[50dvh]
                       md:max-h-[min(85dvh,760px)] md:scale-125"
          />
        </div>

        {/* Offer information */}
        <div
          className="relative flex min-w-0 flex-col justify-center
                     overflow-y-auto px-6 pb-7 pt-5
                     sm:px-9 sm:pb-9 sm:pt-7 md:px-10 md:py-12"
        >
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-700">
              Promoción especial
            </span>

            <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-orange-700">
              Octubre
            </span>
          </div>

          <h2
            id="wibe-promo-title"
            className="text-3xl font-black leading-[1.06] tracking-tight
                       text-slate-950 sm:text-4xl lg:text-[42px]"
          >
            Este octubre,
            <span
              className="mt-1 block bg-gradient-to-r from-sky-600
                         via-cyan-500 to-emerald-500 bg-clip-text
                         text-transparent"
            >
              conéctate y gana.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            ¡Tenemos una sorpresa para ti! Contrata WiBe y participa en nuestra
            promoción especial de octubre para ganar un premio. Disfruta de tu
            conexión y descubre lo que tenemos preparado.
          </p>

          <div
            className="my-6 flex items-center gap-3 rounded-2xl
                       border border-cyan-100 bg-gradient-to-r
                       from-sky-50 to-emerald-50 p-4"
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center
                         justify-center rounded-xl bg-white text-xl
                         shadow-sm"
            >
              🎁
            </div>

            <div>
              <p className="text-sm font-extrabold text-slate-900">
                Contrata WiBe y gana un premio
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                Infórmate sobre las condiciones y cómo participar.
              </p>
            </div>
          </div>

          {/* CTA closes the modal but preserves the floating launcher */}
          <Link
            href="/contacto"
            onClick={minimize}
            className="group flex min-h-14 w-full items-center
                       justify-center gap-3 rounded-2xl
                       bg-gradient-to-r from-sky-600 via-blue-600
                       to-emerald-500 px-5 py-4 text-center
                       text-sm font-extrabold uppercase tracking-wide
                       text-white shadow-[0_8px_25px_rgba(14,116,190,0.25)]
                       transition duration-300 hover:-translate-y-0.5
                       hover:shadow-[0_12px_32px_rgba(14,116,190,0.35)]
                       focus-visible:outline-none focus-visible:ring-4
                       focus-visible:ring-cyan-400/50"
          >
            Quiero mi oferta
            <span className="text-xl transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <p className="mt-3 text-center text-[11px] leading-5 text-slate-400">
            Promoción sujeta a condiciones. Consulta los detalles antes de
            contratar.
          </p>

          <button
            type="button"
            onClick={minimize}
            className="mt-3 self-center rounded-lg px-4 py-2
                       text-xs font-semibold text-slate-500
                       transition hover:text-slate-900
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-cyan-400"
          >
            Ahora no, quizás más tarde
          </button>
        </div>
      </section>
    </div>
  );
}
