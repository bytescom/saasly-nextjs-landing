"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  Heart
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "/integrations" },
        { name: "API Documentation", href: "/api" },
        { name: "Changelog", href: "/changelog" },
        { name: "Status Page", href: "/status" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Blog", href: "/blog" },
        { name: "Community", href: "/community" },
        { name: "Webinars", href: "/webinars" },
        { name: "Templates", href: "/templates" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
        { name: "Investors", href: "/investors" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Security", href: "/security" },
        { name: "Compliance", href: "/compliance" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com", icon: Youtube }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <footer className="w-full border-t border-border/50 bg-gradient-to-b from-background/95 to-muted/20 backdrop-blur-lg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16"
        >
          {/* Top Section */}
          <div className="grid gap-12 lg:grid-cols-12 mb-16">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-lg font-bold shadow-lg">
                  S
                </div>
                <span className="text-2xl font-bold">SaaSly</span>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                Boost productivity, reduce costs, and scale your business with our all-in-one SaaS platform.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  <span>142, 1st Cross, 5th Main Road, Indiranagar, Bangalore - 560038,</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="size-4 text-primary" />
                  <span>+91 123-123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="size-4 text-primary" />
                  <span>hello@saasify.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center size-10 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <social.icon className="size-4" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {footerSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    variants={itemVariants}
                    className="space-y-4"
                  >
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8 mb-12 border border-border/30"
          >
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest updates, feature announcements, and productivity tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full bg-background/50 border-border/50"
                />
                <Button className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Subscribe
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-border/30"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                &copy; {currentYear} SaaSly. Made by
                <Heart className="size-4 text-red-500 fill-red-500" />
                <Link 
                  href="https://github.com/bytescom" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors hover:underline"
                >
                  Bytescom
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/3 to-orange-500/3 rounded-full blur-3xl -z-10" />
    </footer>
  )
}