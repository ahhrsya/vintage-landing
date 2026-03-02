import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import dashboardUpdate from '../../assets/dashboard_upadtee.png';
import { Button } from '../ui/Button';

export const CTAV2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse interaction for the 3D tilt of the image
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative bg-black pt-32 pb-20 overflow-hidden text-white cursor-default"
        >
            {/* Subtle Gradient Following Cursor (Dark Theme Version) */}
            <motion.div
                className="absolute pointer-events-none opacity-20 transition-opacity duration-500"
                style={{
                    left: mouseX,
                    top: mouseY,
                    x: '-50%',
                    y: '-50%',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

                    {/* Left Side: Content */}
                    <div className="text-left">
                        <SectionReveal delay={0.1}>
                            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/10 border border-white/5 backdrop-blur-md mb-8">
                                <span className="text-white/80 text-xs font-medium uppercase tracking-widest">Introducing Agentic Workflows for Wealth</span>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.2}>
                            <h2
                                className="text-5xl md:text-6xl lg:text-[72px] font-medium tracking-tight mb-8 leading-[1.1] text-white"
                                style={{ fontFamily: "'Manrope', serif" }}
                            >
                                Close Faster. <br />
                                Operate Smarter.
                            </h2>
                        </SectionReveal>

                        <SectionReveal delay={0.3}>
                            <p className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-md leading-relaxed">
                                Vintage turns fragmented data into an operating system — and manual work into automation.
                            </p>
                        </SectionReveal>

                        <SectionReveal delay={0.4} className="flex flex-col sm:flex-row items-center gap-4">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 text-sm md:text-base font-bold bg-[#007AFF] border-[#007AFF] text-white hover:bg-[#007AFF]/90 shadow-xl shadow-blue-500/20">
                                Join Waitlist
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 text-sm md:text-base font-bold bg-white border-white !text-black hover:bg-white/90 shadow-xl">
                                View Demo Dashboard
                            </Button>
                        </SectionReveal>
                    </div>

                    {/* Right Side: Mockup Image */}
                    <SectionReveal delay={0.3} className="relative">
                        <motion.div
                            style={{ rotateX, rotateY, perspective: "1000px" }}
                            className="bg-[#111] rounded-2xl shadow-2xl border border-white/5 p-2 overflow-hidden"
                        >
                            {/* Browser Bar */}
                            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1A1A1A] border-b border-white/5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] opacity-60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] opacity-60" />
                            </div>
                            {/* Actual Image */}
                            <img
                                src={dashboardUpdate}
                                alt="Vintage Dashboard"
                                className="w-full h-auto block rounded-b-xl opacity-90"
                            />
                        </motion.div>
                    </SectionReveal>
                </div>

                {/* Footer Section Integrated (Dark Theme) */}
                <div className="border-t border-white/5 pt-16">
                    <div className="flex flex-col gap-8">

                        {/* Links Row */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16">
                            <div className="flex items-center gap-12 text-sm font-medium">
                                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Pages</span>
                                <div className="flex flex-wrap gap-x-8 gap-y-2">
                                    {['Home', 'Use cases', 'About', 'Careers', 'Contact'].map(link => (
                                        <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-12 text-sm font-medium">
                                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Legal</span>
                                <div className="flex gap-8">
                                    {['Privacy policy', 'Terms & conditions'].map(link => (
                                        <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Branding Row */}
                        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">Vintage</span>
                                <span className="text-xs text-gray-500 ml-4 font-medium">© 2026. All Rights Reserved</span>
                            </div>

                            <div className="flex items-center gap-6">
                                <Twitter size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                                <Linkedin size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                                <Instagram size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                                <Facebook size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
