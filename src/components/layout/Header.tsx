'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/theme/ThemeProvider'
import { themes } from '@/components/theme/theme-config'

export function Header() {
  const { theme, setShowSelector } = useTheme()
  const currentTheme = themes[theme]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span
              className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              AI Laugh Lab
            </span>
          </a>

          {/* Center - minimal */}
          <div className="hidden sm:flex items-center gap-6 text-xs font-mono uppercase tracking-[0.15em] text-text-muted">
            <a href="#experiments" className="hover:text-accent transition-colors">Experiments</a>
            <span className="w-1 h-1 rounded-full bg-text-muted/50" />
            <a href="https://www.skool.com/ai-laugh-lab-3585" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Community</a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setShowSelector(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-text-muted hover:text-text-primary hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
              aria-label="Change theme"
            >
              <span>{currentTheme.emoji}</span>
              <span className="hidden sm:inline font-mono uppercase tracking-wider">{currentTheme.name}</span>
            </button>

            {/* Join CTA */}
            <a
              href="https://www.skool.com/ai-laugh-lab-3585"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-bg-dark hover:brightness-110 transition-all"
            >
              Join Free
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
