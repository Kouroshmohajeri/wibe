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
      ? `${lineCount} ${lineCount === 1 ? "linea movil" : "lineas moviles"}, ${formatGb(
          offer.plan.mobileGbPerLine,
        )} por linea`
      : null;

  const lines = [
    `Hola WiBe, he comparado mi factura de ${invoice.provider || "mi operador actual"} y me interesa esta oferta:`,
    ``,
    `Plan: ${offer.plan.title}`,
    `Precio: ${offer.totalMonthly}€/mes${
      offer.extraLines > 0
        ? ` (incluye ${offer.extraLines} linea(s) extra)`
        : ""
    }`,
    linesText ? `Lineas: ${linesText}` : null,
    offer.monthlySavings > 0
      ? `Ahorro estimado: ${offer.annualSavings.toFixed(0)}€ al año`
      : null,
    ``,
    `¿Podéis darme más información para cambiarme?`,
  ].filter((line): line is string => line !== null);

  const message = lines.join("\n");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
