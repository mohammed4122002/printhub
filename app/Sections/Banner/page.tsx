import React from 'react'

const Banner = () => {
  return (
   <>
    <div className="px-[8%] lg:px-[12%] py-20 section-bg" id="banner" dir="rtl">
      {/* الحاوية الرئيسية مع خلفية متدرجة وتأثير زجاجي */}
      <div className="relative overflow-hidden w-full flex flex-col justify-center items-center text-center border border-(--primary)/30 rounded-3xl p-10 md:p-20 shadow-2xl">
        
        {/* عنصر زخرفي خلفي (اختياري) */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-(--primary) opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-(--secondary) opacity-10 rounded-full blur-3xl"></div>

        <div className="title relative z-10">
          {/* العنوان الرئيسي بأحجام متجاوبة */}
          <h1 className="Syne font-bold my-6 text-4xl md:text-6xl text-white leading-tight">
            جسّد خيالك واقعاً مع <br /> 
            <span className="text-(--primary)">احترافية الطباعة ثلاثية الأبعاد</span>
          </h1>

          {/* النص الوصفي */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            لا تترك أفكارك حبيسة الورق. نحن نوفر لك الدقة والسرعة لتحويل تصاميمك الأكثر تعقيداً إلى منتجات ملموسة بجودة صناعية لا تُضاهى.
          </p>

          {/* الزر بتأثير تفاعلي */}
          <button className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-(--primary) rounded-2xl hover:bg-transparent border-2 border-(--primary) shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-none cursor-pointer overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              تواصل معنا الآن
              <i className="bi bi-chat-dots-fill group-hover:scale-110 transition-transform"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
   </>
  )
}

export default Banner