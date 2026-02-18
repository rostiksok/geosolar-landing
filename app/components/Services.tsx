export default function Services() {
  const steps = [
    {
      id: "01",
      title: "Підготовка проєкту «під ключ»",
      description: "Беремо на себе всі етапи – від ідеї до введення в експлуатацію."
    },
    {
      id: "02",
      title: "Розрахунок економічної доцільності",
      description: "Аналізуємо потреби та пропонуємо фінансово вигідні рішення для швидкої окупності."
    },
    {
      id: "03",
      title: "Технічне проєктування",
      description: "Розробляємо детальний інженерний план з урахуванням технологічних особливостей."
    },
    {
      id: "04",
      title: "Підбір та постачання обладнання",
      description: "Пропонуємо сертифіковані компоненти від провідних виробників."
    },
    {
      id: "05",
      title: "Монтаж і налаштування",
      description: "Наші фахівці швидко та професійно виконують усі роботи."
    },
    {
      id: "06",
      title: "Юридичний супровід",
      description: "Допомагаємо з дозволами та підключенням до мережі, забезпечуючи легальність роботи."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-black uppercase leading-tight mb-16 max-w-4xl">
          КОМПЛЕКСНИЙ ПІДХІД – <span className="text-green-700">ПОВНИЙ ЦИКЛ ПОСЛУГ</span> ДЛЯ ВАШОГО ПРОЄКТУ
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Isometric Image */}
          <div className="w-full lg:w-1/2">
             {/* Placeholder for the 3D Isometric Building */}
  
            <img src="https://nrg.com.ua/wp-content/uploads/2025/03/group-3909-png.webp" alt="" />
          </div>

          {/* Right Side: Steps List */}
          <div className="w-full lg:w-1/2 space-y-8">
             {steps.map((step) => (
               <div key={step.id} className="flex gap-6">
                 <div className="flex-shrink-0 w-10 text-green-700 font-bold text-xl pt-1">
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
