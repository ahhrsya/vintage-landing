import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

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
                <div className="flex items-center gap-2 pl-4 cursor-pointer">
                    <div className="flex items-center font-bold text-xl text-black tracking-tight">
                        <svg className="w-6 h-6 mr-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Finage
                        <span className="ml-2 pl-2 border-l border-gray-200 text-gray-400 font-medium">Work</span>
                    </div>
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
