import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import dashboardImg from '../../assets/dashboard_upadtee.png';
import { SectionReveal } from '../ui/SectionReveal';

export const AboutSectionV2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const text = "Vintage thrives on precision, privacy, and a relentless pursuit of operational excellence. Our approach is grounded in agentic thinking and fueled by cutting-edge AI technology. We don't believe in manual overhead; instead, we dive deep into automating your unique workflows.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="py-32 bg-white text-dark-primary overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* 1. Text Reveal Part */}
                <div className="max-w-4xl mb-32">
                    <h2 className="text-3xl md:text-5xl font-medium leading-[1.15] tracking-tight text-gray-200">
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = (i + 1) / words.length;
                            return (
                                <Word key={i} progress={scrollYProgress} range={[start * 0.3 + 0.1, end * 0.3 + 0.1]}>
                                    {word}
                                </Word>
                            );
                        })}
                    </h2>
                </div>

                {/* 2. Dashboard Mockup & Metrics Part */}
                <SectionReveal delay={0.2}>
                    <div className="relative mt-20">
                        {/* Main Dashboard Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                            <img
                                src={dashboardImg}
                                alt="Dashboard Preview"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Floating Metric Cards */}
                        <motion.div
                            style={{
                                y: useTransform(scrollYProgress, [0.2, 0.5], [100, 0]),
                                opacity: useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
                            }}
                            className="absolute -top-12 -right-12 z-20 hidden lg:block"
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-64">
                                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Real-time AUM</div>
                                <div className="text-3xl font-bold text-gray-900 mb-4">$52.4B</div>
                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '75%' }}
                                        className="h-full bg-blue-600"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-[10px] text-gray-400 font-medium">+12% from last month</span>
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{
                                y: useTransform(scrollYProgress, [0.3, 0.6], [150, 0]),
                                opacity: useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
                            }}
                            className="absolute -bottom-12 -left-12 z-20 hidden lg:block"
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-72">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">AI</div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-900">Agent Processing</div>
                                        <div className="text-[10px] text-gray-400 tracking-tight">Statement Extraction Active</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${40 + i * 20}%` }}
                                                    className="h-full bg-blue-500/20"
                                                />
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400">99.9%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SectionReveal>

            </div>
        </section>
    );
};

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    const color = useTransform(progress, range, ["#e5e7eb", "#09090b"]);

    return (
        <motion.span
            style={{ opacity, color }}
            className="inline-block mr-[0.25em]"
        >
            {children}
        </motion.span>
    );
};
