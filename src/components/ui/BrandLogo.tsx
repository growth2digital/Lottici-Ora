import React from "react";
import Image from "next/image";

interface OraLogoProps {
  variant?: "light" | "dark" | "gold";
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  className?: string;
}

export function OraLogo({
  variant = "light",
  size = "md",
  showSubtitle = true,
  className = "",
}: OraLogoProps) {
  const isLight = variant === "light";
  const isGold = variant === "gold";
  // variant "light" or "gold" is rendered on dark backgrounds (Header, Footer)
  const isDarkBackground = variant === "light" || variant === "gold";
  const logoSrc = isDarkBackground
    ? "/images/branding/logo-ora.png"
    : "/images/branding/logo-ora-dark.png";

  // Colors based on brand manual:
  // Primary Green: #073B32
  // Gold: #C9974A
  // Light Sand: #FAF8F5
  const emblemBg = isLight ? "#FAF8F5" : "#073B32";
  const emblemSpiral = isGold ? "#C9974A" : isLight ? "#073B32" : "#C9974A";
  const textColor = isLight ? "text-[#FAF8F5]" : "text-[#073B32]";
  const subtextColor = isLight ? "text-[#C9974A]" : "text-[#7B8B84]";

  const sizeClasses = {
    sm: "h-8 text-xl",
    md: "h-11 text-2xl",
    lg: "h-16 text-4xl",
    sm: "h-8 sm:h-9",
    md: "h-10 sm:h-11",
    lg: "h-12 sm:h-14",
  };

  const emblemSizes = {
    sm: 30,
    md: 40,
    lg: 56,
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Organic circular spiral emblem inspired by ORA Pórtico & Manual */}
      <svg
        width={emblemSizes[size]}
        height={emblemSizes[size]}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <circle cx="50" cy="50" r="48" fill={isLight ? "#073B32" : "#FAF8F5"} stroke="#C9974A" strokeWidth="2.5" />
        <path
          d="M50 20C35 20 23 32 23 47C23 60 32 70 45 72C48 72.5 50 70 50 67C50 64.5 48 64 45 63.5C36 62 30 55 30 47C30 36 39 27 50 27C61 27 70 36 70 47C70 54 65 60 58 63C55 64.5 54 67 55 69C56 71 59 72 61 71C72 67 80 58 80 47C80 32 67 20 50 20Z"
          fill="#C9974A"
        />
        <path
          d="M50 35C43 35 38 40.5 38 47.5C38 53 42 57.5 48 58C50 58.2 51.5 56.5 51.5 54.8C51.5 53.2 50 52.8 48 52.5C45 52 44 49.5 44 47.5C44 44 46.5 41 50 41C53.5 41 56 44 56 47.5C56 50 54 52 51 53C49 53.8 48.5 55.5 49 57C49.5 58.5 51.5 59 53 58.2C58 56 62 52 62 47.5C62 40.5 56.5 35 50 35Z"
          fill={isLight ? "#FAF8F5" : "#073B32"}
        />
      </svg>

      <div className="flex flex-col justify-center">
        <span
          className={`font-serif tracking-[0.25em] font-bold leading-none ${sizeClasses[size]} ${textColor}`}
          style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
        >
          ORA
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium mt-1 ${subtextColor}`}
            style={{ letterSpacing: "0.28em" }}
          >
            Residencial
          </span>
        )}
      </div>
    <div className={`relative flex items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="Residencial ORA — Condomínio Residencial"
        width={300}
        height={100}
        priority
        className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md`}
      />
    </div>
  );
}

export function LotticiLogo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/branding/Logo.svg"
        alt="Lottici Construtora e Incorporadora"
        width={180}
        height={50}
        className={`h-9 w-auto object-contain ${
          variant === "light" ? "brightness-0 invert opacity-95" : "brightness-90"
        }`}
      />
    </div>
  );
}

