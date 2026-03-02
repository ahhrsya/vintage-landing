import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const CTAV2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse interaction for the gradient
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the follower
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative bg-[#05070A] pt-40 pb-20 overflow-hidden text-white cursor-default"
        >

            {/* Interactive Gradient Background */}
            <motion.div
                className="absolute pointer-events-none opacity-40 mix-blend-screen transition-opacity duration-500"
                style={{
                    left: springX,
                    top: springY,
                    x: '-50%',
                    y: '-50%',
                    width: '1000px',
                    height: '1000px',
                    background: 'radial-gradient(circle, rgba(29, 78, 216, 0.45) 0%, transparent 60%)',
                }}
            />

            {/* Vertical Stripes/Panels */}
            <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                ))}
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                {/* Main Content Row */}
                <div className="mb-40 max-w-3xl">
                    <SectionReveal>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 block">Get Started</span>
                    </SectionReveal>

                    <SectionReveal delay={0.1}>
                        <h2 className="text-5xl md:text-8xl font-medium tracking-tight mb-10 leading-[1.05]" style={{ fontFamily: "'Manrope', serif" }}>
                            Don't scale harder.<br />
                            Scale smarter.
                        </h2>
                    </SectionReveal>

                    <SectionReveal delay={0.2}>
                        <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed">
                            Vintage helps you automate complex workflows, reduce operating costs, and scale faster — without hiring more people.
                        </p>
                    </SectionReveal>

                    <SectionReveal delay={0.3} className="flex flex-wrap gap-4">
                        <button className="h-14 px-10 bg-white text-black rounded-sm font-bold hover:bg-gray-200 transition-all">
                            Get in touch
                        </button>
                        <button className="h-14 px-10 bg-transparent border border-white/20 text-white rounded-sm font-bold hover:bg-white/5 transition-all">
                            About us
                        </button>
                    </SectionReveal>
                </div>

                {/* Footer Section Integrated */}
                <div className="border-t border-white/5 pt-16">
                    <div className="flex flex-col gap-8">

                        {/* Links Row */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16">
                            <div className="flex items-center gap-12 text-sm font-medium">
                                <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Pages</span>
                                <div className="flex flex-wrap gap-x-8 gap-y-2">
                                    {['Home', 'Use cases', 'About', 'Careers', 'Contact'].map(link => (
                                        <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-12 text-sm font-medium">
                                <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Legal</span>
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
                                <span className="text-xl font-bold tracking-tight">Vintage</span>
                                <span className="text-xs text-gray-500 ml-4 font-medium">© 2025. All Rights Reserved</span>
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
