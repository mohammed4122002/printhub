"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"

// استيراد الصور
import Blog1 from "@/public/Blog-1.jpg"
import Blog2 from "@/public/Blog-2.jpg"
import Blog3 from "@/public/Blog-3.jpg"

const BlogData = [
    {
        image: Blog1,
        title: "كيف تقلل تكاليف الإنتاج باستخدام حلول الطباعة ثلاثية الأبعاد",
        date: "28 سبتمبر 2025",
        comments: "0",
        desc: "تعرف على الاستراتيجيات الحديثة في تقليل الهدر وتوفير الميزانية من خلال تقنيات التصنيع المضافة...",
        tag: "اقرأ المزيد"
    },
    {
        image: Blog2,
        title: "أفضل المواد المستخدمة في طباعة النماذج الأولية الهندسية",
        date: "25 سبتمبر 2025",
        comments: "3",
        desc: "دليل شامل حول اختيار المادة المناسبة لمشروعك، بين الصلابة، المرونة، ومقاومة الحرارة...",
        tag: "اقرأ المزيد"
    },
    {
        image: Blog3,
        title: "مستقبل التصنيع الرقمي: رؤية لعام 2030 في المنطقة العربية",
        date: "20 سبتمبر 2025",
        comments: "5",
        desc: "كيف ستغير الطباعة ثلاثية الأبعاد سلاسل التوريد والخدمات اللوجستية في المستقبل القريب...",
        tag: "اقرأ المزيد"
    },
    {
        image: Blog1,
        title: "تحويل التصاميم المعقدة إلى حقيقة: تحديات وحلول",
        date: "15 سبتمبر 2025",
        comments: "2",
        desc: "استعراض لأبرز المشاريع التي تم تنفيذها بدقة ميكرونية وكيف تم التغلب على عقبات التصميم...",
        tag: "اقرأ المزيد"
    }
]

const Blog = () => {
    return (
        <section className="px-[8%] lg:px-[12%] py-20 section-bg" id="blog" dir="rtl">
            <div className="title flex flex-col items-center justify-center text-center mb-12">
                <h3 className="font-semibold uppercase tracking-widest text-(--secondary) mb-2">
                    المدونة والأخبار
                </h3>
                <h1 className="Syne font-bold my-4 text-4xl md:text-5xl text-white">
                    آخر مستجدات <span className="text-(--primary)">الطباعة ثلاثية الأبعاد</span>
                </h1>
                <p className="text-gray-400 text-lg lg:w-[70%] leading-relaxed">
                    نشارككم أحدث الأبحاث، المقالات، والتقارير التقنية حول عالم التصنيع الرقمي والابتكارات التي تشكل مستقبل الصناعة.
                </p>
            </div>

            <div className="mt-10">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        1200: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        0: { slidesPerView: 1 }
                    }}
                    className="blog-swiper !pb-14"
                >
                    {BlogData.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="blog-card group p-4 rounded-2xl border border-white/10 bg-black/20 transition-all duration-500 hover:border-(--primary)/50 hover:bg-white/5 h-full">
                                {/* حاوية الصورة مع تأثير الزووم */}
                                <div className="blog-image overflow-hidden rounded-xl h-56 relative">
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    <div className="absolute top-4 right-4 bg-(--primary) text-white text-xs font-bold py-1 px-3 rounded-full z-10">
                                        تكنولوجيا
                                    </div>
                                </div>

                                {/* المحتوى النصي */}
                                <div className="p-2">
                                    <div className="blog-meta flex gap-5 my-4">
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <i className="bi bi-calendar3 text-(--secondary)"></i>
                                            <span className="Inter">{item.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <i className="bi bi-chat-dots text-(--secondary)"></i>
                                            <span className="Inter">{item.comments} تعليقات</span>
                                        </div>
                                    </div>

                                    <h2 className="text-white Syne text-xl font-bold mb-4 line-clamp-2 group-hover:text-(--primary) transition-colors duration-300">
                                        {item.title}
                                    </h2>

                                    <p className="text-gray-400 Inter mb-6 line-clamp-3 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <button className="text-(--primary) flex items-center gap-2 text-md font-bold hover:gap-4 transition-all duration-300 group/btn">
                                        {item.tag} 
                                        <i className="bi bi-arrow-left pt-1 transition-transform group-hover/btn:-translate-x-1"></i>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Blog