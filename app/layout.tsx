import type { Metadata } from "next"
import "./globals.css"
import { Inter, IBM_Plex_Sans } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SkipLink from "@/components/SkipLink"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const plex = IBM_Plex_Sans({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-plex", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Abdujabbor Sharobiddinov — Professional Backend Developer",
  description: "Korporativ darajadagi backend yechimlar va API arxitekturalari yaratuvchi professional dasturchi. Zamonaviy texnologiyalar va eng yaxshi amaliyotlar bilan ishonchli, kengaytiriladigan tizimlar quraman.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Abdujabbor Sharobiddinov — Professional Backend Developer",
    description: "Korporativ darajadagi backend yechimlar va API arxitekturalari yaratuvchi professional dasturchi.",
    url: "/",
    siteName: "Abdujabbor Sharobiddinov",
    images: ["/favicon.svg"],
    locale: "uz_UZ",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Abdujabbor Sharobiddinov — Professional Backend Developer",
    description: "Korporativ darajadagi backend yechimlar va API arxitekturalari yaratuvchi professional dasturchi.",
    images: ["/favicon.svg"]
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abdujabbor Sharobiddinov",
    "jobTitle": "Professional Backend Developer",
    "email": "mailto:abdujabborsharobiddinov5@gmail.com",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "sameAs": [
      "https://www.linkedin.com/in/abdujabbor-sharobiddinov",
      "https://t.me/AbdujabborSharobiddinov",
      "https://github.com/Abdujabbor0720"
    ]
  }

  return (
    <html lang="uz" className={`${inter.variable} ${plex.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="min-h-screen antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <SkipLink />
        <Header />
        <main id="maincontent">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
