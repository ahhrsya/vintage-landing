import { useState, useEffect } from 'react';

export const NavbarV3 = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#09090B]/80 backdrop-blur-md py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center font-bold text-white">
                        F
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-500 transition-colors">
                        Finage
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Features', 'Customers', 'Company', 'Docs', 'Pricing'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-bold text-white/80 hover:text-white transition-all px-4 py-2 hover:bg-white/5 rounded-lg active:scale-95">
                        Log in
                    </button>
                    <button className="bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};
