"use client";

import { useState } from "react";

import {
  ArrowUp,
  Minus,
  DeviceMobile,
  HouseLine,
  WhatsappLogo,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react/ssr";

import {
  formatGb,
  type OfferCandidate,
  type InvoiceData,
} from "@/lib/compareOffers";

import { buildOfferWhatsAppLink } from "@/lib/whatsapp";

export default function OfferCarousel({
  offers,
  invoice,
}: {
  offers: OfferCandidate[];
  invoice: InvoiceData;
}) {
  const [active, setActive] = useState(0);

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + offers.length) % offers.length);
  };

  return (
    <div>
      <div className="relative h-[420px] sm:h-[400px] flex items-center justify-center">
        {offers.map((offer, i) => {
          const offset = i - active;
          const isActive = offset === 0;

          const isLeft =
            offset === -1 ||
            (offset === offers.length - 1 && offers.length > 2);

          const isRight =
            offset === 1 ||
            (offset === -(offers.length - 1) && offers.length > 2);

          let transform = "translateX(0) scale(0.8)";
          let opacity = 0;
          let zIndex = 0;

          if (isActive) {
            transform = "translateX(0) scale(1)";
            opacity = 1;
            zIndex = 30;
          } else if (isLeft) {
            transform = "translateX(-62%) scale(0.86) rotate(-4deg)";
            opacity = 0.55;
            zIndex = 20;
          } else if (isRight) {
            transform = "translateX(62%) scale(0.86) rotate(4deg)";
            opacity = 0.55;
            zIndex = 20;
          }

          return (
            <div
              key={offer.plan.id}
              onClick={() => !isActive && setActive(i)}
              className={`absolute w-[85%] sm:w-[380px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive ? "cursor-default" : "cursor-pointer"
              }`}
              style={{ transform, opacity, zIndex }}
            >
              <OfferCard offer={offer} invoice={invoice} dimmed={!isActive} />
            </div>
          );
        })}
      </div>

      {offers.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => go(-1)}
            aria-label="Oferta anterior"
            className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-[#0b2d55] hover:bg-slate-50 transition-colors"
          >
            <CaretLeft size={18} weight="bold" />
          </button>

          <div className="flex gap-1.5">
            {offers.map((offer, i) => (
              <button
                key={offer.plan.id}
                onClick={() => setActive(i)}
                aria-label={`Ver oferta ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-[#0b2d55]" : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Oferta siguiente"
            className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-[#0b2d55] hover:bg-slate-50 transition-colors"
          >
            <CaretRight size={18} weight="bold" />
          </button>
        </div>
      )}
    </div>
  );
}

function OfferCard({
  offer,
  invoice,
  dimmed,
}: {
  offer: OfferCandidate;
  invoice: InvoiceData;
  dimmed: boolean;
}) {
  const whatsappLink = buildOfferWhatsAppLink(offer, invoice);

  return (
    <div
      className={`rounded-[24px] bg-white border shadow-xl overflow-hidden select-none ${
        dimmed ? "border-slate-200" : "border-[#2fae60]"
      }`}
    >
      <div className="bg-gradient-to-br from-[#0b2d55] to-[#1f8a5f] text-white p-5 text-center">
        <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">
          {offer.isCheaper ? "Oferta recomendada" : "Alternativa"}
        </p>

        <p className="text-xl font-extrabold mt-1">{offer.plan.title}</p>

        <p className="text-3xl font-extrabold mt-2">
          {offer.totalMonthly}€
          <span className="text-sm font-semibold text-white/70">/mes</span>
        </p>

        {offer.extraLines > 0 && (
          <p className="text-[11px] text-white/60 mt-1">
            Incluye {offer.extraLines} línea(s) extra (+
            {offer.extraLinesCost}€)
          </p>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-[#5b7290]">
            <HouseLine size={16} />
            Fibra
          </span>

          <span className="font-bold text-[#0b2d55] flex items-center gap-1">
            {offer.fiberComparison.improved ? (
              <ArrowUp size={13} weight="bold" className="text-[#2fae60]" />
            ) : (
              <Minus size={13} className="text-slate-300" />
            )}

            {offer.fiberComparison.offered}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-[#5b7290]">
            <DeviceMobile size={16} />
            Datos por línea
          </span>

          <span className="font-bold text-[#0b2d55]">
            {formatGb(offer.plan.mobileGbPerLine)}
          </span>
        </div>

        {/* Número real de líneas detectadas en la factura */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#5b7290]">Líneas móviles</span>

          <span className="font-bold text-[#0b2d55]">
            {invoice.mobile_lines.length}
          </span>
        </div>

        {/* Mostrar las líneas adicionales que necesita el cliente */}
        {offer.extraLines > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#5b7290]">Líneas extra</span>

            <span className="font-bold text-[#0b2d55]">
              {offer.extraLines}{" "}
              <span className="font-semibold text-[#5b7290]">
                (+{offer.extraLinesCost}€)
              </span>
            </span>
          </div>
        )}

        {offer.monthlySavings > 0 ? (
          <div className="rounded-xl bg-[#eaf7ee] text-center py-2.5 mt-2">
            <p className="text-sm font-extrabold text-[#2fae60]">
              Ahorras {offer.annualSavings.toFixed(0)}€/año
            </p>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-50 text-center py-2.5 mt-2">
            <p className="text-xs font-semibold text-slate-500">
              Precio similar al actual
            </p>
          </div>
        )}

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => dimmed && e.preventDefault()}
          className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] text-white py-3.5 font-bold text-sm hover:bg-[#1ebe5b] transition-colors"
        >
          <WhatsappLogo size={18} weight="fill" />
          Lo quiero
        </a>
      </div>
    </div>
  );
}
