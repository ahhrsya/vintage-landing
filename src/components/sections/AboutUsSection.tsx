import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// Replace with actual image path if provided, using a generic local asset for now
import imagePlaceholder from '../../assets/sky.jpg';

export const AboutUsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const text = "Vintage thrives on precision, privacy, and a relentless pursuit of operational excellence. Our approach is grounded in agentic thinking and fueled by cutting-edge AI technology. We don't believe in manual overhead; instead, we dive deep into automating your unique workflows and craft the bespoke operating system that your family office deserves.";
    const words = text.split(" ");

    const stats = [
        {
            num: "99",
            desc: "Percent task automation for manual accounting and reconciliation, allowing teams to focus on strategy over spreadsheets."
        },
        {
            num: "50+",
            desc: "Billions in AUM tracked securely within our platform, providing one source of truth for global family offices."
        },
        {
            num: "2.4",
            desc: "Hours to close books and generate quarterly reports with Vintage AI agents, down from weeks of manual intensive labor."
        },
    ];

    return (
        <section ref={containerRef} className="py-32 bg-white text-dark-primary relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 w-full">

                {/* Dynamic Highlight Text */}
                <div className="max-w-[1200px] mx-auto mb-32 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium leading-[1.2] tracking-[-0.03em] text-gray-300">
                        {words.map((word, i) => {
                            const start = (i / words.length);
                            const end = ((i + 1) / words.length);
                            const isBold = word.includes("ConductLite™");
                            return (
                                <Word key={i} progress={scrollYProgress} range={[start * 0.4 + 0.1, end * 0.4 + 0.1]}>
                                    <span className={isBold ? "font-bold" : ""}>{word}</span>
                                </Word>
                            );
                        })}
                    </h2>
                </div>

                {/* 3-Column Stats Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1200px] mx-auto items-stretch">

                    {/* Left Column (Title & Image) */}
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div className="text-[11px] font-bold text-dark-primary mb-8 lg:mb-0 hidden md:block uppercase tracking-wider">
                            In numbers
                        </div>
                        {/* Empty space filler for layout */}
                        <div className="flex-1" />
                        <div className="w-full mt-auto">
                            <img
                                src={imagePlaceholder}
                                alt="In numbers visual"
                                className="w-full aspect-[16/9] object-cover rounded-2xl shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Right Area: Numbers & Descriptions */}
                    <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16 lg:pl-16">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12"
                            >
                                <div className="text-8xl md:text-[130px] font-medium tracking-tighter text-[#262626] leading-[0.85] text-center md:text-left">
                                    {stat.num}
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <p className="text-[10px] md:text-[12px] text-gray-600 leading-relaxed font-medium max-w-[280px] text-center md:text-left">
                                        {stat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) => {
    const color = useTransform(progress, range, ["#D1D5DB", "#262626"]);

    return (
        <motion.span
            style={{ color }}
            className="inline-block mr-[0.25em]"
        >
            {children}
        </motion.span>
    );
};
