import { SectionReveal } from '../ui/SectionReveal';
import { TrendingUp, DollarSign, BarChart3, RefreshCw, Puzzle, ShieldCheck } from 'lucide-react';

const benefits = [
    {
        icon: <TrendingUp className="w-5 h-5 text-white" />,
        title: "Increased efficiency",
        desc: "AI agents handle tasks instantly, speeding up delivery across workflows."
    },
    {
        icon: <DollarSign className="w-5 h-5 text-white" />,
        title: "Lower Operational Costs",
        desc: "Automate repetitive work and scale operations without scaling your headcount."
    },
    {
        icon: <BarChart3 className="w-5 h-5 text-white" />,
        title: "Smarter Decision-Making",
        desc: "Turn scattered data into actionable insights with AI-powered analysis."
    },
    {
        icon: <RefreshCw className="w-5 h-5 text-white" />,
        title: "24/7 Workflow Continuity",
        desc: "Run critical processes nonstop — even outside business hours."
    },
    {
        icon: <Puzzle className="w-5 h-5 text-white" />,
        title: "Seamless Integration",
        desc: "Connect with your current tools and systems in minutes, not months."
    },
    {
        icon: <ShieldCheck className="w-5 h-5 text-white" />,
        title: "Enterprise-Grade Security",
        desc: "Protect sensitive data with encrypted, compliant, and secure AI operations."
    }
];

export const BenefitsSectionV2 = () => {
    return (
        <section className="py-32 bg-white text-dark-primary overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <SectionReveal className="mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 block">Benefits</span>
                    <h2
                        className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-8 max-w-2xl leading-[1.1]"
                        style={{ fontFamily: "'Manrope', serif" }}
                    >
                        Let your team focus on what matters most
                    </h2>
                </SectionReveal>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {benefits.map((benefit, i) => (
                        <SectionReveal key={benefit.title} delay={i * 0.1}>
                            <div className="flex flex-col items-start text-left">
                                <div className="w-10 h-10 rounded-lg bg-[#1a1c23] flex items-center justify-center mb-8 shadow-lg shadow-black/5">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    {benefit.desc}
                                </p>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

            </div>
        </section>
    );
};
