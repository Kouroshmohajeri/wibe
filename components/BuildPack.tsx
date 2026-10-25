"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Broadcast,
  Check,
  DeviceMobile,
  Gauge,
  Plus,
  Sparkle,
  WifiHigh,
  X,
} from "@phosphor-icons/react";

import { buildPackWhatsAppLink } from "@/lib/whatsapp";

type Operator = "Orange" | "Movistar";
type Speed = "600 Mb" | "1 Gb";

type MobileOption = {
  id: string;
  name: string;
  price: number;
};

const FIBRE_PRICES: Record<Operator, Record<Speed, number>> = {
  Orange: { "600 Mb": 24, "1 Gb": 30 },
  Movistar: { "600 Mb": 27, "1 Gb": 33 },
};

const MOBILE_OPTIONS: MobileOption[] = [
  { id: "30gb", name: "30 GB acumulables", price: 3 },
  { id: "30gb-20gb", name: "30 GB + 20 GB acumulables", price: 5.9 },
  { id: "60gb", name: "60 GB acumulables", price: 11 },
  {
    id: "150gb-international",
    name: "150 GB + 1000 min internacionales",
    price: 11,
  },
  { id: "unlimited", name: "GB y llamadas ilimitados", price: 24 },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);

const sectionClass =
  "rounded-xl border border-slate-200 bg-white p-3.5 transition-colors hover:border-slate-300 sm:p-4";

const headingClass = "text-sm font-semibold text-[#102a43]";

const iconBoxClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf3fb] text-[#1769aa]";

export default function BuildPack() {
  const [selectedOperator, setSelectedOperator] = useState<Operator>("Orange");

  const [selectedSpeed, setSelectedSpeed] = useState<Speed>("600 Mb");

  const [mobileLines, setMobileLines] = useState<MobileOption[]>([
    MOBILE_OPTIONS[0],
  ]);

  const fibrePrice = FIBRE_PRICES[selectedOperator][selectedSpeed];

  const totalMonthly = useMemo(
    () =>
      fibrePrice + mobileLines.reduce((total, line) => total + line.price, 0),
    [fibrePrice, mobileLines],
  );

  const whatsappLink = buildPackWhatsAppLink({
    fibre: {
      speed: selectedSpeed,
      operator: selectedOperator,
    },
    mobileLines: mobileLines.map(({ name, price }) => ({ name, price })),
    totalMonthly,
  });

  const updateMobileLine = (index: number, optionId: string) => {
    const option = MOBILE_OPTIONS.find((item) => item.id === optionId);

    if (!option) return;

    setMobileLines((current) =>
      current.map((line, i) => (i === index ? option : line)),
    );
  };

  const addMobileLine = () => {
    setMobileLines((current) => [...current, MOBILE_OPTIONS[0]]);
  };

  const removeMobileLine = (index: number) => {
    if (mobileLines.length <= 1) return;

    setMobileLines((current) => current.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-0 bg-[#f8faf9] text-[#102a43]">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
        {/* Friendly introduction */}
        <header className="mb-5">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#dce9df] bg-white px-3 py-1 text-xs font-medium text-[#287d4a]">
            <Sparkle size={15} weight="fill" className="animate-pulse" />
            Tu conexión, a tu manera
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            TU FIBRA. TUS GB.{" "}
            <span className="text-[#1769aa]">TUS REGLAS.</span>
          </h1>

          <p className="mt-1.5 text-sm font-medium text-[#102a43]">
            No te adaptes a una tarifa. Crea la tuya.
          </p>

          <p className="mt-1 max-w-2xl text-sm leading-5 text-[#52606d]">
            En WIBEONLINE tú decides cómo quieres conectarte. Personaliza tu
            oferta a tu manera y paga por lo que realmente necesitas.
          </p>
        </header>

        {/* Feature strip */}
        <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <DeviceMobile
              size={21}
              weight="duotone"
              className="shrink-0 text-[#1769aa] transition-transform duration-200 hover:-translate-y-1"
            />
            <div>
              <p className="text-xs font-semibold">Tus GB</p>
              <p className="text-[11px] text-[#52606d]">A tu medida</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <Gauge
              size={21}
              weight="duotone"
              className="shrink-0 text-[#1769aa] transition-transform duration-200 hover:rotate-12"
            />
            <div>
              <p className="text-xs font-semibold">Tu fibra</p>
              <p className="text-[11px] text-[#52606d]">Tu velocidad</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <Broadcast
              size={21}
              weight="duotone"
              className="shrink-0 text-[#1769aa] transition-transform duration-200 hover:scale-110"
            />
            <div>
              <p className="text-xs font-semibold">Tu cobertura</p>
              <p className="text-[11px] text-[#52606d]">Orange o Movistar</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <WifiHigh
              size={22}
              weight="duotone"
              className="shrink-0 text-[#2fae60] transition-transform duration-200 hover:scale-110"
            />
            <div>
              <p className="text-xs font-semibold">Tu WiFi</p>
              <p className="text-[11px] text-[#52606d]">Tu hogar, tus reglas</p>
            </div>
          </div>
        </div>

        {/* Main layout: configuration left, sticky summary right */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-5">
          {/* LEFT: Configuration */}
          <div className="min-w-0 space-y-3">
            {/* Coverage */}
            <section className={sectionClass}>
              <div className="mb-3 flex items-center gap-2.5">
                <div className={iconBoxClass}>
                  <Broadcast size={21} weight="duotone" />
                </div>

                <div>
                  <h2 className={headingClass}>Elige tu cobertura</h2>
                  <p className="text-xs text-[#52606d]">
                    ¿Orange o Movistar? Tú decides.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {(["Orange", "Movistar"] as const).map((operator) => {
                  const selected = selectedOperator === operator;

                  return (
                    <button
                      key={operator}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setSelectedOperator(operator)}
                      className={`group flex items-center justify-between rounded-lg border px-3 py-2.5 text-left transition-all duration-200 ${
                        selected
                          ? "border-[#1769aa] bg-[#edf5fc] ring-1 ring-[#1769aa]/20"
                          : "border-slate-200 bg-white hover:border-[#1769aa]/60 hover:bg-[#f8fbff]"
                      }`}
                    >
                      <span className="text-sm font-semibold">{operator}</span>

                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                          selected
                            ? "border-[#1769aa] bg-[#1769aa] text-white"
                            : "border-slate-300 text-transparent group-hover:border-[#1769aa]"
                        }`}
                      >
                        <Check size={12} weight="bold" />
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Fibre speed */}
            <section className={sectionClass}>
              <div className="mb-3 flex items-center gap-2.5">
                <div className={iconBoxClass}>
                  <Gauge size={21} weight="duotone" />
                </div>

                <div>
                  <h2 className={headingClass}>Elige tu fibra</h2>
                  <p className="text-xs text-[#52606d]">
                    La velocidad que necesitas en casa.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {(["600 Mb", "1 Gb"] as const).map((speed) => {
                  const selected = selectedSpeed === speed;

                  return (
                    <button
                      key={speed}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setSelectedSpeed(speed)}
                      className={`group flex items-center justify-between rounded-lg border px-3 py-2.5 text-left transition-all duration-200 ${
                        selected
                          ? "border-[#1769aa] bg-[#edf5fc] ring-1 ring-[#1769aa]/20"
                          : "border-slate-200 bg-white hover:border-[#1769aa]/60 hover:bg-[#f8fbff]"
                      }`}
                    >
                      <span>
                        <span className="block text-sm font-semibold">
                          {speed}
                        </span>
                        <span className="text-[11px] text-[#52606d]">
                          {speed === "600 Mb"
                            ? "Perfecta para el día a día"
                            : "Más velocidad para todos"}
                        </span>
                      </span>

                      <span
                        className={`ml-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${
                          selected
                            ? "border-[#1769aa] bg-[#1769aa] text-white"
                            : "border-slate-300 text-transparent group-hover:border-[#1769aa]"
                        }`}
                      >
                        <Check size={12} weight="bold" />
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Mobile lines */}
            <section className={sectionClass}>
              <div className="mb-3 flex items-center gap-2.5">
                <div className={iconBoxClass}>
                  <DeviceMobile size={21} weight="duotone" />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className={headingClass}>Elige tus GB</h2>
                  <p className="text-xs text-[#52606d]">
                    Los datos móviles que van contigo.
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-[#edf5fc] px-2.5 py-1 text-xs font-medium text-[#1769aa]">
                  {mobileLines.length}{" "}
                  {mobileLines.length === 1 ? "línea" : "líneas"}
                </span>
              </div>

              <div className="space-y-2">
                {mobileLines.map((line, index) => (
                  <div
                    key={`${index}-${line.id}`}
                    className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 transition-colors hover:border-slate-300"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f1f4f1] text-xs font-semibold text-[#52606d]">
                      {index + 1}
                    </span>

                    <label htmlFor={`mobile-line-${index}`} className="sr-only">
                      Tarifa de la línea móvil {index + 1}
                    </label>

                    <select
                      id={`mobile-line-${index}`}
                      value={line.id}
                      onChange={(event) =>
                        updateMobileLine(index, event.target.value)
                      }
                      className="min-w-0 flex-1 rounded-md border-0 bg-transparent px-1 py-1.5 text-sm text-[#102a43] outline-none focus:ring-1 focus:ring-[#1769aa]"
                    >
                      {MOBILE_OPTIONS.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name} — {formatPrice(option.price)} €/mes
                        </option>
                      ))}
                    </select>

                    {mobileLines.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMobileLine(index)}
                        aria-label={`Eliminar línea ${index + 1}`}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[#52606d] transition-colors hover:bg-red-50 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addMobileLine}
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#1769aa]/40 px-3 py-2 text-xs font-semibold text-[#1769aa] transition-all hover:border-[#1769aa] hover:bg-[#edf5fc]"
              >
                <Plus size={15} weight="bold" />
                Añadir otra línea
              </button>
            </section>

            {/* Friendly closing message */}
            <div className="flex items-start gap-2 rounded-lg border border-[#dce9df] bg-[#f1f7f2] px-3 py-2.5">
              <Sparkle
                size={18}
                weight="fill"
                className="mt-0.5 shrink-0 text-[#2fae60]"
              />
              <p className="text-xs leading-5 text-[#365b43]">
                <span className="font-semibold">
                  Tu conexión. Tu combinación. Tu WIBE.
                </span>{" "}
                Combina las opciones a tu gusto y descubre una nueva forma de
                estar conectado.
              </p>
            </div>
          </div>

          {/* RIGHT: Sticky summary */}
          <aside className="min-w-0 lg:sticky lg:top-4">
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40">
              <div className="border-b border-slate-100 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf3fb] text-[#1769aa]">
                    <WifiHigh size={20} weight="duotone" />
                  </div>

                  <div>
                    <h2 className="text-sm font-bold">Tu pack WiBe</h2>
                    <p className="text-xs text-[#52606d]">Hecho a tu manera</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-[#52606d]">Cobertura</span>
                  <span className="rounded-md bg-[#f1f4f1] px-2 py-1 text-xs font-semibold">
                    {selectedOperator}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-[#52606d]">Tu fibra</span>
                  <span className="text-sm font-semibold">{selectedSpeed}</span>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#52606d]">
                      Tus líneas
                    </p>
                    <span className="text-xs text-[#52606d]">
                      {mobileLines.length}{" "}
                      {mobileLines.length === 1 ? "línea" : "líneas"}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {mobileLines.map((line, index) => (
                      <div
                        key={`${index}-${line.id}-summary`}
                        className="flex items-start justify-between gap-3 text-sm"
                      >
                        <div className="flex min-w-0 items-start gap-2">
                          <DeviceMobile
                            size={16}
                            className="mt-0.5 shrink-0 text-[#1769aa]"
                          />
                          <span className="text-[#52606d]">{line.name}</span>
                        </div>

                        <span className="shrink-0 font-medium">
                          {formatPrice(line.price)} €
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-[#f1f7f2] p-3.5">
                  <p className="text-xs font-medium text-[#52606d]">
                    Tu precio mensual
                  </p>

                  <div className="mt-1 flex items-baseline gap-1">
                    <span
                      key={totalMonthly}
                      className="animate-[priceIn_220ms_ease-out] text-3xl font-extrabold tracking-tight text-[#102a43]"
                    >
                      {formatPrice(totalMonthly)} €
                    </span>
                    <span className="text-sm text-[#52606d]">/mes</span>
                  </div>

                  <p className="mt-1 text-xs text-[#52606d]">
                    Fibra + todas tus líneas
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#2fae60] px-3 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#269451] hover:shadow-md hover:shadow-[#2fae60]/20 focus:outline-none focus:ring-2 focus:ring-[#2fae60] focus:ring-offset-2"
                >
                  ¡Vamos a crear mi pack!
                  <ArrowRight
                    size={17}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>

                <p className="text-center text-xs leading-4 text-[#52606d]">
                  ¿Tienes dudas?{" "}
                  <span className="font-medium text-[#102a43]">
                    Te ayudamos por WhatsApp.
                  </span>
                </p>
              </div>
            </section>
          </aside>
        </div>
      </div>

      {/* Small price-change animation */}
      <style jsx>{`
        @keyframes priceIn {
          from {
            opacity: 0.55;
            transform: translateY(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(*) {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
