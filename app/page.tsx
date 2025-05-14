import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { OverviewSection } from "@/components/sections/overview-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { CasesSection } from "@/components/sections/cases-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <OverviewSection />
      <FeaturesSection />
      <BenefitsSection />
      <CasesSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
