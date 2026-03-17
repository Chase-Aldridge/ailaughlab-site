'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ExperimentCardProps {
  title: string
  description: string
  backContent: string
  emoji: string
  index: number
}

export function ExperimentCard({ title, description, backContent, emoji, index }: ExperimentCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="perspective-1000 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', damping: 20 }}
        className="relative w-full h-64 sm:h-72"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between bg-bg-card border border-white/10 hover:border-accent/30 transition-colors"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-4xl">{emoji}</span>
          <div>
            <h3
              className="text-xl font-bold text-text-primary mb-2"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {title}
            </h3>
            <p className="text-sm text-text-secondary">{description}</p>
          </div>
          <span className="text-xs text-text-muted">Click to flip</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex items-center justify-center bg-bg-card-hover border border-accent/30"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-text-secondary text-center">{backContent}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
