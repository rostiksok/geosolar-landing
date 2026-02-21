"use client";
import { useState } from "react";
import { useInView } from "../utils/useInView";
import { products, categories } from "../data/products";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("inverters");
  const [animationKey, setAnimationKey] = useState(0);
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  const filteredProducts = products.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setAnimationKey((k) => k + 1); // re-trigger fade animation
  };

  return (
    <section id="products" className="py-12 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mb-12">
          <h2
            className={`mt-2 text-4xl font-bold text-black uppercase animate-fade-up ${headerInView ? "in-view" : ""}`}>
            ОБЛАДНАННЯ
          </h2>
          <p className={`text-gray-600 mt-2 animate-fade-up delay-200 ${headerInView ? "in-view" : ""}`}>
            Працюємо з найкращим обладнанням для вашої енергонезалежності
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-orange-100">
              <div className="bg-[#1B2A4A] text-white font-bold px-6 py-5">Категорії</div>
              <nav className="flex flex-col">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`text-left px-6 py-4 font-bold transition-all border-b border-gray-100 last:border-0 hover:bg-orange-50
                        ${
                          activeCategory === category.id
                            ? "text-[#E8922D] bg-orange-50 border-l-4 border-l-[#E8922D]"
                            : "text-[#1B2A4A] border-l-4 border-l-transparent"
                        }`}>
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, i) => (
                <div
                  key={`${animationKey}-${product.id}`}
                  className={`bg-white rounded-[32px] p-6 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 group animate-zoom-in border border-transparent hover:border-orange-100 ${gridInView ? "in-view" : ""}`}
                  style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="aspect-[4/3] bg-gray-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-white transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-4 right-4 bg-[#E8922D] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#1B2A4A] group-hover:text-[#E8922D] transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{product.description}</p>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[#E8922D] font-extrabold text-lg">{product.power}</span>
                    </div>
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
