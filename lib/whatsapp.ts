import type { OfferCandidate, InvoiceData } from "@/lib/compareOffers";
import { formatGb } from "@/lib/compareOffers";

const WHATSAPP_NUMBER = "34681800455";

export function buildOfferWhatsAppLink(
  offer: OfferCandidate,
  invoice: InvoiceData,
): string {
  const lineCount = invoice.mobile_lines?.length ?? 0;

  const linesText =
    lineCount > 0
      ? `${lineCount} ${
          lineCount === 1 ? "línea móvil" : "líneas móviles"
        }, ${formatGb(offer.plan.mobileGbPerLine)} por línea`
      : null;

  const lines = [
    `Hola WiBe, he comparado mi factura de ${
      invoice.provider || "mi operador actual"
    } y me interesa esta oferta:`,
    "",
    `Plan: ${offer.plan.title}`,
    `Precio: ${offer.totalMonthly} €/mes${
      offer.extraLines > 0
        ? ` (incluye ${offer.extraLines} línea(s) extra)`
        : ""
    }`,
    linesText ? `Líneas: ${linesText}` : null,
    offer.monthlySavings > 0
      ? `Ahorro estimado: ${offer.annualSavings.toFixed(0)} € al año`
      : null,
    "",
    "¿Podéis darme más información para cambiarme?",
  ].filter((line): line is string => line !== null);

  const message = lines.join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type PackWhatsAppLine = {
  name: string;
  price: number;
};

type PackWhatsAppDetails = {
  fibre: {
    speed: string;
    operator: string;
  };
  mobileLines: PackWhatsAppLine[];
  totalMonthly: number;
};

export function buildPackWhatsAppLink(pack: PackWhatsAppDetails): string {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-ES", {
      minimumFractionDigits: price % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(price);

  const mobileLinesText = pack.mobileLines
    .map(
      (line, index) =>
        `${index + 1}. ${line.name} — ${formatPrice(line.price)} €/mes`,
    )
    .join("\n");

  const message = [
    "¡Hola WiBe! Quiero contratar el siguiente pack de fibra y móvil:",
    "",
    "FIBRA",
    `${pack.fibre.speed} de ${pack.fibre.operator}`,
    "",
    `LÍNEAS MÓVILES (${pack.mobileLines.length})`,
    mobileLinesText,
    "",
    `PRECIO TOTAL DEL PACK: ${formatPrice(pack.totalMonthly)} €/mes`,
    "",
    "¿Podéis ayudarme a contratarlo y confirmarme las condiciones?",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
