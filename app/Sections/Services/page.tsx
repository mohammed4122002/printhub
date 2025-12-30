import React from 'react'
import Image from 'next/image';
import Services1 from '@/public/Services-1.png';
import Services2 from '@/public/Services-2.png';
import Services3 from '@/public/Services-3.png';
import Services4 from '@/public/Services-4.png';
import Services5 from '@/public/Services-5.png';
import Services6 from '@/public/Services-6.png';

const ServiceData = [
    {
        title: 'النماذج الأولية السريعة',
        description: 'نحول أفكارك إلى واقع ملموس بدقة متناهية وسرعة قياسية باستخدام أحدث تقنيات الطباعة ثلاثية الأبعاد.',
        img: Services1
    },
    {
        title: 'التصنيع المضاف',
        description: 'حلول تصنيعية متطورة تتيح لك إنتاج قطع معقدة هندسياً وتوفير المواد مع ضمان المتانة العالية.',
        img: Services2
    },
    {
        title: 'تصميم المنتجات المخصص',
        description: 'فريقنا من المهندسين يساعدك في تصميم منتجات فريدة تتناسب تماماً مع متطلبات مشروعك الخاصة.',
        img: Services3
    },
    {
        title: 'نمذجة CAD ثلاثية الأبعاد',
        description: 'نقدم خدمات التصميم الهندسي الرقمي وتحويل المخططات اليدوية إلى نماذج رقمية جاهزة للإنتاج.',
        img: Services4
    },
    {
        title: 'إنتاج الكميات المحدودة',
        description: 'نوفر لك إمكانية إنتاج كميات صغيرة من منتجك بجودة المصانع الكبرى دون الحاجة لقوالب مكلفة.',
        img: Services5
    },
    {
        title: 'استشارات المواد والتقييم',
        description: 'نساعدك في اختيار أفضل المواد (بوليمرات، معادن، راتنجات) المناسبة لبيئة استخدام منتجك النهائية.',
        img: Services6
    }
];

const Services = () => {
    return (
        <section className="px-[8%] lg:px-[12%] py-20 section-bg service-bg overflow-hidden" id="services" dir="rtl">
            {/* الجزء العلوي: العنوان والوصف الرئيسي */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ServiceData.slice(0, 2).map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-right order-1 lg:order-2">
                    <h3 className="font-semibold uppercase tracking-widest text-(--secondary) mb-3">خدماتنا</h3>
                    <h1 className="font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                        حلول الطباعة ثلاثية الأبعاد <br /> <span className="text-(--primary)">لأعمالك المبتكرة</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        نحن نقدم منظومة متكاملة من حلول التصنيع الرقمي التي تبدأ من الفكرة وتصل إلى المنتج النهائي. نستخدم تكنولوجيات متقدمة تضمن لك الدقة، السرعة، والفعالية من حيث التكلفة لتفوق توقعات عملائك.
                    </p>
                </div>
            </div>

            {/* الجزء السفلي: باقي الخدمات */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ServiceData.slice(2).map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </section>
    );
}

// مكون فرعي للبطاقة لتقليل التكرار وتحسين الأداء
const ServiceCard = ({ service }: { service: any }) => (
    <div className="group flex flex-col gap-5 p-8 cursor-pointer rounded-2xl border border-white/10 bg-white/5 hover:border-(--primary) hover:bg-(--body-color) transition-all duration-500 hover:-translate-y-2">
        <div className="w-16 h-16 relative">
            <Image 
                src={service.img} 
                alt={service.title} 
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                fill
            />
        </div>
        <div>
            <h3 className="text-white text-xl font-bold mb-3 group-hover:text-(--primary) transition-colors duration-300">
                {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {service.description}
            </p>
            <button className="flex items-center gap-2 mt-5 text-sm font-bold text-(--primary) hover:text-white transition-all duration-300 group-hover:gap-4">
                اقرأ المزيد
                <i className="bi bi-arrow-left"></i>
            </button>
        </div>
    </div>
);

export default Services;