'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { themes, themeIds, type ThemeId } from './theme-config'

const themePreviewColors: Record<ThemeId, { bg: string; accent: string; secondary: string }> = {
  'ai-lab': { bg: '#0A0E17', accent: '#00E5A0', secondary: '#00D4FF' },
  'wild-west': { bg: '#1A0F0A', accent: '#D4A574', secondary: '#C87533' },
  'space-station': { bg: '#0B0D1A', accent: '#A855F7', secondary: '#3B82F6' },
  'retro-arcade': { bg: '#1A0A2E', accent: '#FF6EC7', secondary: '#FFFF00' },
}

export function ThemeSelector() {
  const { showSelector, setTheme } = useTheme()

  return (
    <AnimatePresence>
      {showSelector && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-3xl"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-3"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Choose Your Lab Experience
            </h2>
            <p className="text-center text-text-secondary mb-8">
              Pick a vibe. You can switch anytime.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {themeIds.map((id) => {
                const t = themes[id]
                const colors = themePreviewColors[id]
                return (
                  <motion.button
                    key={id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setTheme(id)}
                    className="relative rounded-2xl p-6 text-left transition-shadow hover:shadow-2xl cursor-pointer border border-white/10"
                    style={{ backgroundColor: colors.bg }}
                  >
                    {/* Color accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{
                        background: `linear-gradient(90deg, ${colors.accent}, ${colors.secondary})`,
                      }}
                    />
                    <span className="text-3xl mb-3 block">{t.emoji}</span>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: colors.accent, fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {t.name}
                    </h3>
                    <p className="text-sm text-white/60">{t.description}</p>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
