import Image from "next/image";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/ssr";
import { PHONE_NUMBER, SUPPORT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0b2d55] text-white/70 pt-14 px-6 pb-8">
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <Image
            src="/assets/logo.webp"
            alt="WiBe Fibra"
            width={90}
            height={90}
            className="mb-3 object-contain"
          />
          <p className="text-[13px]">
            Fibra propia y atención de verdad, en toda España.
          </p>
        </div>
        <div>
          <h5 className="text-white text-sm font-extrabold mb-3.5 uppercase tracking-wide">
            Planes
          </h5>
          <ul className="text-[13px] space-y-1.5">
            <li>Fibra 600 + 30GB</li>
            <li>Fibra 600 + 60GB</li>
            <li>Fibra 1000 + ilimitadas</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white text-sm font-extrabold mb-3.5 uppercase tracking-wide">
            Empresa
          </h5>
          <ul className="text-[13px] space-y-1.5">
            <li>Sobre WiBe</li>
            <li>Plan Amigo</li>
            <li>Cobertura</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white text-sm font-extrabold mb-3.5 uppercase tracking-wide">
            Contacto
          </h5>
          <ul className="text-[13px] space-y-1.5">
            <li className="flex items-center gap-2">
              <EnvelopeSimple size={15} /> {SUPPORT_EMAIL}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} /> {PHONE_NUMBER}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} /> Barcelona, España
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-10 pt-6 border-t border-white/10 text-white/40">
        © 2026 WiBe · wibeonline.es
      </div>
    </footer>
  );
}
