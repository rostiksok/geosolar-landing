import Link from "next/link";

export default function SupplyTerms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="text-[#E8922D] hover:underline text-sm mb-8 inline-block">
          ← Повернутися на головну
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-[#1B2A4A] uppercase mb-8">Умови постачання</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">1. Загальні положення</h2>
            <p>
              ТОВ «<span className="text-[#1B2A4A]">Geo</span><span className="text-[#E8922D]">Solar</span>» здійснює постачання обладнання для сонячних електростанцій на території України.
              Усі товари сертифіковані та відповідають стандартам.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">2. Обладнання</h2>
            <p>Ми постачаємо виключно сертифіковане обладнання від виробників:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Huawei</strong> — мережеві інвертори серії SUN2000 потужністю від 5 кВт</li>
              <li><strong>Longi Solar</strong> — монокристалічні панелі потужністю 435Вт до 650 Вт</li>
              <li><strong>Solis</strong> — мережеві інвертори потужністю від 5 кВт</li>
              <li><strong>Deye</strong> — мережеві інвертори потужністю від 5 кВт</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">3. Умови оплати</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Оплата здійснюється в національній валюті (гривня) згідно з рахунком-фактурою</li>
              <li>Передплата — 70% від вартості обладнання</li>
              <li>Остаточний розрахунок — після завершення монтажу та введення в експлуатацію</li>
              <li>Можливість розстрочки для проєктів від 30 кВт — за домовленістю</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">4. Доставка та монтаж</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Доставка обладнання по всій Україні</li>
              <li>Терміни доставки: до 30 робочих днів залежно від наявності на складі</li>
              <li>Монтаж виконується кваліфікованою бригадою <span className="text-[#1B2A4A]">Geo</span><span className="text-[#E8922D]">Solar</span></li>
              <li>Термін монтажу: від 3 до 14 днів залежно від потужності станції</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">5. Гарантійні зобов'язання</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Інвертори Huawei — гарантія виробника 10 років</li>
              <li>Інвертори Deye — гарантія виробника до 10 років</li>
              <li>Інвертори Solis — гарантія виробника 5 років</li>
              <li>Панелі Longi — гарантія виробника 12 років на продукт, 30 років на потужність</li>
              <li>Монтажні роботи — гарантія <span className="text-[#1B2A4A]">Geo</span><span className="text-[#E8922D]">Solar</span> 5 років</li>
            </ul>
          </section>

          <section className="bg-[#FFF8F0] p-6 rounded-2xl">
            <p className="text-sm text-gray-600">
              Для отримання детальних умов постачання для вашого проєкту зверніться до нас:{" "}
              <a href="mailto:office@geosolar.com.ua" className="text-[#E8922D] font-bold hover:underline">office@geosolar.com.ua</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
