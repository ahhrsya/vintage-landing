import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SectionReveal } from '../ui/SectionReveal';

const testimonials = [
    {
        name: "Sarah Smith",
        role: "Head of Accounts & Finance",
        quote: "From setup to launch, everything was effortless. The template had the design, functionality, and flexibility we needed — all without extra work.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "James Wilson",
        role: "Managing Director, Wealth Flow",
        quote: "The level of precision and automation Vintage provides has transformed our multi-family office operations. It's exactly what the industry was missing.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Elena Rodriguez",
        role: "Principal, Nexus Capital",
        quote: "Managing global assets is complex, but Vintage makes it feel simple. The integration and real-time reporting are second to none.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    }
];

export const TestimonialV2 = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-32 bg-white text-dark-primary overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <SectionReveal className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6 group cursor-default">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
                        Vintage Testimonials
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6">
                        Proven results, real experiences
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto font-medium">
                        Vintage connects you with the most advanced private wealth solutions, empowering seamless family office management.
                    </p>
                </SectionReveal>

                {/* Main Content */}
                <div className="max-w-5xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-transparent"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                {/* Left Side: Image */}
                                <div className="lg:col-span-5 h-[400px] md:h-[500px]">
                                    <div className="w-full h-full rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-gray-100">
                                        <img
                                            src={testimonials[index].image}
                                            alt={testimonials[index].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Right Side: Content Card */}
                                <div className="lg:col-span-7 bg-[#F2F3F5] rounded-[32px] p-8 md:p-14 relative flex flex-col justify-between border border-gray-50 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-12">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{testimonials[index].name}</h4>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{testimonials[index].role}</p>
                                            </div>

                                            {/* Navigation Arrows */}
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={prev}
                                                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-gray-900 hover:shadow-lg transition-all"
                                                >
                                                    <ChevronLeft size={20} />
                                                </button>
                                                <button
                                                    onClick={next}
                                                    className="w-10 h-10 rounded-full bg-gray-950 flex items-center justify-center text-white hover:bg-black hover:shadow-lg transition-all"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-2xl md:text-3xl lg:text-[40px] font-bold leading-[1.2] text-gray-500 tracking-tight">
                                            {testimonials[index].quote.split(' ').map((word, i) => (
                                                <span key={i} className={word === "effortless" || word === "precision" || word === "needed" ? "text-gray-950 underline decoration-blue-500/30 underline-offset-8" : ""}>{word} </span>
                                            ))}
                                        </p>
                                    </div>

                                    {/* Bottom Logo/Graphic */}
                                    <div className="mt-12 opacity-5">
                                        <svg width="100" height="40" viewBox="0 0 100 40" className="fill-current">
                                            <rect width="100" height="40" rx="4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Footer Row */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                        <div className="flex flex-wrap gap-4">
                            <div className="px-6 py-3 bg-[#f8f9fa] border border-gray-100 rounded-2xl flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-900">145+</span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global reach</span>
                            </div>
                            <div className="px-6 py-3 bg-[#f8f9fa] border border-gray-100 rounded-2xl flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-900">$68B</span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AUM Tracked</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 md:gap-12">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                                    <Star size={16} fill="currentColor" />
                                </div>
                                <div className="space-y-0.5">
                                    <div className="text-[11px] font-bold text-gray-900 flex items-center gap-1">
                                        4.8 <span className="text-gray-400">/ 5</span>
                                    </div>
                                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Google Reviews</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-green-50 text-green-600">
                                    <Star size={16} fill="currentColor" />
                                </div>
                                <div className="space-y-0.5">
                                    <div className="text-[11px] font-bold text-gray-900 flex items-center gap-1">
                                        4.9 <span className="text-gray-400">/ 5</span>
                                    </div>
                                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Trustpilot</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
