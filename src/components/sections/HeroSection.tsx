import { useEffect, useRef } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SectionReveal } from '../ui/SectionReveal';
import dashboardImg from '../../assets/Dashboard.png';

declare global {
    interface Window {
        UnicornStudio: any;
    }
}

export const HeroSection = () => {
    const effectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load Unicorn Studio script manually
        const scriptId = 'unicorn-studio-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js';
            script.onload = () => {
                if (window.UnicornStudio && window.UnicornStudio.init) {
                    window.UnicornStudio.init();
                }
            };
            document.head.appendChild(script);
        } else if (window.UnicornStudio && window.UnicornStudio.init) {
            window.UnicornStudio.init();
        }
    }, []);

    return (
        <section className="relative pt-32 pb-20 bg-dark-primary overflow-hidden">
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pointer-events-none">
                <SectionReveal delay={0.1}>
                    <Badge dot className="mb-8 pointer-events-auto">
                        Trusted by Leading Single and Multi-Family Offices
                    </Badge>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                    <h1
                        style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 500,
                            letterSpacing: '-3px',
                            fontSize: '72px'
                        }}
                        className="text-white mb-8 pointer-events-auto leading-[1.05] max-w-4xl mx-auto drop-shadow-2xl"
                    >
                        The Agentic Operating System for{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                            Family Offices
                        </span>
                    </h1>
                </SectionReveal>

                <SectionReveal delay={0.3}>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed pointer-events-auto">
                        Consolidate every asset, automate every workflow, and close your books in hours — not weeks.
                        Purpose-built for the complexity of private wealth.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 pointer-events-auto">
                    <Button variant="primary" size="lg" className="h-14 px-10 text-base">Request a Demo</Button>
                    <Button variant="outline" size="lg" className="h-14 px-10 text-base">Watch Overview →</Button>
                </SectionReveal>

                {/* Dashboard Mockup without Frame */}
                <SectionReveal delay={0.5} className="relative max-w-5xl mx-auto pointer-events-auto mt-20 px-4">
                    {/* Background Unicorn Studio Effect - Manual Embed */}
                    <div className="absolute -top-[600px] left-1/2 -translate-x-1/2 z-[-1] pointer-events-none">
                        <div
                            ref={effectRef}
                            data-us-project="6ocpWTjaHpQEGn7yK5Gz"
                            style={{
                                width: '1440px',
                                height: '900px',
                                opacity: 1
                            }}
                            className="scale-75 md:scale-100 origin-center"
                        />
                    </div>

                    <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border border-white/5 bg-dark-primary">
                        {/* Dashboard Image */}
                        <img
                            src={dashboardImg}
                            alt="Finage Dashboard"
                            className="w-full h-auto block relative z-10"
                        />
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};
