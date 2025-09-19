export default function Testimonial({ quote, author, role }: { quote: string, author: string, role?: string }) {
  return (
    <figure className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-3">
        <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
        <div>
          <blockquote className="text-base text-gray-900 dark:text-white leading-relaxed mb-3">&ldquo;{quote}&rdquo;</blockquote>
          <figcaption className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium text-gray-900 dark:text-white">— {author}</span>
            {role && <span>, {role}</span>}
          </figcaption>
        </div>
      </div>
    </figure>
  )
}
