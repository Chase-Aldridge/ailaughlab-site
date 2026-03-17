'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="pointer-events-none fixed z-50 w-64 h-64 rounded-full opacity-10 blur-3xl transition-transform duration-75"
      style={{
        background: 'var(--theme-accent)',
        transform: `translate(${pos.x - 128}px, ${pos.y - 128}px)`,
      }}
      aria-hidden="true"
    />
  )
}
