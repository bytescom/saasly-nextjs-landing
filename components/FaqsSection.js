import React from 'react'
import { motion } from "framer-motion"
import { Badge } from './ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CreditCard, Users, HelpCircle, Shield, Headphones, ArrowUpRight } from 'lucide-react'

export default function FaqsSection() {
    const faqData = [
        {
            question: "How does the 14-day free trial work?",
            answer: "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to sign up, and you can cancel at any time during the trial period with no obligation.",
            icon: <CreditCard className="w-5 h-5" />,
            category: "Billing"
        },
        {
            question: "Can I change plans later?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.",
            icon: <CreditCard className="w-5 h-5" />,
            category: "Plans"
        },
        {
            question: "Is there a limit to how many users I can add?",
            answer: "The number of users depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
            icon: <Users className="w-5 h-5" />,
            category: "Teams"
        },
        {
            question: "Do you offer discounts for nonprofits or educational institutions?",
            answer: "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.",
            icon: <HelpCircle className="w-5 h-5" />,
            category: "Pricing"
        },
        {
            question: "How secure is my data?",
            answer: "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is compliant with GDPR, CCPA, and other relevant regulations.",
            icon: <Shield className="w-5 h-5" />,
            category: "Security"
        },
        {
            question: "What kind of support do you offer?",
            answer: "Support varies by plan. All plans include email support, with the Professional plan offering priority email support. The Enterprise plan includes 24/7 phone and email support. We also have an extensive knowledge base and community forum available to all users.",
            icon: <Headphones className="w-5 h-5" />,
            category: "Support"
        }
    ];



    return (
        <section id="faq" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <Badge className="mb-4 px-5 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors rounded-4xl">
                        ❓ FAQs
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Frequently {" "}
                        <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Asked Questions
                        </span>
                    </h2>
                    <p className="max-w-xl mx-auto text-muted-foreground text-base leading-relaxed">
                        Find answers to common questions about our platform.
                    </p>
                </motion.div>

                <div className="mx-auto max-w-4xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqData.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="group"
                            >
                                <AccordionItem
                                    value={`item-${i}`}
                                    className="border border-border/40 rounded-xl bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 group-data-[state=open]:border-primary/30 group-data-[state=open]:shadow-lg group-data-[state=open]:bg-primary/5"
                                >
                                    <AccordionTrigger className="text-left font-medium hover:no-underline px-6 py-5 [&>svg]:hidden">
                                        <div className="flex items-start space-x-4 w-full">
                                            <div className="flex-shrink-0 mt-0.5">
                                                <div className="p-2 rounded-lg bg-muted/50 text-muted-foreground border border-border/50">
                                                    {faq.icon}
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between w-full mb-2">
                                                    <Badge
                                                        variant="outline"
                                                        className="text-xs font-medium bg-muted/30 text-muted-foreground border-border/50"
                                                    >
                                                        {faq.category}
                                                    </Badge>
                                                    <motion.div
                                                        className="text-muted-foreground group-data-[state=open]:rotate-45 transition-transform duration-300"
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        <ArrowUpRight className="w-5 h-5" />
                                                    </motion.div>
                                                </div>
                                                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    {faq.question}
                                                </h3>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground px-6 pb-6">
                                        <div className="ml-16 pt-2">
                                            <div className="w-full h-px bg-gradient-to-r from-border/60 to-transparent mb-4"></div>
                                            <p className="leading-relaxed text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>

                {/* Call to Action Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 lg:mt-20"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 border border-primary/10 p-8 text-center">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-3">
                                    Still have{" "}
                                    <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        questions?
                                    </span>
                                </h3>
                                <p className="text-muted-foreground mb-6 text-lg">
                                    {"Can't find what you're looking for? Our support team is here to help."}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
                                    >
                                        Contact Support
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 border border-border bg-background/80 backdrop-blur-sm text-foreground rounded-lg hover:bg-muted transition-colors duration-200 font-medium"
                                    >
                                        Browse Help Center
                                    </motion.button>
                                </div>
                            </div>
                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
