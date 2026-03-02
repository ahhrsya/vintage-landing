import { SectionReveal } from '../ui/SectionReveal';
import { MockCard, MetricValue, StatusTag } from '../ui/MockDashboard';
import { ArrowRight } from 'lucide-react';

export const FeatureGridV2 = () => {
    return (
        <section className="py-32 bg-white text-dark-primary overflow-hidden border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Section Header */}
                <SectionReveal className="text-center mb-32">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 block">The Core Platform</span>
                    <h2
                        className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-[1.1]"
                        style={{ fontFamily: "'Manrope', serif" }}
                    >
                        The Agentic Operating System for Family Offices
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 font-medium">
                        Engineered for the complexity of private wealth. Every feature is built to handle
                        multi-entity, multi-asset class, and multi-jurisdictional operations — autonomously.
                    </p>
                </SectionReveal>

                <div className="space-y-48">
                    {/* Feature 1 */}
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <SectionReveal>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#1D2939] mb-8 leading-[1.1] tracking-tight">
                                Family offices were never designed for unstructured data
                            </h3>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium mb-10 max-w-lg">
                                Custodians, fund admins, and GP portals all deliver data differently — different formats, different schedules, different levels of detail. Vintage ingests, normalizes, and reconciles it all automatically.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Ingests data from custodians, fund admins, and GP portals automatically",
                                    "Normalizes across formats — PDFs, spreadsheets, API feeds",
                                    "Flags discrepancies and exceptions for review"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-600 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="px-8 py-4 bg-[#007AFF] text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
                                View use cases
                            </button>
                        </SectionReveal>
                        <SectionReveal delay={0.2} className="relative">
                            <MockCard title="Data Extraction Engine" className="bg-white border-gray-100 shadow-2xl">
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <MockCard className="bg-dark-primary border-none shadow-none p-3">
                                        <MetricValue value="147" label="Data Sources" />
                                        <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-[85%] h-full bg-blue-500" />
                                        </div>
                                    </MockCard>
                                    <MockCard className="bg-dark-primary border-none shadow-none p-3">
                                        <MetricValue value="2.4M" label="Records" />
                                        <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-[92%] h-full bg-green-500" />
                                        </div>
                                    </MockCard>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Goldman Sachs PB', status: 'Synced' },
                                        { name: 'JP Morgan Custody', status: 'Synced' },
                                        { name: 'Northern Trust', status: 'Syncing' },
                                        { name: 'Blackstone Fund Admin', status: 'Synced' },
                                        { name: 'Citadel Securities', status: 'Queued' },
                                    ].map((row) => (
                                        <div key={row.name} className="flex items-center justify-between text-[11px] pb-2 border-b border-gray-100 last:border-0 last:pb-0">
                                            <span className="text-gray-500 font-bold">{row.name}</span>
                                            <StatusTag status={row.status} />
                                        </div>
                                    ))}
                                </div>
                            </MockCard>
                        </SectionReveal>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <SectionReveal delay={0.2} className="order-2 md:order-1 relative">
                            <MockCard title="Statement Intelligence" className="bg-white border-gray-100 shadow-2xl">
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <MockCard className="bg-dark-primary border-none shadow-none p-3">
                                        <MetricValue value="1,847" label="Processed" />
                                        <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-[78%] h-full bg-blue-500" />
                                        </div>
                                    </MockCard>
                                    <MockCard className="bg-dark-primary border-none shadow-none p-3">
                                        <MetricValue value="99.7%" label="Accuracy" />
                                        <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-[99%] h-full bg-green-500" />
                                        </div>
                                    </MockCard>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Capital Call — Fund VII', status: 'Complete' },
                                        { name: 'Q3 NAV Statement', status: 'Validated' },
                                        { name: 'Distribution Notice', status: 'Reviewing' },
                                        { name: 'K-1 Tax Document', status: 'Queued' },
                                    ].map((row) => (
                                        <div key={row.name} className="flex items-center justify-between text-[11px] pb-2 border-b border-gray-100 last:border-0 last:pb-0">
                                            <span className="text-gray-500 font-bold">{row.name}</span>
                                            <StatusTag status={row.status} />
                                        </div>
                                    ))}
                                </div>
                            </MockCard>
                        </SectionReveal>
                        <SectionReveal className="order-1 md:order-2">
                            <h3 className="text-3xl md:text-5xl font-bold text-[#1D2939] mb-8 leading-[1.1] tracking-tight">
                                Stop Chasing GPs for Statements
                            </h3>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium mb-10 max-w-lg">
                                Capital calls. Distributions. NAV statements. They arrive in every format imaginable — PDFs, emails, portal downloads. Vintage extracts, classifies, and books them automatically.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Extracts data from capital call notices and distribution statements",
                                    "Automatically classifies and books transactions",
                                    "Tracks commitment pacing and unfunded obligations"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-600 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap items-center gap-8">
                                <button className="px-8 py-4 bg-[#007AFF] text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
                                    View use cases
                                </button>
                                <div className="flex items-center gap-3 text-sm font-bold text-[#1D2939] cursor-pointer group">
                                    <span>Learn more</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </SectionReveal>
                    </div>

                    {/* Feature 3 */}
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <SectionReveal>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#1D2939] mb-8 leading-[1.1] tracking-tight">
                                One Trusted View of Public & Private Wealth
                            </h3>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium mb-10 max-w-lg">
                                For the first time, see every asset — public equities, fixed income, private equity, real estate, digital assets — in a single, real-time view.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Full portfolio transparency across all asset classes",
                                    "Real-time mark-to-market and fair value tracking",
                                    "Aggregated reporting and family-level dashboards",
                                    "Look-through into fund-of-fund structures"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-600 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap items-center gap-8">
                                <button className="px-8 py-4 bg-[#007AFF] text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
                                    View use cases
                                </button>
                                <div className="flex items-center gap-3 text-sm font-bold text-[#1D2939] cursor-pointer group">
                                    <span>Learn more</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </SectionReveal>
                        <SectionReveal delay={0.2} className="relative">
                            <MockCard title="Global Allocation" className="bg-white border-gray-100 shadow-2xl">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { name: 'Public Equities', val: '$1.2B', p: '65%' },
                                        { name: 'Private Markets', val: '$2.8B', p: '88%' },
                                        { name: 'Real Estate', val: '$480M', p: '42%' },
                                        { name: 'Digital Assets', val: '$220M', p: '30%' },
                                    ].map((asset) => (
                                        <MockCard key={asset.name} className="bg-dark-primary border-none shadow-none p-4">
                                            <MetricValue value={asset.val} label={asset.name} />
                                            <div className="mt-3 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500" style={{ width: asset.p }} />
                                            </div>
                                        </MockCard>
                                    ))}
                                </div>
                            </MockCard>
                        </SectionReveal>
                    </div>
                </div>

            </div>
        </section>
    );
};
