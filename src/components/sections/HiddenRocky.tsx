'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HiddenRockyProps {
  position: 'left' | 'right'
  className?: string
}

export function HiddenRocky({ position, className }: HiddenRockyProps) {
  const [found, setFound] = useState(false)

  return (
    <div
      className={`absolute ${position === 'left' ? 'left-2' : 'right-2'} bottom-2 w-8 h-8 cursor-pointer z-30 ${className}`}
      onClick={() => setFound(true)}
    >
      {/* Tiny hint - subtle peek */}
      {!found && (
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-full h-full rounded-full bg-accent/10 flex items-center justify-center text-xs"
          title="Something is hiding here..."
        >
          ?
        </motion.div>
      )}

      <AnimatePresence>
        {found && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', damping: 10 }}
            className="w-12 h-12 -mt-4 text-2xl flex items-center justify-center"
          >
            🦝
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
