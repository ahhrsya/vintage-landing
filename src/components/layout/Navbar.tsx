import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

import logo from '../../assets/logo-hero.png';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-8 left-0 right-0 z-50 px-6 transition-all duration-300">
            <nav
                className={`max-w-[1000px] mx-auto transition-all duration-300 rounded-full px-4 py-2 flex items-center justify-between border ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-xl py-3'
                    : 'bg-white border-transparent py-4 shadow-lg'
                    }`}
            >
                {/* Logo Area */}
                <div className="flex items-center pl-4 cursor-pointer">
                    <img src={logo} alt="Vintage" className="h-10 w-auto object-contain" />
                </div>

                {/* Menu Items */}
                <div className="hidden md:flex items-center gap-6">
                    {['Case studies', 'How to start', 'Reviews', 'Benefits', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                            className="text-[13px] font-bold text-gray-600 hover:text-black transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Action Button */}
                <div className="pr-1">
                    <Button variant="primary" className="rounded-full px-8 bg-black border-black text-white text-sm font-bold h-11">
                        Contact
                    </Button>
                </div>
            </nav>
        </div>
    );
};
