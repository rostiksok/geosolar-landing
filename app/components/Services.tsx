"use client";
import { useInView } from "../utils/useInView";

export default function Services() {
  const [titleRef, titleInView] = useInView();
  const [contentRef, contentInView] = useInView();
  const steps = [
    {
      id: "01",
      title: "Геодезичне знімання ділянки",
      description: "Професійно знімаємо ділянку для розрахунку ідеальних кутів нахилу та уникнення затінень. Кожен ватт працюватиме на вас."
    },
    {
      id: "02",
      title: "Розрахунок оптимального розміщення",
      description: "На основі геодезичних даних створюємо модель станції з максимальною генерацією та швидкою окупністю."
    },
    {
      id: "03",
      title: "Технічне проєктування СЕС",
      description: "Розробляємо детальний інженерний план з підбором обладнання."
    },
    {
      id: "04",
      title: "Підбір та постачання обладнання",
      description: "Постачаємо сертифіковані інвертори Huawei, Deye, Solis та панелі Longi з ККД 23.3%."
    },
    {
      id: "05",
      title: "Монтаж та підключення",
      description: "Виконуємо якісний монтаж наземних, дахових та мембранних станцій, підключаємо систему до мережі."
    },
    {
      id: "06",
      title: "Оформлення «Зеленого тарифу»",
      description: "Повний юридичний супровід — від дозволів до підключення та оформлення «Зеленого тарифу» для стабільного доходу."
    }
  ];

  return (
    <section className="py-8 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className={`text-3xl md:text-5xl font-bold text-black uppercase leading-tight mb-16 max-w-4xl animate-fade-up ${titleInView ? "in-view" : ""}`}>
          ВІД ДІЛЯНКИ ДО РОЗЕТКИ — <span className="text-[#E8922D]">ПОВНИЙ ЦИКЛ ПОСЛУГ</span> ДЛЯ ВАШОГО ПРОЄКТУ
        </h2>

        <div ref={contentRef} className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Isometric Image */}
          <div className={`w-full lg:w-1/2 relative group animate-fade-right ${contentInView ? "in-view" : ""}`}>
            {/* Decorative element behind image */}
            <div className="absolute -inset-4 bg-orange-100/50 rounded-[40px] blur-2xl group-hover:bg-orange-200/50 transition-colors duration-500"></div>
            
            <img 
              src="/schema.jpg" 
              alt="Схема сонячної електростанції" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-white hover:scale-[1.02] transition-transform duration-500" 
            />
          </div>

          {/* Right Side: Steps List */}
          <div className="w-full lg:w-1/2 space-y-8">
             {steps.map((step, i) => (
               <div key={step.id} className={`flex gap-6 animate-fade-left ${contentInView ? "in-view" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
                 <div className="flex-shrink-0 w-10 text-[#E8922D] font-bold text-xl pt-1">
                   {step.id}
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
