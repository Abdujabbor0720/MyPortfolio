import { ReactNode } from "react"
import Link from "next/link"

type Props = {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: "primary" | "outline" | "ghost"
  as?: "a" | "button" | "link"
  type?: "button" | "submit" | "reset"
  ariaLabel?: string
  icon?: ReactNode
  size?: "sm" | "md" | "lg"
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  as = "link",
  type = "button",
  ariaLabel,
  icon,
  size = "md"
}: Props) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5",
    outline: "bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-0.5",
    ghost: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md"
  }

  const className = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  )

  if (as === "a" && href) {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  if (as === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={className}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    )
  }

  return (
    <Link href={href || "#"} className={className} aria-label={ariaLabel}>
      {content}
    </Link>
  )
}
