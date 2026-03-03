import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

export const FooterV3 = () => {
    return (
        <footer className="py-32 bg-[#09090B] text-white relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Link Structure */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-20 mb-32">

                    {/* Branding Column */}
                    <div className="col-span-2 lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center font-bold text-white">
                                F
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-500 transition-colors">
                                Finage
                            </span>
                        </div>
                        <p className="text-white/40 font-medium leading-relaxed max-w-[280px]">
                            The agentic operating system built for the complexity of private wealth management.
                        </p>
                        <div className="flex items-center gap-6 pt-4">
                            <Twitter size={20} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
                            <Linkedin size={20} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
                            <Instagram size={20} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
                            <Facebook size={20} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
                        </div>
                    </div>

                    {/* Column 1: Product */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Integrations', 'Pricing', 'Changelog'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-white/50 hover:text-white font-medium transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Company */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Careers', 'Blog', 'Contact'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-white/50 hover:text-white font-medium transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-white/50 hover:text-white font-medium transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-xs text-white/20 font-bold uppercase tracking-widest">
                        © 2026 Finage. All rights reserved.
                    </div>
                    <div className="text-xs text-white/20 font-bold uppercase tracking-widest italic">
                        Built for families that think in generations.
                    </div>
                </div>

            </div>
        </footer>
    );
};
