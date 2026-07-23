"use client"
import Link from 'next/link'
import { Shield, FileText, Sparkles } from 'lucide-react'
import { Button } from './ui/Button'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'glass border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">ATS-Shield</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/tailor" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> AI Tailor
          </Link>
          <Link href="/builder" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" /> Resume Builder
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/builder">
            <Button size="sm" className="shadow-lg shadow-primary/20">Create Resume</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
