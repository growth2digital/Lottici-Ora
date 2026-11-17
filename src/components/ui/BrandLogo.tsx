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
  className = "",
}: OraLogoProps) {
  // variant "light" or "gold" is rendered on dark backgrounds (Header, Footer)
  const isDarkBackground = variant === "light" || variant === "gold";
  const logoSrc = isDarkBackground
    ? "/images/branding/logo-ora.png"
    : "/images/branding/logo-ora-dark.png";

  const sizeClasses = {
    sm: "h-8 sm:h-9",
    md: "h-10 sm:h-11",
    lg: "h-12 sm:h-14",
  };

  return (
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
