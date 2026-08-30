"use client";

import { useEffect, useState } from "react";

import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import PlanAmigo from "@/components/PlanAmigo";
import WhyUs from "@/components/WhyUs";
import Support from "@/components/Support";
import CoverageCta from "@/components/CoverageCta";
import Footer from "@/components/Footer";
import Preloader from "@/components/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div
        className={`flex flex-col flex-1 transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <TopStrip />
        <Header />
        <main className="flex-1">
          <Hero />
          <Plans />
          <PlanAmigo />
          <WhyUs />
          <Support />
          <CoverageCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
