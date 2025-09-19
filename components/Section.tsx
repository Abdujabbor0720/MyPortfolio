import { ReactNode } from "react"
import Container from "./Container"

export default function Section({ id, title, lead, children }: { id?: string, title?: string, lead?: string, children: ReactNode }) {
  return (
    <section id={id} className="py-8 md:py-12">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          {title && (
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">{title}</h2>
              {lead && <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-3xl">{lead}</p>}
            </div>
          )}
          <div className={`${title ? "col-span-12 md:col-span-8" : "col-span-12"}`}>{children}</div>
        </div>
      </Container>
    </section>
  )
}
