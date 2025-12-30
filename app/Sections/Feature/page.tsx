import React from 'react';
import Image from 'next/image';

const Feature = () => {
  // البيانات مترجمة للغة العربية
  const features = [
    { 
      title: "نماذج أولية دقيقة", 
      img: "/Feature-1.png", 
      desc: "طباعة ثلاثية الأبعاد عالية الدقة للحصول على نماذج أولية خالية من العيوب." 
    },
    { 
      title: "تصنيع حسب الطلب", 
      img: "/Feature-2.png", 
      desc: " حلول طباعة ثلاثية الأبعاد مخصصة تلبي احتياجاتك الخاصة بدقة." 
    },
    { 
      title: "أشكال هندسية معقدة", 
      img: "/Feature-3.png", 
      desc: "طباعة تصاميم معقدة لا يمكن للطرق التقليدية تحقيقها." 
    },
  ];

  return (
    // أضفنا dir="rtl" لضبط اتجاه العناصر والنصوص
    <div className='px-[8%] lg:px-[12%] pb-20 Arabic' id="feature" dir="rtl">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className='feature-card flex flex-col md:flex-row gap-5 p-6 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 bg-(--section-bg) rounded-2xl text-center md:text-right border border-white hover:border-(--secondary)'
          >
            {/* الصورة ستبقى في مكانها أو تنتقل لليمين حسب توزيع الـ flex */}
            <div className="flex justify-center items-center shrink-0">
              <Image
                src={feature.img}
                alt={feature.title}
                width={60}
                height={60}
                className="object-contain mb-0"
              />
            </div>

            <div className='feature-content'>
              <h3 className="text-white font-bold mb-3 text-2xl lg:text-3xl leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;