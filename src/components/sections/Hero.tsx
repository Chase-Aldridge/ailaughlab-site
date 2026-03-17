'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useTheme } from '@/components/theme/ThemeProvider'
import { themeCopy } from '@/data/theme-copy'
import { TextScramble } from '@/components/effects/TextScramble'
import { MagneticButton } from '@/components/effects/MagneticButton'

export function Hero() {
  const { theme } = useTheme()
  const copy = themeCopy[theme]
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Mouse parallax for floating elements
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const parallax1X = useTransform(smoothX, [-500, 500], [-30, 30])
  const parallax1Y = useTransform(smoothY, [-500, 500], [-20, 20])
  const parallax2X = useTransform(smoothX, [-500, 500], [20, -20])
  const parallax2Y = useTransform(smoothY, [-500, 500], [15, -15])
  const parallax3X = useTransform(smoothX, [-500, 500], [-15, 15])
  const parallax3Y = useTransform(smoothY, [-500, 500], [-25, 25])

  useEffect(() => {
    setMounted(true)
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseX.set(e.clientX - cx)
      mouseY.set(e.clientY - cy)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Radial gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, color-mix(in srgb, var(--theme-accent) 8%, transparent), transparent)`,
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating decorative elements - react to mouse */}
      <motion.div
        style={{ x: parallax1X, y: parallax1Y }}
        className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full border border-accent/20 blur-[1px]"
      />
      <motion.div
        style={{ x: parallax2X, y: parallax2Y }}
        className="absolute top-[25%] right-[15%] w-3 h-3 rounded-full bg-accent/40"
      />
      <motion.div
        style={{ x: parallax3X, y: parallax3Y }}
        className="absolute bottom-[30%] left-[20%] w-6 h-6 rotate-45 border border-accent-secondary/30"
      />
      <motion.div
        style={{ x: parallax1X, y: parallax2Y }}
        className="absolute bottom-[20%] right-[10%] w-16 h-16 rounded-full border border-accent/10"
      />
      <motion.div
        style={{ x: parallax2X, y: parallax3Y }}
        className="absolute top-[60%] left-[5%] w-2 h-2 bg-accent-secondary/30 rounded-full"
      />

      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-[90rem] mx-auto text-center"
        >
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.2em] border border-accent/20 text-accent/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              AI Comedy Community
            </span>
          </motion.div>

          {/* MASSIVE headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
            className="leading-[0.85] tracking-[-0.04em]"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            <span className="block text-[12vw] sm:text-[10vw] lg:text-[8vw] font-bold text-text-primary">
              {copy.heroHeadline}
            </span>
            <span className="block text-[18vw] sm:text-[15vw] lg:text-[12vw] font-black">
              <span className="text-accent text-glow">
                {mounted ? <TextScramble text={copy.heroHighlight} speed={40} /> : copy.heroHighlight}
              </span>
            </span>
          </motion.h1>

          {/* Subtitle - offset for visual interest */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-base sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed"
          >
            {copy.heroSubheadline}
          </motion.p>

          {/* CTA - magnetic button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <MagneticButton
              href="https://www.skool.com/ai-laugh-lab-3585"
              className="group relative px-10 py-5 rounded-2xl text-lg font-bold bg-accent text-bg-dark glow-accent-strong overflow-hidden"
            >
              <span className="relative z-10">{copy.ctaButton}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </MagneticButton>
            <a
              href="#experiments"
              className="px-8 py-4 rounded-2xl text-base font-medium text-text-secondary border border-white/10 hover:border-accent/30 hover:text-accent transition-all duration-300"
            >
              Explore the lab
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">&darr;</span>
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center justify-center gap-8 text-xs font-mono uppercase tracking-[0.15em] text-text-muted"
          >
            <span>100+ Members</span>
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span>Free Forever</span>
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span>Weekly Drops</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
