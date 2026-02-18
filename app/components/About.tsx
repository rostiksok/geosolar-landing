import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-black uppercase leading-tight mb-3">
            ВАШ НАДІЙНИЙ ПАРТНЕР У <br />
            СФЕРІ <span className="text-green-700">ЗЕЛЕНОЇ ЕНЕРГЕТИКИ</span>
          </h2>
          <div className="flex justify-end">
             <Link
              href="#contacts"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#0F5132] hover:bg-[#0b3d26] transition-colors"
            >
              Зв'язатися з нами
            </Link>
          </div>
        </div>
        
        <div className="relative h-64 md:h-[500px] w-full rounded-2xl overflow-hidden">
             <img 
               src="/about-image.webp" 
               alt="Solar Farm" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </section>
  );
}
