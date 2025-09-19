# Abdujabbor Sharobiddinov — Professional Portfolio

Professional backend developer portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Modern Stack:** Next.js 14 + TypeScript + Tailwind CSS
- ✅ **Professional Design:** Clean, minimal, and business-focused
- ✅ **Dark/Light Mode:** Automatic theme switching
- ✅ **Responsive:** Mobile-first design approach
- ✅ **Performance:** Optimized for speed and SEO
- ✅ **Accessibility:** WCAG 2.2 AA compliant

## 🛠 Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Styling:** Custom CSS variables, Professional animations
- **Deployment:** Vercel ready
- **Performance:** Web Vitals optimized

## 📋 Requirements

- **Node.js >= 18.18** (or 20 LTS)
- **npm/yarn/pnpm** package manager

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm start
```

## 🔧 Development

```bash
# Different ports if 3000 is busy
npm run dev -- -p 3001

# Environment variables (optional)
# Create .env.local file:
```

## 📁 Project Structure

```
abdujabbor-portfolio-optimized/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── projects/         # Projects pages
├── components/           # Reusable components
│   ├── Header.tsx       # Navigation
│   ├── Footer.tsx       # Footer
│   ├── Button.tsx       # Button component
│   └── ...
├── lib/                 # Utilities and configurations
└── public/             # Static assets
```

## 🎨 Design System

- **Colors:** Professional navy, slate, and green palette
- **Typography:** System fonts with proper hierarchy
- **Spacing:** 8px base unit system
- **Components:** Reusable, accessible components
- **Animations:** Smooth, professional micro-interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Deploy
```bash
npm run build
npm start
```

## 👤 About

Professional portfolio for **Abdujabbor Sharobiddinov**
- Backend Developer at TechHub Company
- Najot Ta'lim Graduate
- Node.js, NestJS, PostgreSQL specialist

## 📞 Contact

- **GitHub:** [github.com/abdujabbor](https://github.com/abdujabbor)
- **Email:** Contact through the website
- **Company:** TechHub (July 2024 - Present)

---
Built with ❤️ using Next.js and TypeScript
```

## A11y va SEO
- Semantik HTML, skip‑link, ko‘rinadigan focus ring, klaviatura navigatsiya
- `metadata`, Open Graph/Twitter, `sitemap.ts`, `robots.ts`, `schema.org/Person` + Project JSON‑LD

## Tuzilma
- `app/page.tsx`: hero, about, skills, case studies, xizmatlar, testimonials, kontakt
- `app/projects/[slug]/page.tsx`: har bir loyiha uchun case study
- `lib/site.ts`: profil/kontaktlar, navigatsiya, skills, xizmatlar
- `data/projects.ts`: loyihalar ma’lumoti

## Eslatma
- `next.config.mjs` ishlatilgan (JS) — **next.config.ts kerak emas**, shu sabab build paytida `next.ts` yoki `next.config.ts`ga oid xatoliklar bo‘lmaydi.
- Tailwind konfiguratsiyasi **tailwind.config.js** — universal moslik uchun.

## Rasm/Media
- Rasm qo‘shmoqchi bo‘lsangiz, `next/image` dan foydalaning (`loading="lazy"`), WebP/AVIF tavsiya.
