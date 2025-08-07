"use client"

import { useState, useEffect } from "react"
import { useScroll } from "framer-motion"
import { useTheme } from "next-themes"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeatureSection"
import Footer from "@/components/Footer"
import HowSection from "@/components/HowSection"
import CtaSection from "@/components/CtaSection"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import FaqsSection from "@/components/FaqsSection"
import TrustLogos from "@/components/TrustLogos"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrollDirection, setScrollDirection] = useState(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    let lastScrollY = 0

    const updateScrollDirection = () => {
      const currentScrollY = scrollY.get()
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up")
      }
      lastScrollY = currentScrollY
    }

    const unsubscribe = scrollY.on("change", updateScrollDirection)
    return () => unsubscribe()
  }, [scrollY])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        <TrustLogos/>

        <FeaturesSection />

        <HowSection />

        <Testimonials />

        <Pricing />

        <FaqsSection />
        
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
