'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '@/components/theme/ThemeProvider'
import { themeCopy } from '@/data/theme-copy'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { TextScramble } from '@/components/effects/TextScramble'

export function JoinCTA() {
  const { theme } = useTheme()
  const copy = themeCopy[theme]
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={ref} className="py-24 sm:py-32 px-4 sm:px-6">
      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden"
      >
        {/* Multi-layer background */}
        <div className="absolute inset-0 bg-bg-card" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--theme-accent) 15%, transparent), transparent),
              radial-gradient(ellipse 40% 40% at 80% 100%, color-mix(in srgb, var(--theme-accent-secondary) 10%, transparent), transparent)
            `,
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Border */}
        <div className="absolute inset-0 rounded-[2rem] border border-accent/10" />

        <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.2em] border border-accent/20 text-accent/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open Enrollment
            </span>
          </div>

          {/* Massive CTA headline */}
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            <TextScramble text={copy.ctaHeadline} speed={35} />
          </h2>

          <p className="text-lg text-text-secondary mb-10 max-w-lg mx-auto">
            {copy.ctaSubtext}
          </p>

          {/* Big magnetic button */}
          <MagneticButton
            href="https://www.skool.com/ai-laugh-lab-3585"
            className="group relative inline-flex items-center gap-3 px-12 py-6 rounded-2xl text-xl font-bold bg-accent text-bg-dark glow-accent-strong overflow-hidden"
          >
            <span className="relative z-10">{copy.ctaButton}</span>
            <span className="relative z-10 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </MagneticButton>

          {/* Trust line */}
          <div className="mt-10 flex items-center justify-center gap-6 text-xs font-mono uppercase tracking-[0.15em] text-text-muted">
            <span>Free Forever</span>
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span>No Credit Card</span>
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span>500+ Members</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
