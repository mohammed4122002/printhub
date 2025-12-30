"use client";
import Image from "next/image";
import AboutImg from "@/public/About-Us-Image-1.jpg";
import { useState } from "react";
import CountUp from "react-countup";

// بيانات الرؤية والرسالة بنصوص احترافية
const faqData = [
  {
    question: "رؤيتنا",
    answer:
      "نطمح لأن نكون القادة في تقديم الحلول الصناعية المبتكرة، مع التركيز على الاستدامة والتميز التكنولوجي لبناء مستقبل أفضل للأجيال القادمة.",
  },
  {
    question: "رسالتنا",
    answer:
      "تقديم منتجات ذات جودة عالمية تلبي تطلعات عملائنا، والالتزام بالتطوير المستمر من خلال دمج الخبرة البشرية مع أحدث تقنيات التصنيع الذكي.",
  },
];

// إحصائيات الشركة بنصوص معربة
const stats = [
  { value: 15, suffix: "", label: "عاماً من التميز" },
  { value: 2500, suffix: "+", label: "عميل سعيد" },
  { value: 50, suffix: "+", label: "شريك استراتيجي" },
  { value: 1250, suffix: "+", label: "مشروع مكتمل" },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* إضافة dir="rtl" لضمان تنسيق اللغة العربية بشكل صحيح */}
      <div className="px-[8%] lg:px-[12%] py-20 text-right" id="about" dir="rtl">
        <div className="about-image">
          <Image 
            src={AboutImg} 
            alt="عن شركتنا" 
            className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]" 
          />
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center my-20">
          <div className="w-full lg:w-1/2">
            <div className="title">
              <h3 className="font-semibold uppercase tracking-widest text-(--secondary) mb-2">
                من نحن
              </h3>
              <h1 className="font-bold my-4 text-4xl md:text-5xl text-white leading-tight">
                نحن نشكل مستقبل <span className="text-(--primary)">الصناعة الحديثة</span>
              </h1>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                بخبرة تمتد لسنوات، نجمع بين الإبداع والدقة لنقدم حلولاً تصنيعية
                تتجاوز التوقعات. نحن نؤمن بأن كل تفصيل صغير يصنع فارقاً كبيراً
                في رحلة النجاح.
              </p>

              <button className="px-10 py-3 border border-(--primary) bg-(--primary) rounded-full text-xl hover:bg-transparent text-white cursor-pointer transition-all duration-300 shadow-lg shadow-cyan-500/20">
                اكتشف المزيد عنا
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            {faqData.map((item, index) => (
              <div key={index} className="overflow-hidden transition-all duration-300 py-2">
                <button
                  onClick={() => toggle(index)}
                  className={`w-full flex justify-between items-center px-8 py-4 cursor-pointer border border-gray-700 rounded-full transition-all duration-300 ${
                    openIndex === index ? "bg-(--primary) border-transparent shadow-lg" : "hover:border-(--primary)"
                  }`}
                >
                  <span className="text-xl md:text-2xl text-white font-bold">
                    {item.question}
                  </span>
                  <i
                    className={`bi ${
                      openIndex === index ? "bi-chevron-up" : "bi-chevron-down"
                    } text-white text-xl transition-transform duration-300`}
                  ></i>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 text-base md:text-lg px-6 mt-4 mb-5 leading-loose border-r-2 border-(--primary) mr-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 counter mt-20 border-t border-gray-800 pt-16">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-wide mb-3 flex items-center">
                <CountUp 
                  start={0} 
                  end={item.value} 
                  duration={3} 
                  enableScrollSpy 
                  scrollSpyOnce 
                />
                <span className="text-(--primary) font-bold mr-1">{item.suffix}</span>
              </h2>
              <p className="text-lg font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;