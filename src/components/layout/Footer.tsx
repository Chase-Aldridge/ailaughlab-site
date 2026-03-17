'use client'

import { Container } from '@/components/ui/Container'
import { useTheme } from '@/components/theme/ThemeProvider'
import { themes } from '@/components/theme/theme-config'

export function Footer() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <footer className="border-t border-white/5 py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="text-lg font-bold text-accent"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              AI Laugh Lab
            </span>
            <span className="text-text-muted">|</span>
            <span className="text-sm text-text-muted">{currentTheme.emoji} {currentTheme.name} Mode</span>
          </div>
          <p className="text-sm text-text-muted">
            Where AI meets comedy. No robots were harmed in the making of this lab.
          </p>
        </div>
      </Container>
    </footer>
  )
}
