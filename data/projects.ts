export type Project = {
  slug: string
  title: string
  intro: string
  problem: string
  solution: string
  results: string[]
  stack: string[]
  repo?: string
}

export const PROJECTS: Project[] = [
  {
    slug: "learning-center-api",
    title: "Learning Center API",
    intro: "NestJS + TypeScript, PostgreSQL + TypeORM, Redis cache, Swagger, Docker Compose.",
    problem: "Kurslar, talabalar va ro‘yxatga olish uchun modul‑modul backend kerak edi; statistik endpointlar talab qilindi.",
    solution: "Domain‑ga yo‘naltirilgan modullar (Kurslar/Talabalar/Ro‘yxatga olish), TypeORM migratsiyalar, Redis caching, Swagger hujjatlar.",
    results: [
      "So‘rovga javob vaqti ~35% tezlashdi (Redis).",
      "Docker Compose bilan lokal/on‑prem deploy soddalashtirildi.",
      "Swagger orqali integratsiya va testlar tezlashdi."
    ],
    stack: ["NestJS","TypeScript","PostgreSQL","TypeORM","Redis","Swagger","Docker"],
    repo: "https://github.com/Abdujabbor0720"
  },
  {
    slug: "factory-management-system",
    title: "Factory Management System",
    intro: "Factories/Employees CRUD; PostgreSQL; unit, integration, E2E testlar; Docker.",
    problem: "Zavod va xodimlar ma’lumotini boshqarish, audit va test qoplanishi bilan ishonchli API kerak.",
    solution: "NestJS + TypeORM bilan qatlamli arxitektura; Jest/Supertest testlar, Docker Compose orqali izolyatsiya.",
    results: [
      "CI’da E2E testlar ~12 daqiqada yakunlanadi.",
      "Rollback‑safe migratsiyalar bilan ishlab chiqarishdagi xatoliklar kamaydi.",
      "PostgreSQL indekslari bilan qidiruv ~40% tezlashdi."
    ],
    stack: ["NestJS","TypeORM","PostgreSQL","Jest","Supertest","Docker"],
    repo: "https://github.com/Abdujabbor0720"
  },
  {
    slug: "file-conversion-bot",
    title: "Professional File Conversion Bot",
    intro: "Telegram bot: JPG/PNG→PDF, PDF→Word, Word→Text; O‘zbek/Rus/Ing; admin va broadcasting.",
    problem: "Ko‘p formatli fayl konvertatsiyasi va ko‘p tilli interfeys talab qilindi.",
    solution: "Node.js bot, fayl navbatlari va xotira boshqaruvi; shell skriptlar bilan konversiya.",
    results: [
      "Yuzlab fayllarni parallel qayta ishlash.",
      "Uzoq fayl ishlarida foydalanuvchiga holat xabarlari.",
      "Admin paneli orqali broadcasting va statistikalar."
    ],
    stack: ["Node.js","JavaScript","Shell","Telegram Bot API"],
    repo: "https://github.com/Abdujabbor0720"
  }
];
