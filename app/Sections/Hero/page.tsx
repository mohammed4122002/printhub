import Image from "next/image"; // استيراد مكون الصورة من Next.js
import HeroImg from "@/public/Hero-Image.png";

const Hero = () => {
  return (
    <>
      {/* إضافة dir="rtl" لضبط الاتجاه */}
      <div
        dir="rtl"
        className="Hero section-bg px-[8%] lg:px-[12%] py-20 lg:py-32 mt-25"
      >
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* القسم النصي */}
          <div className="w-full lg:w-1/2 text-right">
            <h4 className="text-(--secondary) Inter uppercase text-xl font-medium tracking-wide">
              من الفكرة إلى الواقع
            </h4>
            <h1 className="text-6xl lg:text-8xl font-bold Syne my-6 leading-tight text-white">
              حلول متطورة في{" "}
              <span className="text-cyan-400">الطباعة ثلاثية الأبعاد</span>
            </h1>

            <div className="flex flex-wrap items-center gap-5 Inter">
              <button className=" px-10 py-3 border border-(--primary) bg-(--primary) rounded-full text-xl hover:bg-transparent text-white cursor-pointer transition-all duration-300 shadow-lg shadow-cyan-500/20">
                استكشف خدماتنا
              </button>

              <button className="Inter px-10 py-3 border border-(--primary) bg-transparent rounded-full text-xl hover:bg-(--primary) text-white cursor-pointer transition-all duration-300 flex items-center gap-2">
                <i className="bi bi-play-fill text-2xl rotate-180"></i> شاهد
                الفيديو
              </button>
            </div>
          </div>

          {/* قسم الصورة */}
          <div className="w-full lg:w-1/2 ">
          
              <p className="text-gray-300 Inter text-lg mb-8 max-w-xl leading-relaxed">
                نحول خيالك إلى منتجات ملموسة بدقة متناهية. سواء كنت تبحث عن
                نماذج أولية سريعة أو تصنيع مخصص، نحن هنا لنقدم لك الجودة التي
                تستحقها مشاريعك.
              </p>
     
            <div className="hero-image relative">
              <Image
                src={HeroImg}
                alt="نموذج طباعة ثلاثية الأبعاد"
                width={700}
                height={700}
                priority
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
