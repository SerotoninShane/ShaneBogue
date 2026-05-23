import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="text-lg font-medium text-foreground">Shane Bogue</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Software engineer, entrepreneur, and designer building modern digital experiences and automation systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-foreground font-medium text-sm uppercase tracking-wider">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Home</Link>
              <Link href="#about" className="text-muted-foreground text-sm hover:text-foreground transition-colors">About</Link>
              <Link href="#portfolio" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Portfolio</Link>
              <Link href="#experience" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Experience</Link>
            </nav>
          </div>

          {/* Ventures */}
          <div className="space-y-4">
            <h3 className="text-foreground font-medium text-sm uppercase tracking-wider">Ventures</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">West Valley Web</Link>
              <Link href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Scentalmentals</Link>
              <Link href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Krasiva Projects</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-foreground font-medium text-sm uppercase tracking-wider">Get in Touch</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 bg-secondary border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Shane Bogue. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
