import { motion } from 'framer-motion';
import { Shield, Lock, Globe, Key } from 'lucide-react';

const badges = [
    {
        icon: <Shield className="w-6 h-6 text-green-500" />,
        title: "SOC 2 Type II",
        desc: "Certified annually"
    },
    {
        icon: <Lock className="w-6 h-6 text-blue-500" />,
        title: "256-bit Encryption",
        desc: "At rest & in transit"
    },
    {
        icon: <Globe className="w-6 h-6 text-blue-400" />,
        title: "GDPR Compliant",
        desc: "EU data residency"
    },
    {
        icon: <Key className="w-6 h-6 text-purple-500" />,
        title: "SSO & MFA",
        desc: "Enterprise access control"
    }
];

export const SecuritySectionV3 = () => {
    return (
        <section className="py-32 bg-[#09090B] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Text Column */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[12px] font-bold text-blue-500 uppercase tracking-widest block mb-6">
                                ENTERPRISE SECURITY
                            </span>
                            <h2
                                className="text-4xl md:text-5xl lg:text-7xl font-['Instrument_Serif'] font-medium text-white mb-10 tracking-tight leading-[1.05]"
                            >
                                Built for the Security and Compliance Needs of Family Offices
                            </h2>
                            <p className="text-xl text-white/50 font-medium leading-relaxed max-w-xl font-['DM_Sans'] mb-12">
                                We understand the sensitivity of family office data. Finage is designed from the ground up with bank-grade security and full regulatory compliance.
                            </p>
                        </motion.div>

                        {/* Badges Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {badges.map((badge, i) => (
                                <motion.div
                                    key={badge.title}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-6 group hover:border-white/10 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-blue-500 transition-colors">
                                        {badge.icon}
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white mb-1 leading-none">{badge.title}</div>
                                        <div className="text-sm font-bold text-white/40 uppercase tracking-widest">{badge.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center"
                    >
                        {/* Animated Security Orb Visual */}
                        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
                            <div className="relative z-10 w-[200px] h-[200px] md:w-[350px] md:h-[350px] border-2 border-white/10 rounded-full flex items-center justify-center p-8 bg-black shadow-3xl shadow-blue-500/20">
                                <Shield className="w-32 h-32 md:w-64 md:h-64 text-blue-500/80 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
                                {/* Rotating rings */}
                                <div className="absolute inset-0 border-8 border-transparent border-t-blue-500/30 border-b-blue-600/30 rounded-full animate-spin [animation-duration:8s]" />
                                <div className="absolute -inset-10 border-4 border-transparent border-l-blue-400/20 border-r-blue-400/20 rounded-full animate-spin [animation-duration:12s] [animation-direction:reverse]" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
