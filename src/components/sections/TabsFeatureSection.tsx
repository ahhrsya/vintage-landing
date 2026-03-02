import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import feature1 from '../../assets/Feature-1.png';
import feature2 from '../../assets/Feature-2.png';
import feature3 from '../../assets/Feature-3.png';
import skyBackground from '../../assets/sky.jpg';

interface FeatureContent {
    id: string;
    label: string;
    title: string;
    description: string;
    quote?: string;
    accentColor: string;
    agentText: string;
    icon: React.ReactNode;
    image: string;
    list?: string[];
}

const features: FeatureContent[] = [
    {
        id: 'unstructured',
        label: 'Inbox',
        title: 'Family offices were never designed for unstructured data',
        description: 'Capital calls, quarterly statements, PDFs, emails, portals, spreadsheets — critical information lives everywhere, with no system that truly understands it.',
        quote: 'Legacy portfolio systems show numbers. Vintage runs the work behind them.',
        accentColor: 'blue',
        agentText: 'Vintage Agents processing unstructured data.',
        image: feature1,
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
    },
    {
        id: 'statements',
        label: 'Statements',
        title: 'Stop Chasing GPs for Statements',
        description: 'Let your agents handle it. Vintage automatically collects capital calls, distributions, and quarterly statements — flags stale marks, applies valuation and FX policies, and assembles reconciled, auditor-ready reporting with full provenance.',
        accentColor: 'blue',
        agentText: 'Valuation policy applied and marks reconciled.',
        image: feature2,
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>,
        list: [
            "Automatically chase GPs for missing or late statements",
            "Detect stale or inconsistent marks",
            "Apply valuation, FX, and accounting policies consistently",
            "Generate reconciled reports your auditor and bank will accept"
        ]
    },
    {
        id: 'wealth',
        label: 'Visibility',
        title: 'One Trusted View of Public & Private Wealth',
        description: 'A single, unified view across every entity, account, custodian, trust, and private-market investment.',
        accentColor: 'blue',
        agentText: 'Consolidated reporting and asset coverage active.',
        image: feature3,
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
        list: [
            "Cross-entity reporting and consolidation",
            "Public and private asset coverage",
            "Regulatory classification (MAS, FATCA, CRS)",
            "Secure, watermark-ready sharing"
        ]
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

            featureElements.forEach((el: Element, index: number) => {
                const element = el as HTMLElement;
                const rect = element.getBoundingClientRect();
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
        <section ref={sectionRef} className="bg-white text-dark-primary relative pb-32">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left: Scrolling Content */}
                    <div className="lg:w-1/2 space-y-[40vh] pb-[40vh]">
                        {features.map((feature, i) => (
                            <div key={feature.id} className="feature-text-block space-y-8 pt-40">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center 
                                        ${i === activeIndex ? 'bg-blue-500/10 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                                        {feature.icon}
                                    </div>
                                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors 
                                        ${i === activeIndex ? 'text-blue-600' : 'text-gray-400'}`}>
                                        {feature.label}
                                    </span>
                                </div>

                                <h3 className={`text-3xl md:text-5xl font-sans font-semibold leading-[1.1] tracking-tight transition-opacity duration-500 ${i === activeIndex ? 'opacity-100' : 'opacity-20'}`}>
                                    {feature.title}
                                </h3>

                                <div className={`space-y-6 transition-opacity duration-500 ${i === activeIndex ? 'opacity-100' : 'opacity-20'}`}>
                                    <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                                        {feature.description}
                                    </p>

                                    {feature.quote && (
                                        <div className="pl-6 border-l-2 border-gray-100 py-1">
                                            <p className="text-sm font-medium text-gray-400 italic leading-relaxed uppercase tracking-wide">
                                                {feature.quote}
                                            </p>
                                        </div>
                                    )}

                                    {feature.list && (
                                        <ul className="space-y-4 pt-4">
                                            {feature.list.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-800">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Sticky Mockup */}
                    <div className="hidden lg:block lg:w-1/2">
                        <div className="sticky top-[15vh] h-[70vh] flex items-center justify-center">
                            <div
                                className="rounded-xl relative overflow-hidden w-full h-full flex items-center justify-center p-12 bg-cover bg-center"
                                style={{ backgroundImage: `url(${skyBackground})` }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={features[activeIndex].id}
                                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 1.05, y: -30 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <img
                                            src={features[activeIndex].image}
                                            alt={features[activeIndex].label}
                                            className="max-w-full max-h-full object-contain pointer-events-none drop-shadow-2xl"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
