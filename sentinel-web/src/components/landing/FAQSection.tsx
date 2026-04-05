'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'Does Sentinel send my files to the cloud?',
        answer:
            'Never. Sentinel is fully local-first. All AI processing happens on your machine using a local model. Your files, filenames, and directory structure never leave your device.',
    },
    {
        question: "What happens if I don't like the changes Sentinel makes?",
        answer:
            'Every operation Sentinel performs is logged and fully reversible. Files are always moved to trash first — never permanently deleted. You can undo any change instantly from the audit trail.',
    },
    {
        question: 'Which operating systems are supported?',
        answer:
            'Sentinel currently supports macOS and Linux. A Windows build is on the roadmap. Check the Downloads page for the latest platforms and release notes.',
    },
    {
        question: 'Does Sentinel require an internet connection?',
        answer:
            'No. After the initial install, Sentinel works entirely offline. The local AI model runs on-device, so you get full functionality even without a network connection.',
    },
    {
        question: 'Is Sentinel free to use?',
        answer:
            'Yes. Sentinel is free and open-source under the MIT license. You can inspect the full source code on GitHub, contribute, or self-host it however you like.',
    },
    {
        question: 'How does Sentinel decide how to organize my files?',
        answer:
            'Sentinel scans your directory, then the local AI model generates a plan based on file types, names, dates, and contextual signals. You review the plan before anything is executed — Sentinel never acts without your confirmation.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="py-24 px-6 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-edge to-transparent" />

            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary tracking-tight mb-4">
                        Frequently asked questions
                    </h2>
                    <p className="text-[16px] text-txt-secondary max-w-xl mx-auto leading-relaxed">
                        Everything you need to know about how Sentinel works.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <div
                                    className={`bg-surface-1 border rounded-xl overflow-hidden transition-all duration-200 ${
                                        isOpen
                                            ? 'border-edge-hover'
                                            : 'border-edge hover:border-edge-hover'
                                    }`}
                                >
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between px-6 py-5 text-left group"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-[15px] font-semibold text-txt-primary pr-4 leading-snug">
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-md border transition-all duration-200 ${
                                                isOpen
                                                    ? 'border-edge-hover bg-surface-2 text-txt-primary'
                                                    : 'border-edge text-txt-faint group-hover:border-edge-hover group-hover:text-txt-muted'
                                            }`}
                                        >
                                            <svg
                                                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                                    isOpen ? 'rotate-45' : 'rotate-0'
                                                }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="answer"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.22, ease: 'easeInOut' }}
                                            >
                                                <div className="px-6 pb-5">
                                                    <div className="h-px bg-edge mb-4" />
                                                    <p className="text-[14px] text-txt-secondary leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
