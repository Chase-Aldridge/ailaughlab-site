'use client'

import '@/styles/panorama.css'

export function PanoramicScene() {
  return (
    <section className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden panorama-container">
      {/* Gradient overlays for seamless edges */}
      <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-bg-dark to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-bg-dark to-transparent" />

      {/* Background layer - slowest */}
      <div className="absolute inset-0 panorama-layer panorama-layer--bg opacity-40">
        <div className="h-full w-full bg-gradient-to-r from-accent/5 via-accent-secondary/5 to-accent/5" />
        <div className="h-full w-full bg-gradient-to-r from-accent/5 via-accent-secondary/5 to-accent/5" />
      </div>

      {/* Mid layer */}
      <div className="absolute inset-0 panorama-layer panorama-layer--mid opacity-20">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
        <div className="h-full w-full bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      </div>

      {/* Foreground layer - fastest */}
      <div className="absolute inset-0 panorama-layer panorama-layer--fg opacity-10">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-accent-secondary/15 to-transparent" />
        <div className="h-full w-full bg-gradient-to-r from-transparent via-accent-secondary/15 to-transparent" />
      </div>

      {/* Center text overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <p className="text-sm text-text-muted italic">
          Panoramic scene art coming soon
        </p>
      </div>
    </section>
  )
}
