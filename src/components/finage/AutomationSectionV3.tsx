import { motion } from 'framer-motion';
import { Database, BarChart3, Send, ShieldCheck, History } from 'lucide-react';

const cards = [
    {
        icon: <Database className="w-8 h-8 text-blue-500" />,
        title: "Automated Ingestion",
        desc: "PDFs, emails, and API feeds — processed, classified, and routed automatically."
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
        title: "Intelligent Analytics",
        desc: "Query your data in natural language. Get answers with full attribution."
    },
    {
        icon: <Send className="w-8 h-8 text-blue-500" />,
        title: "Automation & Outreach",
        desc: "Scheduled reports, alerts, and stakeholder communications — on your terms."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
        title: "Regulatory Reporting",
        desc: "FATCA, CRS, Form PF — generated automatically from your verified data."
    },
    {
        icon: <History className="w-8 h-8 text-blue-500" />,
        title: "Audit Trail",
        desc: "Every change, every access, every calculation — fully traceable and immutable."
    }
];

export const AutomationSectionV3 = () => {
    return (
        <section className="py-32 bg-white text-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Container */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-4xl md:text-5xl lg:text-7xl font-['Instrument_Serif'] font-medium text-[#111111] mb-10 tracking-tight leading-[1.05]"
                        >
                            Automation, Built on Trustworthy Data
                        </h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto font-['DM_Sans']">
                            Every automated workflow is powered by verified, reconciled data. No black boxes.
                        </p>
                    </motion.div>
                </div>

                {/* Automation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {cards.slice(0, 3).map((card, i) => (
                        <Card key={card.title} {...card} delay={i * 0.1} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {cards.slice(3).map((card, i) => (
                        <Card key={card.title} {...card} delay={0.3 + i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ icon, title, desc, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="flex flex-col items-center text-center p-12 bg-[#F8F9FA] rounded-[32px] border border-gray-100 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
        >
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-blue-500/5 border border-gray-50 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-[#111] mb-6">{title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
                {desc}
            </p>
        </motion.div>
    );
};
