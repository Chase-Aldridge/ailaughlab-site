'use client'

import { useTheme } from '@/components/theme/ThemeProvider'
import { panoramaImages } from '@/data/panorama-images'
import '@/styles/panorama.css'

export function PanoramicScene() {
  const { theme } = useTheme()
  const images = panoramaImages[theme]

  return (
    <section className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden panorama-container">
      {/* Gradient overlays for seamless edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--theme-bg-dark)] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[var(--theme-bg-dark)] to-transparent" />

      {/* Background layer - slowest (120s) */}
      <div className="absolute inset-0 panorama-layer panorama-layer--bg">
        {images.bg ? (
          <>
            <img src={images.bg} alt="" className="h-full w-auto object-cover" aria-hidden="true" />
            <img src={images.bg} alt="" className="h-full w-auto object-cover" aria-hidden="true" />
          </>
        ) : (
          <>
            <div className="h-full w-[200vw] bg-gradient-to-r from-accent/5 via-accent-secondary/5 to-accent/5" />
            <div className="h-full w-[200vw] bg-gradient-to-r from-accent/5 via-accent-secondary/5 to-accent/5" />
          </>
        )}
      </div>

      {/* Mid-ground layer (90s) */}
      <div className="absolute inset-0 panorama-layer panorama-layer--mid">
        {images.mid ? (
          <>
            <img src={images.mid} alt="" className="h-full w-auto object-cover" aria-hidden="true" />
            <img src={images.mid} alt="" className="h-full w-auto object-cover" aria-hidden="true" />
          </>
        ) : (
          <>
            <div className="h-full w-[200vw] bg-gradient-to-r from-transparent via-accent/8 to-transparent" />
            <div className="h-full w-[200vw] bg-gradient-to-r from-transparent via-accent/8 to-transparent" />
          </>
        )}
      </div>

      {/* Foreground layer - fastest (60s) */}
      <div className="absolute inset-0 panorama-layer panorama-layer--fg">
        {images.fg ? (
          <>
            <img src={images.fg} alt="" className="h-full w-auto object-cover" aria-hidden="true" />
            <img src={images.fg} alt="" className="h-full w-auto object-cover" aria-hidden="true" />
          </>
        ) : (
          <>
            <div className="h-full w-[200vw] bg-gradient-to-r from-transparent via-accent-secondary/10 to-transparent" />
            <div className="h-full w-[200vw] bg-gradient-to-r from-transparent via-accent-secondary/10 to-transparent" />
          </>
        )}
      </div>
    </section>
  )
}
