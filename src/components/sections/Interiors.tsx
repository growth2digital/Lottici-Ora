"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Maximize2, Sparkles, Camera, Eye, CalendarCheck, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Lightbox, LightboxImage } from "../ui/Lightbox";
import { PROPERTY_DATA } from "@/data/property";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Interiors() {
  const { interiors, realDecoradoPhotos } = PROPERTY_DATA;
  const [viewMode, setViewMode] = useState<"real" | "render">("real");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Active collection
  const isReal = viewMode === "real";
  const activePhotos = isReal ? realDecoradoPhotos : interiors;

  const currentGalleryImages: LightboxImage[] = activePhotos.map((item) => ({
    src: item.image,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
  }));

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const whatsappVisitMessage =
    "Olá! Vi as fotos reais do apartamento decorado do Residencial ORA e gostaria de agendar uma visita presencial ao decorado.";

  return (
    <section id="apartamentos" className="py-20 sm:py-28 bg-[#082D29] text-[#FAF8F5] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0E4F43]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C9974A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Experiência de Morar"
            title="Ambientes que inspiram novas histórias."
            subtitle="Imagine os encontros, as conquistas e os pequenos momentos que transformam um espaço em lar. Conheça as fotos reais da unidade decorada e sinta como é morar no ORA."
            align="left"
            variant="dark"
          />

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Button
              variant="whatsapp"
              size="md"
              href={getWhatsAppUrl(whatsappVisitMessage)}
              external
              icon={<CalendarCheck className="w-4 h-4" />}
            >
              Agendar visita ao Decorado
            </Button>
          </div>
        </div>

        {/* View Mode Toggle: Fotos Reais vs Renders 3D */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-md shadow-lg">
            <button
              type="button"
              onClick={() => setViewMode("real")}
              className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer focus:outline-none ${
                isReal
                  ? "bg-[#C9974A] text-[#082D29] shadow-md shadow-[#C9974A]/30 font-bold"
                  : "text-white/75 hover:text-white hover:bg-white/5"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Fotos Reais do Decorado ({realDecoradoPhotos.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("render")}
              className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer focus:outline-none ${
                !isReal
                  ? "bg-[#C9974A] text-[#082D29] shadow-md shadow-[#C9974A]/30 font-bold"
                  : "text-white/75 hover:text-white hover:bg-white/5"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Renders 3D do Projeto ({interiors.length})</span>
            </button>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 border border-white/10 text-xs text-[#DFB772] font-medium backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB772]" />
            <span>Unidade decorada aberta para visitação</span>
          </div>
        </div>

        {/* Real Decorated Apartment Gallery */}
        {isReal ? (
          <div className="space-y-8 animate-fadeIn">
            {/* Featured Hero Photo: Living & Jantar Amplo */}
            <div
              onClick={() => handleOpenLightbox(0)}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group cursor-pointer aspect-[16/9] sm:aspect-[21/9] min-h-[340px]"
            >
              <Image
                src={realDecoradoPhotos[0].image}
                alt={realDecoradoPhotos[0].title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-[#C9974A] text-[#082D29] text-[10px] sm:text-xs uppercase font-extrabold tracking-wider shadow">
                  ⭐ Foto Real do Decorado
                </span>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/60 text-white text-xs border border-white/20 backdrop-blur-md">
                  {realDecoradoPhotos[0].tag}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-1.5">
                    {realDecoradoPhotos[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DFB772] font-medium mb-1">
                    {realDecoradoPhotos[0].subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2">
                    {realDecoradoPhotos[0].description}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md group-hover:bg-[#C9974A] group-hover:text-[#082D29] transition-all shrink-0 self-end sm:self-auto">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Asymmetric Multi-Room Real Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {realDecoradoPhotos.slice(1).map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => handleOpenLightbox(idx + 1)}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9974A]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#073B32]/90 backdrop-blur-md text-[#DFB772] text-[10px] uppercase font-bold tracking-wider border border-[#C9974A]/30">
                      {photo.tag}
                    </span>

                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4 text-[#DFB772]" />
                    </div>
                  </div>

                  <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-serif font-bold text-white group-hover:text-[#DFB772] transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-[#DFB772] font-medium mt-0.5">
                        {photo.subtitle}
                      </p>
                    </div>
                    <p className="text-xs text-white/70 line-clamp-2 pt-2 border-t border-white/5">
                      {photo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* 3D Conceptual Project Renders */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch animate-fadeIn">
            {interiors.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenLightbox(idx)}
                className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#C9974A]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#073B32]/90 backdrop-blur-md text-[#DFB772] text-[10px] uppercase font-semibold tracking-wider border border-[#C9974A]/30">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#DFB772]" />
                  </div>
                </div>

                {/* Content placed below the render so it NEVER covers the render */}
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#DFB772] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#DFB772] font-medium mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-white/75 line-clamp-2 pt-3 border-t border-white/10">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Visit Invitation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#073B32] via-[#05241E] to-[#082D29] border border-[#C9974A]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#DFB772] font-bold">
              <CheckCircle2 className="w-4 h-4" />
              Unidade Decorada Aberta no Local
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Gostou dos acabamentos? Venha tomar um café e conhecer pessoalmente.
            </h4>
            <p className="text-xs sm:text-sm text-white/75 max-w-2xl">
              O apartamento decorado está disponível para visitas na Rua Pirapó, 1553, bairro Igara, Canoas/RS. Agende um horário exclusivo com a equipe de consultores da Lottici.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            href={getWhatsAppUrl(whatsappVisitMessage)}
            external
            icon={<MessageCircle className="w-5 h-5" />}
            className="shrink-0 whitespace-nowrap"
          >
            Agendar visita agora
          </Button>
        </div>
      </div>

      {/* Full Resolution Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={currentGalleryImages}
        currentIndex={currentIndex}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />
    </section>
  );
}
