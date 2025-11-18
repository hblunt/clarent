import Link from 'next/link'

interface ButtonProps {
  href?: string
  variant?: 'filled' | 'outline'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({
  href,
  variant = 'filled',
  children,
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block text-center'

  const variantStyles = {
    filled: 'bg-clarent-orange text-white hover:bg-orange-600',
    outline: 'border-2 border-clarent-orange text-clarent-orange hover:bg-clarent-orange hover:text-white',
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}
