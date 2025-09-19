import Container from "@/components/Container"
import { SITE } from "@/lib/site"

export default function ContactPage() {
  return (
    <section className="section">
      <Container>
        <h1 className="text-3xl font-semibold">Kontakt</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <form className="space-y-3" method="POST" action="/api/contact">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Ismingiz</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus-ring" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus-ring" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Xabar</label>
              <textarea id="message" name="message" required rows={6} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus-ring" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-white text-sm focus-ring">Yuborish</button>
          </form>
          <div className="rounded-lg border border-gray-200 p-4">
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium">Email:</span> <a className="underline focus-ring" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><span className="font-medium">Telegram:</span> <a className="underline focus-ring" href={SITE.telegram} target="_blank" rel="noreferrer">{SITE.telegram}</a></li>
              <li><span className="font-medium">LinkedIn:</span> <a className="underline focus-ring" href={SITE.linkedIn} target="_blank" rel="noreferrer">{SITE.linkedIn}</a></li>
              <li><span className="font-medium">GitHub:</span> <a className="underline focus-ring" href={SITE.github} target="_blank" rel="noreferrer">{SITE.github}</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
