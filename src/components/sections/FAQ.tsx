"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { PROPERTY_DATA } from "@/data/property";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function FAQ() {
  const { faq } = PROPERTY_DATA;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tire Suas Dúvidas"
          title="Perguntas frequentes sobre o Residencial ORA"
          subtitle="Confira as respostas para as principais dúvidas sobre o projeto, infraestrutura e características das unidades."
          align="center"
          variant="light"
          className="mb-14"
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#073B32]/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-[#FAF8F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-[#073B32]">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? "bg-[#C9974A] text-[#082D29] rotate-180"
                        : "bg-[#FAF8F5] text-[#526460]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#4A5D58] leading-relaxed border-t border-black/5 pt-4 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#073B32] text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#C9974A]/30">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-lg font-serif font-bold text-white">
              Ainda tem alguma dúvida sobre o projeto?
            </h4>
            <p className="text-xs sm:text-sm text-[#F3EFE6]/80">
              Nossa equipe de consultores especializados está pronta para ajudar você.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.faq)}
            external
            icon={<MessageCircle className="w-4 h-4" />}
            className="shrink-0"
          >
            Falar com um consultor
          </Button>
        </div>
      </div>
    </section>
  );
}

