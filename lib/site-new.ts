export const SITE = {
    name: "Abdujabbor Sharobiddinov",
    title: "Professional Backend Developer",
    email: "abdujabborsharobiddinov5@gmail.com",
    linkedIn: "https://www.linkedin.com/in/abdujabbor-sharobiddinov",
    github: "https://github.com/Abdujabbor0720",
    telegram: "https://t.me/AbdujabborSharobiddinov",
    description: "Korporativ darajadagi backend yechimlar va API arxitekturalari yaratuvchi professional dasturchi. Zamonaviy texnologiyalar va eng yaxshi amaliyotlar bilan ishonchli, kengaytiriladigan tizimlar quraman.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
} as const;

export const NAV = [
    { href: "#about", label: "Men haqimda" },
    { href: "#skills", label: "Texnologiyalar" },
    { href: "#projects", label: "Loyihalar" },
    { href: "#services", label: "Xizmatlar" },
    { href: "#contact", label: "Bog'lanish" }
] as const;

export const SKILLS = [
    "Node.js", "NestJS", "Express.js", "TypeScript", "JavaScript",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes",
    "REST API", "GraphQL", "WebSocket", "Microservices", "JWT",
    "TypeORM", "Prisma", "Mongoose", "Git", "GitHub",
    "AWS", "Digital Ocean", "Nginx", "PM2", "Jest"
] as const;

export const SERVICES = [
    {
        icon: "🏗️",
        title: "Backend Arxitektura",
        description: "Korporativ darajadagi backend arxitekturalari va mikroservis tizimlarini loyihalash va yaratish."
    },
    {
        icon: "🔌",
        title: "API Rivojlantirish",
        description: "REST va GraphQL API'larni professional standartlarda yaratish va hujjatlash."
    },
    {
        icon: "🗄️",
        title: "Ma'lumotlar Bazasi",
        description: "PostgreSQL, MongoDB va Redis bilan samarali ma'lumotlar bazalarini loyihalash."
    },
    {
        icon: "☁️",
        title: "Cloud va DevOps",
        description: "Docker, Kubernetes va cloud platformalar orqali deployment va scaling."
    },
    {
        icon: "🔒",
        title: "Xavfsizlik",
        description: "JWT authentication, ma'lumotlarni shifrlash va API xavfsizligini ta'minlash."
    },
    {
        icon: "⚡",
        title: "Optimallashtirish",
        description: "Tizim samaradorligini oshirish, caching va load balancing yechimlar."
    }
] as const;
