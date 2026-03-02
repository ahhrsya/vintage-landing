import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import logo from '../../assets/logo-hero.png';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHomeOpen, setIsHomeOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when location changes
    useEffect(() => {
        setIsHomeOpen(false);
    }, [location]);

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
                    <Link to="/">
                        <img src={logo} alt="Vintage" className="h-10 w-auto object-contain" />
                    </Link>
                </div>

                {/* Menu Items */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Home Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsHomeOpen(!isHomeOpen)}
                            className="flex items-center gap-1 text-[13px] font-bold text-gray-600 hover:text-black transition-colors outline-none cursor-pointer"
                        >
                            Home
                            <motion.div
                                animate={{ rotate: isHomeOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={14} />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isHomeOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-4 w-40 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-2xl overflow-hidden py-2"
                                >
                                    <Link
                                        to="/"
                                        className="block px-4 py-3 text-[13px] font-bold text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                                    >
                                        Home V1
                                    </Link>
                                    <Link
                                        to="/v2"
                                        className="block px-4 py-3 text-[13px] font-bold text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                                    >
                                        Home V2
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

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
