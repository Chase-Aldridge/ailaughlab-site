'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowButtonProps {
  children: React.ReactNode
  href: string
  className?: string
  size?: 'md' | 'lg' | 'xl'
}

export function GlowButton({ children, href, className, size = 'lg' }: GlowButtonProps) {
  const sizeStyles = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative inline-flex items-center justify-center font-bold rounded-2xl',
        'bg-accent text-bg-dark glow-accent-strong',
        'transition-shadow duration-300 hover:glow-accent-strong',
        sizeStyles[size],
        className,
      )}
      style={{ fontFamily: 'var(--font-space-grotesk)' }}
    >
      {children}
    </motion.a>
  )
}
