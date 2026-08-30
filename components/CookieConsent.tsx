"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CookieIcon } from "@phosphor-icons/react/ssr";
import {
  getStoredConsent,
  acceptAll,
  rejectAll,
  saveConsent,
} from "@/lib/cookies";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = getStoredConsent();
    if (!existing) setVisible(true);
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    acceptAll();
    setVisible(false);
  };

  const handleReject = () => {
    rejectAll();
    setVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent({ analytics, marketing });
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
    >
      <div className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden">
        <div className="p-6 sm:p-7">
          <div className="flex items-start gap-3 mb-4">
            <div className="shrink-0 w-9 h-9 rounded-xl bg-[#0b2d55]/5 flex items-center justify-center">
              <CookieIcon size={20} className="text-[#0b2d55]" />
            </div>
            <div>
              <h2 className="text-[#0b2d55] font-extrabold text-base mb-1.5">
                Usamos cookies
              </h2>
              <p className="text-[13.5px] text-black/60 leading-relaxed">
                Utilizamos cookies propias y de terceros para el funcionamiento
                de la web, analizar el uso del sitio y mejorar tu experiencia.
                Puedes aceptarlas todas, rechazarlas o configurar tus
                preferencias. Consulta más información en nuestra{" "}
                <Link
                  href="/politica-cookies"
                  className="underline text-[#0b2d55] hover:text-[#1f8a5f]"
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </div>
          </div>

          {showConfig && (
            <div className="mt-4 mb-5 border-t border-black/10 pt-4 space-y-3.5">
              <label className="flex items-start justify-between gap-4 opacity-60">
                <span className="text-[13px] font-semibold text-[#0b2d55]">
                  Necesarias
                  <span className="block font-normal text-black/50 text-xs mt-0.5">
                    Imprescindibles para que la web funcione. Siempre activas.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 accent-[#0b2d55]"
                />
              </label>

              <label className="flex items-start justify-between gap-4">
                <span className="text-[13px] font-semibold text-[#0b2d55]">
                  Analíticas
                  <span className="block font-normal text-black/50 text-xs mt-0.5">
                    Nos ayudan a entender cómo se usa la web para mejorarla.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 accent-[#0b2d55]"
                />
              </label>

              <label className="flex items-start justify-between gap-4">
                <span className="text-[13px] font-semibold text-[#0b2d55]">
                  Marketing
                  <span className="block font-normal text-black/50 text-xs mt-0.5">
                    Usadas para mostrarte ofertas relevantes en otras webs.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 accent-[#0b2d55]"
                />
              </label>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleReject}
              className="flex-1 py-3 px-5 rounded-xl font-bold text-[13.5px] border border-[#0b2d55]/20 text-[#0b2d55] hover:bg-[#0b2d55]/5 transition-colors"
            >
              Rechazar
            </button>

            {showConfig ? (
              <button
                onClick={handleSavePreferences}
                className="flex-1 py-3 px-5 rounded-xl font-bold text-[13.5px] border border-[#0b2d55]/20 text-[#0b2d55] hover:bg-[#0b2d55]/5 transition-colors"
              >
                Guardar preferencias
              </button>
            ) : (
              <button
                onClick={() => setShowConfig(true)}
                className="flex-1 py-3 px-5 rounded-xl font-bold text-[13.5px] border border-[#0b2d55]/20 text-[#0b2d55] hover:bg-[#0b2d55]/5 transition-colors"
              >
                Configurar
              </button>
            )}

            <button
              onClick={handleAccept}
              className="flex-1 py-3 px-5 rounded-xl font-bold text-[13.5px] bg-[#0b2d55] text-white hover:bg-[#0a2547] transition-colors"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
