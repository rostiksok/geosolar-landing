"use client";

import { useState, useEffect } from "react";
import { Sun, Home, Layers } from "lucide-react";
import { scrollToContact } from "../utils/scrollTo";
import { useInView } from "../utils/useInView";

export default function Calculator() {
  const [power, setPower] = useState(30); // Default 30 kW
  const [years, setYears] = useState(5);  // Default 5 years
  const [elecPrice, setElecPrice] = useState(10);
  const [exchangeRate, setExchangeRate] = useState(42);
  const [stationType, setStationType] = useState("ground");
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();

  // Constants
  const GEN_PER_KW_YEAR = 1150; // kWh per year per kW
  
  // Determine Price per kW based on station type
  const getPricePerKw = () => {
    switch (stationType) {
      case "roof": return 320;
      case "membrane": return 380;
      case "ground": default: return 520;
    }
  };

  const PRICE_PER_KW = getPricePerKw();

  // Calculations
  const investment = power * PRICE_PER_KW;
  const annualRevenueUAH = power * GEN_PER_KW_YEAR * elecPrice;
  const annualRevenueUSD = annualRevenueUAH / exchangeRate;
  const totalRevenueUSD = annualRevenueUSD * years;
  const netProfit = totalRevenueUSD - investment;
  const paybackPeriod = annualRevenueUSD > 0 ? investment / annualRevenueUSD : 0;

  return (
    <section id="calculator" className="py-8 bg-white relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-l from-orange-50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Text & CTA */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-black uppercase leading-tight mb-4">
              КАЛЬКУЛЯТОР ПРИБУТКОВОСТІ <br />
              <span className="text-[#E8922D]">СОНЯЧНОЇ СТАНЦІЇ</span>
            </h2>
            {/* <div className="flex gap-2 mb-8">
               <div className="w-12 h-6 bg-[#1B2A4A] rounded-sm"></div>
               <div className="w-12 h-6 bg-[#E8922D] rounded-sm"></div>
            </div> */}
            <p className="text-gray-600 mb-8">
              Оптимізуйте витрати на електроенергію та <span className="font-bold text-black">зробіть вигідний внесок</span> у чисте майбутнє <span className="font-bold text-black">вже сьогодні!</span>
            </p>
            <button 
              onClick={(e) => scrollToContact(e as any, "contacts")}
              className="w-full sm:w-auto px-8 py-4 bg-[#1B2A4A] text-white font-bold rounded-full hover:bg-[#152238] transition-all shadow-lg active:scale-95 active:shadow-inner"
            >
              Зв'язатися з нами
            </button>
          </div>

          {/* Right Side: Calculator Card */}
          <div ref={rightRef} className={`w-full lg:w-1/2 animate-fade-left ${rightInView ? "in-view" : ""}`}>
             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-black mb-6">
                  Виберіть потужність СЕС та термін експлуатації, <br />
                  і калькулятор зробить усі розрахунки
                </h3>

                {/* Type Selector */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                   <button 
                     onClick={() => setStationType("ground")}
                     className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-colors
                       ${stationType === "ground" ? "border-[#E8922D] bg-orange-50 text-[#E8922D]" : "border-gray-100 text-gray-400 hover:border-[#E8922D] hover:text-[#E8922D]"}
                     `}
                   >
                      <Sun className="mb-2" />
                      <span className="text-xs font-bold">Земля</span>
                   </button>
                   <button 
                     onClick={() => setStationType("roof")}
                     className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-colors
                       ${stationType === "roof" ? "border-[#E8922D] bg-orange-50 text-[#E8922D]" : "border-gray-100 text-gray-400 hover:border-[#E8922D] hover:text-[#E8922D]"}
                     `}
                   >
                      <Home className="mb-2" />
                      <span className="text-xs font-bold">Дах</span>
                   </button>
                   <button 
                     onClick={() => setStationType("membrane")}
                     className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-colors
                       ${stationType === "membrane" ? "border-[#E8922D] bg-orange-50 text-[#E8922D]" : "border-gray-100 text-gray-400 hover:border-[#E8922D] hover:text-[#E8922D]"}
                     `}
                   >
                      <Layers className="mb-2" />
                      <span className="text-xs font-bold">Мембрана</span>
                   </button>
                </div>

                {/* Sliders */}
                <div className="space-y-8 mb-8">
                   {/* Power Slider */}
                   <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500 text-sm">Потужність СЕС, кВт</span>
                      </div>
                      <div className="relative pt-6 pb-2">
                         <input 
                           type="range" 
                           min="5" 
                           max="100" 
                           step="1"
                           value={power} 
                           onChange={(e) => setPower(Number(e.target.value))}
                           className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#E8922D]"
                         />
                         <div className="text-center font-bold text-xl mt-2">{power} кВт</div>
                      </div>
                   </div>

                   {/* Years Slider */}
                   <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500 text-sm">Кількість років</span>
                      </div>
                       <div className="relative pt-6 pb-2">
                         <input 
                           type="range" 
                           min="1" 
                           max="15" 
                           step="1"
                           value={years} 
                           onChange={(e) => setYears(Number(e.target.value))}
                           className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#E8922D]"
                         />
                         <div className="text-center font-bold text-xl mt-2">{years}</div>
                      </div>
                   </div>
                </div>

                {/* Parameters (Editable) */}
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                       <span className="text-gray-500 text-sm">Вартість електроенергії (грн)</span>
                       <input 
                         type="number" 
                         value={elecPrice} 
                         onChange={(e) => setElecPrice(Number(e.target.value))}
                         className="font-bold text-black text-right w-20 bg-transparent focus:outline-none focus:border-b focus:border-[#E8922D]"
                       />
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                       <span className="text-gray-500 text-sm">Курс ($)</span>
                       <input 
                         type="number" 
                         value={exchangeRate} 
                         onChange={(e) => setExchangeRate(Number(e.target.value))}
                         className="font-bold text-black text-right w-20 bg-transparent focus:outline-none focus:border-b focus:border-[#E8922D]"
                       />
                    </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="bg-[#f9fafb] p-6 rounded-2xl text-center">
                      <div className="text-2xl font-extrabold text-black mb-1">
                        {`$${investment.toLocaleString('uk-UA')}`}
                      </div>
                      <div className="text-xs text-gray-500">Вартість інвестиції</div>
                   </div>
                   <div className="bg-[#f9fafb] p-6 rounded-2xl text-center">
                      <div className="text-2xl font-extrabold text-black mb-1">
                        {`$${Math.round(netProfit).toLocaleString('uk-UA')}`}
                      </div>
                      <div className="text-xs text-gray-500">Отриманий прибуток</div>
                   </div>
                </div>

                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                      <div className="text-[#E8922D]">
                         <Sun size={20} />
                      </div>
                      <span className="text-xs text-gray-500">
                         Термін окупності СЕС <br />
                         <span className="font-bold text-black text-sm">Кількість років</span>
                      </span>
                   </div>
                   <div className="text-2xl font-extrabold text-black">
                     {paybackPeriod.toFixed(1)}
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
