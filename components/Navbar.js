"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ]

  const handleMobileNavClick = (href) => {
    setMobileMenuOpen(false)
    
    // Smooth scroll to section
    if (href.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    }
  }

  const handleDesktopNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.offsetTop - 80 // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-background/60 backdrop-blur-lg shadow-sm border-b border-border/50" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity z-50"
          >
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-sm font-bold shadow-sm">
              S
            </div>
            <span className="text-lg font-semibold">SaaSly</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleDesktopNavClick(e, item.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="rounded-full hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <Sun className="size-4 transition-transform duration-300" />
                  ) : (
                    <Moon className="size-4 transition-transform duration-300" />
                  )}
                </>
              )}
            </Button>
            
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground px-3 py-2 rounded-md hover:bg-muted/50"
            >
              Log in
            </Link>
            
            <Button className="rounded-full shadow-sm hover:shadow-md transition-all duration-200" asChild>
              <Link href="/signup">
                Get Started
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="rounded-full hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <Sun className="size-4 transition-transform duration-300" />
                  ) : (
                    <Moon className="size-4 transition-transform duration-300" />
                  )}
                </>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full hover:bg-muted/80 transition-colors z-50 relative"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <X className="size-5" />
                  ) : (
                    <Menu className="size-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/98 backdrop-blur-xl border-l border-border/50 shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-6 px-6">
              {/* Navigation Links */}
              <nav className="flex-1">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.1,
                        duration: 0.3
                      }}
                    >
                      <Link
                        href={item.href}
                        className="block py-4 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 border border-transparent hover:border-border/50"
                        onClick={() => handleMobileNavClick(item.href)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
              
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="space-y-4 pt-6 border-t border-border/50"
              >
                <Link
                  href="/login"
                  className="block py-3 px-4 text-base font-medium text-center text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 border border-transparent hover:border-border/50"
                  onClick={() => handleMobileNavClick("/login")}
                >
                  Log in
                </Link>
                
                <Button 
                  className="w-full rounded-lg h-12 shadow-sm hover:shadow-md transition-all duration-200" 
                  asChild
                >
                  <Link href="/signup" onClick={() => handleMobileNavClick("/signup")}>
                    Get Started
                    <ChevronRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}