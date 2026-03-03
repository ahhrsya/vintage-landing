import { motion } from 'framer-motion';

export const CTAV3 = () => {
    return (
        <section className="py-40 bg-[#09090B] text-white overflow-hidden relative border-t border-white/5">
            {/* Background Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2
                        className="text-6xl md:text-7xl lg:text-[100px] font-['Instrument_Serif'] font-medium text-white mb-10 tracking-[ -0.04em] leading-none"
                    >
                        Close Faster. <br />
                        Operate <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Smarter.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-16 font-medium leading-relaxed font-['DM_Sans']">
                        Finage is the intelligent operating system built for family offices that refuse to settle for spreadsheets and legacy software.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="w-full sm:w-auto px-12 py-5 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/40 active:scale-95 text-lg"
                        >
                            Request a Demo
                        </motion.button>
                        <motion.button
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="w-full sm:w-auto px-12 py-5 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2 group active:scale-95 text-lg"
                        >
                            Talk to Sales <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
