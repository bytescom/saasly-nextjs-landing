"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "SaaSify has transformed how we manage our projects. The automation features have saved us countless hours of manual work.",
    author: "Sarah Johnson",
    role: "Project Manager, TechCorp",
    rating: 5,
    color: "from-blue-500 to-blue-600"
  },
  {
    quote: "The analytics dashboard provides insights we never had access to before. It's helped us make data-driven decisions that have improved our ROI.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthLabs",
    rating: 5,
    color: "from-purple-500 to-purple-600"
  },
  {
    quote: "Customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it. Couldn't ask for better service.",
    author: "Emily Rodriguez",
    role: "Operations Lead, StartupX",
    rating: 5,
    color: "from-green-500 to-green-600"
  },
  {
    quote: "We've tried several similar solutions, but none compare to the ease of use and comprehensive features of SaaSify. It's been a game-changer.",
    author: "David Kim",
    role: "CEO, InnovateNow",
    rating: 5,
    color: "from-orange-500 to-orange-600"
  },
  {
    quote: "The collaboration tools have made remote work so much easier for our team. We're more productive than ever despite being spread across different time zones.",
    author: "Lisa Patel",
    role: "HR Director, RemoteFirst",
    rating: 5,
    color: "from-pink-500 to-pink-600"
  },
  {
    quote: "Implementation was seamless, and the ROI was almost immediate. We've reduced our operational costs by 30% since switching to SaaSify.",
    author: "James Wilson",
    role: "COO, ScaleUp Inc",
    rating: 5,
    color: "from-indigo-500 to-indigo-600"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-black relative overflow-hidden text-white">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            💬 Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Teams Worldwide
            </span>
          </h2>
          <p className="max-w-[800px] text-muted text-white/70 md:text-lg">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group"
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-zinc-900 to-zinc-800 backdrop-blur transition-all hover:shadow-md hover:border-border group-hover:scale-[1.02] relative">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Quote className="h-8 w-8 text-white/30" />
                  </div>

                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1 + j * 0.05, type: "spring" }}
                        >
                          <Star className="size-4 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                  </div>

                  <p className="text-lg mb-6 flex-grow relative z-10 group-hover:text-white/90 transition-colors">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                    <div className={`size-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-medium text-sm shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-white/50">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  )
}