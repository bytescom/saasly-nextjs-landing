"use client"

import { motion } from "framer-motion"
import { Zap, BarChart, Users, Shield, Layers, Star, ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FeaturesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  }

  const features = [
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and workflows to save time and reduce errors. Set up triggers and actions that work seamlessly together.",
      icon: <Zap className="size-6" />,
      color: "from-yellow-500/20 to-orange-500/20",
      iconBg: "bg-yellow-500/10 dark:bg-yellow-500/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      features: ["Workflow Builder", "Custom Triggers", "API Integration"]
    },
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights with real-time data visualization and comprehensive reporting tools that help you make informed decisions.",
      icon: <BarChart className="size-6" />,
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      features: ["Real-time Dashboards", "Custom Reports", "Data Export"]
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with integrated communication tools, shared workspaces, and real-time collaboration features.",
      icon: <Users className="size-6" />,
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10 dark:bg-green-500/20",
      iconColor: "text-green-600 dark:text-green-400",
      features: ["Shared Workspaces", "Real-time Chat", "File Sharing"]
    },
    {
      title: "Enterprise Security",
      description: "Keep your data safe with end-to-end encryption, compliance features, and advanced security monitoring.",
      icon: <Shield className="size-6" />,
      color: "from-red-500/20 to-pink-500/20",
      iconBg: "bg-red-500/10 dark:bg-red-500/20",
      iconColor: "text-red-600 dark:text-red-400",
      features: ["End-to-end Encryption", "GDPR Compliance", "Security Audits"]
    },
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools through our extensive API ecosystem and pre-built integrations.",
      icon: <Layers className="size-6" />,
      color: "from-purple-500/20 to-indigo-500/20",
      iconBg: "bg-purple-500/10 dark:bg-purple-500/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      features: ["200+ Integrations", "REST API", "Webhooks"]
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team, comprehensive documentation, and community forum.",
      icon: <Star className="size-6" />,
      color: "from-amber-500/20 to-yellow-500/20",
      iconBg: "bg-amber-500/10 dark:bg-amber-500/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      features: ["Live Chat Support", "Knowledge Base", "Video Tutorials"]
    },
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge className="rounded-full px-6 py-2 text-sm font-medium shadow-sm border-border/50" variant="secondary">
              ✨ Features
            </Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              Everything You Need
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              to Succeed
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl text-muted-foreground md:text-lg lg:text-xl leading-relaxed"
          >
            Our comprehensive platform provides all the tools you need to streamline your workflow, boost
            productivity, and achieve your goals with confidence.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item} className="group">
              <Card className="h-full overflow-hidden border border-border/50 bg-gradient-to-b from-background/80 to-muted/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 hover:border-border hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-8 flex flex-col h-full relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${feature.color} rounded-lg`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`size-14 rounded-2xl ${feature.iconBg} flex items-center justify-center ${feature.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {feature.description}
                    </p>

                    {/* Feature List */}
                    <div className="space-y-2 mb-6">
                      {feature.features.map((item, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="size-1.5 rounded-full bg-primary/60 mr-3" />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Learn more
                      <ArrowRight className="ml-1 size-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to experience all these powerful features?
          </p>
          <Button size="lg" className="rounded-full h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Get Started Today
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  )
}