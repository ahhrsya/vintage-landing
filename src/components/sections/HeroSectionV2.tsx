import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { ArrowRight, Star, Clock, TrendingUp } from 'lucide-react';

export const HeroSectionV2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse interaction for the 3D effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for the tilt
    const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

    // Transform mouse position to rotation values
    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

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
            className="relative min-h-screen pt-40 pb-32 bg-[#090b10] overflow-hidden flex items-center"
        >
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

            <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="text-left">
                        <SectionReveal delay={0.1}>
                            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm mb-10">
                                <span className="text-white text-xs font-medium tracking-wide">Introducing Vintage OS</span>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.2}>
                            <h1
                                style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontWeight: 500,
                                    letterSpacing: '-3px',
                                    fontSize: '72px'
                                }}
                                className="text-white mb-8 leading-[1.05] drop-shadow-2xl max-w-lg"
                            >
                                Ultimate Guide to the Right Asset
                            </h1>
                        </SectionReveal>

                        <SectionReveal delay={0.3}>
                            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
                                Transform the way you manage private wealth with our AI-powered operating system.
                                Consolidate, automate, and scale your family office operations.
                            </p>
                        </SectionReveal>

                        <SectionReveal delay={0.4} className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <button className="w-full sm:w-auto px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 group shadow-xl shadow-blue-500/20">
                                Request a Demo
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </SectionReveal>

                        <SectionReveal delay={0.5} className="flex flex-wrap items-center gap-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                </div>
                                No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="fill-blue-500 text-blue-500" />
                                    ))}
                                </div>
                                <span className="text-white font-bold ml-1">4.8(150+) Reviews</span>
                            </div>
                        </SectionReveal>
                    </div>

                    {/* Right Side: Visual Components with 3D Tilt */}
                    <div
                        className="relative h-[600px] flex items-center justify-center scale-75 lg:scale-80"
                        style={{ perspective: "1200px" }}
                    >
                        <motion.div
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            {/* Center Large Card (AUM Growth) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                style={{ translateZ: "50px" }}
                                className="relative z-20 w-[380px] aspect-square bg-white rounded-[40px] shadow-2xl p-10 flex flex-col items-center justify-center"
                            >
                                <div className="relative w-full h-full">
                                    {/* Circular Progression (SVG) */}
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                                        <motion.circle
                                            cx="50" cy="50" r="45" fill="none" stroke="#2563eb" strokeWidth="10"
                                            strokeDasharray="283"
                                            initial={{ strokeDashoffset: 283 }}
                                            animate={{ strokeDashoffset: 80 }}
                                            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                                            strokeLinecap="round"
                                        />
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#60a5fa" strokeWidth="10" strokeDasharray="283" strokeDashoffset="260" strokeLinecap="round" />
                                    </svg>
                                    {/* Inner Text */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">AUM Growth</div>
                                        <div className="text-6xl font-black text-gray-900 tracking-tighter">$4.2B</div>
                                        <div className="mt-4 flex flex-col gap-1">
                                            <div className="text-xs font-bold text-gray-800">You are doing good!</div>
                                            <div className="text-[10px] text-gray-400">Target reached: 92%</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Top Card (Time Spent) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20, y: -20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                style={{ translateZ: "100px" }}
                                className="absolute -top-10 -right-10 z-30 w-64 bg-white rounded-3xl shadow-xl p-6 border border-gray-100"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-2xl font-bold text-gray-900 tracking-tight">2h 45m</div>
                                    <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Clock size={14} />
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400 mb-4 font-medium">Daily average automation save</div>
                                {/* Simple Bar Chart */}
                                <div className="flex items-end gap-2 h-20">
                                    {[35, 65, 45, 85, 55, 75, 95].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-blue-600' : 'bg-blue-100/50'}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Bottom Left Card (Average Time) */}
                            <motion.div
                                initial={{ opacity: 0, x: -30, y: 30 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                style={{ translateZ: "120px" }}
                                className="absolute -bottom-6 -left-10 z-30 w-72 bg-white rounded-3xl shadow-xl p-6 border border-gray-100"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-sm font-bold text-gray-900">Task Completion</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Live</div>
                                </div>

                                <div className="relative h-24 mb-6">
                                    {/* Wave Path Placeholder using SVG */}
                                    <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                                        <motion.path
                                            d="M0 40 Q 25 20, 50 35 T 100 25 T 150 45 T 200 20"
                                            fill="none"
                                            stroke="#3b82f6"
                                            strokeWidth="3"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                        />
                                        <circle cx="100" cy="25" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                                        <path d="M100 25 V 60" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                                    </svg>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold -mt-4">
                                        8.4s
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded bg-green-50 flex items-center justify-center text-green-600">
                                            <TrendingUp size={12} />
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-800">Set Daily Reminder</span>
                                    </div>
                                    {/* Mock Toggle */}
                                    <div className="w-8 h-4 bg-blue-600 rounded-full flex items-center justify-end px-0.5">
                                        <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
