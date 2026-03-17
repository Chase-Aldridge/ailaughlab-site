'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { GlowButton } from '@/components/ui/GlowButton'
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/components/theme/ThemeProvider'
import { themeCopy } from '@/data/theme-copy'
import { FloatingParticles } from '@/components/effects/FloatingParticles'

export function Hero() {
  const { theme } = useTheme()
  const copy = themeCopy[theme]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Floating particles */}
      <FloatingParticles />

      <Container className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Headline with letter reveal */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              <span className="text-text-primary">{copy.heroHeadline} </span>
              <span className="text-accent text-glow">{copy.heroHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto"
            >
              {copy.heroSubheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <GlowButton href="https://www.skool.com/ai-laugh-lab-3585" size="xl">
                {copy.ctaButton}
              </GlowButton>
              <Button href="#experiments" variant="ghost" size="lg">
                See What We Do
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-sm text-text-muted"
            >
              Free community. 500+ members. Weekly experiments.
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
