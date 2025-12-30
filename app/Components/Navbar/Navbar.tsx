"use client";
import { useState, useEffect } from "react";

// تحويل أسماء القائمة للعربية
const menuItems = [
  "المميزات",
  "عنّا",
  "خدماتنا",
  "الرئيسية",
  "مشاريعنا",
  "آراء العملاء",
  "لماذا نحن؟",
  "المدونة",
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setActiveItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" }); // تصحيح من screenTop إلى scrollTo
  };

  return (
    // إضافة dir="rtl" لضمان اتجاه النص من اليمين لليسار
    <nav dir="rtl" className="fixed top-0 right-0 w-full z-50 bg-(--body-color) transition-all duration-500">
      <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-4">
        
        {/* الشعار - Logo */}
        <div className="flex flex-col leading-tight">
          <button onClick={handleLogoClick} className="italic font-bold text-4xl StoryScript  text-white drop-shadow-md cursor-pointer">
          <span className="text-cyan-400">print</span>Hub
            <span className="text-cyan-400">3D</span>
          </button>
        </div>

        {/* القائمة لنسخة الكمبيوتر - Desktop Menu */}
        <ul className="hidden lg:flex text-lg items-center gap-5 cursor-pointer text-white font-medium Sync">
          {menuItems.map((item, i) => {
            return (
              <li key={i}>
                <button
                  onClick={() => setActiveItem(item)}
                  className={`relative nav-menu transition-all duration-300 cursor-pointer ${
                    activeItem === item
                      ? "active-nav text-cyan-400"
                      : "text-white hover:text-cyan-200"
                  }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        {/* أيقونات التواصل الاجتماعي */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="border border-(--primary) hover:bg-(--primary) w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:-translate-y-1 "
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#"
            className="border border-(--primary) hover:bg-(--primary) w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:-translate-y-1 "
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="#"
            className="border border-(--primary) hover:bg-(--primary) w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:-translate-y-1 "
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>

     {/* زر القائمة للموبايل */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl lg:hidden focus:outline-none transition-transform duration-300"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-distribute-vertical text-cyan-400"}`}></i>
        </button>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
        menuOpen ? "max-h-[500px] border-b border-white/10" : "max-h-0"
      }`}>
        <ul className="flex flex-col items-center py-10 gap-6">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${i}`}
                onClick={() => { setActiveItem(item); setMenuOpen(false); }}
                className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;