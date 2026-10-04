import React from "react"
import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { AIDemoPlayground } from "@/components/sections/ai_demo_playground"
import { FeatureGrid } from "@/components/sections/feature_grid"
import { ArchitectureSection } from "@/components/sections/architecture_section"
import { BenchmarksTable } from "@/components/sections/benchmarks_table"
import { PricingSection } from "@/components/sections/pricing_section"
import { FAQSection } from "@/components/sections/faq_section"
import { NewsletterSection } from "@/components/sections/newsletter_section"
import { Footer } from "@/components/sections/footer"
import { SmoothScroll } from "@/components/motion/smooth_scroll"

export default function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSelectPlan = (plan) => {
    scrollToSection("waitlist")
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-bg text-fg1 relative isolate flex flex-col font-sans selection:bg-fg1 selection:text-bg">
        {/* Navigation Header */}
        <Navbar 
          onOpenWaitlist={() => scrollToSection("waitlist")} 
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero 
            onGetStarted={() => scrollToSection("waitlist")}
            onTryPlayground={() => scrollToSection("playground")}
          />

          <AIDemoPlayground />

          <FeatureGrid />

          <ArchitectureSection />

          <BenchmarksTable />

          <PricingSection 
            onSelectPlan={handleSelectPlan}
          />

          <FAQSection />

          <div id="waitlist">
            <NewsletterSection />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  )
}
