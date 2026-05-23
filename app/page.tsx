import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MarqueeSection from "@/components/marquee-section"
import PortfolioSection from "@/components/portfolio-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <PortfolioSection />
      <Footer />
    </main>
  )
}
