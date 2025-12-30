"use client";

import Testimonial1 from "@/public/Testimonial-1.jpg";
import Testimonial2 from "@/public/Testimonial-2.jpg";
import Testimonial3 from "@/public/Testimonial-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const testimonialData = [
  {
    id: "1",
    img: Testimonial1,
    name: "سارة أحمد",
    role: "مديرة مشاريع في تك-كيرف",
    text: "لقد أحدثت برنت-هب تحولاً جذرياً في عملية بناء النماذج الأولية لدينا. خدماتهم السريعة سمحت لنا بتطوير تصاميمنا وتجربتها في وقت قياسي، مما وفر علينا الكثير من الجهد والتكاليف.",
  },
  {
    id: "2",
    img: Testimonial2,
    name: "محمد السيد",
    role: "مصمم منتجات في ديزاين-هب",
    text: "لقد أحدثت برنت-هب تحولاً جذرياً في عملية بناء النماذج الأولية لدينا. خدماتهم السريعة سمحت لنا بتطوير تصاميمنا وتجربتها في وقت قياسي، مما وفر علينا الكثير من الجهد والتكاليف.",
  },
  {
    id: "3",
    img: Testimonial3,
    name: "ليلى محمود",
    role: "كبيرة المهندسين في إنوفيت-إكس",
    text: "لقد أحدثت برنت-هب تحولاً جذرياً في عملية بناء النماذج الأولية لدينا. خدماتهم السريعة سمحت لنا بتطوير تصاميمنا وتجربتها في وقت قياسي، مما وفر علينا الكثير من الجهد والتكاليف.",
  },
  {
    id: "4",
    img: Testimonial3,
    name: "ليلى محمود",
    role: "كبيرة المهندسين في إنوفيت-إكس",
    text: "لقد أحدثت برنت-هب تحولاً جذرياً في عملية بناء النماذج الأولية لدينا. خدماتهم السريعة سمحت لنا بتطوير تصاميمنا وتجربتها في وقت قياسي، مما وفر علينا الكثير من الجهد والتكاليف.",
  },
];

const Testimonial = () => {
  return (
    <div
      className="px-[8%] lg:px-[12%] py-20 section-bg"
      id="testimonials"
      dir="rtl"
    >
      {/* العنوان */}
      <div className="title flex flex-col items-center justify-center text-center mb-16">
        <h3 className="font-semibold uppercase tracking-widest text-(--secondary) mb-2">
          ماذا يقول عملاؤنا
        </h3>
        <h1 className="Syne font-bold my-4 text-4xl md:text-5xl text-white leading-tight">
          ثقة المبتكرين والمبدعين <br />{" "}
          <span className="text-(--primary)">في كل مكان</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          نعتز بشراكتنا مع نخبة من الرواد الذين اختبروا التميز من خلال حلولنا
          المبتكرة. نحن نفخر بتحويل أفكارهم إلى واقع ملموس بدقة، إبداع وموثوقية
          عالية.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="mt-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // سيتوقف المؤقت عند وضع الماوس ويعود للعمل عند إبعاده
          }}
          breakpoints={{
            1200: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="testimonial-swiper"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id} className="pb-10">
              <div className="testi-card group border border-white/10 cursor-pointer rounded-2xl p-8 transition-all duration-500 hover:border-(--primary) hover:bg-white/5 bg-black/20 relative">
                {/* النجوم */}
                <div className="testi-star text-[#ffcb00] flex gap-1 text-lg mb-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                    <i  className="bi bi-star"></i>
                </div>

                {/* نص التوصية */}
                <p className="text-gray-300 text-lg italic mb-8 leading-relaxed relative z-10">
                  "{item.text}"
                </p>

                {/* قسم الكاتب */}
                <div className="testi-section flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="testi-details flex gap-4 items-center">
                    <div className="testi-author relative">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="rounded-full object-cover w-14 h-14 border-2 border-(--primary)/30 group-hover:border-(--primary) transition-all"
                      />
                    </div>
                    <div className="testi-text">
                      <h2 className="text-white text-lg font-bold Syne group-hover:text-(--primary) transition-colors">
                        {item.name}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1 font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* أيقونة الاقتباس */}
                  <div className="opacity-20 group-hover:opacity-100 transition-opacity">
                    <i className="bi bi-quote text-5xl text-(--secondary)"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
