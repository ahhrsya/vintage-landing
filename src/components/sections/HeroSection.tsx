import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SectionReveal } from '../ui/SectionReveal';
import dashboardImg from '../../assets/Dashboard.png';
import { UnicornScene } from 'unicornstudio-react';

export const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 bg-dark-primary overflow-hidden min-h-[120vh]">
            {/* Background Unicorn Studio Effect - Positioned at the very top of the section */}
            <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[140%] h-[1200px] z-0 pointer-events-none opacity-100">
                <div className="w-full h-full relative">
                    <UnicornScene projectId="6ocpWTjaHpQEGn7yK5Gz" className="w-full h-full" />
                    {/* Subtle glow at the top horizon */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />
                </div>
            </div>

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

                <SectionReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32 pointer-events-auto">
                    <Button variant="primary" size="lg" className="h-14 px-10 text-base">Request a Demo</Button>
                    <Button variant="outline" size="lg" className="h-14 px-10 text-base">Watch Overview →</Button>
                </SectionReveal>

                {/* Dashboard Mockup without Frame */}
                <SectionReveal delay={0.5} className="relative max-w-5xl mx-auto pointer-events-auto px-4">
                    <div className="relative z-10 rounded-2xl shadow-[0_0_100px_rgba(37,99,235,0.1)] overflow-hidden border border-white/5 bg-dark-primary">
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
