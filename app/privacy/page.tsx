import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="text-[#E8922D] hover:underline text-sm mb-8 inline-block">
          ← Повернутися на головну
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-[#1B2A4A] uppercase mb-8">Політика конфіденційності</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">1. Загальні положення</h2>
            <p>
              Ця Політика конфіденційності визначає порядок збору, використання та захисту персональних даних,
              наданих користувачами веб-сайту geosolar.com.ua (далі — «Сайт»), що належить ТОВ «GeoSolar» (далі — «Компанія»).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">2. Збір персональних даних</h2>
            <p>Ми збираємо наступні дані, надані вами добровільно через форму зворотного зв'язку:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Ім'я та прізвище</li>
              <li>Номер телефону</li>
              <li>Адреса електронної пошти</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">3. Мета обробки даних</h2>
            <p>Зібрані дані використовуються виключно для:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Зворотного зв'язку з клієнтом щодо запиту на консультацію або розрахунок проєкту</li>
              <li>Надання інформації про послуги та обладнання GeoSolar</li>
              <li>Виконання договірних зобов'язань</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">4. Захист даних</h2>
            <p>
              Компанія вживає всіх необхідних організаційних та технічних заходів для захисту персональних даних
              від несанкціонованого доступу, зміни, розкриття або знищення.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">5. Передача третім особам</h2>
            <p>
              Ми не передаємо, не продаємо і не обмінюємо персональні дані користувачів третім особам, за винятком
              випадків, передбачених законодавством України.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">6. Права користувача</h2>
            <p>Ви маєте право:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Запитувати інформацію про ваші персональні дані, що обробляються Компанією</li>
              <li>Вимагати виправлення або видалення ваших персональних даних</li>
              <li>Відкликати згоду на обробку персональних даних</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">7. Контакти</h2>
            <p>З питань конфіденційності зверніться до нас:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Електронна пошта: <a href="mailto:office@geosolar.com.ua" className="text-[#E8922D] font-bold hover:underline">office@geosolar.com.ua</a></li>
              <li>Телефон: <a href="tel:+380682808282" className="text-[#E8922D] font-bold hover:underline">+380 68 280 82 82</a></li>
            </ul>
          </section>

          <section className="bg-[#FFF8F0] p-6 rounded-2xl">
            <p className="text-sm text-gray-600">
              Дата останнього оновлення: 19 лютого 2026 року.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
