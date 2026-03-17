'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExperimentCard } from '@/components/ui/ExperimentCard'
import { experiments } from '@/data/experiments'

export function ExperimentBoard() {
  return (
    <section id="experiments" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="The Experiment Board"
          title="What's Cooking in the Lab"
          subtitle="Each section of the community is a different experiment. Tap a card to see what's inside."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <ExperimentCard
              key={exp.title}
              title={exp.title}
              description={exp.description}
              backContent={exp.backContent}
              emoji={exp.emoji}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
