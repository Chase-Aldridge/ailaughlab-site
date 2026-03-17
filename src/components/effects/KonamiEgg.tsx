'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export function KonamiEgg() {
  const [progress, setProgress] = useState(0)
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[progress]) {
        const next = progress + 1
        if (next === KONAMI.length) {
          setActivated(true)
          setProgress(0)
          setTimeout(() => setActivated(false), 3000)
        } else {
          setProgress(next)
        }
      } else {
        setProgress(0)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [progress])

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
        >
          <div className="text-center">
            <span className="text-8xl block mb-4">🦝</span>
            <p className="text-2xl font-bold text-accent text-glow" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Rocky says hi!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
