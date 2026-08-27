"use client";

import Image from "next/image";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-[pulse_1.1s_ease-in-out_infinite]">
          <Image
            src="/assets/logo.webp"
            alt="WiBe Fibra"
            width={130}
            height={130}
            priority
            className="drop-shadow-lg object-contain"
          />
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/2 animate-[loadingbar_1.1s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-[#1565c0] to-[#2fae60]" />
        </div>
      </div>
      <style>{`
        @keyframes loadingbar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(60%); }
          100% { transform: translateX(220%); }
        }
      `}</style>
    </div>
  );
}
