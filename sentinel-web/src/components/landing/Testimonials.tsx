'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote:
            'Sentinel cleaned up 3 years of Downloads clutter in under a minute. Every move was logged and reversible — I actually trusted it.',
        name: 'Alex R.',
        role: 'Software Engineer',
        initials: 'AR',
    },
    {
        quote:
            'The plan-before-execute flow is brilliant. I can see exactly what it\'s going to do before anything touches my files.',
        name: 'Priya K.',
        role: 'Data Scientist',
        initials: 'PK',
    },
    {
        quote:
            'Finally, an AI tool that works fully offline. No subscriptions, no cloud uploads. My files stay on my machine — period.',
        name: 'Jordan M.',
        role: 'Security Researcher',
        initials: 'JM',
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 relative">
            {/* Gradient divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-edge to-transparent" />

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary tracking-tight mb-4">
                        Loved by developers
                    </h2>
                    <p className="text-[16px] text-txt-secondary max-w-xl mx-auto leading-relaxed">
                        Here&apos;s what early users say about Sentinel.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-3 gap-4">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                        >
                            <div className="bg-surface-1 border border-edge rounded-xl p-6 h-full flex flex-col gap-4 hover:border-edge-hover transition-all duration-200">
                                {/* Stars */}
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-3.5 h-3.5 text-txt-primary"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-[14px] text-txt-secondary leading-relaxed flex-1">
                                    &ldquo;{t.quote}&rdquo;
                                </p>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-surface-2 border border-edge flex items-center justify-center flex-shrink-0">
                                        <span className="text-[11px] font-semibold text-txt-muted">
                                            {t.initials}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-semibold text-txt-primary leading-none mb-0.5">
                                            {t.name}
                                        </p>
                                        <p className="text-[12px] text-txt-faint">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
