"use client";

import { useState, useRef, useEffect, type DragEvent } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  UploadSimple,
  FileText,
  WarningCircle,
  Sparkle,
  PencilSimple,
  ArrowLeft,
  ArrowUpRight,
} from "@phosphor-icons/react/ssr";
import {
  getOfferCandidates,
  type InvoiceData,
  type OfferCandidate,
} from "@/lib/compareOffers";
import OfferCarousel from "@/components/OfferCarousel";
import ManualEntryForm from "@/components/ManualEntryForm";

type Mode = "choice" | "manual" | "upload";

type Stage =
  | "idle"
  | "uploading"
  | "matching"
  | "found"
  | "error"
  | "not-telecom";

const LOTTIE = {
  uploading:
    "https://lottie.host/1f309f64-6004-4caa-a136-4891a208cdd7/cJ1BpOX2qR.lottie",
  matching:
    "https://lottie.host/b13b1f24-9705-4e68-b0a0-e7673e24b1b0/M4U044miTH.lottie",
  found:
    "https://lottie.host/9f3931c9-ad29-4648-9e0f-42545649eb0d/Sp5Gyaa8VG.lottie",
};

export default function InvoiceComparator() {
  const [mode, setMode] = useState<Mode>("choice");
  const [stage, setStage] = useState<Stage>("idle");
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [invoice, setInvoice] = useState<InvoiceData | null>(null);
  const [offers, setOffers] = useState<OfferCandidate[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [detectedType, setDetectedType] = useState<string | null>(null);
  const [showFound, setShowFound] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (stage === "found") {
      setShowFound(true);
    } else {
      setShowFound(false);
    }
  }, [stage]);

  const finishWithInvoice = (data: InvoiceData) => {
    const candidates = getOfferCandidates(data);

    setInvoice(data);
    setOffers(candidates);
    setStage("found");
  };

  const handleFile = async (file: File) => {
    setStage("uploading");
    setErrorMsg(null);
    setDetectedType(null);
    setFileName(file.name);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/extract-invoice", {
        method: "POST",
        body: formData,
      });

      setStage("matching");

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "No se pudo procesar la factura.");
      }

      if (data.notTelecomInvoice) {
        setDetectedType(data.detectedType);
        setStage("not-telecom");
        return;
      }

      if (!Array.isArray(data.mobile_lines)) {
        throw new Error(
          "No hemos podido leer las líneas móviles de la factura.",
        );
      }

      finishWithInvoice(data as InvoiceData);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Error inesperado.");
      setStage("error");
    }
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      handleFile(file);
    }
  };

  const reset = () => {
    setMode("choice");
    setStage("idle");
    setFileName(null);
    setInvoice(null);
    setOffers([]);
    setErrorMsg(null);
    setDetectedType(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const backToChoice = () => {
    setStage("idle");
    setMode("choice");
  };

  const isLoadingStage = stage === "uploading" || stage === "matching";

  if (mode === "choice") {
    return (
      <div className="max-w-[680px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        <button
          onClick={() => setMode("manual")}
          className="group text-left rounded-[24px] bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#1565c0]/40 transition-all p-7"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#eaf3ff] text-[#1565c0] flex items-center justify-center mb-4">
            <PencilSimple size={26} weight="bold" />
          </div>

          <h3 className="font-extrabold text-[#0b2d55] text-lg mb-1.5">
            No tengo la factura a mano
          </h3>

          <p className="text-sm text-[#5b7290] mb-4">
            Introduce tus datos manualmente: precio, líneas y velocidad de
            fibra.
          </p>

          <span className="inline-flex items-center gap-1 text-sm font-bold text-[#1565c0] group-hover:gap-2 transition-all">
            Rellenar datos
            <ArrowUpRight size={15} weight="bold" />
          </span>
        </button>

        <button
          onClick={() => setMode("upload")}
          className="group text-left rounded-[24px] bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2fae60]/40 transition-all p-7"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#eaf7ee] text-[#2fae60] flex items-center justify-center mb-4">
            <Sparkle size={26} weight="fill" />
          </div>

          <h3 className="font-extrabold text-[#0b2d55] text-lg mb-1.5">
            Comparar con IA
          </h3>

          <p className="text-sm text-[#5b7290] mb-4">
            Sube tu factura y nuestra IA extrae y compara los datos
            automáticamente.
          </p>

          <span className="inline-flex items-center gap-1 text-sm font-bold text-[#2fae60] group-hover:gap-2 transition-all">
            Subir factura
            <ArrowUpRight size={15} weight="bold" />
          </span>
        </button>
      </div>
    );
  }

  if (mode === "manual" && stage === "idle") {
    return (
      <div className="max-w-[680px] mx-auto">
        <button
          onClick={backToChoice}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5b7290] hover:text-[#0b2d55] transition-colors mb-5"
        >
          <ArrowLeft size={15} weight="bold" />
          Volver
        </button>

        <ManualEntryForm onSubmit={finishWithInvoice} />
      </div>
    );
  }

  return (
    <div className="max-w-[680px] mx-auto">
      {mode === "upload" && stage === "idle" && (
        <>
          <button
            onClick={backToChoice}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5b7290] hover:text-[#0b2d55] transition-colors mb-5"
          >
            <ArrowLeft size={15} weight="bold" />
            Volver
          </button>

          <div className="aurora-container">
            <div className="aurora-layer">
              <div className="aurora-blob aurora-blob-1" />
              <div className="aurora-blob aurora-blob-2" />
              <div className="aurora-blob aurora-blob-3" />
            </div>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={onDrop}
              onClick={() => inputRef.current?.click()}
              className={`aurora-content ${
                dragActive ? "bg-[#eaf7ee]" : "bg-white hover:bg-slate-50"
              }`}
            >
              <input
                ref={inputRef}
                type="file"
                accept="application/pdf,image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    handleFile(file);
                  }
                }}
              />

              <div className="w-16 h-16 rounded-2xl bg-[#eaf3ff] text-[#1565c0] flex items-center justify-center mx-auto mb-4">
                <UploadSimple size={28} weight="bold" />
              </div>

              <p className="font-extrabold text-[#0b2d55] mb-1">
                Arrastra tu factura aquí o haz clic para subirla
              </p>

              <p className="text-sm text-[#5b7290] mb-4">
                PDF, JPG, PNG o WEBP — máx. 10 MB
              </p>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 py-1.5 px-3.5 text-[11px] font-semibold text-[#5b7290]">
                <Sparkle size={13} weight="fill" className="text-[#2fae60]" />
                Analizado con IA para mayor precisión
              </div>
            </div>
          </div>
        </>
      )}

      {isLoadingStage && (
        <div className="rounded-[24px] border border-slate-200 bg-white p-12 text-center overflow-hidden">
          <div className="relative h-48 w-48 mx-auto mb-2">
            <div
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                stage === "uploading" ? "opacity-100" : "opacity-0"
              }`}
            >
              <DotLottieReact src={LOTTIE.uploading} autoplay loop />
            </div>

            <div
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                stage === "matching" ? "opacity-100" : "opacity-0"
              }`}
            >
              <DotLottieReact src={LOTTIE.matching} autoplay loop />
            </div>
          </div>

          <p className="font-bold text-[#0b2d55] mb-1">
            {stage === "uploading"
              ? "Leyendo tu factura…"
              : "Buscando tu mejor oferta…"}
          </p>

          <p className="text-sm text-[#5b7290] mb-3">{fileName}</p>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 py-1.5 px-3.5 text-[11px] font-semibold text-[#5b7290]">
            <Sparkle size={13} weight="fill" className="text-[#2fae60]" />
            Comparación realizada con inteligencia artificial
          </div>
        </div>
      )}

      {stage === "not-telecom" && (
        <div className="rounded-[24px] border border-amber-200 bg-amber-50 p-8 text-center">
          <WarningCircle size={40} className="mx-auto mb-3 text-amber-500" />

          <p className="font-bold text-amber-800 mb-1">
            Este documento no parece una factura de fibra y móvil
          </p>

          <p className="text-sm text-amber-700 mb-6">
            Hemos detectado {detectedType || "un documento no relacionado"}.
            Sube una factura de telecomunicaciones (fibra, internet o móvil)
            para poder compararla.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setStage("idle")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 text-white py-3 px-6 font-bold text-sm hover:bg-amber-600 transition-colors"
            >
              Probar con otro archivo
            </button>

            <a
              href="/planes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 text-amber-700 py-3 px-6 font-semibold text-sm hover:bg-amber-100 transition-colors"
            >
              Ver nuestros planes
              <ArrowUpRight size={15} weight="bold" />
            </a>
          </div>
        </div>
      )}

      {stage === "error" && (
        <div className="rounded-[24px] border border-red-200 bg-red-50 p-8 text-center">
          <WarningCircle size={40} className="mx-auto mb-3 text-red-500" />

          <p className="font-bold text-red-700 mb-1">
            No hemos podido procesar la factura
          </p>

          <p className="text-sm text-red-600 mb-5">{errorMsg}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setStage("idle")}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white py-3 px-6 font-bold text-sm hover:bg-red-700 transition-colors"
            >
              Intentar de nuevo
            </button>

            <a
              href="/planes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-red-300 text-red-700 py-3 px-6 font-semibold text-sm hover:bg-red-100 transition-colors"
            >
              Ver nuestros planes
              <ArrowUpRight size={15} weight="bold" />
            </a>
          </div>
        </div>
      )}

      {stage === "found" && invoice && offers.length > 0 && (
        <div
          className={`space-y-6 transition-all duration-300 ease-out ${
            showFound ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center">
            <div className="h-16 w-16 mx-auto">
              <DotLottieReact src={LOTTIE.found} autoplay loop={false} />
            </div>

            <p className="text-sm font-semibold text-[#0b2d55]">
              {mode === "upload"
                ? `Factura de ${
                    invoice.provider || "tu operador actual"
                  } analizada`
                : "Datos comparados"}
            </p>

            <p className="text-xs text-[#5b7290] mt-0.5">
              Pagas {invoice.monthly_price}€/mes por fibra +{" "}
              {invoice.mobile_lines.length}{" "}
              {invoice.mobile_lines.length === 1
                ? "línea móvil"
                : "líneas móviles"}
            </p>

            {mode === "upload" && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 py-1.5 px-3.5 text-[11px] font-semibold text-[#5b7290] mt-2">
                <Sparkle size={13} weight="fill" className="text-[#2fae60]" />
                Datos extraídos y comparados automáticamente con IA
              </div>
            )}
          </div>

          <OfferCarousel offers={offers} invoice={invoice} />

          <div className="text-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-600 py-3 px-6 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              <FileText size={16} />
              Probar de nuevo
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .aurora-container {
          position: relative;
          border-radius: 24px;
        }

        .aurora-layer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          overflow: hidden;
          filter: blur(40px);
          z-index: 0;
        }

        .aurora-blob {
          position: absolute;
          width: 45%;
          height: 65%;
          border-radius: 50%;
          opacity: 0.55;
        }

        .aurora-blob-1 {
          top: -10%;
          left: -10%;
          background: #1565c0;
          animation: auroraMove1 7s ease-in-out infinite;
        }

        .aurora-blob-2 {
          bottom: -10%;
          right: -10%;
          background: #2fae60;
          animation: auroraMove2 8s ease-in-out infinite;
        }

        .aurora-blob-3 {
          top: 30%;
          left: 30%;
          width: 40%;
          height: 40%;
          background: #5ec26a;
          animation: auroraMove3 6s ease-in-out infinite;
        }

        .aurora-content {
          position: relative;
          z-index: 1;
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin: 3px;
        }

        @keyframes auroraMove1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          33% {
            transform: translate(20%, 15%) scale(1.15);
          }

          66% {
            transform: translate(-10%, 10%) scale(0.9);
          }
        }

        @keyframes auroraMove2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          33% {
            transform: translate(-15%, -15%) scale(0.9);
          }

          66% {
            transform: translate(10%, -5%) scale(1.2);
          }
        }

        @keyframes auroraMove3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-15%, 15%) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
