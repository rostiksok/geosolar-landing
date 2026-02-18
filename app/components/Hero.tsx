import Link from "next/link";


export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F5132] mb-4 uppercase tracking-tight">
            Енергія твого успіху
          </h1>
          <p className="text-xl md:text-2xl font-bold text-black mb-8">
            ІННОВАЦІЙНІ РІШЕННЯ ДЛЯ ВАШОГО ДОМУ ТА БІЗНЕСУ
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-green-800 bg-white hover:bg-gray-50 transition-colors shadow-sm"
            >
              Інвестиційний калькулятор
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#0F5132] hover:bg-[#0b3d26] transition-colors shadow-sm"
            >
              Зв'язатися з нами
            </Link>
          </div>
        </div>

        <div className="relative mt-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
               {/* Using the provided desktop version image */}
               <img 
                 src="/hero-image.webp" 
                 alt="Solar Energy Solutions" 
                 className="w-full h-auto object-cover"
               />
          </div>
        </div>
      </div>
    </section>
  );
}
