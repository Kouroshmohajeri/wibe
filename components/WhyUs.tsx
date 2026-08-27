import {
  Lightning,
  Headset,
  ShieldCheck,
  HouseLine,
} from "@phosphor-icons/react/ssr";

const whyItems = [
  {
    icon: <Lightning size={24} />,
    title: "Fibra estable",
    desc: "Red propia, velocidades simétricas hasta 1 Gb.",
  },
  {
    icon: <Headset size={24} />,
    title: "Atención real",
    desc: "Hablas con personas, no con menús automáticos.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Trato claro",
    desc: "El precio que ves es el precio que pagas.",
  },
  {
    icon: <HouseLine size={24} />,
    title: "Alta rápida",
    desc: "Instalación gestionada en pocos días.",
  },
];

export default function WhyUs() {
  return (
    <section id="porque" className="py-20 px-6 bg-white">
      <div className="max-w-[640px] mx-auto text-center mb-12">
        <div className="text-[#2fae60] font-extrabold text-[13px] tracking-wider uppercase">
          Por qué elegir WiBe
        </div>
        <h2 className="text-3xl font-extrabold my-2.5 text-[#0b2d55]">
          Fibra propia. Atención de verdad.
        </h2>
      </div>
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        {whyItems.map((item) => (
          <div
            key={item.title}
            className="text-center bg-[#f6f9fc] rounded-2xl py-8 px-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1565c0] to-[#2fae60] text-white flex items-center justify-center mx-auto mb-4">
              {item.icon}
            </div>
            <h4 className="text-sm font-extrabold text-[#0b2d55] mb-1.5">
              {item.title}
            </h4>
            <p className="text-[12.5px] text-[#5b7290]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
