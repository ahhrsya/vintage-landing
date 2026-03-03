import { motion } from 'framer-motion';
import dashboardUpdate from '../../assets/dashboard_upadtee.png';

export const HeroV3 = () => {
    return (
        <section className="relative pt-40 pb-32 bg-[#09090B] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 relative z-10 text-center"
            >
                {/* Badge Container */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[11px] font-bold text-white/60 tracking-widest uppercase">
                            Trusted by Leading Single and Multi-Family Offices
                        </span>
                    </div>
                </div>

                {/* H1 Heading */}
                <h1
                    className="text-6xl md:text-7xl lg:text-8xl font-['Instrument_Serif'] font-medium text-white mb-8 tracking-tight leading-[1.05]"
                >
                    The Agentic Operating <br />
                    System for <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Family Offices</span>
                </h1>

                {/* Subtitle */}
                <p
                    className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12 font-medium leading-relaxed font-['DM_Sans']"
                >
                    Consolidate every asset, automate every workflow, and close your books in hours — not weeks. Purpose-built for the complexity of private wealth.
                </p>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
                    <motion.button
                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                        className="w-full sm:w-auto px-8 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-all active:scale-95 text-lg"
                    >
                        Request a Demo
                    </motion.button>
                    <motion.button
                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-2 group active:scale-95 text-lg"
                    >
                        Watch Overview <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </motion.button>
                </div>

                {/* Dashboard Image Only */}
                <div className="relative max-w-5xl mx-auto px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img
                            src={dashboardUpdate}
                            alt="Finage Dashboard Overview"
                            className="w-full h-auto block rounded-2xl shadow-2xl"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
