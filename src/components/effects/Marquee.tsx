'use client'

interface MarqueeProps {
  items: string[]
  speed?: number
  separator?: string
  className?: string
  reverse?: boolean
}

export function Marquee({ items, speed = 30, separator = ' \u2022 ', className, reverse = false }: MarqueeProps) {
  const text = items.join(separator) + separator
  const duration = `${speed}s`

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex"
        style={{
          animation: `marquee-${reverse ? 'reverse' : 'forward'} ${duration} linear infinite`,
        }}
      >
        <span className="inline-block pr-4">{text}</span>
        <span className="inline-block pr-4">{text}</span>
        <span className="inline-block pr-4">{text}</span>
      </div>
      <style>{`
        @keyframes marquee-forward {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
