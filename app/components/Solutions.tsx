import Link from "next/link";
import { Zap, Settings, Home } from "lucide-react";

export default function Solutions() {
  return (
    <section className="py-16 bg-[#0B1221] text-white relative overflow-hidden">
      {/* Background with slight gradient or image overlay if needed */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1221] to-[#1a2c4e] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight mb-8">
              Інноваційні сонячні рішення <br />
              <span className="text-white">під ключ</span>
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-700 hover:bg-green-800 transition-colors"
            >
              Зв'язатися з нами
            </Link>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border-l-4 border-green-700">
               <p className="text-gray-300 mb-2">
                 Ми забезпечуємо <span className="text-white font-bold">повний цикл робіт</span> зі встановлення сонячних електростанцій, пропонуючи найефективніші та <span className="text-white font-bold">сучасні рішення</span> для бізнесу та приватних клієнтів.
               </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-black grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Card 1 */}
           <div className="space-y-4">
              <div className="w-16 h-16 bg-transparent">
                 {/* Icon placeholder - using Lucide for now */}
                 <Settings className="w-12 h-12 text-green-700" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold">
                 Проєктування, постачання та монтаж СЕС
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                 Розробляємо індивідуальні рішення відповідно до ваших потреб, забезпечуємо якісне обладнання та професійний монтаж.
              </p>
           </div>

           {/* Card 2 */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-transparent">
                 <Zap className="w-12 h-12 text-green-700" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold">
                 Використання новітніх технологій для максимальної ефективності
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                 Застосовуємо передові технології, такі як Full-Screen PV-модулі, двосторонні панелі та інтелектуальні системи керування енергією, що підвищують продуктивність і зменшують витрати.
              </p>
           </div>

           {/* Card 3 */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-transparent">
                 <Home className="w-12 h-12 text-green-700" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold">
                 Встановлення наземних, дахових СЕС та carports
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                 Реалізуємо проєкти будь-якої складності, включаючи традиційні та інноваційні конструкції для ефективного використання простору.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
