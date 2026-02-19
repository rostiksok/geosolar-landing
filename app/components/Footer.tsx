import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFF8F0] py-8 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">

          {/* Column 1: Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src="/logo.jpg" 
              alt="GeoSolar Logo" 
              className="h-14 w-auto object-contain"
            />
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs md:max-w-none">
              Від ділянки до розетки — точність у кожному вимірі, енергія у кожному домі.
            </p>
            <div className="flex items-center gap-4 mt-2">
               <Link href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#E1306C] hover:bg-orange-50 transition-all">
                  <Instagram size={20} />
               </Link>
               <Link href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1877F2] hover:bg-orange-50 transition-all">
                  <Facebook size={20} />
               </Link>
            </div>
          </div>

          {/* Column 2: Legal Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-[#1B2A4A] mb-5 text-sm uppercase tracking-wide">Інформація</h4>
            <nav className="flex flex-col gap-3 text-sm text-gray-500">
              <Link href="/tariffs" className="hover:text-[#E8922D] transition-colors">Тарифи</Link>
              <Link href="/supply-terms" className="hover:text-[#E8922D] transition-colors">Умови постачання</Link>
              <Link href="/consumer-rights" className="hover:text-[#E8922D] transition-colors">Права споживачів</Link>
              <Link href="/privacy" className="hover:text-[#E8922D] transition-colors">Політика конфіденційності</Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-[#1B2A4A] mb-5 text-sm uppercase tracking-wide">Контакти</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <a href="tel:+380689364540" className="flex items-center justify-center md:justify-start gap-3 hover:text-[#E8922D] transition-colors">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-[#E8922D]" />
                </div>
                +380 (68) 936 45 40
              </a>
              <a href="mailto:office@geosolar.com.ua" className="flex items-center justify-center md:justify-start gap-3 hover:text-[#E8922D] transition-colors">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-[#E8922D]" />
                </div>
                office@geosolar.com.ua
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-orange-200/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400 text-center md:text-left">
          <p>© 2026 GeoSolar. Усі права захищені.</p>
          <p>
            Контакти для скарг:{" "}
            <a href="mailto:office@geosolar.com.ua" className="hover:text-[#E8922D] transition-colors underline decoration-orange-200">
              office@geosolar.com.ua
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
