import { Check, HouseLine } from "@phosphor-icons/react/ssr";
import { GREEN } from "@/lib/constants";
import type { ReactNode } from "react";

export type Plan = {
  title: string;
  fiber: string;
  mobile: string;
  mobileIcon: ReactNode;
  mobileLabel: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative bg-white rounded-[20px] shadow-lg overflow-hidden border ${
        plan.featured
          ? "border-2 border-[#2fae60] md:-translate-y-3"
          : "border-[#0b2d55]/5"
      }`}
    >
      {plan.featured && (
        <span className="absolute top-4 right-4 bg-[#2fae60] text-white text-[11px] font-extrabold py-1.5 px-3 rounded-full z-10">
          MÁS ELEGIDO
        </span>
      )}
      <div
        className={`text-white font-extrabold text-base py-5 px-6 ${
          plan.featured
            ? "bg-gradient-to-br from-[#0b2d55] to-[#2fae60]"
            : "bg-gradient-to-br from-[#1565c0] to-[#2196f3]"
        }`}
      >
        {plan.title}
      </div>
      <div className="p-6">
        <div className="flex justify-center gap-6 mb-5">
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#eaf3ff] text-[#1565c0] flex items-center justify-center mx-auto mb-2">
              <HouseLine size={26} />
            </div>
            <div className="font-extrabold text-[15px] text-[#0b2d55]">
              {plan.fiber}
            </div>
            <div className="text-[11px] text-[#5b7290]">Fibra</div>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#eaf3ff] text-[#1565c0] flex items-center justify-center mx-auto mb-2">
              {plan.mobileIcon}
            </div>
            <div className="font-extrabold text-[15px] text-[#0b2d55]">
              {plan.mobile}
            </div>
            <div className="text-[11px] text-[#5b7290]">{plan.mobileLabel}</div>
          </div>
        </div>
        <div className="text-center bg-gradient-to-br from-[#1565c0] to-[#2fae60] text-white py-4 rounded-2xl mt-2.5">
          <div className="text-3xl font-extrabold">{plan.price}</div>
          <div className="text-[13px] opacity-85">/mes</div>
        </div>
        <ul className="mt-4 text-[13px] text-[#5b7290] space-y-1.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check size={16} weight="bold" color={GREEN} /> {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
