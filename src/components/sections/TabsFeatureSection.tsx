import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import dashboardImg from '../../assets/Dashboard.png';

interface FeatureContent {
    id: string;
    label: string;
    title: string;
    description: string;
    accentColor: string;
    agentText: string;
    icon: React.ReactNode;
}

const features: FeatureContent[] = [
    {
        id: 'billing',
        label: 'Billing',
        title: 'Generate clean, accurate invoices, without opening a PDF',
        description: 'Automate billing based on executed contracts from your CRM. No manual data entry needed.',
        accentColor: 'teal',
        agentText: 'Tabs Agent automatically matched contract terms to billing.',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
    },
    {
        id: 'collections',
        label: 'Collections',
        title: 'Never lose track of a payment again',
        description: 'Automatic reminders and streamlined communication ensure your collections are always on schedule.',
        accentColor: 'blue',
        agentText: 'Tabs Agent detected an overdue invoice and sent a reminder.',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    },
    {
        id: 'reporting',
        label: 'Reporting',
        title: 'Real-time visibility into your revenue health',
        description: 'Deep insights and automated reporting give you the clarity needed to make data-driven decisions.',
        accentColor: 'indigo',
        agentText: 'Tabs Agent consolidated and generated your monthly revenue report.',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
    }
];

export const TabsFeatureSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Update active index based on scroll position of features
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const featureElements = sectionRef.current.querySelectorAll('.feature-text-block');
            const viewportHeight = window.innerHeight;

            let bestIndex = 0;
            let minDistance = Infinity;

            featureElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                const center = rect.top + rect.height / 2;
                const distanceFromCenter = Math.abs(center - viewportHeight / 2);

                if (distanceFromCenter < minDistance) {
                    minDistance = distanceFromCenter;
                    bestIndex = index;
                }
            });

            setActiveIndex(bestIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="bg-white text-dark-primary relative">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <div className="pt-32 pb-16 text-center">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block">The Tabs Platform</span>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-dark-primary">
                        Revenue automation,<br />from contract to close
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left: Scrolling Content */}
                    <div className="lg:w-1/2 space-y-[40vh] pb-[40vh]">
                        {features.map((feature, i) => (
                            <div key={feature.id} className="feature-text-block space-y-6 pt-20">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center 
                                        ${i === activeIndex ? 'bg-teal-500/10 text-teal-600' : 'bg-gray-100 text-gray-400'}`}>
                                        {feature.icon}
                                    </div>
                                    <span className={`text-xs font-bold tracking-widest uppercase transition-colors 
                                        ${i === activeIndex ? 'text-teal-600' : 'text-gray-400'}`}>
                                        {feature.label}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                    {feature.title}
                                </h3>

                                <p className="text-lg text-gray-500 leading-relaxed max-w-md">
                                    {feature.description}
                                </p>

                                <Button variant="outline" className={`rounded-full border-gray-200 hover:bg-gray-50 text-dark-primary group transition-opacity duration-500 ${i === activeIndex ? 'opacity-100' : 'opacity-30'}`}>
                                    Explore {feature.label} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </Button>
                            </div>
                        ))}
                    </div>

                    {/* Right: Sticky Mockup */}
                    <div className="hidden lg:block lg:w-1/2">
                        <div className="sticky top-[20vh] h-[60vh] flex items-center justify-center">
                            <div className="bg-gray-50 rounded-[40px] p-6 border border-gray-100 shadow-sm relative overflow-hidden w-full aspect-[4/3]">
                                <img
                                    src={dashboardImg}
                                    alt="Revenue Automation"
                                    className="w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-200"
                                />

                                {/* Dynamic Floating Agent Card */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={features[activeIndex].id}
                                        initial={{ opacity: 0, y: 20, x: 20 }}
                                        animate={{ opacity: 1, y: 0, x: 0 }}
                                        exit={{ opacity: 0, y: -20, x: 20 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 max-w-[220px]"
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                            </div>
                                            <span className="text-[10px] font-bold uppercase text-gray-400">Agent Action</span>
                                        </div>
                                        <p className="text-xs font-medium text-dark-primary leading-normal">
                                            {features[activeIndex].agentText}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Subtle indicator of which feature is active on the mockup itself if needed */}
                                <div className="absolute inset-x-8 top-8 flex gap-2">
                                    {features.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 flex-1 rounded-full transition-all duration-500 
                                                ${i === activeIndex ? 'bg-teal-500 w-full' : 'bg-gray-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
