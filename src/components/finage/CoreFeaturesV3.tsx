import { motion } from 'framer-motion';

const FeatureRow = ({ heading, body, bullets, visual, reverse = false, delay = 0.1 }: any) => {
    return (
        <div className="py-24 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
                initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay }}
                className={`${reverse ? 'lg:order-last' : ''} text-left`}
            >
                <h3 className="text-3xl md:text-5xl font-['Instrument_Serif'] font-medium text-[#111111] mb-8 tracking-tight leading-[1.1]">
                    {heading}
                </h3>
                <p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed max-w-lg">
                    {body}
                </p>
                <ul className="space-y-4">
                    {bullets.map((bullet: string, i: number) => (
                        <li key={i} className="flex items-start gap-4">
                            <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-1">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <span className="text-sm font-bold text-gray-700 leading-relaxed uppercase tracking-wide">{bullet}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay }}
                className="relative h-full"
            >
                {visual}
            </motion.div>
        </div>
    );
};

export const CoreFeaturesV3 = () => {
    return (
        <section className="py-32 bg-[#F8F9FA] text-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Container */}
                <div className="text-center max-w-4xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[12px] font-bold text-blue-500 uppercase tracking-widest block mb-6">
                            THE CORE
                        </span>
                        <h2
                            className="text-5xl md:text-6xl font-['Instrument_Serif'] font-medium text-[#111111] mb-10 tracking-tight leading-[1.05]"
                        >
                            The Agentic Operating System <br /> for Family Offices
                        </h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto font-['DM_Sans']">
                            Engineered for the complexity of private wealth. Every feature is built to handle multi-entity, multi-asset class, and multi-jurisdictional operations — autonomously.
                        </p>
                    </motion.div>
                </div>

                {/* Feature 1 */}
                <FeatureRow
                    heading="Family offices were never designed for unstructured data"
                    body="Custodians, fund admins, and GP portals all deliver data differently — different formats, different schedules, different levels of detail. Finage ingests, normalizes, and reconciles it all automatically."
                    bullets={[
                        "Ingests data from custodians, fund admins, and GP portals automatically",
                        "Normalizes across formats — PDFs, spreadsheets, API feeds",
                        "Flags discrepancies and exceptions for review"
                    ]}
                    visual={<FeatureOneVisual />}
                />

                {/* Feature 2 */}
                <FeatureRow
                    reverse
                    heading="Stop Chasing GPs for Statements"
                    body="Capital calls. Distributions. NAV statements. They arrive in every format imaginable — PDFs, emails, portal downloads. Finage extracts, classifies, and books them automatically."
                    bullets={[
                        "Extracts data from capital call notices and distribution statements",
                        "Automatically classifies and books transactions",
                        "Tracks commitment pacing and unfunded obligations"
                    ]}
                    visual={<FeatureTwoVisual />}
                />

                {/* Feature 3 */}
                <FeatureRow
                    heading="One Trusted View of Public & Private Wealth"
                    body="For the first time, see every asset — public equities, fixed income, private equity, real estate, digital assets — in a single, real-time view."
                    bullets={[
                        "Full portfolio transparency across all asset classes",
                        "Real-time mark-to-market and fair value tracking",
                        "Aggregated reporting and family-level dashboards",
                        "Look-through into fund-of-fund structures"
                    ]}
                    visual={<FeatureThreeVisual />}
                />
            </div>
        </section>
    );
};

const FeatureOneVisual = () => (
    <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-blue-500/5 border border-gray-100 flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Data Sources Connected</div>
                <div className="text-3xl font-extrabold text-[#111]">147</div>
                <div className="h-1.5 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[85%]" />
                </div>
            </div>
            <div className="space-y-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Records Processed</div>
                <div className="text-3xl font-extrabold text-[#111]">2.4M</div>
                <div className="h-1.5 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[92%]" />
                </div>
            </div>
        </div>
        <div className="bg-[#F8F9FA] rounded-[32px] overflow-hidden border border-gray-100 p-0 shadow-inner">
            <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-white border-b border-gray-100">
                    <tr>
                        <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-widest text-[9px]">Source</th>
                        <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-widest text-[9px] text-right">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-bold overflow-hidden">
                    {[
                        { name: "Goldman Sachs PB", status: "Synced", color: "text-green-500 bg-green-50" },
                        { name: "JP Morgan Custody", status: "Synced", color: "text-green-500 bg-green-50" },
                        { name: "Northern Trust", status: "Syncing", color: "text-blue-500 bg-blue-50" },
                        { name: "Blackstone Fund Admin", status: "Synced", color: "text-green-500 bg-green-50" },
                        { name: "Citadel Securities", status: "Queued", color: "text-yellow-500 bg-yellow-50" }
                    ].map((row, i) => (
                        <tr key={i} className="bg-white group">
                            <td className="px-6 py-4 text-gray-900">{row.name}</td>
                            <td className="px-6 py-4 text-right">
                                <span className={`px-2.5 py-1 rounded-full text-[8px] uppercase tracking-widest border border-current/10 ${row.color}`}>
                                    {row.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const FeatureTwoVisual = () => (
    <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-blue-500/5 border border-gray-100 flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Statements Processed</div>
                <div className="text-3xl font-extrabold text-[#111]">1,847</div>
                <div className="h-1.5 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[78%]" />
                </div>
            </div>
            <div className="space-y-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Accuracy Rate</div>
                <div className="text-3xl font-extrabold text-[#111]">99.7%</div>
                <div className="h-1.5 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[99%]" />
                </div>
            </div>
        </div>
        <div className="bg-[#F8F9FA] rounded-[32px] overflow-hidden border border-gray-100 p-0 shadow-inner">
            <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-white border-b border-gray-100">
                    <tr>
                        <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-widest text-[9px]">Document</th>
                        <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-widest text-[9px] text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-bold overflow-hidden">
                    {[
                        { name: "Capital Call — Fund VII", action: "Processed", color: "text-green-500 bg-green-50" },
                        { name: "Q3 NAV Statement", action: "Validated", color: "text-green-500 bg-green-50" },
                        { name: "Distribution Notice", action: "Reviewing", color: "text-blue-500 bg-blue-50" },
                        { name: "K-1 Tax Document", action: "Queued", color: "text-yellow-500 bg-yellow-50" }
                    ].map((row, i) => (
                        <tr key={i} className="bg-white group">
                            <td className="px-6 py-4 text-gray-900">{row.name}</td>
                            <td className="px-6 py-4 text-right">
                                <span className={`px-2.5 py-1 rounded-full text-[8px] uppercase tracking-widest border border-current/10 ${row.color}`}>
                                    {row.action}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const FeatureThreeVisual = () => (
    <div className="grid grid-cols-2 gap-6 p-10 bg-white rounded-3xl shadow-2xl shadow-blue-500/5 border border-gray-100">
        {[
            { label: "Public Equities", value: "$1.2B", h: "65%" },
            { label: "Private Markets", value: "$2.8B", h: "88%" },
            { label: "Real Estate", value: "$480M", h: "42%" },
            { label: "Digital Assets", value: "$220M", h: "30%" }
        ].map((card, i) => (
            <div key={i} className="p-6 bg-[#F8F9FA] rounded-2xl border border-gray-100 hover:border-blue-500/20 transition-all flex flex-col justify-between group h-32">
                <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{card.label}</div>
                    <div className="text-2xl font-extrabold text-[#111]">{card.value}</div>
                </div>
                <div className="h-1 bg-gray-200 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-blue-500 group-hover:bg-blue-600 transition-all" style={{ width: card.h }} />
                </div>
            </div>
        ))}
    </div>
);
