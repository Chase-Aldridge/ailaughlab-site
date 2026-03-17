'use client'

import { useTheme } from '@/components/theme/ThemeProvider'
import { themes } from '@/components/theme/theme-config'
import { Marquee } from '@/components/effects/Marquee'

export function Footer() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <footer className="border-t border-white/5">
      {/* Bottom marquee */}
      <div className="py-3 border-b border-white/5">
        <Marquee
          items={['AI LAUGH LAB', 'EST. 2026', 'AI COMEDY', 'FREE FOREVER', 'JOIN THE EXPERIMENT']}
          className="text-xs font-mono uppercase tracking-[0.3em] text-text-muted/30"
          speed={35}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="text-sm font-bold text-text-primary"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              AI Laugh Lab
            </span>
            <span className="text-text-muted/30">|</span>
            <span className="text-xs font-mono text-text-muted">{currentTheme.emoji} {currentTheme.name}</span>
          </div>
          <p className="text-xs text-text-muted/50 font-mono">
            No robots were harmed in the making of this lab.
          </p>
        </div>
      </div>
    </footer>
  )
}
