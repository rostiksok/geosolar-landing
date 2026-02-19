"use client";
import Link from "next/link";
import { scrollToContact } from "../utils/scrollTo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-mobile.webp" media="(max-width: 575px)" />
          <img
            src="/hero-img.png"
            alt="GeoSolar — Precision Solar Solutions"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32">
        <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#1B2A4A] mb-6 uppercase tracking-tight" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.8)' }}>
            Від ділянки <br />до розетки
          </h1>
          <p className="text-xl md:text-2xl font-bold text-[#1B2A4A]/90 mb-4" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.7)' }}>
            ЕНЕРГОНЕЗАЛЕЖНІСТЬ ВАШОГО БІЗНЕСУ ТА ДОМУ
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-10 max-w-2xl mx-auto">
            GeoSolar — поєднання професійної геодезії та сучасних технологій сонячної енергетики. 
            Від точного виміру до запуску станції під «Зелений тариф».
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="#calculator"
              onClick={(e) => scrollToContact(e, "calculator")}
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-[#1B2A4A] text-lg font-bold rounded-full text-[#1B2A4A] bg-white/80 hover:bg-white transition-all shadow-lg backdrop-blur-md"
            >
              Інвестиційний калькулятор
            </Link>
            <Link
              href="#contacts"
              onClick={(e) => scrollToContact(e, "contacts")}
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#E8922D] hover:bg-[#d17f1f] transition-all shadow-lg"
            >
              Безкоштовна консультація
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
