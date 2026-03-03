import { motion } from 'framer-motion';
import dashboardUpdate from '../../assets/dashboard_upadtee.png';

export const HeroV3 = () => {
    return (
        <section className="relative pt-40 pb-32 bg-[#09090B] overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                {/* Badge Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[11px] font-bold text-white/60 tracking-widest uppercase">
                            Trusted by Leading Single and Multi-Family Offices
                        </span>
                    </div>
                </motion.div>

                {/* H1 Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-['Instrument_Serif'] font-medium text-white mb-8 tracking-tight leading-[1.05]"
                >
                    The Agentic Operating <br />
                    System for <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Family Offices</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12 font-medium leading-relaxed font-['DM_Sans']"
                >
                    Consolidate every asset, automate every workflow, and close your books in hours — not weeks. Purpose-built for the complexity of private wealth.
                </motion.p>

                {/* Buttons Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
                >
                    <button className="w-full sm:w-auto px-8 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 active:scale-95 text-lg">
                        Request a Demo
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 border border-white/5 transition-all flex items-center justify-center gap-2 group active:scale-95 text-lg">
                        Watch Overview <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>

                {/* Browser Mockup Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Mockup with Image Integration */}
                    <div className="bg-[#111113] border border-white/10 rounded-2xl shadow-3xl overflow-hidden p-1">
                        {/* Browser Header Bar */}
                        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1A1A1C] border-b border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] opacity-60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] opacity-60" />
                            <div className="ml-4 text-[10px] text-white/20 font-bold uppercase tracking-widest">finage.app — dashboard</div>
                        </div>

                        {/* Dashboard Image */}
                        <div className="bg-[#09090B] overflow-hidden">
                            <img
                                src={dashboardUpdate}
                                alt="Finage Dashboard Overview"
                                className="w-full h-auto block opacity-90 transition-opacity hover:opacity-100"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
