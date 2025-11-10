"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        src="/hero-bg.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Optional Semi-Transparent Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] leading-tight">
          Integrated Electric Vehicle & Digital Mobility Ecosystem for Djibouti
        </h1>
        <p className="text-lg md:text-xl text-[#FFE066]/90 max-w-3xl">
          Empowering Djibouti's urban transport with sustainable,
          technologically advanced, and economically viable EV solutions.
        </p>

        <div className="flex gap-4 flex-wrap mt-6">
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-[#FFD700]/90 text-[#050404] font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:bg-[#FFE066]/90 transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn More
            <ArrowRight size={18} />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-[#FFD700] text-[#FFD700] font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-2xl hover:bg-[#FFD700] hover:text-[#050404] transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Optional Neon Glow at bottom */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#FFD700]/50 to-[#FFE066]/30 blur-3xl animate-pulse-slow"></div>
    </section>
  );
}
