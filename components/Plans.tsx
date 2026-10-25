import {
  DeviceMobile,
  Infinity as InfinityIcon,
  ArrowRight,
  CheckCircle,
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
    <section id="planes" className="bg-[#f6f9fc] px-6 py-20">
      <div className="mx-auto mb-12 max-w-[640px] text-center">
        <div className="text-[13px] font-extrabold uppercase tracking-wider text-[#2fae60]">
          Catálogo de ofertas
        </div>

        <h2 className="my-2.5 text-3xl font-extrabold text-[#0b2d55]">
          Elige tu combinado fibra + móvil
        </h2>

        <p className="text-[#5b7290]">
          Conexión rápida y estable con fibra de 600 Mb o 1 Gb, y diferentes
          opciones de móvil para elegir la que mejor se adapte a ti.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.title} plan={plan} />
        ))}
      </div>

      {/* Additional mobile lines */}
      <div className="mx-auto mt-10 max-w-[1180px] overflow-hidden rounded-3xl border border-[#e5ebe7] bg-white shadow-sm">
        <div className="grid gap-5 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-8">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#e8f5ec] px-3 py-1.5 text-xs font-bold text-[#238548]">
              <DeviceMobile size={16} weight="bold" />
              Personaliza tu pack
            </div>

            <h3 className="text-2xl font-extrabold text-[#0b2d55]">
              ¿Necesitas líneas móviles adicionales?
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5b7290]">
              Añade tantas líneas como necesites y elige los datos que mejor
              encajen contigo. También puedes combinar diferentes tarifas
              móviles en un mismo pack.
            </p>
          </div>

          <a
            href="/haz-tu-pack"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2fae60] px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#25934f] hover:shadow-md"
          >
            Crear mi pack
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>

        <div className="grid gap-3 border-t border-[#e7ece8] bg-[#f8faf8] p-5 sm:grid-cols-2 lg:grid-cols-3">
          {additionalMobileOptions.map((option) => (
            <div
              key={option.name}
              className="flex items-start gap-3 rounded-2xl border border-[#e5ebe7] bg-white p-4 transition-colors hover:border-[#b7c9d7]"
            >
              <CheckCircle
                size={20}
                weight="fill"
                color={GREEN}
                className="mt-0.5 shrink-0"
              />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-[#0b2d55]">
                    {option.name}
                  </h4>

                  <span className="shrink-0 text-sm font-extrabold text-[#1769aa]">
                    {option.price}
                    <span className="ml-0.5 text-xs font-medium text-[#5b7290]">
                      /mes
                    </span>
                  </span>
                </div>

                <p className="mt-1 text-xs leading-5 text-[#5b7290]">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#e7ece8] px-5 py-4 sm:flex-row sm:items-center sm:px-8">
          <p className="text-sm text-[#5b7290]">
            ¿Buscas una combinación diferente? Tú eliges la fibra y las líneas.
          </p>

          <a
            href="/haz-tu-pack"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1769aa] transition-colors hover:text-[#0b2d55]"
          >
            Diseñar mi tarifa
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
