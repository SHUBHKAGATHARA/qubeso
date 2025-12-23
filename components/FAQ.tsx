"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What services does QUBESO offer?",
        answer: "We specialize in web development, mobile app development, UI/UX design, SaaS development, and cloud & API services. Our team handles everything from initial concept to final deployment and ongoing support."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity and scope. A standard website takes 4-6 weeks, mobile apps 8-12 weeks, and custom SaaS platforms 12-16 weeks. We provide detailed timelines during initial consultation."
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes! We offer comprehensive maintenance packages including updates, security patches, performance monitoring, and technical support. Our team is always available to help your digital products run smoothly."
    },
    {
        question: "What technologies do you work with?",
        answer: "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, Python, React Native, Flutter, AWS, and more. We select the best tech stack for each project's specific needs."
    },
    {
        question: "Can you work with our existing codebase?",
        answer: "Absolutely! We have extensive experience taking over and improving existing projects. We can audit your current code, implement new features, fix bugs, and optimize performance."
    },
    {
        question: "What is your development process?",
        answer: "We follow an agile methodology with five key phases: Requirement Analysis, Research & Planning, UI/UX Design, Development, and Deployment. You'll be involved throughout with regular updates and milestone reviews."
    },
    {
        question: "Do you sign NDAs and ensure confidentiality?",
        answer: "Yes, we take confidentiality seriously. We're happy to sign NDAs and have strict data protection policies in place. All client information and project details are kept strictly confidential."
    },
    {
        question: "What are your payment terms?",
        answer: "We typically work with milestone-based payments: 30% upfront, 40% at mid-project milestone, and 30% upon completion. For larger projects, we can discuss custom payment schedules that work for both parties."
    }
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-border last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between gap-4 text-left group hover:text-brand-primary transition-colors"
            >
                <span className="text-lg font-semibold text-text-heading group-hover:text-brand-primary transition-colors">
                    {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    {isOpen ? (
                        <Minus className="w-5 h-5 text-brand-primary" />
                    ) : (
                        <Plus className="w-5 h-5 text-text-muted group-hover:text-brand-primary transition-colors" />
                    )}
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-text-muted leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Frequently Asked <span className="text-brand-primary">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to know about working with us
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-border p-8 shadow-soft">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
