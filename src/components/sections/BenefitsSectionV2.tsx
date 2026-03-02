import { SectionReveal } from '../ui/SectionReveal';
import { Database, BarChart3, Send, ShieldCheck, History, Shield } from 'lucide-react';

const benefits = [
    {
        icon: <Database className="w-5 h-5 text-white" />,
        title: "Automated Ingestion",
        desc: "PDFs, emails, and API feeds — processed, classified, and routed automatically."
    },
    {
        icon: <BarChart3 className="w-5 h-5 text-white" />,
        title: "Intelligent Analytics",
        desc: "Query your data in natural language. Get answers with full attribution."
    },
    {
        icon: <Send className="w-5 h-5 text-white" />,
        title: "Automation & Outreach",
        desc: "Scheduled reports, alerts, and stakeholder communications — on your terms."
    },
    {
        icon: <ShieldCheck className="w-5 h-5 text-white" />,
        title: "Regulatory Reporting",
        desc: "FATCA, CRS, Form PF — generated automatically from your verified data."
    },
    {
        icon: <History className="w-5 h-5 text-white" />,
        title: "Audit Trail",
        desc: "Every change, every access, every calculation — fully traceable and immutable."
    },
    {
        icon: <Shield className="w-5 h-5 text-white" />,
        title: "Enterprise-Grade Security",
        desc: "Bank-grade security with 256-bit encryption and SOC 2 Type II compliance."
    }
];

export const BenefitsSectionV2 = () => {
    return (
        <section className="py-32 bg-white text-dark-primary overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <SectionReveal className="mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 block">Foundation</span>
                    <h2
                        className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6 max-w-2xl leading-[1.1]"
                        style={{ fontFamily: "'Manrope', serif" }}
                    >
                        Automation, Built on Trustworthy Data
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-xl">
                        Every automated workflow is powered by verified, reconciled data. No black boxes.
                    </p>
                </SectionReveal>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {benefits.map((benefit, i) => (
                        <SectionReveal key={benefit.title} delay={i * 0.1}>
                            <div className="flex flex-col items-start text-left">
                                <div className="w-10 h-10 rounded-lg bg-[#007AFF] flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
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
