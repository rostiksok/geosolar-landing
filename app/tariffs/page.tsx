import Link from "next/link";

export default function Tariffs() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="text-[#E8922D] hover:underline text-sm mb-8 inline-block">
          ← Повернутися на головну
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-[#1B2A4A] uppercase mb-8">Тарифи</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Вартість обладнання</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-[#FFF8F0]">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-[#1B2A4A]">Обладнання</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-[#1B2A4A]">Потужність</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-[#1B2A4A]">Орієнтовна вартість</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Huawei SUN2000-5KTL-M1</td>
                    <td className="border border-gray-200 px-4 py-3">5 кВт</td>
                    <td className="border border-gray-200 px-4 py-3">За запитом</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Huawei SUN2000-30KTL-M3</td>
                    <td className="border border-gray-200 px-4 py-3">30 кВт</td>
                    <td className="border border-gray-200 px-4 py-3">За запитом</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Huawei SUN2000-100KTL-M2</td>
                    <td className="border border-gray-200 px-4 py-3">100 кВт</td>
                    <td className="border border-gray-200 px-4 py-3">За запитом</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Longi Hi-MO X6 LR5-72HTH-615M</td>
                    <td className="border border-gray-200 px-4 py-3">615 Вт</td>
                    <td className="border border-gray-200 px-4 py-3">За запитом</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Комплексні рішення «під ключ»</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-[#FFF8F0]">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-[#1B2A4A]">Комплект</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-[#1B2A4A]">Склад</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-[#1B2A4A]">Вартість</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">30 кВт (приватний)</td>
                    <td className="border border-gray-200 px-4 py-3">Huawei SUN2000-30KTL + 49× Longi 615W</td>
                    <td className="border border-gray-200 px-4 py-3">За запитом</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">90 кВт (бізнес)</td>
                    <td className="border border-gray-200 px-4 py-3">Huawei SUN2000-100KTL + 147× Longi 615W</td>
                    <td className="border border-gray-200 px-4 py-3">За запитом</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Вартість послуг</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Геодезичне знімання ділянки:</strong> включено у вартість комплексного проєкту</li>
              <li><strong>Проєктування СЕС:</strong> включено у вартість комплексного проєкту</li>
              <li><strong>Монтаж та підключення:</strong> включено у вартість комплексного проєкту</li>
              <li><strong>Оформлення «Зеленого тарифу»:</strong> включено у вартість комплексного проєкту</li>
            </ul>
          </section>

          <section className="bg-[#FFF8F0] p-6 rounded-2xl">
            <p className="text-sm text-gray-600">
              Точну вартість обладнання та послуг для вашого проєкту можна отримати, звернувшись до нас за адресою{" "}
              <a href="mailto:office@geosolar.com.ua" className="text-[#E8922D] font-bold hover:underline">office@geosolar.com.ua</a>{" "}
              або зателефонувавши за номером <a href="tel:+380689364540" className="text-[#E8922D] font-bold hover:underline">+380 (68) 936 45 40</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
