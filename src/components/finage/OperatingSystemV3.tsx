import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabId = 'record' | 'unstructured' | 'close';

interface TabContent {
    id: TabId;
    label: string;
    heading: string;
    body: string;
    link?: string;
    bullets?: string[];
    visual: any;
}

export const OperatingSystemV3 = () => {
    const [activeTab, setActiveTab] = useState<TabId>('record');

    const contents: Record<TabId, TabContent> = {
        record: {
            id: 'record',
            label: 'System of Record',
            heading: "System of Record",
            body: "Every position, transaction, document, and contact — consolidated in a single, auditable system. No more stitching together spreadsheets, PDFs, and portal logins.",
            visual: <RecordVisual />
        },
        unstructured: {
            id: 'unstructured',
            label: 'Unstructured to Structured',
            heading: "From Unstructured Documents to Structured Intelligence",
            body: "Finage reads PDFs, scans, and emails — and turns them into structured, reconciled data. AI-powered document intelligence, purpose-built for the family office.",
            link: "Explore document intelligence →",
            bullets: [
                "Automatically extracts data from PDFs, scans, emails",
                "Classifies and maps to your chart of accounts",
                "Flags exceptions with confidence scoring"
            ],
            visual: <UnstructuredVisual />
        },
        close: {
            id: 'close',
            label: 'Month-End Close',
            heading: "Month-End Close in Hours — Not Weeks",
            body: "Automate every step of the close — from reconciliation to reporting. Finage eliminates the bottlenecks that keep your team stuck in spreadsheets every month.",
            link: "See how it works →",
            bullets: [
                "Automated multi-entity reconciliation",
                "Exception management with AI triage",
                "One-click report generation for stakeholders",
                "Full audit trail for every adjustment"
            ],
            visual: <CloseVisual />
        }
    };

    return (
        <section className="py-32 bg-[#09090B] text-white overflow-hidden relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-['Instrument_Serif'] font-medium text-white mb-12 tracking-tight leading-[1.1]"
                    >
                        Built as an Operating System — <br />
                        Not a Dashboard
                    </motion.h2>

                    {/* Tab Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex p-1 bg-white/5 border border-white/10 rounded-full"
                    >
                        {(Object.keys(contents) as TabId[]).map((tabId) => (
                            <button
                                key={tabId}
                                onClick={() => setActiveTab(tabId)}
                                className={`px-6 md:px-10 py-3 rounded-full text-sm font-bold transition-all relative z-10 ${activeTab === tabId ? 'text-white' : 'text-white/40 hover:text-white/70'
                                    }`}
                            >
                                {activeTab === tabId && (
                                    <motion.div
                                        layoutId="tabBackground"
                                        className="absolute inset-0 bg-blue-500 rounded-full -z-10 shadow-lg shadow-blue-500/20"
                                    />
                                )}
                                {contents[tabId].label}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Tab Content Display */}
                <div className="relative min-h-[500px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20, scale: 0.98 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -20, scale: 1.02 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full grid lg:grid-cols-2 gap-16 lg:gap-32 items-center"
                        >
                            {/* Left Column: Text */}
                            <div className="text-left space-y-8">
                                <h3 className="text-3xl md:text-5xl font-['Instrument_Serif'] font-medium text-white mb-8 tracking-tight leading-[1.1]">
                                    {contents[activeTab].heading}
                                </h3>
                                <p className="text-lg text-white/50 font-medium mb-10 leading-relaxed max-w-lg">
                                    {contents[activeTab].body}
                                </p>

                                {contents[activeTab].bullets && (
                                    <ul className="space-y-6 pt-4">
                                        {contents[activeTab].bullets!.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 shrink-0">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                </div>
                                                <span className="text-sm font-bold text-white/80 leading-relaxed uppercase tracking-widest">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {contents[activeTab].link && (
                                    <motion.a
                                        href="#"
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-xs hover:text-blue-400 transition-colors"
                                    >
                                        {contents[activeTab].link}
                                    </motion.a>
                                )}
                            </div>

                            {/* Right Column: Visual */}
                            <div className="relative h-full flex items-center justify-center">
                                {contents[activeTab].visual}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

const RecordVisual = () => (
    <div className="w-full max-w-lg bg-[#111113] border border-white/10 rounded-2xl shadow-3xl overflow-hidden p-1 group">
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1A1A1C] border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] opacity-60" />
        </div>
        <div className="p-8 space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center font-bold text-white">L</div>
                    <div>
                        <div className="text-sm font-bold text-white">Consolidated Ledger</div>
                        <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Master View</div>
                    </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-bold text-green-500 uppercase tracking-widest">Auditable</div>
            </div>
            <div className="space-y-4">
                {[
                    { label: "Entity: Vintage Multi-Asset IV", val: "Verified", color: "bg-green-500" },
                    { label: "Position: TSLA (Equity)", val: "Live Sync", color: "bg-blue-500" },
                    { label: "Document: Subscription Agreement", val: "Linked", color: "bg-blue-500" },
                    { label: "Contact: General Partner GP-2", val: "Verified", color: "bg-green-500" },
                ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl text-xs">
                        <span className="text-white/60 font-medium">{row.label}</span>
                        <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${row.color}`} />
                            <span className="font-bold text-white/40">{row.val}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const UnstructuredVisual = () => (
    <div className="w-full max-w-lg flex flex-col gap-4">
        {[
            { title: "K-1 Tax Statement", size: "1.2MB", status: "Extracted", progress: 98 },
            { title: "GP Call Notice", size: "450KB", status: "Classified", progress: 100 },
            { title: "Quarterly Performance", size: "4.8MB", status: "Syncing", progress: 45 }
        ].map((doc, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 bg-[#111113] border border-white/5 rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all shadow-xl"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group-hover:bg-blue-500 transition-colors group-hover:text-white text-blue-500 font-bold">
                        PDF
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white mb-1">{doc.title}</div>
                        <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{doc.size}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">{doc.status}</div>
                    <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${doc.progress}%` }} />
                    </div>
                </div>
            </motion.div>
        ))}
    </div>
);

const CloseVisual = () => (
    <div className="w-full max-w-lg bg-blue-500 rounded-3xl p-8 shadow-2xl shadow-blue-500/30 text-white flex flex-col gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="flex items-center justify-between relative z-10">
            <div>
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Month-End Checklist</div>
                <div className="text-2xl font-bold">Q4 Close Process</div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center font-bold text-sm">
                75%
            </div>
        </div>
        <div className="space-y-4 relative z-10">
            {[
                "Reconcile Multi-Entity Ledger",
                "Automate Intercompany Eliminations",
                "Generate Q4 Investor Statements",
                "Audit Trail Validation"
            ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/10 border border-white/10 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-sm font-bold tracking-tight">{text}</span>
                </div>
            ))}
        </div>
        <div className="pt-4 border-t border-white/10 text-center relative z-10">
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Target Completion: 2.4 Hours</span>
        </div>
    </div>
);
