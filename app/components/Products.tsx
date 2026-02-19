"use client";
import { useState } from "react";

const categories = [
  { id: "inverters", name: "Інвертори Huawei" },
  { id: "panels", name: "Панелі Longi" },
  { id: "systems", name: "Комплексні рішення" },
];

const products = [
  {
    id: 1,
    name: "Huawei SUN2000-5KTL-M1",
    description: "Мережевий інвертор для приватних домогосподарств",
    power: "5 кВт",
    category: "inverters",
    badge: null,
    image: "https://optosolar.se/images/2x/normal/huawei3-10kwm1front-5469-60441.jpg.webp",
  },
  {
    id: 2,
    name: "Huawei SUN2000-30KTL-M3",
    description: "Мережевий інвертор для комерційних проєктів",
    power: "30 кВт",
    category: "inverters",
    badge: "Популярний",
    image: "https://www.sesol.se/_next/image?url=https%3A%2F%2Fcdn.gracestudio.io%2Fsesol%2Fsesol_teknik_produkt_vaexelriktare_hybrid_huawei_sun2000_30_40_KTL_M3_Rityta_1_b7d8d2c32c%2Fsesol_teknik_produkt_vaexelriktare_hybrid_huawei_sun2000_30_40_KTL_M3_Rityta_1_b7d8d2c32c.png&w=3840&q=85",
  },
  {
    id: 3,
    name: "Huawei SUN2000-100KTL-M2",
    description: "Промисловий інвертор без вентиляторів, природне охолодження",
    power: "100 кВт",
    category: "inverters",
    badge: null,
    image: "https://www.sesol.se/_next/image?url=https%3A%2F%2Fcdn.gracestudio.io%2Fsesol%2Fsesol_teknik_produkt_vaexelriktare_straeng_huawei_sun2000_100_KTL_M2_Rityta_1_Rityta_1_d0918dddd6%2Fsesol_teknik_produkt_vaexelriktare_straeng_huawei_sun2000_100_KTL_M2_Rityta_1_Rityta_1_d0918dddd6.png&w=3840&q=85",
  },
  {
    id: 4,
    name: "Huawei SUN2000-125KTL-M0",
    description: "Інвертор максимальної потужності для промислових станцій",
    power: "125 кВт",
    category: "inverters",
    badge: "MAX",
    image: "https://cdn.enfsolar.com/Product/logo/Inverter/5d536217efcd7.png",
  },
  {
    id: 5,
    name: "Longi Hi-MO X6 LR5-72HTH-615M",
    description: "Монокристалічна панель з ККД 23.3% — максимум на сьогодні",
    power: "615 Вт",
    category: "panels",
    badge: "TIER-1",
    image: "https://cdn.enfsolar.com/Product/logo/Crystalline/66d1523be7017.png",
  },
  {
    id: 6,
    name: "Longi Hi-MO 7 LR5-72HGD-580M",
    description: "Двостороння панель для наземних та дахових станцій",
    power: "580 Вт",
    category: "panels",
    badge: null,
    image: "https://innet.com.ua/content/images/43/1000x1000l80mc0/monokrystalichna-soniachna-panel-longi-solar-lr5-72hgd-580m-hi-mo-7-bifacial-dvostoronnii-22366685383850.webp",
  },
  {
    id: 7,
    name: "Комплект 30 кВт",
    description: "Huawei SUN2000-30KTL + 49× Longi 615W. Для приватних осіб під «Зелений тариф»",
    power: "30 кВт",
    category: "systems",
    badge: "Під ключ",
    image: "https://solar-energy.com.ua/content/images/32/500x500l80mc0/36419357251733.webp",
  },
  {
    id: 8,
    name: "Комплект 90 кВт",
    description: "Huawei SUN2000-100KTL + 147× Longi 615W. Для малого бізнесу",
    power: "90 кВт",
    category: "systems",
    badge: "Бізнес",
    image: "https://utem.org.ua/assets/uploads/images/products/7a55c-business_100.jpg",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("inverters");

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-8 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mt-2 text-4xl font-bold text-black uppercase">ОБЛАДНАННЯ</h2>
          <p className="text-gray-600 mt-2">Працюємо виключно з обладнанням Tier-1 для максимальної надійності та генерації</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
               <div className="bg-[#1B2A4A] text-white font-bold px-6 py-4">
                  Категорії
               </div>
               <nav className="flex flex-col">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`text-left px-6 py-4 font-medium transition-colors border-b border-gray-100 last:border-0 hover:bg-gray-50
                        ${activeCategory === category.id 
                          ? "text-[#E8922D] bg-orange-50 border-l-4 border-l-[#E8922D]" 
                          : "text-gray-700 border-l-4 border-l-transparent"
                        }`}
                    >
                      {category.name}
                    </button>
                  ))}
               </nav>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="aspect-square bg-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                      {product.badge && (
                         <span className="absolute top-4 right-4 bg-[#E8922D] text-white text-xs font-bold px-2 py-1 rounded">{product.badge}</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#E8922D] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">{product.description}</p>
                      <p className="text-[#E8922D] font-bold block">{product.power}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
