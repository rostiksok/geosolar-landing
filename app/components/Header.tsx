"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { scrollToContact } from "../utils/scrollTo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "products", "news", "contacts"];
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the middle of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Головна", id: "home" },
    { label: "Про нас", id: "about" },
    { label: "Проєкти", id: "projects" },
    { label: "Обладнання", id: "products" },
    { label: "Новини", id: "news" },
    { label: "Контакти", id: "contacts" },
  ];

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
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  scrollToContact(e, item.id);
                  setActiveSection(item.id);
                }}
                className={`font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#E8922D] font-bold"
                    : "text-gray-700 hover:text-[#E8922D]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info & Lang */}
          <a href="https://wa.me/380689364540" target="_blank" className="hidden md:flex items-center space-x-4">
            {/* <div className="font-bold text-gray-800">+380 (68) 936 45 40</div> */}
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
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#E8922D] bg-orange-50"
                    : "text-gray-700 hover:text-[#E8922D] hover:bg-gray-50"
                }`}
                onClick={(e) => {
                  setIsOpen(false);
                  scrollToContact(e, item.id);
                  setActiveSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

