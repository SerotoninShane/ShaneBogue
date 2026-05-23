"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./logo"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side - Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button 
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4">
            <Link href="#" className="text-foreground" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#about" className="text-muted-foreground" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#portfolio" className="text-muted-foreground" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link href="#experience" className="text-muted-foreground" onClick={() => setIsMenuOpen(false)}>Experience</Link>
            <Link href="#contact" className="text-muted-foreground" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
