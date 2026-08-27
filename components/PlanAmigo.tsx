import Image from "next/image";
import { UsersThree } from "@phosphor-icons/react/ssr";

const amigoTiers = [
  { friends: "0", price: "31€", disc: null },
  { friends: "1", price: "29€", disc: "-2€" },
  { friends: "2", price: "27€", disc: "-4€" },
  { friends: "3", price: "25€", disc: "-6€" },
  { friends: "4", price: "23€", disc: "-8€" },
  { friends: "5", price: "21€", disc: "-10€", max: true },
];

export default function PlanAmigo() {
  return (
    <section id="amigo" className="py-20 px-6 bg-[#eef6f1]">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
        <div className="relative rounded-[24px] overflow-hidden shadow-lg h-full min-h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
            alt="Amigos compartiendo el Plan Amigo de WiBe"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d55]/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-[#5ec26a] font-extrabold text-[13px] uppercase tracking-widest mb-2">
              <UsersThree size={18} /> Plan Amigo
            </div>
            <p className="text-2xl font-extrabold leading-snug">
              Trae a un amigo, disfrutad de 2€ de descuento para siempre.
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#5b7290] mb-6 text-[15px]">
            Hasta un máximo de{" "}
            <span className="text-[#2fae60] font-extrabold">5 amigos</span> — el
            descuento se mantiene mientras conserves tu tarifa activa.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
            {amigoTiers.map((tier) => (
              <div
                key={tier.friends}
                className={`rounded-xl py-4 px-1.5 shadow-md ${
                  tier.max
                    ? "bg-gradient-to-br from-[#1565c0] to-[#2fae60] text-white"
                    : "bg-white text-[#0b2d55]"
                }`}
              >
                <div
                  className={`text-[11px] font-bold mb-2.5 ${tier.max ? "text-white" : "text-[#5b7290]"}`}
                >
                  {tier.friends} {tier.friends === "1" ? "amigo" : "amigos"}
                </div>
                <div className="text-xl font-extrabold">{tier.price}</div>
                {tier.disc && (
                  <div
                    className={`text-[11px] font-bold ${tier.max ? "text-white" : "text-[#2fae60]"}`}
                  >
                    {tier.disc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
