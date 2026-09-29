"use client";

import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  ArrowUpRight,
  CaretDown,
  CheckCircle,
  Clock,
  MapPin,
} from "@phosphor-icons/react/ssr";

const WHATSAPP_NUMBER = "34681800455";

const DEFAULT_MESSAGE =
  "Hola WiBe, quiero comprobar la cobertura de fibra y móvil disponible en mi zona.";

export default function CoverageCta() {
  const [showAddress, setShowAddress] = useState(false);

  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");

  const hasAddress =
    street.trim() || postalCode.trim() || city.trim() || details.trim();

  const addressParts = [
    street.trim(),
    postalCode.trim(),
    city.trim(),
    details.trim(),
  ].filter(Boolean);

  const address = addressParts.join(", ");

  const whatsappMessage = hasAddress
    ? `${DEFAULT_MESSAGE}

Mi domicilio es:
${address}`
    : DEFAULT_MESSAGE;

  const whatsappLink =
    `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent(whatsappMessage);

  return (
    <section id="contacto" className="bg-[#f6f9fc] px-6 py-14 md:py-16">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b2d55] via-[#14508a] to-[#1f8a5f] shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* LEFT */}
          <div className="px-6 py-12 text-center text-white sm:px-14 md:py-14 lg:text-left">
            <h2 className="text-3xl font-extrabold">Comprueba tu cobertura</h2>

            <p className="mx-auto mt-3 max-w-md text-white/80 lg:mx-0">
              Escríbenos por WhatsApp y te diremos qué opciones de fibra y móvil
              tenemos disponibles en tu zona.
            </p>

            {/* ADDRESS ACCORDION */}
            <div className="mx-auto mt-7 max-w-xl lg:mx-0">
              <button
                type="button"
                onClick={() => setShowAddress((current) => !current)}
                aria-expanded={showAddress}
                className="group flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-4 text-left backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1769aa]">
                    <MapPin size={19} weight="fill" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Añadir mi domicilio
                    </p>

                    <p className="mt-0.5 text-xs text-white/55">
                      Opcional · nos ayuda a comprobar tu zona
                    </p>
                  </div>
                </div>

                <CaretDown
                  size={19}
                  weight="bold"
                  className={`shrink-0 text-white/70 transition-transform duration-200 ${
                    showAddress ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* FORM */}
              <div
                className={`grid transition-all duration-300 ${
                  showAddress
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-3 rounded-xl bg-white p-4 text-left">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#66788a]">
                      Tu domicilio
                    </p>

                    <div className="grid gap-2.5">
                      {/* STREET */}
                      <input
                        type="text"
                        value={street}
                        onChange={(event) => setStreet(event.target.value)}
                        placeholder="Calle y número"
                        autoComplete="street-address"
                        className="h-12 w-full rounded-lg border border-[#102a43]/10 bg-[#f8fafb] px-4 text-sm font-medium text-[#102a43] outline-none transition-colors placeholder:text-[#8a97a5] focus:border-[#1769aa] focus:ring-2 focus:ring-[#1769aa]/10"
                      />

                      {/* POSTAL + CITY */}
                      <div className="grid grid-cols-[0.7fr_1.3fr] gap-2.5">
                        <input
                          type="text"
                          value={postalCode}
                          onChange={(event) =>
                            setPostalCode(event.target.value)
                          }
                          placeholder="C.P."
                          inputMode="numeric"
                          autoComplete="postal-code"
                          maxLength={5}
                          className="h-12 w-full rounded-lg border border-[#102a43]/10 bg-[#f8fafb] px-4 text-sm font-medium text-[#102a43] outline-none transition-colors placeholder:text-[#8a97a5] focus:border-[#1769aa] focus:ring-2 focus:ring-[#1769aa]/10"
                        />

                        <input
                          type="text"
                          value={city}
                          onChange={(event) => setCity(event.target.value)}
                          placeholder="Ciudad"
                          autoComplete="address-level2"
                          className="h-12 w-full rounded-lg border border-[#102a43]/10 bg-[#f8fafb] px-4 text-sm font-medium text-[#102a43] outline-none transition-colors placeholder:text-[#8a97a5] focus:border-[#1769aa] focus:ring-2 focus:ring-[#1769aa]/10"
                        />
                      </div>

                      {/* FLOOR / DOOR */}
                      <input
                        type="text"
                        value={details}
                        onChange={(event) => setDetails(event.target.value)}
                        placeholder="Piso / puerta (opcional)"
                        autoComplete="address-line2"
                        className="h-12 w-full rounded-lg border border-[#102a43]/10 bg-[#f8fafb] px-4 text-sm font-medium text-[#102a43] outline-none transition-colors placeholder:text-[#8a97a5] focus:border-[#1769aa] focus:ring-2 focus:ring-[#1769aa]/10"
                      />

                      <div className="mt-1 flex items-start gap-2 text-xs leading-5 text-[#66788a]">
                        <CheckCircle
                          size={15}
                          weight="fill"
                          className="mt-0.5 shrink-0 text-[#2fae60]"
                        />

                        <span>
                          Solo utilizaremos estos datos para ayudarte a
                          comprobar la cobertura.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ADDRESS PREVIEW */}
            {hasAddress && (
              <div className="mt-3 flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4 text-left">
                <CheckCircle
                  size={20}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-[#65c97c]"
                />

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
                    Se enviará a WiBe
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-white">
                    {address}
                  </p>
                </div>
              </div>
            )}

            {/* WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-[15px] font-extrabold text-white transition-all hover:scale-[1.02] hover:bg-[#1ebe5b] sm:w-auto"
            >
              Hablar por WhatsApp
              <ArrowUpRight size={18} weight="bold" />
            </a>

            {/* RESPONSE TIME */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60 lg:justify-start">
              <Clock size={16} />
              Respuesta en menos de 24h
            </div>
          </div>

          {/* RIGHT — LOTTIE */}
          <div className="relative hidden items-end justify-center overflow-visible lg:flex">
            <div className="w-full max-w-[640px] scale-125 -mb-10">
              <DotLottieReact src="/assets/WhatsApp.json" autoplay loop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
