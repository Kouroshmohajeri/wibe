import { Check, X } from "@phosphor-icons/react/ssr";

type Row = {
  label: string;
  wibe: string | boolean;
  competitor: string | boolean;
};

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={20} weight="bold" className="text-[#2fae60] mx-auto" />
    ) : (
      <X size={20} weight="bold" className="text-slate-300 mx-auto" />
    );
  }
  return <span>{value}</span>;
}

export default function ComparadorTable({
  competitorName,
  rows,
}: {
  competitorName: string;
  rows: Row[];
}) {
  return (
    <div className="max-w-[900px] mx-auto rounded-[20px] overflow-hidden border border-slate-200 shadow-lg bg-white">
      <div className="grid grid-cols-3 text-center font-extrabold text-sm uppercase tracking-wide">
        <div className="py-4 px-3 bg-white text-[#5b7290]">Característica</div>
        <div className="py-4 px-3 bg-gradient-to-br from-[#1565c0] to-[#2fae60] text-white">
          WiBe
        </div>
        <div className="py-4 px-3 bg-slate-100 text-[#0b2d55]">
          {competitorName}
        </div>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`grid grid-cols-3 text-center text-sm items-center ${
            i % 2 === 0 ? "bg-white" : "bg-[#f6f9fc]"
          }`}
        >
          <div className="py-4 px-3 text-left font-semibold text-[#0b2d55]">
            {row.label}
          </div>
          <div className="py-4 px-3 font-bold text-[#0b2d55]">
            <Cell value={row.wibe} />
          </div>
          <div className="py-4 px-3 text-[#5b7290]">
            <Cell value={row.competitor} />
          </div>
        </div>
      ))}
    </div>
  );
}
