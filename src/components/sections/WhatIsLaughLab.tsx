'use client'

import { Beaker, Users, Zap } from 'lucide-react'
import { ScrollReveal, WordReveal } from '@/components/effects/ScrollReveal'
import { Marquee } from '@/components/effects/Marquee'

const features = [
  {
    icon: Beaker,
    title: 'Experiment Daily',
    description: 'New AI comedy techniques drop every week. Image generation, video creation, meme engineering.',
    stat: '50+',
    statLabel: 'experiments shipped',
  },
  {
    icon: Users,
    title: 'Community-Powered',
    description: '500+ creators sharing what works, what flops, and why. Learn faster together.',
    stat: '500+',
    statLabel: 'active members',
  },
  {
    icon: Zap,
    title: 'Actually Funny',
    description: 'Most AI content is cringe. We figured out the formula. Real comedy, AI tools.',
    stat: '10M+',
    statLabel: 'views generated',
  },
]

export function WhatIsLaughLab() {
  return (
    <section className="py-24 sm:py-32 relative">
      {/* Marquee strip */}
      <div className="border-y border-white/5 py-4 mb-24 -rotate-1">
        <Marquee
          items={['AI COMEDY', 'MEMES', 'VIDEOS', 'PROMPTS', 'IMAGE GEN', 'CHATBOTS', 'ROAST BATTLES', 'VIRAL CONTENT']}
          className="text-xl sm:text-2xl font-bold tracking-[0.1em] text-accent/30"
          speed={25}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Big statement - word reveal */}
        <div className="mb-20">
          <span className="inline-block mb-4 text-xs font-mono uppercase tracking-[0.2em] text-accent/60">
            What is this place?
          </span>
          <WordReveal
            text="We're the community where creators learn to make AI content that's actually funny. Not corporate funny. Not cringe funny. Actually, genuinely, make-people-snort-their-coffee funny."
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight"
          />
        </div>

        {/* Feature cards - asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {features.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              className={`
                ${i === 0 ? 'md:col-span-7' : i === 1 ? 'md:col-span-5' : 'md:col-span-12'}
                group
              `}
            >
              <div className="h-full rounded-3xl p-8 lg:p-10 bg-bg-card border border-white/5 hover:border-accent/20 transition-all duration-500 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-accent" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {feature.stat}
                      </div>
                      <div className="text-xs text-text-muted uppercase tracking-wider">{feature.statLabel}</div>
                    </div>
                  </div>
                  <h3
                    className="text-2xl font-bold text-text-primary mb-3"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Reverse marquee */}
      <div className="border-y border-white/5 py-4 mt-24 rotate-1">
        <Marquee
          items={['LEARN', 'CREATE', 'SHARE', 'LAUGH', 'REPEAT', 'ITERATE', 'EXPERIMENT', 'SHIP']}
          className="text-xl sm:text-2xl font-bold tracking-[0.1em] text-accent-secondary/20"
          speed={20}
          reverse
        />
      </div>
    </section>
  )
}
