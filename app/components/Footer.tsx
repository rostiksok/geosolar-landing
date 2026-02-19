import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFF8F0] py-8 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Column 1: Logo + Tagline */}
          <div className="flex flex-col items-start gap-4">
            <img 
              src="/logo.jpg" 
              alt="GeoSolar Logo" 
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-gray-500 leading-relaxed">
              Від ділянки до розетки — точність у кожному вимірі, енергія у кожному домі.
            </p>
            <div className="flex items-center gap-3 mt-2">
               <Link href="#" className="text-[#E1306C] hover:opacity-80 transition-opacity">
                  <Instagram size={22} />
               </Link>
               <Link href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                  <Facebook size={22} />
               </Link>
            </div>
          </div>

          {/* Column 2: Legal Links */}
          <div>
            <h4 className="font-bold text-[#1B2A4A] mb-4 text-sm uppercase tracking-wide">Інформація</h4>
            <nav className="flex flex-col gap-2 text-sm text-gray-500">
              <Link href="/tariffs" className="hover:text-[#E8922D] transition-colors">Тарифи</Link>
              <Link href="/supply-terms" className="hover:text-[#E8922D] transition-colors">Умови постачання</Link>
              <Link href="/consumer-rights" className="hover:text-[#E8922D] transition-colors">Права споживачів</Link>
              <Link href="/privacy" className="hover:text-[#E8922D] transition-colors">Політика конфіденційності</Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-bold text-[#1B2A4A] mb-4 text-sm uppercase tracking-wide">Контакти</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <a href="tel:+380682808282" className="flex items-center gap-2 hover:text-[#E8922D] transition-colors">
                <Phone size={16} className="text-[#E8922D]" />
                +380 68 280 82 82
              </a>
              <a href="mailto:office@geosolar.com.ua" className="flex items-center gap-2 hover:text-[#E8922D] transition-colors">
                <Mail size={16} className="text-[#E8922D]" />
                office@geosolar.com.ua
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-orange-200/60 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© 2026 GeoSolar. Усі права захищені.</p>
          <p>
            Контакти для скарг:{" "}
            <a href="mailto:office@geosolar.com.ua" className="hover:text-[#E8922D] transition-colors underline">
              office@geosolar.com.ua
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
