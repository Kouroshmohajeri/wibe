"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "@phosphor-icons/react/ssr";

const NAV_LINKS = [
  { href: "/planes", label: "Planes" },
  { href: "/plan-amigo", label: "Plan My Best Friend" },
  { href: "/comparador", label: "Comparador" },
  { href: "/porque", label: "Por qué WiBe" },
  { href: "/soporte", label: "Soporte" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setMounted(true);
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => setMounted(false), 350);
      return () => clearTimeout(t);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (mounted && menuOpen) {
      const raf = requestAnimationFrame(() => {
        setVisible(true);
        document.body.style.overflow = "hidden";
      });
      return () => cancelAnimationFrame(raf);
    } else if (!menuOpen) {
      setVisible(false);
    }
  }, [mounted, menuOpen]);

  const toggleMenu = () => setMenuOpen((v) => !v);

  const drawer = mounted ? (
    <>
      <div
        className={`md:hidden fixed inset-0 z-[90] bg-[#0b2d55]/40 transition-opacity duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      <div
        className={`md:hidden fixed inset-y-0 right-0 z-[100] w-full shadow-2xl transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="flex flex-col h-full px-6 pt-6 pb-10"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="flex items-center justify-between mb-10">
            <Image
              src="/assets/logo.webp"
              alt="WiBe Fibra"
              width={100}
              height={100}
              className="object-contain"
            />
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={toggleMenu}
              className="flex items-center justify-center w-11 h-11 rounded-full text-[#0b2d55] hover:bg-slate-100 transition-colors"
            >
              <HamburgerIcon open={visible} />
            </button>
          </div>

          <ul className="flex flex-col gap-1 text-lg font-bold uppercase tracking-wide text-[#0b2d55]">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className="border-b border-slate-100 overflow-hidden"
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-4 hover:text-[#2fae60] transition-all duration-300 ease-out ${
                    visible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{
                    transitionDelay: visible ? `${100 + i * 60}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#1565c0] to-[#2fae60] text-white py-4 px-6 font-bold text-sm shadow-md transition-all duration-300 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: visible ? "420ms" : "0ms" }}
          >
            Contratar <ArrowRight size={15} weight="bold" />
          </Link>
        </div>
      </div>
    </>
  ) : null;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between py-1 px-6">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/assets/logo.webp"
            alt="WiBe Fibra"
            width={128}
            height={128}
            priority
            className="object-contain"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-[#0b2d55]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-[#2fae60] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1565c0] to-[#2fae60] text-white py-3 px-6 font-bold text-sm shadow-md hover:opacity-90 transition-opacity"
          >
            Contratar <ArrowRight size={15} weight="bold" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          className="md:hidden relative z-[110] flex items-center justify-center w-11 h-11 rounded-full hover:bg-slate-100 transition-colors"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </nav>

      {portalReady && drawer && createPortal(drawer, document.body)}
    </header>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex items-center justify-center w-7 h-7">
      <span
        className={`absolute h-[2.5px] w-6 rounded-full bg-[#0b2d55] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "rotate-45 translate-y-0" : "-translate-y-[7px]"
        }`}
      />
      <span
        className={`absolute h-[2.5px] w-6 rounded-full bg-[#0b2d55] transition-all duration-200 ease-out ${
          open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
        }`}
      />
      <span
        className={`absolute h-[2.5px] w-6 rounded-full bg-[#0b2d55] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "-rotate-45 translate-y-0" : "translate-y-[7px]"
        }`}
      />
    </span>
  );
}
