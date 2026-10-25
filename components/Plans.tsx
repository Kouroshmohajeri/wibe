import {
  DeviceMobile,
  Infinity as InfinityIcon,
  ArrowRight,
  CheckCircle,
  WifiHigh,
  Sparkle,
} from "@phosphor-icons/react/ssr";

import PlanCard, { type Plan } from "./PlanCard";

import { GREEN } from "@/lib/constants";

const plans: Plan[] = [
  {
    title: "FIBRA 600 + 30 GB",
    fiber: "600 Mb",
    mobile: "30 GB",
    mobileIcon: <DeviceMobile size={26} />,
    mobileLabel: "Móvil",
    price: "29.90€",
    features: ["1 línea · 30 GB", "Llamadas ilimitadas"],
  },
  {
    title: "FIBRA 600 + 60 GB",
    fiber: "600 Mb",
    mobile: "60 GB",
    mobileIcon: <DeviceMobile size={26} />,
    mobileLabel: "Móvil",
    price: "35€",
    features: ["1 línea · 60 GB o 2 líneas · 30 GB c/u", "Llamadas ilimitadas"],
    featured: true,
  },
  {
    title: "FIBRA 600 + 150 GB",
    fiber: "600 Mb",
    mobile: "150 GB",
    mobileIcon: <DeviceMobile size={26} />,
    mobileLabel: "Móvil",
    price: "39€",
    originalPrice: "42€",
    offerLabel: "Oferta limitada · Solo este mes",
    features: ["1 línea · 150 GB"],
    featured: true,
  },
  {
    title: "FIBRA 600 + ILIMITADA",
    fiber: "600 Mb",
    mobile: "GB Ilimitadas",
    mobileIcon: <InfinityIcon size={26} />,
    mobileLabel: "Móvil",
    price: "48€",
    features: ["1 línea · GB ilimitadas", "Llamadas ilimitadas"],
  },
  {
    title: "FIBRA 1 Gb + 30 GB",
    fiber: "1 Gb",
    mobile: "30 GB",
    mobileIcon: <DeviceMobile size={26} />,
    mobileLabel: "Móvil",
    price: "35€",
    features: ["1 línea · 30 GB", "Llamadas ilimitadas"],
  },
  {
    title: "FIBRA 1 Gb + 60 GB",
    fiber: "1 Gb",
    mobile: "60 GB",
    mobileIcon: <DeviceMobile size={26} />,
    mobileLabel: "Móvil",
    price: "39€",
    features: ["1 línea · 60 GB o 2 líneas · 30 GB c/u", "Llamadas ilimitadas"],
    featured: true,
  },
  {
    title: "FIBRA 1 Gb + ILIMITADA",
    fiber: "1 Gb",
    mobile: "GB Ilimitadas",
    mobileIcon: <InfinityIcon size={26} />,
    mobileLabel: "Móvil",
    price: "52€",
    features: ["1 línea · GB ilimitadas", "Llamadas ilimitadas"],
  },
];

const additionalMobileOptions = [
  {
    name: "30 GB acumulables",
    price: "3€",
    description: "Una opción económica para el uso diario.",
  },
  {
    name: "30 GB + 20 GB acumulables",
    price: "5,90€",
    description: "Más datos para navegar con tranquilidad.",
  },
  {
    name: "60 GB acumulables",
    price: "11€",
    description: "Ideal para redes sociales, música y vídeos.",
  },
  {
    name: "150 GB + 1000 min internacionales",
    price: "11€",
    description: "Muchos datos y llamadas internacionales incluidas.",
  },
  {
    name: "GB y llamadas ilimitadas",
    price: "24€",
    description: "Navega y habla sin preocuparte por los límites.",
  },
];

export default function Plans() {
  return (
    <section id="planes" className="bg-[#f6f9fc] px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-[1180px]">
        {/* Intro and custom pack CTA */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-[#102a43] text-white shadow-lg">
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#a8e6bc]">
                <Sparkle size={16} weight="fill" />
                Tú eliges
              </div>

              <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                ¿Quieres tunear tu WiFi o elegir una de nuestras tarifas?
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                Elige uno de nuestros packs de fibra y móvil o crea una
                combinación a tu medida. Tú decides la velocidad, los datos y
                las líneas que necesitas.
              </p>
            </div>

            <a
              href="/haz-tu-pack"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2fae60] px-5 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#25934f] hover:shadow-lg"
            >
              Crear mi propio pack
              <ArrowRight size={19} weight="bold" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 border-t border-white/10 px-6 py-4 sm:grid-cols-3 sm:px-8">
            <div className="flex items-center gap-2 text-sm text-white/85">
              <CheckCircle size={18} weight="fill" color={GREEN} />
              Elige tu fibra
            </div>

            <div className="flex items-center gap-2 text-sm text-white/85">
              <CheckCircle size={18} weight="fill" color={GREEN} />
              Añade tus líneas móviles
            </div>

            <div className="flex items-center gap-2 text-sm text-white/85">
              <CheckCircle size={18} weight="fill" color={GREEN} />
              Personaliza tu tarifa
            </div>
          </div>
        </div>

        {/* Standard plans */}
        <div className="mx-auto mb-8 max-w-[640px] text-center">
          <div className="text-[13px] font-extrabold uppercase tracking-wider text-[#2fae60]">
            Catálogo de ofertas
          </div>

          <h2 className="my-2.5 text-3xl font-extrabold text-[#0b2d55]">
            Elige tu combinado fibra + móvil
          </h2>

          <p className="text-[#5b7290]">
            Conexión rápida y estable con fibra de 600 Mb o 1 Gb y diferentes
            opciones de móvil para elegir la que mejor se adapte a ti.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>

        {/* Additional mobile lines below the plans */}
        <div className="mt-14">
          <div className="mb-7 max-w-2xl">
            <div className="mb-2 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#2fae60]">
              <DeviceMobile size={19} weight="bold" />
              Más opciones para ti
            </div>

            <h2 className="text-2xl font-extrabold text-[#0b2d55] sm:text-3xl">
              ¿Necesitas líneas móviles adicionales?
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#5b7290]">
              Añade líneas extra o descubre otras tarifas móviles. Puedes
              combinar diferentes opciones para adaptar tu pack a tus
              necesidades.
            </p>
          </div>

          {/* Five additional mobile options in one row on large screens */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {additionalMobileOptions.map((option) => (
              <div
                key={option.name}
                className="flex flex-col rounded-2xl border border-[#e5ebe7] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#b7c9d7] hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f5ec] text-[#238548]">
                  <DeviceMobile size={23} weight="bold" />
                </div>

                <h3 className="text-base font-extrabold text-[#0b2d55]">
                  {option.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-[#5b7290]">
                  {option.description}
                </p>

                {/* Price only; the Elegir link and arrow have been removed */}
                <div className="mt-5 border-t border-[#e7ece8] pt-4">
                  <span className="text-2xl font-extrabold text-[#1769aa]">
                    {option.price}
                  </span>
                  <span className="ml-1 text-xs text-[#5b7290]">/mes</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final compact CTA */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#dce8df] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f5ec] text-[#238548]">
              <WifiHigh size={22} weight="bold" />
            </div>

            <div>
              <h3 className="font-bold text-[#0b2d55]">
                ¿Quieres una combinación diferente?
              </h3>

              <p className="mt-1 text-sm text-[#5b7290]">
                Crea un pack con la fibra y las líneas móviles que prefieras.
              </p>
            </div>
          </div>

          <a
            href="/haz-tu-pack"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#1769aa] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#12558b]"
          >
            Diseñar mi tarifa
            <ArrowRight size={17} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
