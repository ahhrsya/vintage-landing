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

    const text = "Vintage thrives on precision and privacy. Our platform is grounded in agentic thinking, automating complex investment workflows previously handled manually. We turn fragmented data into your operating system.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="py-32 bg-white text-dark-primary overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* 1. Text Reveal Part */}
                <div className="max-w-4xl mx-auto mb-32 text-center">
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

                {/* 2. Dashboard Mockup (iPad Style) */}
                <SectionReveal delay={0.2}>
                    <div className="relative mt-20 flex justify-center">
                        <div className="relative max-w-4xl w-full p-2 bg-black rounded-[40px] border-[12px] border-black shadow-xl">
                            {/* Inner Screen */}
                            <div className="rounded-[28px] overflow-hidden bg-white">
                                <img
                                    src={dashboardImg}
                                    alt="Dashboard iPad Preview"
                                    className="w-full h-auto block"
                                />
                            </div>

                            {/* iPad Camera Dot */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rounded-full mt-2" />
                        </div>
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
