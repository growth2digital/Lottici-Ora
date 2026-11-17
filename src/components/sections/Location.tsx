"use client";

import React from "react";
import { MapPin, Navigation, MessageCircle, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { PROPERTY_DATA } from "@/data/property";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Location() {
  const { location } = PROPERTY_DATA;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Rua Pirapo 1553, Igara, Canoas - RS"
  )}`;

  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Localização Estratégica"
          title={location.title}
          subtitle={location.subtitle}
          align="center"
          variant="light"
          className="mb-14"
        />

        {/* Content & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Address Card & Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-[#073B32]/10 space-y-6">
              {/* Confirmed Address Block */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#A07430] block">
                  Endereço Oficial do Empreendimento
                </span>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#073B32] text-[#DFB772] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#073B32]">
                      {location.address}
                    </h3>
                    <p className="text-sm text-[#4A5D58]">{location.neighborhood}</p>
                    <p className="text-xs text-[#526460]">
                      {location.cityState} · CEP {location.cep}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#3A4D48] leading-relaxed pt-2 border-t border-black/5">
                {location.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {location.highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FAF8F5] border border-black/5">
                    <span className="text-xs font-bold text-[#073B32] block mb-1">
                      {item.title}
                    </span>
                    <p className="text-[11px] text-[#526460] leading-snug">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation Action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.location)}
                  external
                  icon={<MessageCircle className="w-4 h-4" />}
                  className="flex-1"
                >
                  Quero saber mais sobre a localização
                </Button>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold text-[#073B32] bg-[#F3EFE6] hover:bg-[#E6DFD1] transition-colors border border-black/5"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C9974A]" />
                  Abrir no Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Interactive Map View */}
          <div className="lg:col-span-7 bg-[#082D29] rounded-3xl overflow-hidden shadow-xl border border-[#073B32]/10 relative min-h-[380px] sm:min-h-[480px] flex flex-col">
            {/* Map Header */}
            <div className="p-4 bg-[#05241E] text-white flex items-center justify-between border-b border-white/10 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  Região Igara / São José · Canoas/RS
                </span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#DFB772] hover:underline flex items-center gap-1"
              >
                Ver em tela cheia
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Maps */}
            <div className="relative w-full flex-1">
              <iframe
                title="Localização do Residencial ORA - Rua Pirapó, 1553, Canoas/RS"
                src="https://maps.google.com/maps?q=Rua+Pirap%C3%B3+1553,+Canoas+-+RS&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />

              {/* Pin Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-[#073B32]/95 backdrop-blur-md p-4 rounded-2xl border border-[#C9974A]/40 text-white shadow-xl pointer-events-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#C9974A] text-[#082D29]">
                    Local da Obra
                  </span>
                  <span className="text-xs font-semibold text-white">Residencial ORA</span>
                </div>
                <p className="text-xs text-[#F3EFE6]/90">
                  Rua Pirapó, 1553 · Igara, Canoas - RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

