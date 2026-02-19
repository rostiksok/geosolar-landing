"use client";
import Link from "next/link";
import { MapPin, Cpu, Zap } from "lucide-react";
import { scrollToContact } from "../utils/scrollTo";

export default function Solutions() {
  return (
    <section className="py-16 bg-[#0B1221] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1221] to-[#1a2c4e] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight mb-8">
              Від ділянки <br />
              <span className="text-[#E8922D]">до розетки</span>
            </h2>
            <Link
              href="#contacts"
              onClick={(e) => scrollToContact(e, "contacts")}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#E8922D] hover:bg-[#d17f1f] transition-all shadow-lg active:scale-95 active:shadow-inner"
            >
              Безкоштовна консультація
            </Link>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border-l-4 border-[#E8922D]">
               <p className="text-gray-300 mb-2">
                 Ми беремо на себе <span className="text-white font-bold">абсолютно всі етапи</span> створення вашої сонячної електростанції — від точних <span className="text-white font-bold">геодезичних вимірювань</span> до підключення та оформлення <span className="text-white font-bold">«Зеленого тарифу»</span>.
               </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-black grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Pillar 1: ДІЛЯНКА */}
           <div className="space-y-4">
              <div className="w-16 h-16 bg-transparent">
                 <MapPin className="w-12 h-12 text-[#E8922D]" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold">
                Ділянка
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                 Все починається з точних геодезичних вимірювань. Ми професійно знімаємо ділянку, щоб розрахувати ідеальні кути нахилу та уникнути найменших затінень.
              </p>
           </div>

           {/* Pillar 2: ПРОЄКТ */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-transparent">
                 <Cpu className="w-12 h-12 text-[#E8922D]" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold">
                Проєкт
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                 Підбираємо найкраще обладнання — інвертори Huawei SUN2000 та панелі Longi Hi-MO X6 615W. Це «золотий стандарт» надійності та генерації.
              </p>
           </div>

           {/* Pillar 3: РОЗЕТКА */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-transparent">
                 <Zap className="w-12 h-12 text-[#E8922D]" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold">
                Розетка
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                 Виконуємо якісний монтаж та підключаємо систему до мережі. Ви отримуєте готову енергію для дому або стабільний дохід за «Зеленим тарифом».
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
