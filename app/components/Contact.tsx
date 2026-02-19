"use client";
import { useState } from "react";
import { Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";

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
    <section id="contacts" className="relative py-16 overflow-hidden bg-gray-50">
      {/* Background Image */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[400px] w-full z-0 pointer-events-none"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Title + Paragraph + Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black uppercase mb-4">
              ЗВ'ЯЗАТИСЯ <span className="text-[#E8922D]">З НАМИ</span>
            </h2>
            <p className="text-gray-600 mb-12 max-w-lg">
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
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ім'я та прізвище"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-[#E8922D] placeholder-gray-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Номер телефону"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-[#E8922D] placeholder-gray-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E-mail"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-[#E8922D] placeholder-gray-500 transition-colors"
                  />
                </div>

                <div className="flex items-center gap-3 mt-8 group">
                  <div className="relative flex items-center cursor-pointer">
                    <input
                      id="consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="peer h-5 w-5 appearance-none rounded border-2 border-gray-300 checked:bg-[#E8922D] checked:border-[#E8922D] focus:ring-2 focus:ring-[#E8922D]/20 focus:outline-none transition-all cursor-pointer"
                    />
                    <svg
                      className="absolute h-3 w-3 pointer-events-none hidden peer-checked:block text-white left-1 top-1"
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
                  <label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer select-none group-hover:text-gray-900 transition-colors">
                    Даю згоду на обробку персональних даних
                  </label>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Виникла помилка при відправці. Спробуйте ще раз або напишіть нам на пошту.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || !formData.consent}
                  className={`mt-8 px-10 py-3 font-bold rounded-full transition-all flex items-center gap-2
                    ${formData.consent 
                      ? "bg-[#1B2A4A] text-white hover:bg-[#152238] shadow-lg shadow-navy-900/20 active:scale-95" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"}
                    ${status === "loading" ? "opacity-80 pointer-events-none" : ""}`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Відправляємо...
                    </>
                  ) : "Зв'язатися з нами"}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Contact Info & House Visual */}
          <div className="relative">
             <div className="space-y-6 mb-12">
                <div className="text-gray-800 space-y-2">
                   <p className="font-medium">село Великі Гаї, вул. Об'їзна, 3-А, Тернопіль,</p>
                   <p className="font-medium">Тернопільська область, Україна, 47722</p>
                </div>

                <div className="space-y-4">
                  <a href="https://wa.me/380682808282" target="_blank" className="flex items-center gap-3 group">
                     <div className="w-10 h-10 rounded-full border border-[#E8922D] flex items-center justify-center text-[#E8922D] group-hover:bg-[#E8922D] group-hover:text-white transition-all">
                        <Phone size={20} />
                     </div>
                     <span className="text-gray-800 font-medium group-hover:text-[#E8922D] transition-colors">+380 68 280 82 82</span>
                  </a>
                   <a href="mailto:office@geosolar.com.ua" target="_blank" className="flex items-center gap-3 group">
                     <div className="w-10 h-10 rounded-full border border-[#E8922D] flex items-center justify-center text-[#E8922D] group-hover:bg-[#E8922D] group-hover:text-white transition-all">
                        <Mail size={20} />
                     </div>
                     <span className="text-gray-800 font-medium group-hover:text-[#E8922D] transition-colors">office@geosolar.com.ua</span>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
