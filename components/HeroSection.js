"use client"

import { motion, useScroll } from "framer-motion"
import { ArrowRight, Check } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

export default function HeroSection() {
    const [scrollDirection, setScrollDirection] = useState(null)
    const { scrollY } = useScroll()

    useEffect(() => {
        let lastScrollY = 0

        const updateScrollDirection = () => {
            const currentScrollY = scrollY.get()
            if (currentScrollY > lastScrollY) {
                setScrollDirection("down")
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up")
            }
            lastScrollY = currentScrollY
        }

        const unsubscribe = scrollY.on("change", updateScrollDirection)
        return () => unsubscribe()
    }, [scrollY])

    return (
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            </div>

            <div className="container relative px-4 md:px-6  mx-auto max-w-7xl">
                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Badge className="mb-6 rounded-full px-6 py-2 text-sm font-medium shadow-lg border-border/50" variant="secondary">
                            🚀 Launching Soon
                        </Badge>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
                            Elevate Your Workflow
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600">
                            with SaaSly
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        The all-in-one platform that helps teams collaborate, automate, and deliver exceptional results.
                        Streamline your processes and focus on what matters most.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                    >
                        <Button
                            size="lg"
                            className="rounded-full h-13 md:h-14 px-4 md:px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 size-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full h-13 md:h-14 px-4 md:px-8 text-base font-semibold bg-transparent border-2 hover:bg-muted/500 transition-all duration-300 cursor-pointer"
                        >
                            Book a Demo
                        </Button>
                    </motion.div>

                    {/* Feature Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
                    >
                        <div className="flex items-center gap-2">
                            <Check className="size-4 text-green-500" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="size-4 text-green-500" />
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="size-4 text-green-500" />
                            <span>Cancel anytime</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Dashboard Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative mx-auto max-w-6xl pt-6"
                >
                    {/* Image Container with Border Effect */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/40">
                        {/* Glow background effect - Enhanced visibility */}
                        <div 
                            className="absolute inset-0 pointer-events-none rounded-3xl z-0"
                            aria-hidden="true"
                            style={{
                                background: "radial-gradient(1200px 500px at 50% 0%, rgba(138, 92, 246, 0.25), rgba(138, 92, 246, 0.12), rgba(59, 130, 246, 0.08), transparent)",
                                filter: "blur(60px)",
                            }} 
                        />
                        
                        {/* Additional glow layer for more intensity */}
                        <div 
                            className="absolute inset-0 pointer-events-none rounded-3xl z-0"
                            aria-hidden="true"
                            style={{
                                background: "radial-gradient(800px 300px at 50% 20%, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.1), transparent)",
                                filter: "blur(80px)",
                            }} 
                        />
                        
                        <motion.img
                            src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                            width={1280}
                            height={720}
                            alt="Dashboard Preview"
                            className="w-full h-auto rounded-2xl relative z-10 block"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />

                        {/* Interactive Border Effect - Inside Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{
                                boxShadow:
                                    scrollDirection === "up"
                                        ? "inset 0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 40px rgba(59, 130, 246, 0.2)"
                                        : "inset 0 10px 25px rgba(0, 0, 0, 0.1), inset 0 20px 40px rgba(0, 0, 0, 0.05)",
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none z-20"
                        />
                    </div>

                    {/* Decorative Blurred Background Circles */}
                    <div className="absolute -bottom-8 -right-8 -z-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl opacity-60" />
                    <div className="absolute -top-8 -left-8 -z-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl opacity-60" />
                </motion.div>
            </div>
        </section>
    )
}
