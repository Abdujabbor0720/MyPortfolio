"use client"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

const NAV = [
  { label: "Bosh sahifa", href: "#" },
  { label: "Men haqimda", href: "#about" },
  { label: "Xizmatlar", href: "#services" },
  { label: "Loyihalar", href: "#projects" },
  { label: "Aloqa", href: "#contact" }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-all duration-200">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <span className="text-blue-600 dark:text-blue-400">Abdujabbor</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm ml-1">Dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              className="hidden md:inline-flex btn-primary text-sm px-4 py-2"
            >
              Bog'lanish
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden btn-icon"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Menyuni ochish"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} w-5 h-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} w-5 h-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden nav-mobile`}>
          <div className="px-4 py-6 space-y-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block nav-link px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="#contact"
                className="btn-primary w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Bog'lanish
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
