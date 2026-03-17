import { Hero } from '@/components/sections/Hero'
import { PanoramicScene } from '@/components/sections/PanoramicScene'
import { WhatIsLaughLab } from '@/components/sections/WhatIsLaughLab'
import { ExperimentBoard } from '@/components/sections/ExperimentBoard'
import { CommunityHighlights } from '@/components/sections/CommunityHighlights'
import { JoinCTA } from '@/components/sections/JoinCTA'
import { HiddenRocky } from '@/components/sections/HiddenRocky'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        <PanoramicScene />
        <HiddenRocky position="right" />
      </div>
      <WhatIsLaughLab />
      <div className="relative">
        <ExperimentBoard />
        <HiddenRocky position="left" />
      </div>
      <CommunityHighlights />
      <div className="relative">
        <JoinCTA />
        <HiddenRocky position="right" className="bottom-8" />
      </div>
    </>
  )
}
