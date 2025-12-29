"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleLogoClick = () => {
    setActiveItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // إضافة dir="rtl" لضمان التنسيق العربي
    <div dir="rtl" className="px-[8%] lg:px-[12%] pt-15">
      <div className="p-5 rounded-2xl section-bg footer-bg border border-gray-400 overflow-hidden mb-4">
        <div className="p-0 md:p-8 flex flex-col lg:flex-row gap-10">
          
          {/* قسم الشعار والوصف */}
          <div className="w-full lg:w-1/2 text-right">
            <button onClick={handleLogoClick} className="italic font-bold text-5xl StoryScript text-white drop-shadow-md cursor-pointer">
              <span className="text-cyan-400">Print</span>Hub
                <span className="text-cyan-400">3D</span>
            </button>
            <p className="text-gray-400 mt-5 leading-relaxed">
              نحن نقدم حلول الطباعة ثلاثية الأبعاد المبتكرة لتطوير مشاريعكم. دقة عالية، سرعة في التنفيذ، واحترافية لا تضاهى في تصميم النماذج الأولية والمنتجات المخصصة.
            </p>
            
            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex items-center gap-3 mt-8">
              <a href="#" className="border border-(--primary) hover:bg-(--primary) w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:-translate-y-1">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="border border-(--primary) hover:bg-(--primary) w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:-translate-y-1">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="border border-(--primary) hover:bg-(--primary) w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:-translate-y-1">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="border border-(--primary) hover:bg-(--primary) w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:-translate-y-1">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* روابط سريعة ومعلومات */}
          <div className="w-full lg:w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* روابط سريعة */}
              <div>
                <h2 className="Syne text-2xl font-bold mb-5 text-white">روابط سريعة</h2>
                <div className="flex flex-col items-start gap-2">
                  {[
                    { name: "عنّا", id: "about" },
                    { name: "المميزات", id: "features" },
                    { name: "خدماتنا", id: "services" },
                    { name: "آراء العملاء", id: "testimonials" },
                    { name: "لماذا نحن؟", id: "whyChooseUs" }
                  ].map((link) => (
                    <button 
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="footer-link text-lg text-gray-400 cursor-pointer hover:text-white transition-all hover:-translate-x-1 duration-300 flex items-center gap-2"
                    >
                      <i className="ri-arrow-left-double-line text-(--secondary)"></i>
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* خدمات أخرى */}
              <div>
                <h2 className="Syne text-2xl font-bold mb-5 text-white">خدماتنا</h2>
                <div className="flex flex-col gap-2">
                  <a className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:-translate-x-1 duration-300 flex items-center gap-2" href="#">
                    <i className="ri-arrow-left-double-line text-(--secondary)"></i>
                    النماذج الأولية السريعة
                  </a>
                  <a className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:-translate-x-1 duration-300 flex items-center gap-2" href="#">
                    <i className="ri-arrow-left-double-line text-(--secondary)"></i>
                    التصنيع الإضافي
                  </a>
                  <a className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:-translate-x-1 duration-300 flex items-center gap-2" href="#">
                    <i className="ri-arrow-left-double-line text-(--secondary)"></i>
                    تصميم المنتجات المخصصة
                  </a>
                  <a className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:-translate-x-1 duration-300 flex items-center gap-2" href="#">
                    <i className="ri-arrow-left-double-line text-(--secondary)"></i>
                    نمذجة 3D وخدمات CAD
                  </a>
                </div>
              </div>

              {/* معلومات التواصل */}
              <div>
                <h2 className="Syne text-2xl font-bold mb-5 text-white">معلومات التواصل</h2>
                <div className="flex flex-col gap-4 text-gray-400">
                  <div className="flex items-center gap-3">
                    <i className="bi bi-phone-vibrate text-(--secondary) text-2xl"></i>
                    <span dir="ltr">+966 123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="bi bi-envelope-paper text-(--secondary) text-xl"></i>
                    Example@site.com
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="bi bi-globe text-(--secondary) text-xl"></i>
                    www.prinhub3d.com
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="bi bi-geo-alt text-(--secondary) text-xl"></i>
                    شارع الابتكار، المنطقة الصناعية، المملكة العربية السعودية
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="mt-10 p-5 border-t border-gray-500">
        <div className="flex justify-center items-center">
          <p className="text-xl text-gray-400 text-center">
            © جميع الحقوق محفوظة 2025. تم التطوير بواسطة{" "}
            <a className="text-(--primary) Syne font-bold hover:underline" href="wa.me/970594848203">
              Mohammed Saada
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;