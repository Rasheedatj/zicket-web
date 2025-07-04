import React from 'react'
import HeroSection from '../components/about/HeroSection'
import WhatIsZicket from '../components/about/WhatIsZicket'
import WhyZicket from '../components/about/WhyZicket'
import Header from '../components/Header'
import Footer from '../components/Footer'

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