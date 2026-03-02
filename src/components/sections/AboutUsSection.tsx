import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

import dashboardImg from '../../assets/Dashboard.png';

export const AboutUsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const stats = [
        { value: '$50B+', label: 'AUM Tracked' },
        { value: '500+', label: 'Integrations' },
        { value: '200+', label: 'Family Offices Served' },
        { value: '99.9%', label: 'Uptime SLA' },
    ];

    const text = "We are passionate about empowering individuals and businesses to take control of their finances and achieve their financial goals.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-white text-dark-primary">
            <div className="sticky top-0 h-screen flex items-center justify-center pt-20">
                <div className="max-w-[1200px] mx-auto px-6 text-center w-full">
                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">
                            <Star size={12} className="text-blue-500 fill-blue-500" />
                            About Us
                        </div>
                    </div>

                    {/* Dynamic Highlight Text */}
                    <div className="max-w-4xl mx-auto mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.2] tracking-[-0.04em] text-gray-300">
                            {words.map((word, i) => {
                                const start = i / words.length;
                                const end = (i + 1) / words.length;
                                return (
                                    <Word key={i} progress={scrollYProgress} range={[start * 0.5, end * 0.5]}>
                                        {word}
                                    </Word>
                                );
                            })}
                        </h2>
                    </div>

                    {/* Dashboard Image with Browser Frame */}
                    <div className="relative max-w-4xl mx-auto mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-dark-secondary rounded-xl border border-white/10 shadow-2xl overflow-hidden p-0.5"
                        >
                            {/* Browser Header */}
                            <div className="flex items-center gap-1 px-3 py-2 bg-dark-secondary border-b border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                                <div className="ml-3 flex-1 h-3.5 bg-black/20 rounded-sm" />
                            </div>

                            {/* Dashboard Image */}
                            <div className="bg-dark-primary">
                                <img
                                    src={dashboardImg}
                                    alt="Finage Dashboard"
                                    className="w-full h-auto block"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-100 pt-10 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex flex-col text-left"
                            >
                                <span className="font-bold text-xl md:text-2xl mb-1 tracking-tight">{stat.value}</span>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const color = useTransform(progress, range, ["#D1D5DB", "#09090B"]);

    return (
        <motion.span
            style={{ opacity, color }}
            className="inline-block mr-[0.25em]"
        >
            {children}
        </motion.span>
    );
};
