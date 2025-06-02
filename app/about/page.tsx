import React from 'react'
import HeroSection from '../components/About/HeroSection'
import WhatIsZicket from '../components/About/WhatIsZicket'
import WhyZicket from '../components/About/WhyZicket'
import Header from '../components/Header'
import Footer from '../components/Footer'

function page() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <HeroSection />
      <WhatIsZicket />
      <WhyZicket />
      <Footer />
    </div>
  )
}

export default page
