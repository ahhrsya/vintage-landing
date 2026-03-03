import { motion } from 'framer-motion';

const stats = [
    { value: "$50B+", label: "AUM Tracked" },
    { value: "500+", label: "Integrations" },
    { value: "200+", label: "Family Offices Served" },
    { value: "99.9%", label: "Uptime SLA" },
];

export const StatsSectionV3 = () => {
    return (
        <section className="py-32 bg-white text-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Container */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[12px] font-bold text-blue-500 uppercase tracking-widest block mb-6">
                            CORE METRICS
                        </span>
                        <h2
                            className="text-4xl md:text-5xl font-['Instrument_Serif'] font-medium text-[#111111] mb-8 tracking-tight leading-[1.1]"
                        >
                            Engineered for the Complexity of <br />
                            Private Wealth
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-xl font-['DM_Sans'] pt-12">
                            Family office operations require a level of precision, security, and flexibility that legacy software simply can't deliver. We built the first operating system designed specifically for this complexity.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-gray-100">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="text-left"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-[#111111] mb-3 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
