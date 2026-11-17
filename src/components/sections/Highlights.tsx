"use client";

import React from "react";
import {
  Sun,
  Flame,
  Layers,
  Droplets,
  Gauge,
  Car,
  Activity,
  ArrowUpDown,
  Wind,
  Trees,
  Maximize2,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { PROPERTY_DATA } from "@/data/property";

const ICON_MAP: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-5 h-5 text-[#C9974A]" />,
  Flame: <Flame className="w-5 h-5 text-[#C9974A]" />,
  Layers: <Layers className="w-5 h-5 text-[#C9974A]" />,
  Droplets: <Droplets className="w-5 h-5 text-[#C9974A]" />,
  Gauge: <Gauge className="w-5 h-5 text-[#C9974A]" />,
  Car: <Car className="w-5 h-5 text-[#C9974A]" />,
  Activity: <Activity className="w-5 h-5 text-[#C9974A]" />,
  ArrowUpDown: <ArrowUpDown className="w-5 h-5 text-[#C9974A]" />,
  Wind: <Wind className="w-5 h-5 text-[#C9974A]" />,
  Trees: <Trees className="w-5 h-5 text-[#C9974A]" />,
  Maximize2: <Maximize2 className="w-5 h-5 text-[#C9974A]" />,
};

export function Highlights() {
  const { apartmentHighlights } = PROPERTY_DATA;

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#073B32] text-[#FAF8F5] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0E4F43]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Diferenciais dos Apartamentos"
          title="Cada detalhe pensado para o seu conforto."
          subtitle="Funcionalidade, praticidade e soluções que valorizam o seu dia a dia e elevam a qualidade do morar."
          align="center"
          variant="dark"
          className="mb-16"
        />

        {/* Grid of Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {apartmentHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#C9974A]/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#082D29] border border-[#C9974A]/30 shrink-0 group-hover:scale-110 group-hover:border-[#C9974A] transition-all duration-300">
                  {ICON_MAP[item.icon] || <CheckCircle className="w-5 h-5 text-[#C9974A]" />}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#DFB772] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F3EFE6]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Garden units */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#05241E]/90 border border-[#C9974A]/25 max-w-3xl mx-auto text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
          <div className="p-2.5 rounded-full bg-[#C9974A]/20 text-[#DFB772] shrink-0">
            <Trees className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-[#F3EFE6]/80 leading-relaxed">
            <span className="font-semibold text-[#DFB772]">Nota sobre os Apartamentos Garden: </span>
            Os pátios privativos descobertos são exclusivos das unidades térreas elegíveis de finais 02, 04, 06 e 08 de cada torre, conforme especificado no projeto oficial.
          </div>
        </div>
      </div>
    </section>
  );
}

