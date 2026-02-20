"use client";
import { useInView } from "../utils/useInView";

const news = [
  {
    id: 1,
    date: "15.02.2026",
    title: "Чому 30 кВт на Huawei + Longi — це найкраща інвестиція 2026 року?",
    excerpt: "Панелі Longi мають ККД 23.3% — це максимум на сьогодні. Інвертор Huawei працює без вентиляторів, що виключає поломки. Завдяки точному геодезичному зніманню від GeoSolar, ви повертаєте інвестиції менш ніж за 4 роки.",
    image: "/hero-img.png",
  },
  {
    id: 2,
    date: "10.02.2026",
    title: "GeoSolar: Від ділянки до розетки — як працює наш підхід",
    excerpt: "Все починається з точних геодезичних вимірювань. Ми знімаємо ділянку, підбираємо обладнання Huawei та Longi, виконуємо монтаж та оформлюємо «Зелений тариф». Проєкти від 5кВт до 1000кВт і більше.",
    image: "/about-image.webp",
  },
];

export default function News() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  // Helper to style "GeoSolar" globally in text
  const styleGeoSolar = (text: string) => {
    const parts = text.split(/(GeoSolar)/g);
    return parts.map((part, i) => 
      part === "GeoSolar" ? (
        <span key={i} className="font-bold">
          <span className="text-[#1B2A4A]">Geo</span>
          <span className="text-[#E8922D]">Solar</span>
        </span>
      ) : part
    );
  };

  return (
    <section id="news" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mb-12">
          <h2 className={`mt-2 text-4xl font-bold text-black uppercase animate-fade-up ${headerInView ? "in-view" : ""}`}>НОВИНИ ТА ПОРАДИ</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <div key={item.id} className={`group cursor-pointer animate-fade-up ${gridInView ? "in-view" : ""}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200 mb-6">
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="space-y-3">
                <span className="text-[#E8922D] font-bold text-sm bg-orange-50 px-2 py-1 rounded">{item.date}</span>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#E8922D] transition-colors leading-tight">
                  {styleGeoSolar(item.title)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {styleGeoSolar(item.excerpt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
