'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Scan Directory',
        description:
            'Point Sentinel to any messy folder. It safely scans the contents locally without moving or uploading a single file.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Review Plan',
        description:
            'The on-device AI generates a dry-run plan, categorizing your files intelligently. You review every proposed move.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Execute Safely',
        description:
            'Approve the plan and watch your files get organized instantly. Need to roll back? Do it with a single click.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-surface-0 border-y border-edge mt-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary tracking-tight mb-4">
                        How it works
                    </h2>
                    <p className="text-[16px] text-txt-secondary max-w-xl mx-auto leading-relaxed">
                        A seamless, transparent workflow designed to give you complete control.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                    <div className="absolute top-[3.5rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-edge to-transparent hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="w-28 h-28 mb-8 relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-surface-1 border border-edge rounded-2xl rotate-3 transition-transform group-hover:rotate-6" />
                                <div className="absolute inset-0 bg-surface-2 border border-edge rounded-2xl flex items-center justify-center -rotate-3 transition-transform group-hover:rotate-0">
                                    <div className="text-txt-primary w-12 h-12 flex items-center justify-center bg-surface-0 rounded-xl border border-edge drop-shadow-sm">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-txt-primary text-black flex items-center justify-center text-[12px] font-bold z-10">
                                    {step.number}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-txt-primary mb-3">
                                {step.title}
                            </h3>
                            <p className="text-[15px] text-txt-secondary leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
