import { Button } from '../ui/Button';
import { SectionReveal } from '../ui/SectionReveal';
import ctaImg from '../../assets/cta.png';

export const CTASection = () => {
    return (
        <section className="relative bg-black overflow-hidden w-full">
            {/* The Image defines the height of the section */}
            <div className="w-full h-full">
                <img
                    src={ctaImg}
                    alt="Finage CTA"
                    className="w-full h-auto block min-h-[500px] object-cover md:object-fill"
                />
            </div>

            {/* Content Layer (Absolute positioned over the image) */}
            <div className="absolute inset-0 z-10 flex items-center bg-black/30 md:bg-transparent">
                <div className="max-w-[1200px] mx-auto px-6 w-full">
                    <div className="max-w-xl md:max-w-2xl text-left">
                        <SectionReveal delay={0.1}>
                            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/10 border border-white/5 backdrop-blur-md mb-6 md:mb-10">
                                <span className="text-white/80 text-[10px] md:text-sm font-medium">Introducing Agentic Workflows for Wealth</span>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.2}>
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-semibold leading-[1.1] tracking-tight text-white mb-6 md:mb-10">
                                Close Faster. <br />
                                Operate Smarter.
                            </h2>
                        </SectionReveal>

                        <SectionReveal delay={0.3}>
                            <p className="text-sm md:text-xl text-white/70 mb-8 md:mb-14 leading-relaxed max-w-md">
                                Vintage turns fragmented data into an operating system — and manual work into automation.
                            </p>
                        </SectionReveal>

                        <SectionReveal delay={0.4} className="flex flex-col sm:flex-row items-center gap-4">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 text-sm md:text-base font-bold bg-[#007AFF] border-[#007AFF] text-white hover:bg-[#007AFF]/90 shadow-xl shadow-blue-500/20">
                                Join Waitlist
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 text-sm md:text-base font-bold bg-white border-white !text-black hover:bg-white/90 shadow-xl">
                                View Demo Dashboard
                            </Button>
                        </SectionReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
