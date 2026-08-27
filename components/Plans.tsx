import {
  DeviceMobile,
  Infinity as InfinityIcon,
  Star,
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
    price: "31€",
    features: ["2 líneas · 30GB c/u", "Llamadas ilimitadas"],
  },
  {
    title: "FIBRA 600 + 60 GB",
    fiber: "600 Mb",
    mobile: "60 GB",
    mobileIcon: <DeviceMobile size={26} />,
    mobileLabel: "Móvil",
    price: "35€",
    features: ["2 líneas · 30GB c/u", "Llamadas ilimitadas"],
    featured: true,
  },
  {
    title: "FIBRA 600 + ILIMITADA",
    fiber: "600 Mb",
    mobile: "Ilimitada",
    mobileIcon: <InfinityIcon size={26} />,
    mobileLabel: "Móvil Orange",
    price: "48€",
    features: ["2 líneas · datos ilimitados", "Llamadas ilimitadas"],
  },
];

export default function Plans() {
  return (
    <section id="planes" className="py-20 px-6 bg-[#f6f9fc]">
      <div className="max-w-[640px] mx-auto text-center mb-12">
        <div className="text-[#2fae60] font-extrabold text-[13px] tracking-wider uppercase">
          Catálogo de ofertas
        </div>
        <h2 className="text-3xl font-extrabold my-2.5 text-[#0b2d55]">
          Elige tu combinado fibra + móvil
        </h2>
        <p className="text-[#5b7290]">
          Conexión rápida, estable y al mejor precio, con opción de fibra
          simétrica de 1 Gb.
        </p>
      </div>

      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <PlanCard key={plan.title} plan={plan} />
        ))}
      </div>

      <div className="max-w-[1180px] mx-auto mt-12 bg-gradient-to-r from-[#0b2d55] to-[#1f8a5f] rounded-3xl py-8 px-10 flex flex-wrap items-center justify-between gap-5 text-white shadow-lg">
        <div>
          <div className="flex items-center gap-1.5 text-[#ffd166] font-extrabold text-[13px] tracking-wide">
            <Star size={16} weight="fill" /> NUEVA OFERTA DESTACADA
          </div>
          <h3 className="text-2xl font-extrabold mt-2 mb-1">
            Fibra WiBe 1000 + 2×30GB acumulables
          </h3>
          <p className="text-white/75 text-sm">
            Fibra simétrica 1 Gb + 2 líneas móviles Orange con datos que se
            acumulan entre ellas.
          </p>
        </div>
        <div className="bg-white text-[#0b2d55] py-3.5 px-6 rounded-2xl font-extrabold text-2xl text-center">
          39€
          <small className="block text-[11px] font-semibold text-[#5b7290]">
            /mes
          </small>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto mt-10 flex flex-wrap justify-center gap-10 bg-white rounded-2xl py-5 px-8 shadow-lg">
        <div className="flex items-center gap-2.5 text-sm font-bold text-[#0b2d55]">
          <PlusCircle size={20} color={GREEN} /> Cobertura Movistar: +3€/mes
        </div>
        <div className="flex items-center gap-2.5 text-sm font-bold text-[#0b2d55]">
          <PlusCircle size={20} color={GREEN} /> Línea móvil adicional 30GB:
          +3€/mes
        </div>
        <div className="flex items-center gap-2.5 text-sm font-bold text-[#0b2d55]">
          <PlusCircle size={20} color={GREEN} /> Mejora a Fibra 1 Gb: +4€/mes
        </div>
      </div>
    </section>
  );
}
