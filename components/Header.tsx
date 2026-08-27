import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between py-1 px-6">
        <a href="#" className="flex items-center">
          <Image
            src="/assets/logo.webp"
            alt="WiBe Fibra"
            width={128}
            height={128}
            priority
            className="object-contain"
          />
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-[#0b2d55]">
          <li>
            <a
              href="#planes"
              className="hover:text-[#2fae60] transition-colors"
            >
              Planes
            </a>
          </li>
          <li>
            <a href="#amigo" className="hover:text-[#2fae60] transition-colors">
              Plan Amigo
            </a>
          </li>
          <li>
            <a
              href="#porque"
              className="hover:text-[#2fae60] transition-colors"
            >
              Por qué WiBe
            </a>
          </li>
          <li>
            <a
              href="#soporte"
              className="hover:text-[#2fae60] transition-colors"
            >
              Soporte
            </a>
          </li>
        </ul>
        <a
          href="#contacto"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1565c0] to-[#2fae60] text-white py-3 px-6 font-bold text-sm shadow-md hover:opacity-90 transition-opacity"
        >
          Contratar <ArrowRight size={15} weight="bold" />
        </a>
      </nav>
    </header>
  );
}
