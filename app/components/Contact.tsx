import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacts" className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[400px] w-full z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/contacts-bg.png')",
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

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ім'я та прізвище"
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-[#E8922D] placeholder-gray-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Номер телефону"
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-[#E8922D] placeholder-gray-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-[#E8922D] placeholder-gray-500 transition-colors"
                />
              </div>

              <div className="flex items-start gap-3 mt-8">
                <input
                  id="consent"
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-[#E8922D] focus:ring-[#E8922D]"
                />
                <label htmlFor="consent" className="text-sm text-gray-500">
                  Даю згоду на обробку персональних даних
                </label>
              </div>

              <button
                type="submit"
                className="mt-8 px-10 py-3 bg-gray-200 text-gray-400 font-medium rounded-full cursor-not-allowed hover:bg-gray-300 transition-colors"
                disabled
              >
                Зв'язатися з нами
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info & House Visual */}
          <div className="relative">
             {/* <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#1e293b] rounded flex items-center justify-center">
                   <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-[#3b5998] rounded flex items-center justify-center">
                    <span className="text-white font-bold">in</span>
                </div>
             </div> */}

             <div className="space-y-6 mb-12">
                <div className="text-gray-800 space-y-2">
                   <p className="font-medium">село Великі Гаї, вул. Об'їзна, 3-А, Тернопіль,</p>
                   <p className="font-medium">Тернопільська область, Україна, 47722</p>
                </div>

                <div className="space-y-4">
                  <a href="https://wa.me/380682808282" target="_blank" className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full border border-[#E8922D] flex items-center justify-center text-[#E8922D]">
                        <Phone size={20} />
                     </div>
                     <span className="text-gray-800 font-medium">+380 68 280 82 82</span>
                  </a>
                   <a href="mailto:office@geosolar.com.ua" target="_blank" className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full border border-[#E8922D] flex items-center justify-center text-[#E8922D]">
                        <Mail size={20} />
                     </div>
                     <span className="text-gray-800 font-medium">office@geosolar.com.ua</span>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
