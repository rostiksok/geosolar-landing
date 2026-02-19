import Link from "next/link";

export default function ConsumerRights() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="text-[#E8922D] hover:underline text-sm mb-8 inline-block">
          ← Повернутися на головну
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-[#1B2A4A] uppercase mb-8">Права споживачів</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">1. Ваші права як споживача</h2>
            <p>Відповідно до Закону України «Про захист прав споживачів», ви маєте право на:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Якісне обладнання та послуги, що відповідають заявленим характеристикам</li>
              <li>Повну та достовірну інформацію про товари, послуги та їх вартість</li>
              <li>Безпеку обладнання для здоров'я та майна</li>
              <li>Гарантійне обслуговування протягом встановленого терміну</li>
              <li>Відшкодування збитків у разі надання неякісних товарів або послуг</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">2. Гарантійне обслуговування</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Інвертори Huawei SUN2000 — гарантія 10 років від виробника</li>
              <li>Панелі Longi Hi-MO — гарантія 12 років на продукт, 30 років на потужність (не менше 87.4%)</li>
              <li>Монтажні роботи — гарантія GeoSolar 5 років</li>
            </ul>
            <p className="mt-4">
              У разі виявлення дефекту обладнання протягом гарантійного терміну, ми забезпечуємо безкоштовну заміну або ремонт.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">3. Повернення та обмін</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Обмін або повернення обладнання можливий протягом 14 днів з моменту отримання, якщо товар не був у використанні</li>
              <li>Повернення здійснюється за умови збереження оригінального пакування та комплектності</li>
              <li>Вартість зворотної доставки несе покупець, крім випадків виявлення заводського браку</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">4. Порядок подання скарг</h2>
            <p>Якщо у вас є претензії щодо якості товарів або послуг, ви можете звернутися:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Електронна пошта: <a href="mailto:office@geosolar.com.ua" className="text-[#E8922D] font-bold hover:underline">office@geosolar.com.ua</a></li>
              <li>Телефон: <a href="tel:+380682808282" className="text-[#E8922D] font-bold hover:underline">+380 68 280 82 82</a></li>
            </ul>
            <p className="mt-4">
              Ми гарантуємо розгляд кожного звернення протягом 10 робочих днів.
            </p>
          </section>

          <section className="bg-[#FFF8F0] p-6 rounded-2xl">
            <p className="text-sm text-gray-600">
              GeoSolar дотримується всіх вимог законодавства України щодо захисту прав споживачів. Ми цінуємо вашу довіру.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
