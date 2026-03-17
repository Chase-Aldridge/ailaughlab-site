import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200'
  const sizeStyles = size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'
  const variantStyles =
    variant === 'primary'
      ? 'bg-accent text-bg-dark hover:brightness-110 glow-accent'
      : 'border border-white/20 text-white hover:bg-white/5'

  const styles = cn(baseStyles, sizeStyles, variantStyles, className)

  if (href) {
    return (
      <a href={href} className={styles} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
