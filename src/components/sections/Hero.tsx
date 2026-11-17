"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MessageCircle, ArrowRight, Home, Compass, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { PROPERTY_DATA } from "@/data/property";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Hero() {
  const { hero } = PROPERTY_DATA;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#082D29]">
      {/* Background Image with LCP priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/fachada-torre-b.png"
          alt="Fachada Contemporânea do Residencial ORA em Canoas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-[center_35%] scale-105 animate-subtleZoom"
        />

        {/* Sophisticated Architectural Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05241E] via-[#082D29]/60 to-[#082D29]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05241E]/80 via-[#082D29]/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28 flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9974A]/40 mb-6 text-white">
            <span className="w-2 h-2 rounded-full bg-[#C9974A] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#F3EFE6]">
              {hero.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#FAF8F5] tracking-tight leading-[1.08] mb-6 drop-shadow-sm"
            style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
          >
            Seu novo jeito de viver começa aqui.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#F3EFE6]/90 font-light leading-relaxed mb-8 max-w-2xl drop-shadow">
            {hero.subtitle}
          </p>

          {/* Destaques Rápidos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 pt-2 border-t border-white/15">
            <div className="flex items-center gap-3 bg-black/25 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <div className="p-2 rounded-lg bg-[#C9974A]/20 text-[#DFB772] shrink-0">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-white/60 uppercase tracking-wider">Tipologia</span>
                <span className="text-sm font-semibold text-white">2 ou 3 dormitórios</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-black/25 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <div className="p-2 rounded-lg bg-[#C9974A]/20 text-[#DFB772] shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-white/60 uppercase tracking-wider">Metragens</span>
                <span className="text-sm font-semibold text-white">48,94 m² a 60,86 m²</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-black/25 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <div className="p-2 rounded-lg bg-[#C9974A]/20 text-[#DFB772] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-white/60 uppercase tracking-wider">Localização</span>
                <span className="text-sm font-semibold text-white">Igara / São José · Canoas</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.heroPrimary)}
              external
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Quero conhecer o ORA
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#apresentacao"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Explorar o empreendimento
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 pointer-events-none">
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-white/70">
          Role para descobrir
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C9974A]" />
      </div>
    </section>
  );
}

