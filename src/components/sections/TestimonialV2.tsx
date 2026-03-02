import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionReveal } from '../ui/SectionReveal';

const testimonials = [
    {
        name: "Dr. Ronak Bhatt",
        role: "Founder, Chancellor & CEO, Tetra Institute",
        quote: "We experimented with other tools, but at the end of the day, Vintage was a clear winner on the efficiency rate. If they continue doing what they're doing, they'll have a place with us forever.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Sarah Jenkins",
        role: "Managing Director, Peak Wealth",
        quote: "The level of customization we get with Vintage is unparalleled. It's not just a platform; it's a partner that understands the specific needs of our family office structure.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Michael Chen",
        role: "Director of Operations, Heritage Global",
        quote: "Managing assets across three continents used to be a nightmare of consolidation. Now, it happens in real-time. Vintage has fundamentally changed how we operate.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
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
                        A platform family offices <br /> can finally <span className="italic">rely on.</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto font-medium">
                        Join 100+ forward-thinking family offices maximizing their financial power.
                    </p>
                </SectionReveal>

                {/* Main Content */}
                <div className="w-full relative">
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
                                <div className="lg:col-span-4 h-[400px] md:h-[550px]">
                                    <div className="w-full h-full rounded-[32px] overflow-hidden shadow-xl border border-gray-100">
                                        <img
                                            src={testimonials[index].image}
                                            alt={testimonials[index].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Right Side: Content Card */}
                                <div className="lg:col-span-8 bg-[#F2F3F5] rounded-[32px] p-8 md:p-14 relative flex flex-col justify-between border border-gray-50 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

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
                                                    className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center text-white hover:bg-blue-600 hover:shadow-lg transition-all"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-2xl md:text-3xl lg:text-[40px] font-bold leading-[1.3] text-gray-500 tracking-tight">
                                            "{testimonials[index].quote}"
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
                </div>

            </div>
        </section>
    );
};
