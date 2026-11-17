"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, CheckCircle2, Building2, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { PROPERTY_DATA } from "@/data/property";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function About() {
  const { about, indicators, technicalSheet } = PROPERTY_DATA;

  return (
    <section id="apresentacao" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background architectural details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Text, Highlights & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="O Empreendimento"
              title={about.title}
              align="left"
              variant="light"
            />

            <div className="space-y-4 text-base sm:text-lg text-[#3A4D48] leading-relaxed font-light">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Architectural Key Specs */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#073B32]/10">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#A07430] font-semibold">
                  Estrutura
                </span>
                <p className="text-sm font-medium text-[#073B32]">
                  {technicalSheet.towers} Torres residenciais com elevadores
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#A07430] font-semibold">
                  Privacidade
                </span>
                <p className="text-sm font-medium text-[#073B32]">
                  Apenas 8 unidades por andar
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#A07430] font-semibold">
                  Exclusividade
                </span>
                <p className="text-sm font-medium text-[#073B32]">
                  Unidades Garden com pátio privativo
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#A07430] font-semibold">
                  Conveniência
                </span>
                <p className="text-sm font-medium text-[#073B32]">
                  {technicalSheet.parking}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.about)}
                external
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Solicitar apresentação completa
              </Button>
            </div>
          </div>

          {/* Column 2: Architectural Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#073B32]/10 aspect-[4/3] group">
              <Image
                src="/images/hero/portico-entrada.png"
                alt="Pórtico de Entrada do Residencial ORA com guarita e paisagismo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-[0.2em] text-[#DFB772] font-semibold">
                  Pórtico de Acesso
                </span>
                <h3 className="text-lg font-serif font-bold text-white">
                  Guarita com espaço delivery e controle de acesso
                </h3>
              </div>
            </div>

            {/* Overlapping Badge / Floating Card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#073B32] text-[#FAF8F5] p-5 rounded-2xl shadow-xl border border-[#C9974A]/30 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-[#C9974A] text-[#082D29]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C9974A] font-semibold block">
                    Conceito ORA
                  </span>
                  <span className="text-sm font-bold text-white">O tempo a seu favor</span>
                </div>
              </div>
              <p className="text-xs text-[#F3EFE6]/75 leading-relaxed">
                Ambientes funcionais pensados para otimizar sua rotina e proporcionar momentos inesquecíveis.
              </p>
            </div>
          </div>
        </div>

        {/* Faixa de Indicadores Confirmados */}
        <div className="mt-20 pt-10 border-t border-[#073B32]/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {indicators.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#073B32]/10 transition-all duration-300 hover:shadow-md hover:border-[#C9974A]/40 group"
              >
                <div className="text-xs uppercase tracking-wider text-[#A07430] font-semibold mb-1">
                  {ind.label}
                </div>
                <div
                  className="text-2xl sm:text-3xl font-serif font-bold text-[#073B32] group-hover:text-[#C9974A] transition-colors mb-2"
                  style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
                >
                  {ind.value}
                </div>
                <p className="text-xs text-[#526460] leading-relaxed">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

