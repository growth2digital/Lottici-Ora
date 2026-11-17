"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  Check,
  Map,
  Briefcase,
  Flame,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Lightbox, LightboxImage } from "../ui/Lightbox";
import { PROPERTY_DATA } from "@/data/property";

const AMENITY_ICON_MAP: Record<string, React.ReactNode> = {
  coworking: <Briefcase className="w-7 h-7 text-[#DFB772]" />,
  quiosques: <Flame className="w-7 h-7 text-[#DFB772]" />,
  marketplace: <ShoppingBag className="w-7 h-7 text-[#DFB772]" />,
  "espaco-pet": <Heart className="w-7 h-7 text-[#DFB772]" />,
  "portaria-delivery": <ShieldCheck className="w-7 h-7 text-[#DFB772]" />,
};

export function Amenities() {
  const { amenitiesCategories, amenities } = PROPERTY_DATA;
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter amenities
  const filteredAmenities =
    activeCategory === "all"
      ? amenities
      : amenities.filter((item) => item.category === activeCategory);

  // Prepare images with real photos for lightbox
  const galleryImages: LightboxImage[] = amenities
    .filter((a) => a.image)
    .map((a) => ({
      src: a.image!,
      title: a.name,
      subtitle: a.categoryLabel,
      description: a.description,
    }));

  const handleOpenLightbox = (imageSrc: string) => {
    const idx = galleryImages.findIndex((img) => img.src === imageSrc);
    if (idx !== -1) {
      setCurrentIndex(idx);
      setLightboxOpen(true);
    }
  };

  return (
    <section id="lazer" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Infraestrutura e Lazer"
          title="Um universo de possibilidades para aproveitar todos os dias."
          subtitle="Do descanso à diversão, do trabalho aos encontros especiais, o ORA reúne espaços planejados para enriquecer a sua experiência de morar."
          align="center"
          variant="light"
          className="mb-12"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {amenitiesCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9974A] ${
                activeCategory === cat.id
                  ? "bg-[#073B32] text-[#FAF8F5] shadow-md border border-[#C9974A]/40"
                  : "bg-white text-[#3A4D48] hover:bg-[#F3EFE6] border border-black/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAmenities.map((item) => {
            const hasImage = Boolean(item.image);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#073B32]/10 transition-all duration-500 flex flex-col group"
              >
                {/* Image Section */}
                {hasImage ? (
                  <div
                    onClick={() => handleOpenLightbox(item.image!)}
                    className="relative w-full aspect-[16/10] overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.image!}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#073B32]/90 backdrop-blur-sm text-[#DFB772] text-[10px] font-semibold tracking-wider uppercase border border-[#C9974A]/30">
                        {item.badge}
                      </span>
                    )}

                    {/* Zoom Icon Button */}
                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4 text-[#DFB772]" />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-[#073B32] via-[#082D29] to-[#05241E] p-4 sm:p-5 flex flex-col justify-between overflow-hidden border-b border-[#C9974A]/20">
                    {/* Atmospheric lighting glows */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#C9974A]/15 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0E4F43]/40 rounded-full blur-xl pointer-events-none" />

                    {/* Top Row: Badge only (identically positioned to image cards) */}
                    <div className="relative z-10 flex items-center justify-between">
                      {item.badge ? (
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#DFB772] text-[10px] font-semibold tracking-wider uppercase border border-[#C9974A]/30">
                          {item.badge}
                        </span>
                      ) : <span />}

                      <span className="text-[10px] uppercase tracking-wider text-white/50 font-medium">
                        Infraestrutura ORA
                      </span>
                    </div>

                    {/* Center Icon Graphic */}
                    <div className="relative z-10 flex items-center justify-center my-auto">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-[#C9974A]/50 group-hover:bg-[#C9974A]/20 transition-all duration-300">
                        {AMENITY_ICON_MAP[item.id] || <Sparkles className="w-7 h-7 text-[#DFB772]" />}
                      </div>
                    </div>

                    {/* Bottom subtle note */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] text-[#DFB772]/80">
                      <span className="inline-flex items-center gap-1 font-medium">
                        <Sparkles className="w-3 h-3 text-[#C9974A]" />
                        Espaço Planejado
                      </span>
                      <span className="text-white/40 text-[10px]">Condomínio ORA</span>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-[#A07430]">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#073B32] group-hover:text-[#A07430] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#526460] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-3 border-t border-black/5 grid grid-cols-2 gap-2">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#3A4D48]">
                          <Check className="w-3 h-3 text-[#C9974A] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Masterplan of Common Areas Card */}
        <div className="mt-16 bg-[#082D29] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden border border-[#C9974A]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DFB772] text-xs font-semibold uppercase tracking-wider">
                <Map className="w-3.5 h-3.5" />
                Implantação Oficial
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Mapa mestre de convivência e lazer
              </h3>
              <p className="text-sm text-[#F3EFE6]/80 leading-relaxed">
                Todas as 17 áreas comuns do condomínio foram estrategicamente posicionadas no eixo central para garantir acessibilidade, privacidade e convívio harmonioso entre as 7 torres.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    const mapImg: LightboxImage = {
                      src: "/images/amenities/mapa-areas-comuns.png",
                      title: "Mapa das 17 Áreas de Uso Comum",
                      subtitle: "Implantação Oficial Residencial ORA",
                      description: "Visualização detalhada das 17 comodidades e acessos de pedestres e veículos.",
                    };
                    const exists = galleryImages.findIndex((g) => g.src === mapImg.src);
                    if (exists !== -1) {
                      setCurrentIndex(exists);
                    } else {
                      galleryImages.push(mapImg);
                      setCurrentIndex(galleryImages.length - 1);
                    }
                    setLightboxOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C9974A] text-[#082D29] font-semibold text-xs sm:text-sm hover:bg-[#DFB772] transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                  Ver mapa completo ampliado
                </button>
              </div>
            </div>

            <div
              onClick={() => {
                const mapImg: LightboxImage = {
                  src: "/images/amenities/mapa-areas-comuns.png",
                  title: "Mapa das 17 Áreas de Uso Comum",
                  subtitle: "Implantação Oficial Residencial ORA",
                  description: "Visualização detalhada das 17 comodidades e acessos de pedestres e veículos.",
                };
                galleryImages.push(mapImg);
                setCurrentIndex(galleryImages.length - 1);
                setLightboxOpen(true);
              }}
              className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl cursor-pointer group"
            >
              <Image
                src="/images/amenities/mapa-areas-comuns.png"
                alt="Mapa Oficial das 17 Áreas de Uso Comum do Residencial ORA"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-xs text-white font-medium flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-[#DFB772]" />
                Clique para ampliar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for Amenities */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        currentIndex={currentIndex}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />
    </section>
  );
}
