import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SectionReveal } from '../ui/SectionReveal';
import dashboardImg from '../../assets/Dashboard.png';
import { UnicornScene } from 'unicornstudio-react';

export const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 bg-dark-primary overflow-hidden">
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pointer-events-none">
                <SectionReveal delay={0.1}>
                    <Badge dot className="mb-8 pointer-events-auto">
                        Trusted by Leading Single and Multi-Family Offices
                    </Badge>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                    <h1 className="hero-h1 text-white mb-6 pointer-events-auto">
                        The Agentic Operating System for{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                            Family Offices
                        </span>
                    </h1>
                </SectionReveal>

                <SectionReveal delay={0.3}>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed pointer-events-auto">
                        Consolidate every asset, automate every workflow, and close your books in hours — not weeks.
                        Purpose-built for the complexity of private wealth.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 pointer-events-auto">
                    <Button variant="primary" size="lg">Request a Demo</Button>
                    <Button variant="outline" size="lg">Watch Overview →</Button>
                </SectionReveal>

                {/* Dashboard Mockup without Frame */}
                <SectionReveal delay={0.5} className="relative max-w-5xl mx-auto pointer-events-auto">
                    {/* Background Unicorn Studio Effect - Positioned behind the top of the mockup */}
                    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full h-[600px] z-0 pointer-events-none opacity-80">
                        <UnicornScene projectId="6ocpWTjaHpQEGn7yK5Gz" />
                    </div>

                    <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border border-white/5">
                        {/* Dashboard Image */}
                        <div className="bg-dark-primary">
                            <img
                                src={dashboardImg}
                                alt="Finage Dashboard"
                                className="w-full h-auto block"
                            />
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};
