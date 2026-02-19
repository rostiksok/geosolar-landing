export default function Services() {
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
      description: "Розробляємо детальний інженерний план з підбором обладнання Huawei та Longi під ваші потреби."
    },
    {
      id: "04",
      title: "Підбір та постачання обладнання",
      description: "Постачаємо сертифіковані інвертори Huawei SUN2000 (5–125 кВт) та панелі Longi Hi-MO X6 615W з ККД 23.3%."
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
        <h2 className="text-3xl md:text-5xl font-bold text-black uppercase leading-tight mb-16 max-w-4xl">
          ВІД ДІЛЯНКИ ДО РОЗЕТКИ — <span className="text-[#E8922D]">ПОВНИЙ ЦИКЛ ПОСЛУГ</span> ДЛЯ ВАШОГО ПРОЄКТУ
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Isometric Image */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Decorative element behind image */}
            <div className="absolute -inset-4 bg-orange-100/50 rounded-[40px] blur-2xl group-hover:bg-orange-200/50 transition-colors duration-500"></div>
            
            <img 
              src="/vid_dilyanky.png" 
              alt="Схема сонячної електростанції" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-white hover:scale-[1.02] transition-transform duration-500" 
            />
          </div>

          {/* Right Side: Steps List */}
          <div className="w-full lg:w-1/2 space-y-8">
             {steps.map((step) => (
               <div key={step.id} className="flex gap-6">
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
