import { motion } from 'framer-motion';

export const HomeV2 = () => {
    return (
        <div className="min-h-screen pt-40 bg-zinc-950 text-white flex flex-col items-center justify-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8">
                    Welcome to <span className="italic">Home V2</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                    This is a fresh canvas for your next landing page iteration.
                    Start building something amazing.
                </p>
                <div className="flex gap-4 justify-center">
                    <div className="px-8 py-4 bg-white text-black rounded-full font-bold cursor-pointer hover:bg-zinc-200 transition-colors">
                        Get Started
                    </div>
                    <div className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-full font-bold cursor-pointer hover:bg-zinc-800 transition-colors">
                        Learn More
                    </div>
                </div>
            </motion.div>

            <div className="mt-32 w-full max-w-6xl aspect-video bg-zinc-900 rounded-3xl border border-zinc-800 flex items-center justify-center text-zinc-700 font-medium">
                [ Dashboard Preview V2 Placeholder ]
            </div>
        </div>
    );
};
