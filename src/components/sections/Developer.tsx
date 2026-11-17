import React from "react";
import Image from "next/image";
import { ExternalLink, Award, Shield, CheckCircle2, Building, HeartHandshake } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { PROPERTY_DATA } from "@/data/property";
import { SITE_CONFIG } from "@/lib/constants";

export function Developer() {
  const { developer } = PROPERTY_DATA;

  return (
    <section className="py-20 sm:py-28 bg-[#F3EFE6] relative overflow-hidden border-t border-[#073B32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-[#073B32]/10 relative overflow-hidden">
          {/* Subtle architectural background watermark */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#073B32]/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Brand & Stats */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#A07430] block">
                Realização & Incorporação
              </span>

              {/* Lottici Official Logo from Logo.svg */}
              <div className="relative w-56 h-16">
                <Image
                  src="/images/branding/Logo.svg"
                  alt="Lottici Incorporação e Construção"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Experience Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-black/5">
                {developer.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FAF8F5] border border-black/5 text-center">
                    <span
                      className="block text-2xl sm:text-3xl font-serif font-bold text-[#073B32]"
                      style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-[#526460] tracking-wider block mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Official Link */}
              <div className="pt-2">
                <a
                  href={developer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#073B32] hover:text-[#C9974A] transition-colors group"
                >
                  <span>Acessar site institucional da Lottici</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Right: Institutional Story & Values */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-black/10 lg:pl-10">
              <h3
                className="text-2xl sm:text-3xl font-serif font-bold text-[#073B32] leading-snug"
                style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
              >
                {developer.title}
              </h3>

              <p className="text-base text-[#3A4D48] leading-relaxed font-light">
                {developer.description}
              </p>

              {/* Institutional Values Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#073B32]/10 text-[#073B32] shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#073B32]">Segurança Jurídica</h4>
                    <p className="text-xs text-[#526460] mt-0.5">
                      Projetos devidamente aprovados e registrados com total transparência.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#073B32]/10 text-[#073B32] shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#073B32]">Padrão Construtivo</h4>
                    <p className="text-xs text-[#526460] mt-0.5">
                      Controle rigoroso de materiais e acabamentos que valorizam o seu patrimônio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

