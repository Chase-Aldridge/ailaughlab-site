'use client'

import { motion } from 'framer-motion'

interface HighlightCardProps {
  title: string
  description: string
  category: string
  index: number
}

export function HighlightCard({ title, description, category, index }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex-shrink-0 w-72 sm:w-80 snap-start"
    >
      <div className="h-full rounded-2xl p-6 bg-bg-card border border-white/10 hover:border-accent/20 transition-colors">
        <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
          {category}
        </span>
        <h3
          className="text-lg font-bold text-text-primary mb-2"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {title}
        </h3>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
    </motion.div>
  )
}
