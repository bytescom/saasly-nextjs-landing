"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, UserPlus, Settings, TrendingUp } from 'lucide-react'

const steps = [
  {
    step: "01",
    title: "Create Account",
    description: "Sign up in seconds with just your email. No credit card required to get started.",
    icon: <UserPlus className="h-6 w-6" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "02", 
    title: "Configure Workspace",
    description: "Customize your workspace to match your team's unique workflow and requirements.",
    icon: <Settings className="h-6 w-6" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "03",
    title: "Boost Productivity", 
    description: "Start using our powerful features to streamline processes and achieve your goals.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-green-500 to-green-600"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
}

export default function HowSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
            📚 How It Works
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Simple Process,{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Get started in minutes and see the difference our platform can make for your business.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Connection Line - Desktop Only */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative"
              >
                <div className="relative flex flex-col items-center text-center space-y-4 h-full">
                  {/* Step Number & Icon */}
                  <div className="relative">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      {step.icon}
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-border text-xs font-bold text-muted-foreground">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Arrow Between Steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.div 
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20 shadow-sm"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(ellipse 80% 50% at 50% 50%, transparent 40%, hsl(var(--background)) 100%);
        }
      `}</style>
    </section>
  )
}