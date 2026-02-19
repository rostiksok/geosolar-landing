"use client";

import Link from "next/link";
import { scrollToContact } from "../utils/scrollTo";

export default function About() {

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* Section 1: Reliable Partner */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-black uppercase leading-tight">
              ВАШ НАДІЙНИЙ ПАРТНЕР У <br />
              СФЕРІ <span className="text-green-700">ЗЕЛЕНОЇ ЕНЕРГЕТИКИ</span>
            </h2>
            <a
              href="#contacts"
              onClick={(e) => scrollToContact(e, "contacts")}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#0F5132] hover:bg-[#0b3d26] transition-colors cursor-pointer flex-shrink-0"
            >
              Зв'язатися з нами
            </a>
          </div>

          <div className="relative h-64 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/about-image.webp"
              alt="Solar Farm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>

        {/* Section 2: Future of Energy */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-black uppercase leading-tight mb-6">
            МАЙБУТНЄ <span className="text-green-700">ЕНЕРГЕТИКИ</span> <br />
            ПОЧИНАЄТЬСЯ ТУТ
          </h2>

          <div className="flex gap-2 mb-8">
            <div className="w-12 h-6 bg-[#1a2c4e] rounded-sm"></div>
            <div className="w-12 h-6 bg-[#4e5d78] rounded-sm"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Нашою основною метою є розширення та{" "}
                <span className="font-bold text-black">
                  популяризація сектору альтернативної енергетики та розвиток
                  енергетичних проектів.
                </span>{" "}
                Як група досвідчених компаній, наш колективний досвід та пасія
                приділяються просуванню сектору відновлювальної енергії та
                підтримці розвитку стійких енергетичних проектів.
              </p>
              <p>
                З глибоким зобов'язанням до екологічної відповідальності, ми
                маємо на меті бути лідерами у створенні зеленішого та більш
                стійкого майбутнього. Наші проекти базуються на інноваціях,
                передових технологіях та нестримному прагненні до чистих
                енергетичних рішень, які не лише сприятимуть нашій планеті, але
                й{" "}
                <span className="font-bold text-black">
                  забезпечать стійкий прибуток для наших партнерів
                </span>{" "}
                і зацікавлених сторін.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-200">
                <img
                  src="https://nrg.com.ua/wp-content/uploads/2025/03/c858e0a67816cb6e85183cdf548b10f8-png.webp"
                  alt="SmartFlower Solar"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-200 mt-12">
                <img
                  src="https://nrg.com.ua/wp-content/uploads/2025/03/d29094984a2a34bc4b031bd33eb8c90d-png.webp"
                  alt="NRG Team"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Benefits */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-black uppercase leading-tight mb-12">
            ПЕРЕВАГИ РОБОТИ З <span className="text-green-700">GeoSolar</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://ceelegalmatters.com/images/1Articles/News/2025-11-01/CMS_Kamenyak_PV_Project.jpg"
                alt="NRG Office"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.style.minHeight = "280px";
                    parent.style.background = "#f3f4f6";
                    parent.style.display = "flex";
                    parent.style.alignItems = "center";
                    parent.style.justifyContent = "center";
                  }
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            <div>
              <div className="flex gap-2 mb-10">
                <div className="w-12 h-6 bg-[#1a2c4e] rounded-sm"></div>
                <div className="w-12 h-6 bg-[#4e5d78] rounded-sm"></div>
              </div>

              <div className="space-y-8">
                {[
                  {
                    n: "01",
                    title: "Повний цикл робіт «під ключ»",
                    desc: "Беремо на себе всі етапи: від розрахунку до введення в експлуатацію.",
                  },
                  {
                    n: "02",
                    title: "Досвід та експертиза",
                    desc: "Реалізували десятки успішних проєктів для бізнесу та приватних клієнтів.",
                  },
                  {
                    n: "03",
                    title: "Сучасні технології",
                    desc: "Використовуємо Full-Screen PV модулі, двосторонні панелі, SmartFlower та Carports для максимальної ефективності.",
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-6">
                    <span className="text-green-700 font-bold text-xl pt-0.5 flex-shrink-0 w-8">
                      {item.n}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
