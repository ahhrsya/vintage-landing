import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { ChevronRight, ArrowRight } from 'lucide-react';

export const CTAV2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative bg-black pt-32 pb-64 overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none opacity-50" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none opacity-30" />

            {/* Subtle Clouds/Atmosphere (Using CSS gradients or overlay) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">

                {/* Eyebrow */}
                <SectionReveal>
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-10">
                        VINTAGE OS
                    </div>
                </SectionReveal>

                {/* Headline */}
                <SectionReveal delay={0.1}>
                    <h2
                        className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05]"
                        style={{ fontFamily: "'Manrope', serif" }}
                    >
                        AI Agents That Automate <br className="hidden md:block" />
                        Your Business Operations
                    </h2>
                </SectionReveal>

                {/* Subtext */}
                <SectionReveal delay={0.2}>
                    <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
                        Data extraction, reconciliations, reporting, and compliance—handled <br className="hidden md:block" /> 24/7 by custom AI agents trained on your private data.
                    </p>
                </SectionReveal>

                {/* Buttons */}
                <SectionReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
                    <button className="h-14 px-8 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-gray-100 transition-all shadow-xl">
                        Book a strategy call
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white ml-2">
                            <ArrowRight size={14} />
                        </div>
                    </button>
                    <button className="h-14 px-8 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                        See use cases
                        <ChevronRight size={18} className="opacity-50" />
                    </button>
                </SectionReveal>

                {/* Visual Mockup (The large centered frame) */}
                <SectionReveal delay={0.4} className="relative">
                    <motion.div
                        style={{ y: yMove }}
                        className="max-w-5xl mx-auto p-2 rounded-3xl bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="aspect-video w-full rounded-2xl bg-dark-secondary relative overflow-hidden group">
                            {/* Inner Video Mockup Image */}
                            <img
                                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop"
                                alt="Dashboard Visualization"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                </div>
                            </div>

                            {/* Decorative Corner Labels */}
                            <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                                    System Active
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </SectionReveal>

            </div>

            {/* Bottom Inverted V Shape (White Overlay) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[120px] fill-white">
                    <path d="M0,120 L1200,120 L1200,0 L600,100 L0,0 Z"></path>
                </svg>
            </div>

        </section>
    );
};
