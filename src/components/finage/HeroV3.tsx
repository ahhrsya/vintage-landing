import { motion } from 'framer-motion';

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
                    {/* Mockup Card */}
                    <div className="bg-[#111113] border border-white/10 rounded-2xl shadow-3xl overflow-hidden p-1">
                        {/* Traffic light header */}
                        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1A1A1C] border-b border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] opacity-60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] opacity-60" />
                        </div>

                        {/* Content inside mockup */}
                        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#09090B]">
                            {/* Card 1: Total AUM */}
                            <div className="bg-[#111113] border border-white/5 rounded-xl p-6 text-left hover:border-blue-500/30 transition-all group">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Total AUM</span>
                                <div className="text-3xl font-bold mb-1">$4.7B</div>
                                <div className="text-xs text-green-500 font-bold mb-4 flex items-center gap-1">
                                    <span className="text-sm">↑</span> 12.3% YTD
                                </div>
                                {/* Mini Bar Chart */}
                                <div className="flex items-end gap-1 h-12">
                                    {[30, 45, 25, 60, 40, 75, 50].map((h, i) => (
                                        <div key={i} className="flex-1 bg-blue-500/20 rounded-sm group-hover:bg-blue-500/40 transition-colors" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </div>

                            {/* Card 2: Asset Allocation */}
                            <div className="bg-[#111113] border border-white/5 rounded-xl p-6 text-left hover:border-blue-500/30 transition-all group relative overflow-hidden">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Asset Allocation</span>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-3xl font-bold mb-1 leading-none tracking-tight">Diversified</div>
                                        <div className="text-xs text-white/40 font-bold">7 Asset Classes</div>
                                    </div>
                                </div>
                                {/* Donut Chart Visual */}
                                <div className="mt-6 flex justify-center">
                                    <div className="w-24 h-24 rounded-full border-8 border-blue-500/20 relative flex items-center justify-center p-2">
                                        <div className="w-full h-full rounded-full" style={{ background: 'conic-gradient(#3B82F6 0% 65%, #1D4ED8 65% 85%, #1E3A8A 85% 100%)' }} />
                                        <div className="absolute inset-2 bg-[#111113] rounded-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Pending Tasks */}
                            <div className="bg-[#111113] border border-white/5 rounded-xl p-6 text-left hover:border-blue-500/30 transition-all group">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Pending Tasks</span>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-3xl font-bold">12</span>
                                    <span className="text-xs text-red-500 font-bold">3 overdue</span>
                                </div>
                                {/* Mini Table */}
                                <div className="space-y-3">
                                    {[
                                        { label: "K-1 Processing", status: "Processing", color: "text-blue-500" },
                                        { label: "Q4 Statements", status: "Complete", color: "text-green-500" },
                                        { label: "Capital Call #7", status: "Pending", color: "text-yellow-500" }
                                    ].map((row, i) => (
                                        <div key={i} className="flex items-center justify-between text-[10px] pb-2 border-b border-white/5 last:border-0 last:pb-0">
                                            <span className="text-white/60 font-medium">{row.label}</span>
                                            <span className={`font-bold uppercase tracking-widest ${row.color}`}>{row.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
