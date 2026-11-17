"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowUp, Sparkles, Building2 } from "lucide-react";
import { Button } from "../ui/Button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { CONTACT_CONFIG } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#05241E] text-[#FAF8F5] overflow-hidden">
      {/* Background with Fachada Torre B */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/hero/fachada-torre-b.png"
          alt="Fachada Residencial ORA"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05241E] via-[#05241E]/90 to-[#05241E]/80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9974A]/40 mb-6 text-white mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-[#DFB772]" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#F3EFE6]">
            Viva o Seu Momento
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FAF8F5] tracking-tight leading-[1.12] mb-6 max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
        >
          Seu próximo capítulo pode começar no ORA.
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#F3EFE6]/85 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Descubra mais sobre as plantas, os espaços e as possibilidades do Residencial ORA. Fale com a equipe comercial e encontre o apartamento ideal para você.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.finalCta)}
            external
            icon={<MessageCircle className="w-5 h-5" />}
            className="w-full sm:w-auto text-base px-8 py-4 shadow-xl shadow-[#C9974A]/20"
          >
            Conversar com um consultor
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#plantas"
            icon={<ArrowUp className="w-4 h-4" />}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            Voltar às plantas
          </Button>
        </div>

        {/* Small contact direct reference */}
        <div className="mt-10 text-xs text-white/50 tracking-wide">
          Atendimento direto Lottici Construtora · WhatsApp: {CONTACT_CONFIG.whatsappDisplay}
        </div>
      </div>
    </section>
  );
}

