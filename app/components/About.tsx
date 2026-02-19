"use client";

import { scrollToContact } from "../utils/scrollTo";

export default function About() {
  return (
    <section id="about" className="py-8 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* Section 1: Reliable Partner */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-black uppercase leading-tight">
              ТОЧНІСТЬ У КОЖНОМУ ВИМІРІ, <br />
              <span className="text-[#E8922D]">ЕНЕРГІЯ У КОЖНОМУ ДОМІ</span>
            </h2>
            <a
              href="#contacts"
              onClick={(e) => scrollToContact(e, "contacts")}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#1B2A4A] hover:bg-[#152238] transition-all shadow-lg active:scale-95 active:shadow-inner cursor-pointer flex-shrink-0"
            >
              Зв'язатися з нами
            </a>
          </div>

          <div className="relative h-64 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/about-image.webp"
              alt="GeoSolar — сонячна електростанція"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>

        {/* Section 2: About GeoSolar */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-black uppercase leading-tight mb-6 ">
            ПРО <span className="text-[#E8922D]">GEOSOLAR</span>
          </h2>

          {/* <div className="flex gap-2 mb-8">
            <div className="w-12 h-6 bg-[#1B2A4A] rounded-sm"></div>
            <div className="w-12 h-6 bg-[#E8922D] rounded-sm"></div>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-black">GeoSolar</span> — це
                поєднання професійної геодезії та сучасних технологій сонячної
                енергетики. Ми допомагаємо бізнесу та приватним домогосподарствам{" "}
                <span className="font-bold text-black">
                  стати незалежними від відключень та високих тарифів.
                </span>
              </p>
              <p>
                Все починається з{" "}
                <span className="font-bold text-black">
                  точних геодезичних вимірювань
                </span>{" "}
                — ми професійно знімаємо ділянку, щоб розрахувати ідеальні кути
                нахилу та уникнути найменших затінень. Кожен ватт вашої станції
                працюватиме на вас!
              </p>
              <p>
                Ми спеціалізуємося на проєктах потужністю від{" "}
                <span className="font-bold text-black">30 кВт</span> (для
                приватних осіб) до{" "}
                <span className="font-bold text-black">90–1000 кВт</span> (для
                бізнесу), використовуючи обладнання Tier-1:{" "}
                <span className="font-bold text-black">
                  інвертори Huawei та панелі Longi 615W
                </span>{" "}
                з ККД 23.3%.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-200">
                <img
                  src="/about-image.webp"
                  alt="Геодезичне знімання"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-200 mt-12">
                <img
                  src="/hero-img.png"
                  alt="Сонячна станція GeoSolar"
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
            ЧОМУ <span className="text-[#E8922D]">GEOSOLAR</span>?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 min-h-[280px]">
              <img
                src="/why.png"
                alt="GeoSolar проєкт"
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            <div>
              {/* <div className="flex gap-2 mb-10">
                <div className="w-12 h-6 bg-[#1B2A4A] rounded-sm"></div>
                <div className="w-12 h-6 bg-[#E8922D] rounded-sm"></div>
              </div> */}

              <div className="space-y-8">
                {[
                  {
                    n: "01",
                    title: "Точне проєктування",
                    desc: "Виконуємо професійне геодезичне знімання ділянки для ідеального розміщення панелей — максимум генерації з кожного квадратного метра.",
                  },
                  {
                    n: "02",
                    title: "Надійне обладнання Tier-1",
                    desc: "Працюємо з інверторами Huawei SUN2000 (5–125 кВт) та високоефективними панелями Longi Hi-MO X6 615W з ККД 23.3%.",
                  },
                  {
                    n: "03",
                    title: "Рішення під ключ",
                    desc: "Від першого виміру до запуску станції під «Зелений тариф» — ви отримуєте готову енергію для дому або стабільний дохід.",
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-6">
                    <span className="text-[#E8922D] font-bold text-xl pt-0.5 flex-shrink-0 w-8">
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
