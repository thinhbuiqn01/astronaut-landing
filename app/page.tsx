import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProfileSection from '@/components/ProfileSection'
import ProjectsSection from '@/components/ProjectsSection'
import Testimonials from '@/components/Testimonials'
// import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ExperiencesSection from '@/components/ExperiencesSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProfileSection />
      <ExperiencesSection />
      <ProjectsSection />
      <Testimonials />
      {/* <Pricing /> */}
      <CTA />
      <Footer />
    </main>
  )
}
