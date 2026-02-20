"use client";
import { useState } from "react";
import { useInView } from "../utils/useInView";
import { products, categories } from "../data/products";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("inverters");
  const [animationKey, setAnimationKey] = useState(0);
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  const filteredProducts = products.filter(p => p.category === activeCategory);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setAnimationKey(k => k + 1); // re-trigger fade animation
  };

  return (
    <section id="products" className="py-8 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mb-8">
          <h2 className={`mt-2 text-4xl font-bold text-black uppercase animate-fade-up ${headerInView ? "in-view" : ""}`}>ОБЛАДНАННЯ</h2>
          <p className={`text-gray-600 mt-2 animate-fade-up delay-200 ${headerInView ? "in-view" : ""}`}>Працюємо виключно з обладнанням Tier-1 для максимальної надійності та генерації</p>
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
                      onClick={() => handleCategoryChange(category.id)}
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
             <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, i) => (
                  <div
                    key={`${animationKey}-${product.id}`}
                    className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group animate-zoom-in ${gridInView ? "in-view" : ""}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
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
