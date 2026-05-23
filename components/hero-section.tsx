import { ArrowUpRight, Github, Linkedin, Youtube, Twitter, Globe } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] pt-24 pb-12 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto h-full">
        {/* Two Column Layout - Side by Side */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {/* Main Headline with Signature beside it */}
            <div className="flex items-start gap-4">
              <div className="space-y-0">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-light italic text-foreground leading-[0.85] tracking-tight">
                  Shane
                </h1>
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-light italic text-foreground leading-[0.85] tracking-tight">
                  Bogue
                </h1>
              </div>
              
              {/* Signature Script - positioned next to headline */}
              <div className="pt-8 hidden md:block">
                <svg width="100" height="50" viewBox="0 0 100 50" className="text-foreground opacity-70">
                  <path 
                    d="M5 35 Q15 10 25 30 Q35 50 45 20 Q55 0 70 25 Q80 40 95 20" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-1">
              {[
                { label: "gh", href: "https://github.com" },
                { label: "in", href: "https://linkedin.com" },
                { label: "yt", href: "https://youtube.com" },
                { label: "x", href: "https://twitter.com" },
              ].map(({ label, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-8 h-8 bg-foreground text-background text-[10px] font-medium flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-12 md:gap-16 pt-4">
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">+250k</p>
                <p className="text-[10px] md:text-[11px] text-muted-foreground leading-relaxed max-w-[140px]">
                  Videos that reaching a wide audience and give lasting impression
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">+800k</p>
                <p className="text-[10px] md:text-[11px] text-muted-foreground leading-relaxed max-w-[140px]">
                  Hours watched, engaging storytelling that captivates viewers
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Card */}
          <div className="relative flex-shrink-0">
            {/* Globe Icon - Top Right */}
            <div className="absolute -top-4 -right-4 z-10">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background">
                <Globe className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            {/* Main Ginger Orange Card */}
            <div className="w-64 md:w-72 lg:w-80">
              <div className="bg-primary rounded-[2rem] aspect-[3/4] flex flex-col relative overflow-hidden">
                {/* Image Placeholder */}
                <div className="flex-1 p-5 pt-8">
                  <div className="w-full h-full bg-primary-foreground/10 rounded-xl flex items-center justify-center border-2 border-dashed border-primary-foreground/30">
                    <span className="text-primary-foreground/50 text-sm font-medium">Add Your Image</span>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="absolute bottom-4 right-4">
                  <Link 
                    href="#portfolio" 
                    className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <ArrowUpRight className="w-5 h-5 text-background" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
