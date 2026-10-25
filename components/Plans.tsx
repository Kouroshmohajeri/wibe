import {
  DeviceMobile,
  Infinity as InfinityIcon,
  PlusCircle,
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

      <div className="mx-auto mt-10 flex max-w-[1180px] flex-wrap justify-center gap-10 rounded-2xl bg-white px-8 py-5 shadow-lg">
        <div className="flex items-center gap-2.5 text-sm font-bold text-[#0b2d55]">
          <PlusCircle size={20} color={GREEN} />
          Línea móvil adicional: +3€/mes
        </div>
      </div>
    </section>
  );
}
