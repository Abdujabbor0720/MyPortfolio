import { PROJECTS } from "@/data/projects"
import Container from "@/components/Container"
import type { Metadata } from "next"

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const p = PROJECTS.find(x => x.slug === params.slug)
  return { title: p ? `${p.title} — Case Study` : "Project", description: p?.intro }
}

export default function ProjectPage({ params }: Props) {
  const p = PROJECTS.find(x => x.slug === params.slug)
  if (!p) return <div className="section"><Container><p>Topilmadi.</p></Container></div>

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": p.title,
    "description": p.intro,
    "creator": { "@type": "Person", "name": "Abdujabbor Sharobiddinov" },
    "url": `/projects/${p.slug}`,
    "sameAs": p.repo ? [p.repo] : []
  }

  return (
    <section className="section">
      <Container>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }} />
        <a href="/" className="text-sm underline focus-ring">← Orqaga</a>
        <h1 className="mt-2 text-3xl font-semibold">{p.title}</h1>
        <p className="mt-2 text-muted max-w-content">{p.intro}</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 space-y-4">
            <section>
              <h2 className="text-xl font-semibold">Muammo</h2>
              <p className="mt-2" style={{ lineHeight: 1.625 }}>{p.problem}</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Yechim</h2>
              <p className="mt-2" style={{ lineHeight: 1.625 }}>{p.solution}</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Natijalar</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {p.results.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </section>
          </div>
          <aside className="md:col-span-1 rounded-lg border border-gray-200 p-4 h-fit">
            <h3 className="font-semibold">Stack</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {p.stack.map(s => <li key={s}>• {s}</li>)}
            </ul>
            {p.repo && <a className="mt-4 inline-block underline focus-ring text-sm" href={p.repo} target="_blank" rel="noreferrer">GitHub repo</a>}
          </aside>
        </div>
      </Container>
    </section>
  )
}
