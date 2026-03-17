'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { LabBadge } from '@/components/ui/LabBadge'
import { useTheme } from '@/components/theme/ThemeProvider'
import { themes } from '@/components/theme/theme-config'

export function Header() {
  const { theme, setShowSelector } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const currentTheme = themes[theme]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span
              className="text-xl font-bold text-accent"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              AI Laugh Lab
            </span>
          </a>

          {/* Center - Lab Status */}
          <div className="hidden sm:block">
            <LabBadge variant="success">Lab Status: Active</LabBadge>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setShowSelector(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
              aria-label="Change theme"
            >
              <span>{currentTheme.emoji}</span>
              <span className="hidden sm:inline">{currentTheme.name}</span>
            </button>

            {/* Join CTA */}
            <a
              href="https://www.skool.com/ai-laugh-lab-3585"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-accent text-bg-dark hover:brightness-110 transition-all"
            >
              Join Free
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}
