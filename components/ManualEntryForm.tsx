"use client";

import { useState } from "react";
import {
  Plus,
  Trash,
  ArrowRight,
  Infinity as InfinityIcon,
} from "@phosphor-icons/react/ssr";
import type { InvoiceData, MobileLine } from "@/lib/compareOffers";

type LineDraft = {
  number: string;
  data_gb: number;
  unlimited: boolean;
};

export default function ManualEntryForm({
  onSubmit,
}: {
  onSubmit: (invoice: InvoiceData) => void;
}) {
  const [provider, setProvider] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [fiberSpeed, setFiberSpeed] = useState("600");
  const [lines, setLines] = useState<LineDraft[]>([
    { number: "Línea 1", data_gb: 20, unlimited: false },
  ]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const addLine = () => {
    setLines((prev) => [
      ...prev,
      { number: `Línea ${prev.length + 1}`, data_gb: 20, unlimited: false },
    ]);
    setExpandedIndex(lines.length);
  };

  const removeLine = (index: number) => {
    setLines((prev) => prev.filter((_, i) => i !== index));
    setExpandedIndex((prev) => (prev === index ? null : prev));
  };

  const updateLineGb = (index: number, gb: number) => {
    setLines((prev) =>
      prev.map((l, i) => (i === index ? { ...l, data_gb: gb } : l)),
    );
  };

  const toggleUnlimited = (index: number, unlimited: boolean) => {
    setLines((prev) =>
      prev.map((l, i) => (i === index ? { ...l, unlimited } : l)),
    );
  };

  const toggleExpanded = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mobile_lines: MobileLine[] = lines.map((l) => ({
      number: l.number,
      data_gb: l.unlimited ? 999 : l.data_gb,
    }));

    const invoice: InvoiceData = {
      provider: provider.trim() || "tu operador actual",
      monthly_price: parseFloat(monthlyPrice) || 0,
      fiber_speed_mb: parseInt(fiberSpeed, 10) || 0,
      fiber_symmetric: false,
      mobile_lines,
      has_permanence: false,
    };
    onSubmit(invoice);
  };

  const isValid = monthlyPrice.trim() !== "" && parseFloat(monthlyPrice) > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] bg-white border border-slate-200 shadow-lg p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-xs font-bold text-[#5b7290] uppercase tracking-wide mb-1.5">
            Operador actual
          </label>
          <input
            type="text"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            placeholder="Movistar, Vodafone, Orange..."
            className="w-full rounded-xl border border-slate-300 py-3 px-4 text-sm focus:outline-none focus:border-[#1565c0] focus:ring-2 focus:ring-[#1565c0]/20"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#5b7290] uppercase tracking-wide mb-1.5">
            Precio mensual actual (€) *
          </label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            value={monthlyPrice}
            onChange={(e) => setMonthlyPrice(e.target.value)}
            placeholder="45"
            className="w-full rounded-xl border border-slate-300 py-3 px-4 text-sm focus:outline-none focus:border-[#1565c0] focus:ring-2 focus:ring-[#1565c0]/20"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold text-[#5b7290] uppercase tracking-wide mb-1.5">
          Velocidad de fibra
        </label>
        <select
          value={fiberSpeed}
          onChange={(e) => setFiberSpeed(e.target.value)}
          className="w-full rounded-xl border border-slate-300 py-3 px-4 text-sm bg-white focus:outline-none focus:border-[#1565c0]"
        >
          <option value="0">No tengo fibra</option>
          <option value="300">300 Mb</option>
          <option value="600">600 Mb</option>
          <option value="1000">1 Gb</option>
        </select>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold text-[#5b7290] uppercase tracking-wide">
            Líneas móviles
          </label>
          <button
            type="button"
            onClick={addLine}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#1565c0] hover:text-[#2fae60] transition-colors"
          >
            <Plus size={14} weight="bold" /> Añadir línea
          </button>
        </div>

        <div className="space-y-2">
          {lines.map((line, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-[#1565c0] bg-[#f6f9fc]"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div
                  onClick={() => toggleExpanded(i)}
                  className="flex items-center justify-between py-3 px-4 cursor-pointer select-none"
                >
                  <span className="text-sm font-semibold text-[#0b2d55]">
                    Línea {i + 1}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#5b7290]">
                      {line.unlimited ? "Ilimitados" : `${line.data_gb} GB`}
                    </span>
                    {lines.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeLine(i);
                        }}
                        aria-label="Eliminar línea"
                        className="w-8 h-8 flex items-center justify-center rounded-full text-red-400 hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <Trash size={16} />
                      </button>
                    )}
                  </div>
                </div>

                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isExpanded ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 pt-1 flex items-center gap-3">
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="5"
                        disabled={line.unlimited}
                        value={line.data_gb}
                        onChange={(e) =>
                          updateLineGb(i, parseInt(e.target.value, 10) || 0)
                        }
                        className="flex-1 accent-[#1565c0] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      />
                      <input
                        type="number"
                        min="0"
                        disabled={line.unlimited}
                        value={line.data_gb}
                        onChange={(e) =>
                          updateLineGb(i, parseInt(e.target.value, 10) || 0)
                        }
                        className="w-20 rounded-lg border border-slate-300 py-2 px-2.5 text-sm text-center focus:outline-none focus:border-[#1565c0] disabled:opacity-40 disabled:bg-slate-50"
                      />
                      <button
                        type="button"
                        onClick={() => toggleUnlimited(i, !line.unlimited)}
                        className={`shrink-0 inline-flex items-center gap-1.5 rounded-full py-2 px-3.5 text-xs font-bold transition-colors cursor-pointer ${
                          line.unlimited
                            ? "bg-[#2fae60] text-white"
                            : "bg-slate-100 text-[#5b7290] hover:bg-slate-200"
                        }`}
                      >
                        <InfinityIcon size={14} weight="bold" /> Ilimitados
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#0b2d55] text-white py-4 font-bold text-sm hover:bg-[#132f5c] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
      >
        Comparar mi oferta <ArrowRight size={16} weight="bold" />
      </button>
    </form>
  );
}
