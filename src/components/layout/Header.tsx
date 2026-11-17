"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { OraLogo } from "../ui/BrandLogo";
import { Button } from "../ui/Button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { CONTACT_CONFIG } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "O ORA", href: "#apresentacao" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Lazer", href: "#lazer" },
  { label: "Apartamentos", href: "#apartamentos" },
  { label: "Plantas", href: "#plantas" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#073B32]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3.5 border-b border-[#C9974A]/20"
          : "bg-gradient-to-b from-[#082D29]/80 via-[#082D29]/40 to-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9974A] rounded-lg"
          aria-label="Residencial ORA - Voltar ao topo"
        >
          <OraLogo variant="light" size={isScrolled ? "sm" : "md"} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#FAF8F5]/90 hover:text-[#C9974A] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9974A] rounded group tracking-wide"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9974A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
            external
            icon={<MessageCircle className="w-4 h-4" />}
          >
            Fale com um consultor
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da construtora"
            className="p-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#073B32]/98 backdrop-blur-xl border-t border-[#C9974A]/20 p-6 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <nav className="flex flex-col space-y-4 pt-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif font-medium text-[#FAF8F5] hover:text-[#C9974A] py-2 border-b border-white/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#C9974A] text-sm">→</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
            <Button
              variant="primary"
              size="lg"
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
              external
              icon={<MessageCircle className="w-5 h-5" />}
              className="w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fale com um consultor
            </Button>
            <div className="text-center text-xs text-white/60 mt-2">
              WhatsApp: {CONTACT_CONFIG.whatsappDisplay} · Canoas/RS
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

