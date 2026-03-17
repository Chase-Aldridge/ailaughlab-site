'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center"
        >
          <span className="text-8xl block mb-6">💥</span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-text-primary mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Experiment Failed
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            This page doesn't exist. The experiment must have gone wrong. Let's get you back to the lab.
          </p>
          <Button href="/" size="lg">
            Return to the Lab
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
