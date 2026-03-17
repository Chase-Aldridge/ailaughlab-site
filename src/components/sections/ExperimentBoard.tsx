'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { experiments } from '@/data/experiments'

const gridSpans = [
  'md:col-span-8 md:row-span-2',  // Image Gen Lab - large
  'md:col-span-4',                 // Video Studio - small
  'md:col-span-4',                 // Meme Factory - small
  'md:col-span-6',                 // Chatbot Club - medium
  'md:col-span-6',                 // Roast Arena - medium
  'md:col-span-12',                // Archive - full width, short
]

export function ExperimentBoard() {
  return (
    <section id="experiments" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header - left aligned, not centered */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block mb-3 text-xs font-mono uppercase tracking-[0.2em] text-accent/60">
                The Experiment Board
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                What&apos;s cooking
                <br />
                <span className="text-accent">in the lab</span>
              </h2>
            </div>
            <p className="text-text-secondary max-w-sm text-sm sm:text-base">
              Each section is a different experiment. Every week brings something new to try.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          {experiments.map((exp, i) => (
            <ScrollReveal key={exp.title} className={`${gridSpans[i] || 'md:col-span-4'}`}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`
                  group relative h-full rounded-3xl p-6 sm:p-8 overflow-hidden cursor-pointer
                  bg-bg-card border border-white/5 hover:border-accent/20
                  transition-colors duration-300
                  ${i === 0 ? 'min-h-[280px] sm:min-h-[360px]' : i === 5 ? 'min-h-[120px]' : 'min-h-[200px]'}
                `}
              >
                {/* Background emoji - large and faded */}
                <span
                  className="absolute -right-4 -bottom-4 text-[8rem] opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 select-none"
                  aria-hidden="true"
                >
                  {exp.emoji}
                </span>

                {/* Hover gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{exp.emoji}</span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted px-2 py-0.5 rounded-full border border-white/10">
                        {i === 0 ? 'Most Popular' : i === 4 ? 'New' : `Lab ${i + 1}`}
                      </span>
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {exp.title}
                    </h3>
                    {i !== 5 && (
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-text-muted group-hover:text-accent transition-colors">
                    <span>Explore</span>
                    <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
