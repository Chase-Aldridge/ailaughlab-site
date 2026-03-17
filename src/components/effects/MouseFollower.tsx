'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function MouseFollower() {
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 500, damping: 28 })
  const springY = useSpring(y, { stiffness: 500, damping: 28 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [role="button"]'))
    }

    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!visible) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full border border-accent/50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          marginLeft: hovering ? -24 : -16,
          marginTop: hovering ? -24 : -16,
          transition: 'width 0.2s, height 0.2s, margin 0.2s',
        }}
        aria-hidden="true"
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] w-1.5 h-1.5 rounded-full bg-accent mix-blend-difference"
        style={{
          x,
          y,
          marginLeft: -3,
          marginTop: -3,
        }}
        aria-hidden="true"
      />
    </>
  )
}
