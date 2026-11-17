"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Maximize2, Bed, Check, Sparkles, Building, Layers } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Lightbox, LightboxImage } from "../ui/Lightbox";
import { PROPERTY_DATA, FloorPlan } from "@/data/property";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FloorPlans() {
  const { floorPlans } = PROPERTY_DATA;
  const [selectedPlanId, setSelectedPlanId] = useState(floorPlans[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPlan = floorPlans.find((p) => p.id === selectedPlanId) || floorPlans[0];

  const planImages: LightboxImage[] = floorPlans.map((p) => ({
    src: p.image,
    title: p.name,
    subtitle: `${p.area} · ${p.units}`,
    description: p.features.join(" • "),
  }));

  const handleOpenLightbox = (planId: string) => {
    const idx = floorPlans.findIndex((p) => p.id === planId);
    if (idx !== -1) {
      setCurrentIndex(idx);
      setLightboxOpen(true);
    }
  };

  return (
    <section id="plantas" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Plantas dos Apartamentos"
          title="Encontre o espaço ideal para a sua próxima fase."
          subtitle="Conheça as opções de plantas do Residencial ORA e descubra qual combina com o seu estilo de vida."
          align="center"
          variant="light"
          className="mb-12"
        />

        {/* Plan Selectors (Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {floorPlans.map((plan) => {
            const isSelected = plan.id === selectedPlanId;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9974A] flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#073B32] text-white shadow-lg shadow-[#073B32]/20 border border-[#C9974A]/50 scale-105"
                    : "bg-white text-[#3A4D48] hover:bg-[#F3EFE6] border border-black/5"
                }`}
              >
                <span>{plan.name}</span>
                {plan.badge && (
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                      isSelected
                        ? "bg-[#C9974A] text-[#082D29]"
                        : "bg-black/5 text-[#A07430]"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Plan Showcase Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#073B32]/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Left: High-Resolution Floor Plan Image View */}
            <div className="lg:col-span-7 bg-[#082D29] p-4 sm:p-8 flex flex-col items-center justify-center relative min-h-[360px] sm:min-h-[520px]">
              {/* Badges on Image */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-[#C9974A] text-[#082D29] text-xs font-bold uppercase tracking-wider shadow">
                  {currentPlan.area}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                  {currentPlan.units}
                </span>
              </div>

              {/* Click to Zoom Banner */}
              <button
                onClick={() => handleOpenLightbox(currentPlan.id)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:text-[#C9974A] hover:bg-black/80 backdrop-blur-md transition-all border border-white/10 flex items-center gap-1.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#C9974A]"
                aria-label="Ampliar planta em tela cheia"
              >
                <Maximize2 className="w-4 h-4 text-[#DFB772]" />
                <span className="hidden sm:inline">Ampliar</span>
              </button>

              {/* Interactive Floor Plan Image */}
              <div
                onClick={() => handleOpenLightbox(currentPlan.id)}
                className="relative w-full h-[320px] sm:h-[450px] cursor-pointer group"
              >
                <Image
                  src={currentPlan.image}
                  alt={`${currentPlan.name} - Residencial ORA`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-102"
                  priority
                />
              </div>

              <div className="mt-3 text-[11px] text-white/50 text-center">
                Toque na imagem para ampliar e conferir as cotas completas
              </div>
            </div>

            {/* Right: Technical Details & Specifications */}
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#A07430] block mb-1">
                  Especificações Oficiais
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-serif font-bold text-[#073B32] leading-tight"
                  style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
                >
                  {currentPlan.name}
                </h3>
                <p className="text-sm text-[#DFB772] font-semibold mt-1 bg-[#073B32] px-3 py-1 rounded-md inline-block">
                  {currentPlan.tagline}
                </p>
                {currentPlan.totalArea && (
                  <p className="text-xs font-medium text-[#073B32] mt-2 bg-[#F3EFE6] p-2 rounded-lg border border-[#C9974A]/30">
                    🌿 {currentPlan.totalArea}
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#073B32]/70">
                  Destaques da Unidade:
                </h4>
                <ul className="space-y-2">
                  {currentPlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3A4D48]">
                      <Check className="w-4 h-4 text-[#C9974A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Room Breakdown Grid */}
              <div className="space-y-2.5 pt-2 border-t border-black/5">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#073B32]/70">
                  Medidas dos Ambientes:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {currentPlan.dimensions.map((dim, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5] border border-black/5"
                    >
                      <span className="text-[#526460] truncate pr-1">{dim.room}:</span>
                      <span className="font-semibold text-[#073B32] shrink-0">{dim.area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={getWhatsAppUrl(currentPlan.whatsappMessage)}
                  external
                  icon={<MessageCircle className="w-5 h-5" />}
                  className="w-full justify-center"
                >
                  Consultar disponibilidade desta planta
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Architecture Guide: Towers & Garden Deployment Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            onClick={() => {
              const img: LightboxImage = {
                src: "/images/floor-plans/disposicao-unidades-torre.png",
                title: "Disposição das Unidades na Torre",
                subtitle: "Pavimento Tipo com 8 Apartamentos",
                description: "Representação da orientação das unidades 01 a 08 e circulação central.",
              };
              planImages.push(img);
              setCurrentIndex(planImages.length - 1);
              setLightboxOpen(true);
            }}
            className="p-6 rounded-2xl bg-[#082D29] text-white flex items-center justify-between gap-4 cursor-pointer hover:bg-[#073B32] transition-colors border border-white/10 group shadow-md"
          >
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-semibold text-[#DFB772] tracking-wider block">
                Pavimento Tipo
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                Disposição das Unidades na Torre
              </h4>
              <p className="text-xs text-[#F3EFE6]/70">
                8 apartamentos por andar (finais 01 a 08)
              </p>
            </div>
            <div className="p-3 rounded-full bg-white/10 group-hover:bg-[#C9974A] group-hover:text-[#082D29] transition-colors shrink-0">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>

          <div
            onClick={() => {
              const img: LightboxImage = {
                src: "/images/floor-plans/implantacao-unidades-garden.png",
                title: "Implantação das Unidades Garden",
                subtitle: "Térreo com Pátios Privativos",
                description: "Disposição dos 4 apartamentos Garden por torre (finais 02, 04, 06 e 08).",
              };
              planImages.push(img);
              setCurrentIndex(planImages.length - 1);
              setLightboxOpen(true);
            }}
            className="p-6 rounded-2xl bg-[#082D29] text-white flex items-center justify-between gap-4 cursor-pointer hover:bg-[#073B32] transition-colors border border-white/10 group shadow-md"
          >
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-semibold text-[#DFB772] tracking-wider block">
                Térreo Exclusivo
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                Implantação das Unidades Garden
              </h4>
              <p className="text-xs text-[#F3EFE6]/70">
                4 apartamentos com pátio privativo por torre
              </p>
            </div>
            <div className="p-3 rounded-full bg-white/10 group-hover:bg-[#C9974A] group-hover:text-[#082D29] transition-colors shrink-0">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={planImages}
        currentIndex={currentIndex}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />
    </section>
  );
}

