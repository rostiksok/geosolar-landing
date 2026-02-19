import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/logo.jpg" 
              alt="GeoSolar Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-[#E8922D] transition-colors">
              Тарифи
            </Link>
            <Link href="#" className="hover:text-[#E8922D] transition-colors">
              Умови постачання
            </Link>
            <Link href="#" className="hover:text-[#E8922D] transition-colors">
              Права споживачів
            </Link>
            <Link href="#" className="hover:text-[#E8922D] transition-colors">
              Політика конфіденційності
            </Link>
            
            <div className="flex items-center gap-3">
               <Link href="#" className="text-[#E1306C] hover:opacity-80 transition-opacity">
                  <Instagram size={24} />
               </Link>
               <Link href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                  <Facebook size={24} />
               </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
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
