'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { GlowButton } from '@/components/ui/GlowButton'
import { useTheme } from '@/components/theme/ThemeProvider'
import { themeCopy } from '@/data/theme-copy'

export function JoinCTA() {
  const { theme } = useTheme()
  const copy = themeCopy[theme]

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-10 sm:p-16 text-center overflow-hidden bg-bg-card border border-accent/20"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />

          <div className="relative z-10">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {copy.ctaHeadline}
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
              {copy.ctaSubtext}
            </p>
            <GlowButton href="https://www.skool.com/ai-laugh-lab-3585" size="xl">
              {copy.ctaButton}
            </GlowButton>
            <p className="mt-6 text-sm text-text-muted">
              500+ creators already inside. Free forever.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
