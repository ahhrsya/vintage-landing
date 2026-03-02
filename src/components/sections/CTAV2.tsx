import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import dashboardUpdate from '../../assets/dashboard_upadtee.png';

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
            className="relative bg-[#F8F9FB] pt-32 pb-20 overflow-hidden text-gray-900"
        >
            {/* Subtle Gradient Following Cursor (Light Theme Version) */}
            <motion.div
                className="absolute pointer-events-none opacity-50 transition-opacity duration-500"
                style={{
                    left: mouseX,
                    top: mouseY,
                    x: '-50%',
                    y: '-50%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

                    {/* Left Side: Content */}
                    <div className="text-left">
                        <SectionReveal>
                            <h2
                                className="text-5xl md:text-6xl lg:text-[72px] font-medium tracking-tight mb-8 leading-[1.1] text-[#1D2939]"
                                style={{ fontFamily: "'Manrope', serif" }}
                            >
                                Revolutionize wealth <br />
                                with AI agents that <br />
                                never sleep ever.
                            </h2>
                        </SectionReveal>

                        <SectionReveal delay={0.1}>
                            <p className="text-gray-500 text-lg md:text-xl font-medium mb-12 max-w-md leading-relaxed">
                                Instant responses, 100% uptime, and smarter operations all without expanding your team.
                            </p>
                        </SectionReveal>

                        <SectionReveal delay={0.2}>
                            <button className="h-16 px-10 bg-[#007AFF] text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25">
                                Join the Beta Program
                            </button>
                        </SectionReveal>
                    </div>

                    {/* Right Side: Mockup Image */}
                    <SectionReveal delay={0.3} className="relative">
                        <motion.div
                            style={{ rotateX, rotateY, perspective: "1000px" }}
                            className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-2 overflow-hidden"
                        >
                            {/* Browser Bar */}
                            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F9FAFB] border-b border-gray-100">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                            </div>
                            {/* Actual Image */}
                            <img
                                src={dashboardUpdate}
                                alt="Vintage Dashboard"
                                className="w-full h-auto block rounded-b-xl"
                            />
                        </motion.div>
                    </SectionReveal>
                </div>

                {/* Footer Section Style Sync */}
                <div className="border-t border-gray-200 pt-16">
                    <div className="flex flex-col gap-8">

                        {/* Links Row */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16">
                            <div className="flex items-center gap-12 text-sm font-medium">
                                <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Pages</span>
                                <div className="flex flex-wrap gap-x-8 gap-y-2">
                                    {['Home', 'Use cases', 'About', 'Careers', 'Contact'].map(link => (
                                        <a key={link} href="#" className="text-gray-500 hover:text-black transition-colors">{link}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-12 text-sm font-medium">
                                <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Legal</span>
                                <div className="flex gap-8">
                                    {['Privacy policy', 'Terms & conditions'].map(link => (
                                        <a key={link} href="#" className="text-gray-500 hover:text-black transition-colors">{link}</a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Branding Row */}
                        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-gray-100 gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-[#1D2939]">Vintage</span>
                                <span className="text-xs text-gray-400 ml-4 font-medium">© 2025. All Rights Reserved</span>
                            </div>

                            <div className="flex items-center gap-6">
                                <Twitter size={18} className="text-gray-400 hover:text-black cursor-pointer" />
                                <Linkedin size={18} className="text-gray-400 hover:text-black cursor-pointer" />
                                <Instagram size={18} className="text-gray-400 hover:text-black cursor-pointer" />
                                <Facebook size={18} className="text-gray-400 hover:text-black cursor-pointer" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
