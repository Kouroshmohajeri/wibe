import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  DeviceMobile,
  GameController,
  HouseLine,
  Laptop,
  PlayCircle,
  SimCard,
  WifiHigh,
} from "@phosphor-icons/react/ssr";

import ScrollReveal from "@/components/ScrollReveal";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import CoverageCta from "@/components/CoverageCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fibra y Móvil | Tarifas Convergentes | WiBe",
  description:
    "Combina fibra y móvil con WiBe. Internet rápido en casa y móvil para estar conectado donde quieras, con precios claros y atención de verdad.",
  alternates: {
    canonical: "https://www.wibeonline.es/fibra-movil",
  },
  openGraph: {
    title: "Fibra y Móvil | WiBe",
    description:
      "Fibra y móvil en una misma tarifa. Internet rápido en casa y móvil para estar conectado estés donde estés.",
    url: "https://wibeonline.es/fibra-movil",
    siteName: "WiBe",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibra y Móvil | WiBe",
    description:
      "Combina fibra y móvil con WiBe. Todo conectado, sin complicaciones.",
  },
};

const faqItems = [
  {
    question: "¿Qué incluye una tarifa de fibra y móvil?",
    answer:
      "Las tarifas de fibra y móvil combinan una conexión de fibra para tu hogar con una línea móvil. Las condiciones concretas, velocidades y datos dependen de la tarifa contratada.",
  },
  {
    question: "¿Puedo contratar fibra y móvil juntos?",
    answer:
      "Sí. WiBe ofrece opciones que combinan fibra y móvil para que puedas gestionar ambos servicios con el mismo operador.",
  },
  {
    question: "¿Qué velocidad de fibra puedo contratar?",
    answer:
      "WiBe ofrece diferentes velocidades de fibra para adaptarse al uso de cada hogar. Puedes consultar las tarifas disponibles en nuestra página de planes.",
  },
  {
    question: "¿Cuántos datos móviles necesito?",
    answer:
      "Depende de cómo utilices tu móvil. Si utilizas principalmente Wi-Fi en casa y trabajo, puedes necesitar menos datos. Si consumes mucho vídeo, música o utilizas el móvil fuera de redes Wi-Fi, puede interesarte una tarifa con más datos.",
  },
  {
    question: "¿Puedo mantener mi número de móvil?",
    answer:
      "La posibilidad de realizar una portabilidad depende de las condiciones de la tarifa y del proceso de contratación. Durante el proceso podrás consultar las opciones disponibles.",
  },
  {
    question: "¿Cómo sé si tengo cobertura de fibra WiBe?",
    answer:
      "La disponibilidad de fibra depende de tu dirección. Puedes comprobar la cobertura de WiBe antes de contratar.",
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
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&fm=jpg&q=85&w=2200";

const lifestyleImage =
  "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&fm=jpg&q=85&w=1800";

export default function FibraMovilPage() {
  return (
    <>
      <TopStrip />
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1320px] px-4 py-4 sm:px-6 md:py-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[24px] bg-[#f1f4f1] lg:grid-cols-[0.92fr_1.08fr]">
              <div className="flex flex-col justify-center px-6 py-10 sm:px-9 md:px-12 lg:px-14 lg:py-14">
                <ScrollReveal y={15}>
                  <div className="mb-5 flex items-center gap-2 text-sm font-bold text-[#1769aa]">
                    <WifiHigh size={19} weight="bold" />
                    Fibra + móvil WiBe
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={70} y={20}>
                  <h1 className="max-w-[620px] text-[2.65rem] font-black leading-[0.97] tracking-[-0.055em] text-[#102a43] sm:text-5xl md:text-[3.65rem] lg:text-[4.15rem]">
                    Fibra y móvil.
                    <span className="block text-[#1769aa]">
                      Todo conectado.
                    </span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={140} y={16}>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[#52606d] md:text-lg">
                    Internet rápido en casa y móvil para cuando sales. Dos
                    servicios, una experiencia sencilla.
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
                    <span className="flex items-center gap-2">
                      <WifiHigh
                        size={16}
                        weight="bold"
                        className="text-[#1769aa]"
                      />
                      Fibra en casa
                    </span>

                    <span className="flex items-center gap-2">
                      <DeviceMobile
                        size={16}
                        weight="bold"
                        className="text-[#1769aa]"
                      />
                      Móvil estés donde estés
                    </span>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal
                delay={100}
                y={20}
                className="relative min-h-[330px] sm:min-h-[380px] lg:min-h-[520px]"
              >
                <Image
                  src={heroImage}
                  alt="Persona utilizando un portátil y un teléfono móvil"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
                  <div className="max-w-sm bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.14)]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1769aa]">
                      Todo en WiBe
                    </p>

                    <p className="mt-1.5 text-base font-black leading-snug text-[#102a43] md:text-lg">
                      Tu casa conectada. Tu móvil también.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="border-y border-[#102a43]/10 bg-white">
          <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-16">
            <ScrollReveal>
              <div className="grid gap-6 md:grid-cols-[0.65fr_1.35fr] md:gap-14">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                    Fibra + móvil
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.05em] text-[#102a43] md:text-4xl lg:text-[2.7rem]">
                    Internet cuando estás en casa.
                    <span className="block text-[#66788a]">
                      Datos cuando estás fuera.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#52606d] md:text-lg">
                    Una conexión para cada momento. Fibra para todos los
                    dispositivos de casa y móvil para seguir conectado cuando
                    sales.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PLANS */}
        <section className="bg-[#f1f4f1]">
          <div className="mx-auto max-w-[1180px] px-6 py-14 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-12">
              <ScrollReveal>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                    Elige tu combinación
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.05em] text-[#102a43] md:text-4xl">
                    Una tarifa para todo.
                  </h2>

                  <p className="mt-4 max-w-md text-base leading-7 text-[#52606d]">
                    Elige la combinación de fibra y móvil que mejor encaja con
                    tu forma de vivir conectada.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-3 md:grid-cols-2">
                <ScrollReveal delay={80}>
                  <ConvergentPlan
                    speed="600"
                    speedUnit="Mb"
                    mobile="Datos móviles"
                    title="Para el día a día"
                    text="Una combinación equilibrada para navegar, trabajar, ver contenido y estar conectado."
                    href="/planes"
                  />
                </ScrollReveal>

                <ScrollReveal delay={140}>
                  <ConvergentPlan
                    speed="1"
                    speedUnit="Gb"
                    mobile="Más datos móviles"
                    title="Para un uso intensivo"
                    text="Más capacidad para hogares conectados y personas que utilizan mucho Internet dentro y fuera de casa."
                    href="/planes"
                    featured
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* HOME + MOBILE */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <ScrollReveal
                y={20}
                className="relative min-h-[390px] overflow-hidden rounded-[22px] lg:min-h-[500px]"
              >
                <Image
                  src={lifestyleImage}
                  alt="Personas conectadas utilizando dispositivos en casa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold text-white">
                    Una conexión para tu vida
                  </p>

                  <p className="mt-1 max-w-md text-xl font-black leading-tight text-white md:text-2xl">
                    En casa, en la calle y donde te lleve el día.
                  </p>
                </div>
              </ScrollReveal>

              <div className="flex flex-col justify-center lg:px-8">
                <ScrollReveal>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                    Siempre conectado
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.05em] text-[#102a43] md:text-4xl">
                    Una conexión para cada momento.
                  </h2>

                  <p className="mt-4 text-base leading-7 text-[#52606d] md:text-lg">
                    Tu conexión no termina cuando sales por la puerta. Combina
                    la fibra de casa con tu móvil y mantén tus servicios
                    conectados durante todo el día.
                  </p>
                </ScrollReveal>

                <div className="mt-7 divide-y divide-[#102a43]/10 border-y border-[#102a43]/10">
                  <ScrollReveal delay={70} y={8}>
                    <LifestyleRow
                      icon={<HouseLine size={20} weight="duotone" />}
                      title="En casa"
                      text="Fibra para todos tus dispositivos."
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={120} y={8}>
                    <LifestyleRow
                      icon={<DeviceMobile size={20} weight="duotone" />}
                      title="En movilidad"
                      text="Datos para seguir conectado fuera."
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={170} y={8}>
                    <LifestyleRow
                      icon={<Laptop size={20} weight="duotone" />}
                      title="Trabajo"
                      text="Conecta desde casa o donde estés."
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={220} y={8}>
                    <LifestyleRow
                      icon={<PlayCircle size={20} weight="duotone" />}
                      title="Entretenimiento"
                      text="Streaming, música y contenido."
                    />
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY COMBINE */}
        <section className="bg-[#102a43]">
          <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-16">
            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:gap-14">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#65c97c]">
                    Todo en WiBe
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.05em] text-white md:text-4xl">
                    Menos lío.
                    <span className="block text-[#65c97c]">Más conectado.</span>
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-8 text-white/75 md:text-xl">
                    Fibra y móvil juntos para que tengas tus servicios en un
                    mismo sitio y puedas disfrutar de una experiencia más
                    sencilla.
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
                  icon={<SimCard size={19} weight="duotone" />}
                  title="Una sola experiencia"
                  text="Gestiona tus servicios con WiBe."
                />
              </ScrollReveal>

              <ScrollReveal delay={130} y={10}>
                <SimpleBenefit
                  number="02"
                  icon={<WifiHigh size={19} weight="duotone" />}
                  title="Fibra en casa"
                  text="Una conexión preparada para tu hogar."
                />
              </ScrollReveal>

              <ScrollReveal delay={190} y={10}>
                <SimpleBenefit
                  number="03"
                  icon={<DeviceMobile size={19} weight="duotone" />}
                  title="Móvil contigo"
                  text="Conectado cuando sales de casa."
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-[#f1f4f1]">
          <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-16">
            <ScrollReveal>
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                  Para tu día a día
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#102a43] md:text-4xl">
                  Hecho para cómo utilizas Internet.
                </h2>

                <p className="mt-4 text-base leading-7 text-[#52606d] md:text-lg">
                  Desde la primera videollamada de la mañana hasta el último
                  vídeo del día.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-9 grid border-y border-[#102a43]/10 md:grid-cols-3">
              <ScrollReveal delay={70}>
                <UseCase
                  number="01"
                  icon={<Laptop size={20} weight="duotone" />}
                  title="Trabaja"
                  text="Videollamadas, archivos y herramientas online sin depender del lugar."
                />
              </ScrollReveal>

              <ScrollReveal delay={130}>
                <UseCase
                  number="02"
                  icon={<PlayCircle size={20} weight="duotone" />}
                  title="Disfruta"
                  text="Series, música, vídeos y entretenimiento en casa o fuera."
                />
              </ScrollReveal>

              <ScrollReveal delay={190}>
                <UseCase
                  number="03"
                  icon={<GameController size={20} weight="duotone" />}
                  title="Juega"
                  text="Conecta tus dispositivos y disfruta de tus partidas online."
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1080px] px-6 py-14 md:py-16">
            <ScrollReveal>
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2fae60]">
                  Así de fácil
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#102a43] md:text-4xl">
                  Fibra y móvil sin complicaciones.
                </h2>

                <p className="mt-4 text-base leading-7 text-[#52606d] md:text-lg">
                  Elige tu combinación, comprueba la cobertura y nos encargamos
                  del resto.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-9 grid border-y border-[#102a43]/10 md:grid-cols-3">
              <ScrollReveal delay={70}>
                <ProcessStep
                  number="01"
                  title="Elige tu tarifa"
                  text="Selecciona la combinación de fibra y móvil que mejor encaja contigo."
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
                  text="Te acompañamos durante el proceso de contratación e instalación."
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
                Todo sobre fibra y móvil
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

        {/* COVERAGE */}
        <CoverageCta />

        {/* FAQ JSON-LD */}
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
/* CONVERGENT PLAN                                                            */
/* -------------------------------------------------------------------------- */

function ConvergentPlan({
  speed,
  speedUnit,
  mobile,
  title,
  text,
  href,
  featured = false,
}: {
  speed: string;
  speedUnit: string;
  mobile: string;
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
          {speedUnit}
        </span>
      </div>

      <div
        className={`mt-3 flex items-center gap-2 text-sm font-bold ${
          featured ? "text-white/80" : "text-[#1769aa]"
        }`}
      >
        <DeviceMobile size={17} weight="bold" />
        {mobile}
      </div>

      <h3 className="mt-4 text-lg font-black md:text-xl">{title}</h3>

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
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-white/15 py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
      <div className="flex items-center gap-3">
        <p className="text-[11px] font-bold tracking-[0.15em] text-[#65c97c]">
          {number}
        </p>

        <div className="text-[#65c97c]">{icon}</div>
      </div>

      <h3 className="mt-4 text-lg font-black text-white">{title}</h3>

      <p className="mt-1.5 text-sm leading-6 text-white/55">{text}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* USE CASE                                                                   */
/* -------------------------------------------------------------------------- */

function UseCase({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-[#102a43]/10 py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
      <div className="flex items-center gap-3">
        <p className="text-[11px] font-bold tracking-[0.15em] text-[#1769aa]">
          {number}
        </p>

        <div className="text-[#1769aa]">{icon}</div>
      </div>

      <h3 className="mt-4 text-lg font-black text-[#102a43]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#52606d]">{text}</p>
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
