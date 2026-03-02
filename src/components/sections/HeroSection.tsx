import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SectionReveal } from '../ui/SectionReveal';
import heroBg from '../../assets/backgroud-hero.png';

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 bg-dark-primary overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/20 via-transparent to-dark-primary" />
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
                <SectionReveal delay={0.1}>
                    <Badge dot className="mb-8">
                        Trusted by Leading Single and Multi-Family Offices
                    </Badge>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                    <h1 className="hero-h1 text-white mb-6">
                        The Agentic Operating System for{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                            Family Offices
                        </span>
                    </h1>
                </SectionReveal>

                <SectionReveal delay={0.3}>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                        Consolidate every asset, automate every workflow, and close your books in hours — not weeks.
                        Purpose-built for the complexity of private wealth.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg">Request a Demo</Button>
                    <Button variant="outline" size="lg">Watch Overview →</Button>
                </SectionReveal>
            </div>
        </section>
    );
};
