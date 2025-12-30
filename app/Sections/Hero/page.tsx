"use client";

import Image from "next/image"; 
import HeroImg from "@/public/Hero-Image.png";

const Hero = () => {
  return (
    <section 
      dir="rtl" 
      className="relative min-h-screen flex items-center Hero section-bg px-[8%] lg:px-[12%] py-20 overflow-hidden"
    >
      {/* خلفية ضوئية جمالية */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 z-10">
        
        {/* القسم النصي - محاذراة لليمين */}
        <div className="w-full lg:w-3/5 text-center lg:text-right">
          <h4 className="text-(--secondary) tracking-[0.2em] font-bold text-lg mb-4 flex items-center justify-center lg:justify-start gap-2">
            <span className="w-8 h-[2px] bg-(--secondary)"></span>
            مستقبل التصنيع الرقمي
          </h4>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black Syne leading-[1.1] text-white mb-8">
            نصنع الواقع <br />
            بأبعاد <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500">ثلاثية</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 mx-auto lg:mr-0">
            نحن لا نقوم بالطباعة فحسب، بل نبني جسراً بين خيالك والواقع الملموس. 
            باستخدام أدق التقنيات العالمية، نوفر لك حلولاً هندسية وفنية تتخطى حدود الممكن.
          </p>

          <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
            <button className="px-12 py-4 bg-(--primary) hover:bg-transparent border-2 border-(--primary) text-white font-bold rounded-full text-xl transition-all duration-300 shadow-[0_10px_30px_rgba(34,211,238,0.2)] hover:shadow-none">
              ابدأ مشروعك الآن
            </button>

            <button className="group flex items-center gap-3 text-white font-semibold text-lg hover:text-cyan-400 transition-colors">
              <span className="w-14 h-14 flex items-center justify-center rounded-full border border-white/20 group-hover:border-cyan-400 transition-all">
                <i className="bi bi-play-fill text-2xl rotate-180"></i>
              </span>
              عرض الفيديو التعريفي
            </button>
          </div>
        </div>

        {/* قسم الصورة مع تأثيرات بصرية */}
        <div className="w-full lg:w-2/5 relative">
          <div className="relative z-10 hero-image-container animate-float">
             <Image
                src={HeroImg}
                alt="نموذج طباعة ثلاثية الأبعاد احترافي"
                width={800}
                height={800}
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:rotate-2 hover:scale-105"
              />
          </div>
          
          {/* حلقة ضوئية خلف الصورة */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full pointer-events-none"></div>
        </div>
        
      </div>

      {/* إضافة كود CSS للتحريك (اختياري، يوضع في ملف globals.css) */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;