import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
    {
        category: "Long-Term Partnerships",
        quote: "We experimented with other tools, but at the end of the day, Finage was a clear winner on the efficiency rate. If they continue doing what they're doing, they'll have a place with us forever.",
        author: "Dr. Ronak Bhatt",
        title: "Founder, Chancellor & CEO, Tetra Institute",
        color: "bg-white",
        textColor: "text-dark-primary"
    },
    {
        category: "Dedicated Service & Support",
        quote: "The level of customization we get with Finage is unparalleled. It's not just a platform; it's a partner that understands the specific needs of our family office structure.",
        author: "Sarah Jenkins",
        title: "Managing Director, Peak Wealth",
        color: "bg-white",
        textColor: "text-dark-primary"
    },
    {
        category: "Global Reach",
        quote: "Managing assets across three continents used to be a nightmare of consolidation. Now, it happens in real-time. Finage has fundamentally changed how we operate.",
        author: "Michael Chen",
        title: "Director of Operations, Heritage Global",
        color: "bg-white",
        textColor: "text-dark-primary"
    }
];

export const TestimonialStickySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[450vh] bg-[#F8F9FA] text-dark-primary">
            {/* Sticky viewport */}
            <div className="sticky top-0 h-screen w-full flex flex-col pt-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 text-center w-full mb-12">
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6">
                        Testimonials
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
                        A platform family offices<br />can finally <span className="italic">rely on.</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        Join 100+ forward-thinking family offices maximizing their financial power.
                    </p>
                </div>

                {/* The Stacking Deck */}
                <div className="relative flex-1 w-full max-w-4xl mx-auto px-6 mb-20">
                    {testimonials.map((t, i) => {
                        // Ranges for scroll: 
                        // Card 0: 0 -> 0.2 (stays after)
                        // Card 1: 0.2 -> 0.4 (slides up and covers)
                        // Card 2: 0.4 -> 0.6 (slides up and covers)
                        const start = (i / testimonials.length) * 0.8;
                        const end = start + 0.2;

                        // Animation specifically for this card
                        const y = useTransform(
                            scrollYProgress,
                            [start - 0.1, start, 1],
                            [800, 0, 0] // Starts off-screen, slides to 0, stays at 0
                        );

                        // Subtle scale for cards underneath
                        const scale = useTransform(
                            scrollYProgress,
                            [end, end + 0.1],
                            [1, 0.98]
                        );

                        // Slight darkness/opacity for cards underneath
                        const opacity = useTransform(
                            scrollYProgress,
                            [end, end + 0.1],
                            [1, 0.9]
                        );

                        return (
                            <motion.div
                                key={i}
                                style={{
                                    y,
                                    scale: i < testimonials.length - 1 ? scale : 1,
                                    opacity: i < testimonials.length - 1 ? opacity : 1,
                                    zIndex: i
                                }}
                                className="absolute inset-x-6 mx-auto bg-white rounded-[40px] md:rounded-[48px] p-8 md:p-14 border border-gray-200 shadow-none flex flex-col justify-between h-[450px] md:h-[500px]"
                            >
                                <div>
                                    <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 mb-8 block uppercase">
                                        {t.category}
                                    </span>
                                    {/* REDUCED FONT SIZE HERE */}
                                    <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.3] text-dark-primary tracking-tight">
                                        "{t.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200" />
                                    <div>
                                        <div className="font-bold text-base text-dark-primary">{t.author}</div>
                                        <div className="text-xs text-gray-400 font-medium">{t.title}</div>
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
