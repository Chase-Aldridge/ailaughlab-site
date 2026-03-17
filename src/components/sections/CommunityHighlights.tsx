'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HighlightCard } from '@/components/ui/HighlightCard'
import { highlights } from '@/data/highlights'

export function CommunityHighlights() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="Lab Reports"
          title="What's Happening Inside"
          subtitle="A peek at what the community is building, sharing, and laughing about."
        />
      </Container>

      {/* Horizontal scroll carousel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-8 pb-4 snap-x snap-mandatory" style={{ minWidth: 'min-content' }}>
          {highlights.map((h, i) => (
            <HighlightCard
              key={h.title}
              title={h.title}
              description={h.description}
              category={h.category}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
