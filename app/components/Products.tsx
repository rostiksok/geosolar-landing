"use client";
import { useState } from "react";

const categories = [
  { id: "pv-module", name: "PV Module" },
  { id: "182mm", name: "182mm PV Module" },
  { id: "full-screen", name: "Full-Screen PV Module" },
  { id: "topcon", name: "TOPCon PV Module" },
  { id: "solar-unit", name: "Solar Unit" },
  { id: "colored", name: "Colored" },
];

const products = [
  {
    id: 1,
    name: "DHN-54R20/FS(CB/RB/MB/AB)",
    description: "Colored Double Glass PV Module",
    power: "380-430W",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-13.04.25-2.webp",
  },
  {
    id: 2,
    name: "DHN-54R20/FS",
    description: "Colored Double Glass PV Module",
    power: "380-430W",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-12.51.09-1.webp",
  },
  {
    id: 3,
    name: "DHN-66Y18-DG-FS",
    description: "TOPCon",
    power: "700W to 725W",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-12.51.09-1.webp",
  },
  {
    id: 4,
    name: "SolarUnit 800W",
    description: "The World's First Integrated PV System",
    power: "800W",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-12.51.09-1.webp",
  },
  {
    id: 5,
    name: "SolarUnit 1000W",
    description: "The World's First Integrated PV System",
    power: "1000W",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-12.51.09-1.webp",
  },
  {
    id: 6,
    name: "SolarUnit 1500W",
    description: "The World's First Integrated PV System",
    power: "1500W",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-12.51.09-1.webp",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("solar-unit");

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mt-2 text-4xl font-bold text-black uppercase">ПРОДУКТИ</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
               <div className="bg-[#0F5132] text-white font-bold px-6 py-4">
                  Категорії
               </div>
               <nav className="flex flex-col">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`text-left px-6 py-4 font-medium transition-colors border-b border-gray-100 last:border-0 hover:bg-gray-50
                        ${activeCategory === category.id 
                          ? "text-green-700 bg-green-50 border-l-4 border-l-[#0F5132]" 
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
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="aspect-square bg-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                      {/* Badge example */}
                      {product.name.includes("TOPCon") && (
                         <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">TIER1</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                        {product.name.split(" ")[0]}...
                      </h3>
                      <p className="text-sm text-gray-500">{product.description}</p>
                      <p className="text-red-500 font-bold block">{product.power}</p>
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
