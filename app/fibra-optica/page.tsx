import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  GameController,
  HouseLine,
  Laptop,
  PlayCircle,
  WifiHigh,
} from "@phosphor-icons/react/ssr";

import ScrollReveal from "@/components/ScrollReveal";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import CoverageCta from "@/components/CoverageCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fibra Óptica en España | Internet Rápido y Estable",
  description:
    "Fibra óptica con WiBe: Internet rápido y estable para tu hogar, con precios claros y atención de verdad. Descubre nuestros planes de fibra y comprueba tu cobertura.",
  alternates: {
    canonical: "https://wibeonline.es/fibra-optica",
  },
  openGraph: {
    title: "Fibra Óptica en España | WiBe",
    description:
      "Internet rápido y estable para tu hogar. Descubre la fibra óptica de WiBe y comprueba tu cobertura.",
    url: "https://wibeonline.es/fibra-optica",
    siteName: "WiBe",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibra Óptica en España | WiBe",
    description:
      "Internet rápido y estable para tu hogar, con precios claros y atención de verdad.",
  },
};

const faqItems = [
  {
    question: "¿Qué es la fibra óptica?",
    answer:
      "La fibra óptica es una tecnología de conexión a Internet que transmite los datos mediante fibra, ofreciendo una conexión rápida y estable para el hogar.",
  },
  {
    question: "¿Qué velocidad de fibra necesito?",
    answer:
      "Depende del número de personas y del uso que hagáis de Internet. Para navegar, trabajar, ver contenido en streaming y utilizar varios dispositivos, una conexión de 600 Mb puede ser suficiente para muchos hogares. Los hogares con un uso más intensivo pueden optar por 1 Gb.",
  },
  {
    question: "¿600 Mb son suficientes para una casa?",
    answer:
      "Para muchos hogares, 600 Mb ofrecen suficiente capacidad para navegar, realizar videollamadas, trabajar, ver contenido en streaming y utilizar varios dispositivos al mismo tiempo.",
  },
  {
    question: "¿Para quién es recomendable una fibra de 1 Gb?",
    answer:
      "1 Gb puede resultar especialmente interesante para hogares con muchos dispositivos conectados, descargas frecuentes, videojuegos online, streaming de alta calidad o varios usuarios utilizando Internet intensivamente al mismo tiempo.",
  },
  {
    question: "¿Cómo puedo saber si tengo cobertura de fibra WiBe?",
    answer:
      "Puedes comprobar la disponibilidad de WiBe para tu domicilio a través de nuestro proceso de cobertura. La disponibilidad depende de la dirección de instalación.",
  },
  {
    question: "¿Puedo combinar fibra y móvil con WiBe?",
    answer:
      "Sí. WiBe ofrece tarifas que combinan fibra y móvil. Puedes consultar todas las opciones disponibles en nuestra página de planes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const heroImage =
  "https://images.unsplash.com/photo-1758874385124-a56a148d7bcc?auto=format&fit=crop&fm=jpg&q=85&w=2200";

const lifestyleImage =
  "https://images.unsplash.com/photo-1758687126254-03b19c28c4a2?auto=format&fit=crop&fm=jpg&q=85&w=1800";

export default function FibraOpticaPage() {
  return (
    <>
      <TopStrip />
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1320px] px-4 py-4 sm:px-6 md:py-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[24px] bg-[#f1f4f1] lg:grid-cols-[0.92fr_1.08fr]">
              {/* Hero copy */}
              <div className="flex flex-col justify-center px-6 py-10 sm:px-9 md:px-12 lg:px-14 lg:py-14">
                <ScrollReveal y={15}>
                  <div className="mb-5 flex items-center gap-2 text-sm font-bold text-[#1769aa]">
                    <WifiHigh size={19} weight="bold" />
                    Fibra óptica WiBe
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={70} y={20}>
                  <h1 className="max-w-[620px] text-[2.65rem] font-black leading-[0.97] tracking-[-0.055em] text-[#102a43] sm:text-5xl md:text-[3.65rem] lg:text-[4.15rem]">
                    Internet que funciona.
                    <span className="block text-[#1769aa]">
                      Sin complicaciones.
                    </span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={140} y={16}>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[#52606d] md:text-lg">
                    Fibra rápida y estable para trabajar, ver tus series, jugar
                    y conectar todos tus dispositivos en casa.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={210} y={15}>
                  <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                    <Link
                      href="/planes"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#102a43] px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#1769aa]"
                    >
                      Ver tarifas
                      <ArrowRight size={17} weight="bold" />
                    </Link>

                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#102a43]/15 bg-white px-5 py-3 text-sm font-bold text-[#102a43] transition-colors duration-200 hover:border-[#102a43]/30"
                    >
                      Comprobar cobertura
                    </Link>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={280} y={10}>
                  <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 border-t border-[#102a43]/10 pt-4 text-xs text-[#52606d] sm:text-sm">
                    <span>
                      <strong className="font-black text-[#102a43]">
                        600 Mb
                      </strong>{" "}
                      para el día a día
                    </span>

                    <span>
                      <strong className="font-black text-[#102a43]">
                        1 Gb
                      </strong>{" "}
                      para un uso intensivo
                    </span>
                  </div>
                </ScrollReveal>
              </div>

              {/* Hero image */}
              <ScrollReveal
                delay={100}
                y={20}
                className="relative min-h-[330px] sm:min-h-[380px] lg:min-h-[520px]"
              >
                <Image
                  src={heroImage}
                  alt="Persona utilizando un portátil desde casa"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
                  <div className="max-w-sm bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.14)]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1769aa]">
                      Fibra para tu hogar
                    </p>

                    <p className="mt-1.5 text-base font-black leading-snug text-[#102a43] md:text-lg">
                      Conecta lo importante. Y disfruta de lo demás.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* EDITORIAL STATEMENT */}
        <section className="border-y border-[#102a43]/10 bg-white">
          <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-16">
            <ScrollReveal>
              <div className="grid gap-6 md:grid-cols-[0.65fr_1.35fr] md:gap-14">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                    Fibra óptica
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.05em] text-[#102a43] md:text-4xl lg:text-[2.7rem]">
                    Una buena conexión desaparece.
                    <span className="block text-[#66788a]">
                      Simplemente haces lo que quieres.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#52606d] md:text-lg">
                    Trabajar desde casa, ver una película, hacer una
                    videollamada o conectar todos los dispositivos de la
                    familia. La fibra está ahí para que todo funcione.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SPEED */}
        <section className="bg-[#f1f4f1]">
          <div className="mx-auto max-w-[1180px] px-6 py-14 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-12">
              <ScrollReveal>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                    Elige tu velocidad
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.05em] text-[#102a43] md:text-4xl">
                    ¿Cuánta fibra necesitas?
                  </h2>

                  <p className="mt-4 max-w-md text-base leading-7 text-[#52606d]">
                    Elige según el número de personas, dispositivos y el uso que
                    haces de Internet en casa.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-3 md:grid-cols-2">
                <ScrollReveal delay={80}>
                  <SpeedChoice
                    speed="600"
                    unit="Mb"
                    title="Para el día a día"
                    text="Trabajar, estudiar, hacer videollamadas, ver contenido y conectar varios dispositivos."
                    href="/planes"
                  />
                </ScrollReveal>

                <ScrollReveal delay={140}>
                  <SpeedChoice
                    speed="1"
                    unit="Gb"
                    title="Para un uso intensivo"
                    text="Más capacidad para hogares con muchos dispositivos, gaming, descargas o varios usuarios."
                    href="/planes"
                    featured
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <ScrollReveal
                y={20}
                className="relative min-h-[390px] overflow-hidden rounded-[22px] lg:min-h-[500px]"
              >
                <Image
                  src={lifestyleImage}
                  alt="Familia utilizando un portátil en casa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold text-white">
                    Una conexión para todos
                  </p>

                  <p className="mt-1 max-w-md text-xl font-black leading-tight text-white md:text-2xl">
                    Cuando cada persona está haciendo algo diferente.
                  </p>
                </div>
              </ScrollReveal>

              <div className="flex flex-col justify-center lg:px-8">
                <ScrollReveal>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                    Internet para todos
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.05em] text-[#102a43] md:text-4xl">
                    Una fibra para la vida real.
                  </h2>

                  <p className="mt-4 text-base leading-7 text-[#52606d] md:text-lg">
                    Internet está presente en casi todo lo que hacemos en casa.
                    Elige una conexión preparada para tu rutina.
                  </p>
                </ScrollReveal>

                <div className="mt-7 divide-y divide-[#102a43]/10 border-y border-[#102a43]/10">
                  <ScrollReveal delay={70} y={8}>
                    <LifestyleRow
                      icon={<Laptop size={20} weight="duotone" />}
                      title="Teletrabajo"
                      text="Reuniones, archivos y herramientas online."
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={120} y={8}>
                    <LifestyleRow
                      icon={<PlayCircle size={20} weight="duotone" />}
                      title="Streaming"
                      text="Series, películas y contenido en casa."
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={170} y={8}>
                    <LifestyleRow
                      icon={<GameController size={20} weight="duotone" />}
                      title="Gaming"
                      text="Partidas online y grandes descargas."
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={220} y={8}>
                    <LifestyleRow
                      icon={<HouseLine size={20} weight="duotone" />}
                      title="Familias"
                      text="Todos conectados al mismo tiempo."
                    />
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY WIBE */}
        <section className="bg-[#102a43]">
          <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-16">
            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:gap-14">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#65c97c]">
                    ¿Por qué WiBe?
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.05em] text-white md:text-4xl">
                    Menos lío.
                    <span className="block text-[#65c97c]">Más WiBe.</span>
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-8 text-white/75 md:text-xl">
                    Creemos que contratar Internet no debería requerir un
                    máster. Una tarifa clara, una conexión que funcione y
                    personas que te ayuden cuando las necesites.
                  </p>

                  <Link
                    href="/porque"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#65c97c]"
                  >
                    Conoce WiBe
                    <ArrowRight size={17} weight="bold" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <div className="mt-10 grid border-t border-white/15 md:grid-cols-3">
              <ScrollReveal delay={70} y={10}>
                <SimpleBenefit
                  number="01"
                  title="Precio claro"
                  text="Sabrás qué estás contratando."
                />
              </ScrollReveal>

              <ScrollReveal delay={130} y={10}>
                <SimpleBenefit
                  number="02"
                  title="Atención humana"
                  text="Personas cuando necesites ayuda."
                />
              </ScrollReveal>

              <ScrollReveal delay={190} y={10}>
                <SimpleBenefit
                  number="03"
                  title="Sin complicaciones"
                  text="Una experiencia sencilla de principio a fin."
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#f1f4f1]">
          <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-16">
            <ScrollReveal>
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                  Así de fácil
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#102a43] md:text-4xl">
                  Contratar fibra no debería ser complicado.
                </h2>

                <p className="mt-4 text-base leading-7 text-[#52606d] md:text-lg">
                  Elige tu tarifa, comprueba la cobertura y nos encargamos del
                  resto.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-9 grid border-y border-[#102a43]/10 md:grid-cols-3">
              <ScrollReveal delay={70}>
                <ProcessStep
                  number="01"
                  title="Elige tu tarifa"
                  text="Selecciona la velocidad que mejor encaja con tu hogar."
                />
              </ScrollReveal>

              <ScrollReveal delay={130}>
                <ProcessStep
                  number="02"
                  title="Comprueba la cobertura"
                  text="Introduce tu dirección y descubre si podemos instalar WiBe."
                />
              </ScrollReveal>

              <ScrollReveal delay={190}>
                <ProcessStep
                  number="03"
                  title="Nos encargamos"
                  text="Te acompañamos durante el proceso de instalación."
                />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={240}>
              <div className="mt-7">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#102a43] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1769aa]"
                >
                  Comprobar cobertura
                  <ArrowRight size={17} weight="bold" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-[880px] px-6 py-14 md:py-16">
            <ScrollReveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                Preguntas frecuentes
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#102a43] md:text-4xl">
                Todo sobre la fibra
              </h2>
            </ScrollReveal>

            <div className="mt-8 divide-y divide-[#102a43]/10 border-y border-[#102a43]/10">
              {faqItems.map((item, index) => (
                <ScrollReveal
                  key={item.question}
                  delay={Math.min(index * 35, 160)}
                  y={6}
                >
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-[#102a43] md:text-base">
                      <span>{item.question}</span>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f1f4f1] text-lg font-normal text-[#1769aa] transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="max-w-3xl pr-8 pt-3 text-sm leading-6 text-[#52606d]">
                      {item.answer}
                    </p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE CTA */}
        <CoverageCta />

        {/* FAQ STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </main>

      <Footer />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* SPEED CHOICE                                                               */
/* -------------------------------------------------------------------------- */

function SpeedChoice({
  speed,
  unit,
  title,
  text,
  href,
  featured = false,
}: {
  speed: string;
  unit: string;
  title: string;
  text: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group block border p-5 transition-all duration-300 hover:-translate-y-0.5 md:p-6 ${
        featured
          ? "border-[#1769aa] bg-[#1769aa] text-white"
          : "border-[#102a43]/10 bg-white text-[#102a43] hover:border-[#102a43]/25"
      }`}
    >
      <div className="flex items-end gap-2">
        <span
          className={`text-5xl font-black leading-none tracking-[-0.06em] md:text-6xl ${
            featured ? "text-white" : "text-[#102a43]"
          }`}
        >
          {speed}
        </span>

        <span
          className={`pb-1 text-lg font-bold ${
            featured ? "text-white/75" : "text-[#66788a]"
          }`}
        >
          {unit}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-black md:text-xl">{title}</h3>

      <p
        className={`mt-2 text-sm leading-6 ${
          featured ? "text-white/75" : "text-[#52606d]"
        }`}
      >
        {text}
      </p>

      <div
        className={`mt-5 flex items-center gap-2 text-sm font-bold ${
          featured ? "text-white" : "text-[#1769aa]"
        }`}
      >
        Ver tarifa
        <ArrowRight
          size={16}
          weight="bold"
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* LIFESTYLE ROW                                                              */
/* -------------------------------------------------------------------------- */

function LifestyleRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 py-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1f4f1] text-[#1769aa]">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#102a43]">{title}</h3>

        <p className="mt-0.5 text-sm text-[#52606d]">{text}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SIMPLE BENEFIT                                                             */
/* -------------------------------------------------------------------------- */

function SimpleBenefit({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-white/15 py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
      <p className="text-[11px] font-bold tracking-[0.15em] text-[#65c97c]">
        {number}
      </p>

      <h3 className="mt-4 text-lg font-black text-white">{title}</h3>

      <p className="mt-1.5 text-sm leading-6 text-white/55">{text}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* PROCESS STEP                                                               */
/* -------------------------------------------------------------------------- */

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-[#102a43]/10 py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
      <p className="text-[11px] font-bold tracking-[0.15em] text-[#1769aa]">
        {number}
      </p>

      <h3 className="mt-4 text-lg font-black text-[#102a43]">{title}</h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-[#52606d]">{text}</p>

      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#1769aa]">
        <Check size={16} weight="bold" />
        Fácil y directo
      </div>
    </div>
  );
}
