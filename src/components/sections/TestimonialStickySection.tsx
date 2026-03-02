import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
    {
        category: "Long-Term Partnerships",
        quote: "We experimented with other tools, but at the end of the day, Finage was a clear winner on the efficiency rate. If they continue doing what they're doing, they'll have a place with us forever.",
        author: "Dr. Ronak Bhatt",
        title: "Founder, Chancellor & CEO, Tetra Institute",
        color: "bg-[#2D262E]"
    },
    {
        category: "Dedicated Service & Support",
        quote: "The level of customization we get with Finage is unparalleled. It's not just a platform; it's a partner that understands the specific needs of our family office structure.",
        author: "Sarah Jenkins",
        title: "Managing Director, Peak Wealth",
        color: "bg-[#25282E]"
    },
    {
        category: "Global Reach",
        quote: "Managing assets across three continents used to be a nightmare of consolidation. Now, it happens in real-time. Finage has fundamentally changed how we operate.",
        author: "Michael Chen",
        title: "Director of Operations, Heritage Global",
        color: "bg-[#262E2A]"
    }
];

export const TestimonialStickySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-[#F8F9FA] text-dark-primary">
            <div className="sticky top-0 h-screen flex flex-col items-center pt-24 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 text-center w-full mb-12">
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6">
                        Testimonials
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
                        A platform family offices<br />can finally <span className="italic">rely on.</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Join 100+ forward-thinking family offices maximizing their financial power. It's time your wealth worked as hard as you do.
                    </p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto px-6 h-[400px]">
                    {testimonials.map((t, i) => {
                        const targetProgress = i / testimonials.length;
                        const nextProgress = (i + 1) / testimonials.length;

                        // Scroll logic for each card
                        // Card starts below and slides up
                        const y = useTransform(
                            scrollYProgress,
                            [targetProgress - 0.1, targetProgress, nextProgress],
                            [100, 0, 0]
                        );

                        // Optional: subtle scaling or opacity change for background cards
                        const scale = useTransform(
                            scrollYProgress,
                            [targetProgress, nextProgress],
                            [1, 0.95]
                        );

                        return (
                            <motion.div
                                key={i}
                                style={{
                                    y,
                                    scale,
                                    zIndex: i,
                                    top: i * 20 // Slight offset for stacking look
                                }}
                                className={`absolute inset-x-0 mx-auto ${t.color} rounded-[32px] p-10 md:p-16 text-white shadow-2xl flex flex-col justify-between h-full`}
                            >
                                <div>
                                    <span className="text-sm font-medium opacity-60 mb-8 block">{t.category}</span>
                                    <p className="text-xl md:text-3xl font-medium leading-tight">
                                        "{t.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0" />
                                    <div className="text-left">
                                        <div className="font-bold text-lg">{t.author}</div>
                                        <div className="text-sm opacity-60">{t.title}</div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
