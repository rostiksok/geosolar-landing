import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Absolute and Full Width */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-mobile.webp" media="(max-width: 575px)" />
          <img
            src="/hero-image.webp"
            alt="Solar Energy Solutions"
            className="w-full h-full object-cover"
          />
        </picture>
        {/* Subtle overlay for text contrast */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#0F5132] mb-6 uppercase tracking-tight drop-shadow-sm">
            Енергія твого успіху
          </h1>
          <p className="text-xl md:text-3xl font-bold text-black mb-10 drop-shadow-sm">
            ІННОВАЦІЙНІ РІШЕННЯ ДЛЯ ВАШОГО ДОМУ ТА БІЗНЕСУ
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center px-10 py-4 border border-green-700 text-lg font-bold rounded-full text-green-800 bg-white/80 hover:bg-white transition-all shadow-lg backdrop-blur-md"
            >
              Інвестиційний калькулятор
            </Link>
            <Link
              href="#contacts"
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#0F5132] hover:bg-[#0b3d26] transition-all shadow-lg"
            >
              Зв'язатися з нами
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
