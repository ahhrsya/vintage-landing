import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import dashboardImg from '../../assets/Dashboard.png';

export const TabsFeatureSection = () => {
    return (
        <section className="py-24 bg-white text-dark-primary overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block">The Tabs Platform</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-primary">
                        Revenue automation,<br />from contract to close
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-600">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                            </div>
                            <span className="text-xs font-bold tracking-widest uppercase text-teal-600">Billing</span>
                        </div>

                        <h3 className="text-3xl font-bold leading-tight">
                            Generate clean, accurate invoices, without opening a PDF
                        </h3>

                        <p className="text-lg text-gray-500 leading-relaxed">
                            Automate billing based on executed contracts from your CRM. No manual data entry needed.
                        </p>

                        <Button variant="outline" className="rounded-full border-gray-200 hover:bg-gray-50 text-dark-primary group">
                            Explore Billing <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Button>
                    </motion.div>

                    {/* Right: Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="bg-gray-50 rounded-3xl p-4 md:p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                            <img
                                src={dashboardImg}
                                alt="Billing Automation"
                                className="w-full h-auto rounded-xl shadow-2xl border border-gray-200"
                            />

                            {/* Floating Agent Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-[200px] hidden md:block"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase text-gray-400">Invoice sent</span>
                                </div>
                                <p className="text-xs font-medium text-dark-primary">Tabs Agent automatically matched contract terms to billing.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
