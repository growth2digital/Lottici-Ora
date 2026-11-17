import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Highlights } from "@/components/sections/Highlights";
import { Amenities } from "@/components/sections/Amenities";
import { Interiors } from "@/components/sections/Interiors";
import { FloorPlans } from "@/components/sections/FloorPlans";
import { Location } from "@/components/sections/Location";
import { Developer } from "@/components/sections/Developer";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#082D29] flex flex-col selection:bg-[#C9974A] selection:text-[#082D29]">
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Amenities />
      <Interiors />
      <FloorPlans />
      <Location />
      <Developer />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

