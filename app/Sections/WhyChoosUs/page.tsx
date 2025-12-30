"use client";
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion"; // مكتبة الأنيميشن
import img from "@/public/Why-Choose-Us-Image.jpg";

const WhyChoosUs = () => {
  // بيانات أشرطة التقدم
  const skills = [
    { id: 1, title: "معدل رضا العملاء", percentage: 95, color: "var(--primary)" },
    { id: 2, title: "تبني التقنيات المبتكرة", percentage: 88, color: "var(--secondary)" },
  ];

  return (
    <section className="px-[8%] lg:px-[12%] py-20 section-bg relative overflow-hidden" id="whychooseus" dir="rtl">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
        
        {/* الجزء النصي مع أنيميشن دخول من اليمين */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="title text-right">
            <h3 className="font-semibold uppercase tracking-widest text-(--secondary) mb-2">لماذا تختارنا؟</h3>
            <h1 className="Syne font-bold my-4 text-4xl md:text-5xl text-white leading-tight">
              الرواد في عالم <br /> <span className="text-(--primary)">الطباعة ثلاثية الأبعاد</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              نحن نقدم حلولاً هندسية متكاملة تبدأ من الفكرة وتستمر حتى تسليم المنتج النهائي بأعلى معايير الدقة العالمية.
            </p>
          </div>

          {/* قائمة المميزات */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <FeatureItem text="معايير جودة عالمية" delay={0.1} />
            <FeatureItem text="دقة متناهية في التفاصيل" delay={0.2} />
            <FeatureItem text="دعم فني واستشارات" delay={0.3} />
            <FeatureItem text="سرعة تسليم النماذج" delay={0.4} />
             <FeatureItem text="معايير جودة عالمية" delay={0.5} />
            <FeatureItem text="دقة متناهية في التفاصيل" delay={0.6} />
            <FeatureItem text="دعم فني واستشارات" delay={0.7} />
            <FeatureItem text="سرعة تسليم النماذج" delay={0.8} />
          </div>
        </motion.div>

        {/* الجزء المرئي (الإحصائيات والصورة) */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-10 mb-8">
            {skills.map((skill) => (
              <div key={skill.id} className="flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-bold Syne text-white">{skill.title}</h2>
                  <span className="text-(--secondary) font-bold text-xl">{skill.percentage}%</span>
                </div>
                {/* شريط التقدم مع أنيميشن الحركة */}
                <div className="rang-bar-container bg-white/10 h-[10px] w-full rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 15px ${skill.color}66` }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* الصورة مع أنيميشن دخول من الأسفل */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-(--primary) to-(--secondary) rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <Image 
              src={img} 
              alt="لماذا تختارنا" 
              className="relative w-full h-[350px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// مكون المميزات مع أنيميشن ظهور تدريجي
const FeatureItem = ({ text, delay }: { text: string; delay: number }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-center gap-3 text-white/90 text-lg hover:text-(--secondary) transition-colors cursor-default"
  >
    <i className="bi bi-check-circle-fill text-(--secondary)"></i>
    <span>{text}</span>
  </motion.h2>
);

export default WhyChoosUs;