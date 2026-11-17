"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle, Maximize2 } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "./Button";

export interface LightboxImage {
  src: string;
  title: string;
  subtitle?: string;
  description?: string;
  dimensions?: string;
}

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  const whatsappMessage = `Olá! Estive visualizando "${current.title}" no Residencial ORA e gostaria de saber mais informações.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 md:p-6 transition-all duration-300 animate-fadeIn"
    >
      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-auto">
        <div className="text-white/80 text-xs sm:text-sm font-medium tracking-wider">
          <span className="text-[#C9974A] font-bold">{currentIndex + 1}</span> / {images.length}
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar visualização"
          className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-[#C9974A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9974A]"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Imagem anterior"
            className="absolute left-2 sm:left-4 z-40 p-2 sm:p-3 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9974A]"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Próxima imagem"
            className="absolute right-2 sm:right-4 z-40 p-2 sm:p-3 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9974A]"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div className="relative w-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center">
          <Image
            src={current.src}
            alt={current.title}
            fill
            className="object-contain select-none"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Caption & Actions */}
        <div className="w-full mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col sm:flex-row items-center justify-between gap-3 text-white text-center sm:text-left">
          <div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
              {current.title}
            </h3>
            {current.subtitle && (
              <p className="text-xs sm:text-sm text-[#C9974A] font-medium">{current.subtitle}</p>
            )}
            {current.description && (
              <p className="text-xs sm:text-sm text-white/70 max-w-xl mt-1">{current.description}</p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="whatsapp"
              size="sm"
              href={getWhatsAppUrl(whatsappMessage)}
              external
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Consultar este espaço
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

