import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/ssr";
import { PHONE_NUMBER, SUPPORT_EMAIL } from "@/lib/constants";

const FOOTER_LINKS = {
  planes: [
    { label: "Ver todas las tarifas", href: "/planes" },
    { label: "Plan Amigo", href: "/plan-amigo" },
    { label: "Comparador de factura", href: "/comparador" },
  ],
  empresa: [
    { label: "Por qué WiBe", href: "/porque" },
    { label: "Soporte", href: "/soporte" },
    { label: "Comprobar cobertura", href: "/contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0b2d55] text-white/70 pt-14 px-6 pb-8">
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="inline-flex items-center justify-center bg-white rounded-2xl p-3 mb-3 shadow-md">
            <Image
              src="/assets/logo.webp"
              alt="WiBe Fibra"
              width={72}
              height={72}
              className="object-contain"
            />
          </div>
          <p className="text-[13px]">
            Fibra propia y atención de verdad, en toda España.
          </p>
        </div>

        <div>
          <h5 className="text-white text-sm font-extrabold mb-3.5 uppercase tracking-wide">
            Planes
          </h5>
          <ul className="text-[13px] space-y-1.5">
            {FOOTER_LINKS.planes.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white text-sm font-extrabold mb-3.5 uppercase tracking-wide">
            Empresa
          </h5>
          <ul className="text-[13px] space-y-1.5">
            {FOOTER_LINKS.empresa.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
