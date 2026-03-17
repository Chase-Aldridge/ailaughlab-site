'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Beaker, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: Beaker,
    title: 'Experiment Daily',
    description: 'New AI comedy techniques drop every week. Image generation, video creation, meme engineering. Try them all.',
  },
  {
    icon: Users,
    title: 'Community-Powered',
    description: '500+ creators sharing what works, what flops, and why. Learn faster together than alone.',
  },
  {
    icon: Zap,
    title: 'Actually Funny',
    description: 'Most AI content is cringe. We figured out the formula. Real comedy principles applied to AI tools.',
  },
]

export function WhatIsLaughLab() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="What Is This Place?"
          title="AI + Comedy = Magic"
          subtitle="AI Laugh Lab is where creators learn to make AI content that's actually funny. Not corporate funny. Actually funny."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="rounded-2xl p-6 lg:p-8 bg-bg-card border border-white/10 hover:border-accent/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3
                className="text-xl font-bold text-text-primary mb-3"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {feature.title}
              </h3>
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
