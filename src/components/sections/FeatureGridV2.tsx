import { SectionReveal } from '../ui/SectionReveal';
import { MockCard, DonutChart } from '../ui/MockDashboard';

export const FeatureGridV2 = () => {
    return (
        <section className="py-32 bg-white text-dark-primary overflow-hidden border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Section Header */}
                <SectionReveal className="text-center mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 block">Features</span>
                    <h2
                        className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-[1.1]"
                        style={{ fontFamily: "'Manrope', serif" }}
                    >
                        The Core Platform for <br />
                        Modern Family Offices
                    </h2>
                </SectionReveal>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                    {/* Card 1: Data Ingestion */}
                    <SectionReveal delay={0.1} className="h-full">
                        <div className="bg-[#f8f9fa] rounded-[32px] p-10 h-full flex flex-col justify-between border border-gray-50 hover:border-gray-200 transition-colors group">
                            <div className="mb-12 relative flex justify-center">
                                <MockCard className="w-full max-w-sm bg-white border-gray-100 shadow-sm p-8">
                                    <div className="grid grid-cols-2 gap-8 items-center">
                                        <div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Data Points</span>
                                            <span className="text-4xl font-extrabold text-gray-900 mb-6 block tracking-tighter">4,209</span>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-sm bg-dark-primary" />
                                                    <span className="text-[10px] font-bold text-gray-600">62% New</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-sm bg-blue-500" />
                                                    <span className="text-[10px] font-bold text-gray-600">13% Active</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-sm bg-gray-200" />
                                                    <span className="text-[10px] font-bold text-gray-600">23% Inactive</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="relative w-32 h-32 scale-110">
                                                <DonutChart />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 bg-white rounded-full shadow-inner" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </MockCard>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Family offices were never designed for unstructured data</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    Custodians, fund admins, and GP portals all deliver data differently — different formats, different schedules, different levels of detail. Vintage ingests, normalizes, and reconciles it all automatically.
                                </p>
                            </div>
                        </div>
                    </SectionReveal>

                    {/* Card 2: Statements */}
                    <SectionReveal delay={0.2} className="h-full">
                        <div className="bg-[#f8f9fa] rounded-[32px] p-10 h-full flex flex-col justify-between border border-gray-50 hover:border-gray-200 transition-colors group">
                            <div className="mb-12 relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <div className="p-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Workflow Engine</div>
                                </div>
                                <div className="p-0">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-50">
                                                <th className="px-4 py-3 text-[9px] font-bold text-gray-400 uppercase">ID</th>
                                                <th className="px-4 py-3 text-[9px] font-bold text-gray-400 uppercase">Name</th>
                                                <th className="px-4 py-3 text-[9px] font-bold text-gray-400 uppercase">Type</th>
                                                <th className="px-4 py-3 text-[9px] font-bold text-gray-400 uppercase">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[10px] font-medium text-gray-600">
                                            {[
                                                { id: 'OX01', name: 'Goldman Sachs PB', type: 'Electric', status: 'Complete' },
                                                { id: 'OX02', name: 'JP Morgan Custody', type: 'Book', status: 'Processing' },
                                                { id: 'OX03', name: 'Northern Trust', type: 'Medicine', status: 'Complete' },
                                                { id: 'OX04', name: 'Blackstone Fund', type: 'Mobile', status: 'Complete' },
                                                { id: 'OX05', name: 'Citadel Securities', type: 'Watch', status: 'Processing' },
                                            ].map((row, i) => (
                                                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                                    <td className="px-4 py-3 font-bold text-gray-400">{row.id}</td>
                                                    <td className="px-4 py-3 text-gray-900">{row.name}</td>
                                                    <td className="px-4 py-3">{row.type}</td>
                                                    <td className="px-4 py-3">
                                                        <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase ${row.status === 'Complete' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stop Chasing GPs for Statements</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    Capital calls. Distributions. NAV statements. They arrive in every format imaginable — PDFs, emails, portal downloads. Vintage extracts, classifies, and books them automatically.
                                </p>
                            </div>
                        </div>
                    </SectionReveal>
                </div>

                {/* Card 3: Large Horizontal (Portfolio Visibility) */}
                <SectionReveal delay={0.3}>
                    <div className="bg-[#f8f9fa] rounded-[40px] p-12 lg:p-16 border border-gray-50 hover:border-gray-200 transition-all group overflow-hidden relative">
                        {/* Background subtle gradient for large card */}
                        <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    One Trusted View of Public & Private Wealth
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-medium max-w-lg">
                                    For the first time, see every asset — public equities, fixed income, private equity, real estate, digital assets — in a single, real-time view. Vintage provides full portfolio transparency across all asset classes.
                                </p>
                            </div>

                            <div className="relative">
                                {/* Large Wave Chart Visual */}
                                <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-500/5 border border-gray-100">
                                    <div className="flex justify-between items-center mb-10">
                                        <div className="flex gap-4">
                                            <div className="w-2 h-10 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="w-full h-1/2 bg-blue-500" />
                                            </div>
                                            <div className="w-2 h-10 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="w-full h-3/4 bg-blue-500" />
                                            </div>
                                        </div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Utilization</div>
                                    </div>

                                    <div className="relative h-48 w-full border-b border-l border-gray-50 mb-6">
                                        <svg viewBox="0 0 400 150" className="w-full h-full">
                                            <defs>
                                                <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M0 100 Q 50 60 100 90 T 200 70 T 300 110 T 400 50"
                                                fill="none"
                                                stroke="#111827"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M0 100 Q 50 60 100 90 T 200 70 T 300 110 T 400 50 V 150 H 0 Z"
                                                fill="url(#waveGradient)"
                                            />
                                            {/* Data points */}
                                            <circle cx="100" cy="90" r="4" fill="#3b82f6" />
                                            <circle cx="200" cy="70" r="4" fill="#3b82f6" />
                                            <circle cx="300" cy="110" r="4" fill="#3b82f6" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-between px-2">
                                        {['18 June', '19 June', '20 June', '21 June', '22 June', '23 June'].map(date => (
                                            <span key={date} className="text-[9px] font-bold text-gray-400 uppercase">{date}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionReveal>

            </div>
        </section>
    );
};
