'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { highlights } from '@/data/highlights'

export function CommunityHighlights() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Horizontal scroll driven by vertical scroll
  const x = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '-40%'])

  return (
    <section ref={containerRef} className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-block mb-3 text-xs font-mono uppercase tracking-[0.2em] text-accent/60">
                Lab Reports
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                What&apos;s happening
                <br />
                <span className="text-accent">inside</span>
              </h2>
            </div>
            <p className="text-text-secondary max-w-sm text-sm sm:text-base">
              A peek at what the community is building, sharing, and laughing about right now.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll carousel driven by page scroll */}
      <motion.div style={{ x }} className="flex gap-4 pl-4 sm:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-[320px] sm:w-[380px] group"
          >
            <div className="h-full rounded-3xl p-6 sm:p-8 bg-bg-card border border-white/5 hover:border-accent/20 transition-all duration-300 relative overflow-hidden">
              {/* Number badge */}
              <span
                className="absolute top-4 right-4 text-[6rem] font-black leading-none text-white/[0.02] group-hover:text-accent/[0.06] transition-colors duration-500 select-none"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                <span className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.15em] bg-accent/10 text-accent border border-accent/20">
                  {h.category}
                </span>
                <h3
                  className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {h.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{h.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
