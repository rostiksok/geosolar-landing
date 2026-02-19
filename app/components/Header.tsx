"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, User } from "lucide-react";
import { scrollToContact } from "../utils/scrollTo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.jpg" 
                alt="GeoSolar Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              onClick={(e) => scrollToContact(e, "home")}
              className="text-[#E8922D] font-bold hover:text-[#d17f1f] transition-colors"
            >
              Головна
            </Link>
            <Link
              href="#about"
              onClick={(e) => scrollToContact(e, "about")}
              className="text-gray-700 font-medium hover:text-[#E8922D] transition-colors"
            >
              Про нас
            </Link>
            <Link
              href="#projects"
              onClick={(e) => scrollToContact(e, "projects")}
              className="text-gray-700 font-medium hover:text-[#E8922D] transition-colors"
            >
              Проєкти
            </Link>
            <Link
              href="#products"
              onClick={(e) => scrollToContact(e, "products")}
              className="text-gray-700 font-medium hover:text-[#E8922D] transition-colors"
            >
              Обладнання
            </Link>
            <Link
              href="#news"
              onClick={(e) => scrollToContact(e, "news")}
              className="text-gray-700 font-medium hover:text-[#E8922D] transition-colors"
            >
              Новини
            </Link>
            <Link
              href="#contacts"
              onClick={(e) => scrollToContact(e, "contacts")}
              className="text-gray-700 font-medium hover:text-[#E8922D] transition-colors"
            >
              Контакти
            </Link>
          </nav>

          {/* Contact Info & Lang */}
          <a href="https://wa.me/380682808282" target="_blank" className="hidden md:flex items-center space-x-4">
            {/* <div className="font-bold text-gray-800">+380 68 280 82 82</div> */}
            <div className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors">
              <Phone className="w-5 h-5 text-[#E8922D]" />
            </div>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#E8922D] focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              "Головна",
              "Про нас",
              "Проєкти",
              "Обладнання",
              "Новини",
              "Контакти",
            ].map((item) => (
              <a
                key={item}
                href={`#${item === "Головна" ? "" : item.toLowerCase().replace(" ", "-")}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#E8922D] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
