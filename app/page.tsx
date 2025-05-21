"use client"

import { useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { OverviewSection } from "@/components/sections/overview-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DemoSection } from "@/components/sections/demo-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { CasesSection } from "@/components/sections/cases-section"
import VideoGuideSection from "@/components/sections/video-guide-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  useEffect(() => {
    // 페이지 로드 시 항상 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      <OverviewSection />
      <FeaturesSection />
      <DemoSection />
      <BenefitsSection />
      <CasesSection />
      <VideoGuideSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
