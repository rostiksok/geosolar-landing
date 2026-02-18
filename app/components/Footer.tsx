import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-black">
              GeoSolar
            </span>
            <div className="h-1 w-8 bg-gradient-to-r from-blue-600 via-red-500 to-green-500 rounded-full mt-6 absolute"></div>
        </div>

        {/* Links & Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-500">
          <Link href="#" className="hover:text-green-700 transition-colors">
            Політика конфіденційності
          </Link>
          <Link href="#" className="hover:text-green-700 transition-colors">
            Оферта
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
    </footer>
  );
}
