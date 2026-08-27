import { ArrowRight, Clock, ShieldCheck } from "@phosphor-icons/react/ssr";

export default function CoverageCta() {
  return (
    <section id="contacto" className="py-20 px-6 bg-[#f6f9fc]">
      <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-[#0b2d55] via-[#14508a] to-[#1f8a5f] rounded-[28px] py-16 px-6 sm:px-14 text-center text-white shadow-lg">
        <h2 className="text-3xl font-extrabold mb-3.5">
          Comprueba tu cobertura ahora
        </h2>
        <p className="text-white/80 mb-7 max-w-md mx-auto">
          Introduce tu dirección o teléfono y te llamamos con la mejor oferta
          disponible en tu zona.
        </p>
        <form className="flex flex-wrap justify-center gap-3">
          <input
            type="text"
            placeholder="Tu número de teléfono o dirección"
            className="py-4 px-5 rounded-2xl border-none w-[280px] text-[15px] text-[#0b2d55]"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-white text-[#0b2d55] py-4 px-7 rounded-2xl font-extrabold text-[15px] hover:scale-[1.02] transition-transform"
          >
            Quiero que me llamen <ArrowRight size={18} weight="bold" />
          </button>
        </form>
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs mt-4 text-white/60">
          <Clock size={16} /> Respuesta en menos de 24h ·{" "}
          <ShieldCheck size={16} /> Cobertura Movistar disponible por +3€/mes
        </div>
      </div>
    </section>
  );
}
