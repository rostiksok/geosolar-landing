"use client";
import { useState } from "react";
import { Phone, Mail, Loader2, CheckCircle2, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "85613bfe-8603-433f-947c-0dfe07b3274f", 
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: "Запит з сайту GeoSolar",
          from_name: "GeoSolar Landing",
        }),
      });

      const result = await response.json();
      console.log("Web3Forms Result:", result);
      
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", consent: false });
      } else {
        console.error("Web3Forms Error:", result.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contacts" className="relative py-8 overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 transform translate-x-1/2 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Title + Paragraph + Form */}
          <div className="bg-white p-6 md:p-0 rounded-3xl shadow-xl shadow-gray-200/50 md:shadow-none border border-gray-100 md:border-none">
            <h2 className="text-4xl md:text-5xl font-bold text-black uppercase mb-4">
              ЗВ'ЯЗАТИСЯ <span className="text-[#E8922D]">З НАМИ</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-lg">
              Заповніть форму або напишіть нам на офіційну пошту, і ми зв'яжемося з вами найближчим часом.
            </p>

            {status === "success" ? (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-100 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Дякуємо за запит!</h3>
                <p className="text-gray-600 mb-6">Ми отримали ваші дані та зв'яжемося з вами найближчим часом.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-8 py-2 text-[#E8922D] font-bold border-2 border-[#E8922D] rounded-full hover:bg-orange-50 transition-colors"
                >
                  Надіслати ще раз
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                   <div className="relative group">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ім'я та прізвище"
                        className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-gray-900 focus:outline-none focus:border-[#E8922D] placeholder-gray-400 transition-all font-medium"
                      />
                   </div>
                   <div className="relative group">
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Номер телефону"
                        className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-gray-900 focus:outline-none focus:border-[#E8922D] placeholder-gray-400 transition-all font-medium"
                      />
                   </div>
                   <div className="relative group">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="E-mail"
                        className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-gray-900 focus:outline-none focus:border-[#E8922D] placeholder-gray-400 transition-all font-medium"
                      />
                   </div>
                </div>

                <div className="flex items-center gap-4 mt-8 group cursor-pointer" onClick={() => setFormData({ ...formData, consent: !formData.consent })}>
                  <div className="relative flex items-center justify-center flex-shrink-0">
                    <input
                      id="consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="peer h-6 w-6 appearance-none rounded-lg border-2 border-gray-200 checked:bg-[#E8922D] checked:border-[#E8922D] focus:ring-4 focus:ring-[#E8922D]/10 transition-all cursor-pointer"
                    />
                    <svg
                      className="absolute h-3.5 w-3.5 pointer-events-none hidden peer-checked:block text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <label htmlFor="consent" className="text-sm text-gray-500 cursor-pointer select-none group-hover:text-gray-900 transition-colors leading-tight">
                    Я погоджуюся на обробку персональних даних для зв’язку зі мною
                  </label>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">Виникла помилка при відправці. Спробуйте ще раз або напишіть нам на пошту.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || !formData.consent}
                  className={`mt-10 w-full sm:w-auto px-12 py-5 font-bold rounded-full transition-all flex items-center justify-center gap-3 text-lg
                    ${formData.consent 
                      ? "bg-[#1B2A4A] text-white hover:bg-[#152238] shadow-xl shadow-navy-900/20 active:scale-95" 
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"}
                    ${status === "loading" ? "opacity-90 pointer-events-none" : ""}`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin text-orange-400" />
                      Відправляємо...
                    </>
                  ) : "Надіслати запит"}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Contact Info & Interactive Cards */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">
             {/* Address Card */}
             <div className="bg-white p-5 md:p-8 rounded-[32px] md:rounded-[40px] shadow-xl md:shadow-2xl shadow-gray-200/50 border border-gray-50 group hover:border-orange-100 transition-all duration-500">
                <div className="flex items-start gap-4 md:gap-6">
                   <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-orange-50 flex items-center justify-center text-[#E8922D] flex-shrink-0 group-hover:bg-[#E8922D] group-hover:text-white transition-all duration-500">
                      <MapPin size={22} className="md:w-7 md:h-7" />
                   </div>
                   <div className="space-y-1.5">
                      <h4 className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">Адреса офісу</h4>
                      <p className="text-gray-900 font-bold text-base md:text-lg leading-snug">
                         м. Збараж, м-н Франка 24, <br className="hidden md:block" />
                         Тернопільська область, 47300
                      </p>
                      <a 
                        href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9C%D0%B0%D0%B9%D0%B4%D0%B0%D0%BD+%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%B0,+24,+%D0%97%D0%B1%D0%B0%D1%80%D0%B0%D0%B6,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+47300/@49.6622251,25.7756102,17z/data=!3m1!4b1!4m5!3m4!1s0x47302c4296e2aa7d:0x5708bee7da7e8c70!8m2!3d49.6622251!4d25.7781851?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        className="inline-block text-[#E8922D] font-bold text-xs md:text-sm hover:underline mt-1"
                      >
                         Відкрити на карті →
                      </a>
                   </div>
                </div>
             </div>

             {/* Phone Card */}
             <a href="tel:+380979442265" className="bg-white p-5 md:p-8 rounded-[32px] md:rounded-[40px] shadow-lg md:shadow-xl shadow-gray-100 border border-gray-50 group hover:border-orange-100 transition-all duration-500">
                <div className="flex items-center gap-4 md:gap-6">
                   <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-orange-50 flex items-center justify-center text-[#E8922D] flex-shrink-0 group-hover:bg-[#E8922D] group-hover:text-white transition-all duration-500">
                      <Phone size={22} className="md:w-7 md:h-7" />
                   </div>
                   <div>
                      <h4 className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">Гаряча лінія</h4>
                      <div className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#E8922D] transition-colors break-all">
                         +380 (97) 944 22 65
                      </div>
                   </div>
                </div>
             </a>

             {/* Email Card */}
             <a href="mailto:office@geosolar.com.ua" className="bg-white p-5 md:p-8 rounded-[32px] md:rounded-[40px] shadow-lg md:shadow-xl shadow-gray-100 border border-gray-50 group hover:border-orange-100 transition-all duration-500">
                <div className="flex items-center gap-4 md:gap-6">
                   <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-orange-50 flex items-center justify-center text-[#E8922D] flex-shrink-0 group-hover:bg-[#E8922D] group-hover:text-white transition-all duration-500">
                      <Mail size={22} className="md:w-7 md:h-7" />
                   </div>
                   <div>
                      <h4 className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">E-mail запити</h4>
                      <div className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#E8922D] transition-colors break-all">
                         office@geosolar.com.ua
                      </div>
                   </div>
                </div>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
