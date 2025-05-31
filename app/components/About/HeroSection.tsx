import { Padlock } from '@/public/svg/svg'
import React from 'react'

function HeroSection() {
    return (
        <div className='py-12 lg:pt-30 lg:pb-20 px-8 md:px-12 lg:px-30 flex flex-col items-center justify-center'>
            <h1 className="text-[#1E1E1E] justify-center text-2xl sm:text-5xl lg:text-7xl font-bold inline-flex flex-wrap leading-tight">
                <span className="bg-[#6917AF] text-white inline-flex items-center skew-y-[-1deg] px-3 py-1">
                    <span className="skew-y-[1deg] inline-flex items-center">
                        Priv<Padlock />te Events.
                    </span>
                </span>
                <span>Real</span>
                <span>Communities. Zero Noise.</span>
            </h1>
            <p className='mt-3 font-medium text-[#1E1E1E]'>Host, mint, and attend events without revealing your identity. Zicket is the privacy-native event platform built on Aztec Network.</p>

        </div>
    )
}

export default HeroSection
