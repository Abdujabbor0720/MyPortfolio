import Container from "@/components/Container"

export default function AboutPage() {
  return (
    <section className="section">
      <Container>
        <h1 className="text-3xl font-semibold">About</h1>
        <div className="mt-4 max-w-content space-y-3">
          <p>Node.js (Nest.js/Express) asosida ishonchli REST va GraphQL APIlar quraman.</p>
          <p>PostgreSQL/MongoDB bilan ma’lumot modeli va migratsiyalarni puxta loyihalayman.</p>
          <p>JWT autentifikatsiya, Redis cache, WebSocket bilan real‑time funksiyalar.</p>
          <p>Docker muhitlari va testlar (Jest/Supertest) bilan sifatni kafolatlayman.</p>
        </div>
      </Container>
    </section>
  )
}
