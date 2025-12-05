import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/FeaturesSection'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
