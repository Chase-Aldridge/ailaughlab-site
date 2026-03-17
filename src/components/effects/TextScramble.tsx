'use client'

import { useEffect, useState, useCallback } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
  trigger?: boolean
}

export function TextScramble({ text, className, speed = 50, trigger = true }: TextScrambleProps) {
  const [display, setDisplay] = useState(text)

  const scramble = useCallback(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' '
            if (idx < iteration) return text[idx]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
      iteration += 1 / 3
      if (iteration >= text.length) {
        clearInterval(interval)
        setDisplay(text)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  useEffect(() => {
    if (trigger) {
      const cleanup = scramble()
      return cleanup
    }
  }, [trigger, scramble])

  return <span className={className}>{display}</span>
}
