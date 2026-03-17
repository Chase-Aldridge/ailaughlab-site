import { Hero } from '@/components/sections/Hero'
import { PanoramicScene } from '@/components/sections/PanoramicScene'
import { WhatIsLaughLab } from '@/components/sections/WhatIsLaughLab'
import { ExperimentBoard } from '@/components/sections/ExperimentBoard'
import { CommunityHighlights } from '@/components/sections/CommunityHighlights'
import { JoinCTA } from '@/components/sections/JoinCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <PanoramicScene />
      <WhatIsLaughLab />
      <ExperimentBoard />
      <CommunityHighlights />
      <JoinCTA />
    </>
  )
}
