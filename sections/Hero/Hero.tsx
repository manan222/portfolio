"use client";

import AuroraBackground from "../../components/animations/AuroraBackground";
import MouseSpotlight from "../../components/animations/MouseSpotlight";
import ScrollIndicator from "../../components/animations/ScrollIndicator";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816]"
    >
      <MouseSpotlight />

      <div className="absolute inset-0 overflow-hidden">
        <AuroraBackground />
      </div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full">
        <HeroContent />
      </div>

      <ScrollIndicator />
    </section>
  );
}