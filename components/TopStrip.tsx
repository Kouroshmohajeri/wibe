import { Phone, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { PHONE_NUMBER, PHONE_TEL, SUPPORT_EMAIL } from "@/lib/constants";

export default function TopStrip() {
  return (
    <div className="bg-[#0b2d55] text-white/75 text-[12.5px] font-medium py-2 px-6 flex flex-wrap justify-center gap-6 sm:gap-8">
      <a
        href={PHONE_TEL}
        className="flex items-center gap-1.5 hover:text-white transition-colors"
      >
        <Phone size={14} weight="bold" /> {PHONE_NUMBER}
      </a>
      <a
        href={`mailto:${SUPPORT_EMAIL}`}
        className="flex items-center gap-1.5 hover:text-white transition-colors"
      >
        <EnvelopeSimple size={14} weight="bold" /> {SUPPORT_EMAIL}
      </a>
    </div>
  );
}
