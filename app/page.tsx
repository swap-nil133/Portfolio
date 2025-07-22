"use client"

import { useEffect } from "react"
import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import WorkSection from "./components/WorkSection"
import ContactSection from "./components/ContactSection"
import BackgroundEffects from "./components/BackgroundEffects"
import ScrollToTop from "./components/ScrollToTop"

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
      </main>

      <ScrollToTop />
    </div>
  )
}
