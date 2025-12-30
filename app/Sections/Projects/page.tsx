import Project1 from "@/public/Project-1.jpg"
import Project2 from "@/public/Project-2.jpg"
import Project3 from "@/public/Project-3.jpg"
import Project4 from "@/public/Project-4.jpg"
import Project5 from "@/public/Project-5.jpg"
import Image from "next/image"

const projectData = [
    {
        id: "1",
        img: Project1,
        title: "فازة الزمرد",
        description: "تصميم معقد يبرز دقة التفاصيل المتناهية في تقنيات الطباعة ثلاثية الأبعاد الحديثة."
    },
    {
        id: "2",
        img: Project2,
        title: "المنحوتة القرمزية",
        description: "عمل فني يجسد مرونة المواد المستخدمة وقدرتها على تشكيل زوايا هندسية مستحيلة."
    },
    {
        id: "3",
        img: Project3,
        title: "ترس الهندسة الدقيقة",
        description: "نموذج ميكانيكي وظيفي تم إنتاجه بدقة ميكرونية لضمان أعلى مستويات الأداء."
    },
    {
        id: "4",
        img: Project4,
        title: "وعاء النبات العصري",
        description: "دمج بين الطبيعة والتكنولوجيا في تصميم منزلي ذكي يضفي لمسة جمالية حديثة."
    },
    {
        id: "5",
        img: Project5,
        title: "نموذج سيارة سباق",
        description: "محاكاة تفصيلية لهيكل سيارة مع ملمس خارجي ناعم يظهر جودة الإنهاء الاحترافي."
    }
]

const Projects = () => {
    return (
        <section className="px-[8%] lg:px-[12%] py-20 section-bg project-bg" id="projects" dir="rtl">
            <div className="title flex flex-col items-center justify-center text-center mb-16">
                <h3 className="font-semibold uppercase tracking-widest text-(--secondary) mb-2">
                    أحدث أعمالنا
                </h3>
                <h1 className="Syne font-bold my-4 text-4xl md:text-5xl text-white">
                    ابتكارات في عالم <span className="text-(--primary)">التصميم الرقمي</span>
                </h1>
                <p className="text-gray-400 max-w-3xl leading-relaxed text-lg">
                    نستعرض هنا نخبة من المشاريع التي نفذناها، حيث تلتقي التكنولوجيا بالإبداع لإنتاج قطع فريدة تتراوح بين النماذج الصناعية الدقيقة والأعمال الفنية المبتكرة.
                </p>
            </div>

            {/* شبكة المشاريع - الجزء الأول (3 أعمدة) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {projectData.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* شبكة المشاريع - الجزء الثاني (عمودين) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectData.slice(3).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

// مكون البطاقة لتحسين الكود
const ProjectCard = ({ project }: { project: any }) => (
    <div className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-(--primary)/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative h-64 w-full overflow-hidden">
            <Image 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            {/* طبقة تظليل تظهر عند الهوفر */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6 relative">
            <h3 className="text-2xl font-bold Syne mb-3 text-white group-hover:text-(--primary) transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
            </p>
            <button className="inline-flex items-center gap-2 text-sm font-bold text-white border-b-2 border-(--primary) pb-1 hover:text-(--primary) hover:gap-4 transition-all duration-300">
                عرض تفاصيل المشروع
                <i className="bi bi-arrow-left"></i>
            </button>
        </div>
    </div>
);

export default Projects