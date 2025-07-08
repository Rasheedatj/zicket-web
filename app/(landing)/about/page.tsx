import React from 'react'
import HeroSection from '@/app/components/About/HeroSection'
import WhatIsZicket from '@/app/components/About/WhatIsZicket'
import WhyZicket from '@/app/components/About/WhyZicket'

function page() {
  return (
    <div className="bg-white dark:bg-[#0D0D0D] min-h-screen">
      <HeroSection />
      <WhatIsZicket />
      <WhyZicket />
    </div>
  )
}

export default page