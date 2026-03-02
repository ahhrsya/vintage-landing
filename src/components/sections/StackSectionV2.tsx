import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { FileText, Database, Users, Cpu, CheckCircle2, ArrowDown, Shield } from 'lucide-react';

type TabId = 'record' | 'engagement' | 'agents';

interface TabContent {
    id: TabId;
    label: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    subtext: string;
    visual: React.ReactNode;
}

export const StackSectionV2 = () => {
    const [activeTab, setActiveTab] = useState<TabId>('record');

    const contents: Record<TabId, TabContent> = {
        record: {
            id: 'record',
            label: 'System of Record',
            icon: <FileText className="text-white w-6 h-6" />,
            title: 'System of Record',
            description: 'Every position, transaction, document, and contact — consolidated in a single, auditable system. No more stitching together spreadsheets, PDFs, and portal logins. Vintage provides a unified ledger where every data point is provenance-linked to its source document and timestamped for absolute auditability.',
            subtext: 'This is the foundation everything else is built on.',
            visual: <RecordVisual />
        },
        engagement: {
            id: 'engagement',
            label: 'System of Engagement',
            icon: <Users className="text-white w-6 h-6" />,
            title: 'System of Engagement',
            description: 'A single, unified view across every entity, account, custodian, trust, and private-market investment. Securely share watermark-ready reports with stakeholders and collaborators in real-time. Where highly fragmented data turns into synchronized decisions and transparent communication across the entire family office ecosystem.',
            subtext: 'Where data turns into decisions and communication.',
            visual: <EngagementVisual />
        },
        agents: {
            id: 'agents',
            label: 'System of Agents',
            icon: <Cpu className="text-white w-6 h-6" />,
            title: 'System of Agents',
            description: 'Autonomous AI agents that collect capital calls, distributions, and statements — flagging stale marks and applying valuation policies. Vintage agents execute complex multi-step workflows like self-reconciling ledgers and autonomous tax preparation, assembles auditor-ready reporting with institutional-grade precision.',
            subtext: 'The engine that drives true operational scale.',
            visual: <AgentsVisual />
        }
    };

    return (
        <section className="py-24 bg-white text-dark-primary overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <SectionReveal>
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm mb-8">
                            <span className="text-xs font-bold text-gray-500 tracking-tight">The Vintage Stack</span>
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={0.1}>
                        <h2
                            className="text-4xl md:text-6xl font-medium tracking-tight text-[#1D2939] mb-8 leading-[1.1]"
                            style={{ fontFamily: "'Manrope', serif" }}
                        >
                            Built as an Operating System — <br />
                            Not a Dashboard
                        </h2>
                    </SectionReveal>

                    <SectionReveal delay={0.2}>
                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                            Vintage is structured as three deeply integrated layers.
                        </p>
                    </SectionReveal>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-16 px-4">
                    <div className="inline-flex p-1 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        {(Object.keys(contents) as TabId[]).map((tabId) => (
                            <button
                                key={tabId}
                                onClick={() => setActiveTab(tabId)}
                                className={`px-4 md:px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tabId
                                        ? 'bg-[#007AFF] text-white shadow-lg shadow-blue-500/20'
                                        : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {contents[tabId].label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Card */}
                <div className="bg-[#FFFFFF] border border-gray-100 rounded-[40px] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid lg:grid-cols-2 gap-16 items-center"
                        >
                            {/* Left Side: Text Content */}
                            <div className="text-left">
                                <div className="w-12 h-12 bg-[#007AFF] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                                    {contents[activeTab].icon}
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-[#1D2939] mb-10 tracking-tight leading-[1.1]">
                                    {contents[activeTab].title}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed font-medium mb-10">
                                    {contents[activeTab].description}
                                </p>

                                <p className="text-gray-400 font-medium italic">
                                    {contents[activeTab].subtext}
                                </p>
                            </div>

                            {/* Right Side: Visual Content */}
                            <div className="relative">
                                {contents[activeTab].visual}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

const RecordVisual = () => {
    return (
        <div className="bg-[#EBF5FF] rounded-3xl p-8 md:p-12 border border-blue-50/50 shadow-inner">
            <div className="grid grid-cols-3 gap-4 mb-12">
                {[
                    { label: 'Bank Feeds', icon: <Database size={16} /> },
                    { label: 'Fund Admins', icon: <Users size={16} /> },
                    { label: 'Accounting Systems', icon: <Cpu size={16} /> },
                ].map((card, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-white">
                        <div className="w-8 h-8 rounded-lg bg-[#007AFF] text-white flex items-center justify-center mb-4">
                            {card.icon}
                        </div>
                        <div className="text-[10px] md:text-xs font-bold text-gray-900 mb-1">{card.label}</div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-[9px] font-bold text-gray-400">Connected</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mb-8">
                <ArrowDown className="text-[#007AFF]" />
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-50">
                <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
                    <h4 className="font-bold text-sm text-gray-900">Unified Ledger</h4>
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Synced</span>
                </div>
                <div className="p-0">
                    <table className="w-full text-left text-xs">
                        <thead>
                            <tr className="bg-blue-50/30">
                                <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">Entity</th>
                                <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider text-right">Confidence</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {[
                                { name: 'Policy Tag', val: '99%' },
                                { name: 'Valuation Tag', val: '96%' },
                                { name: 'Regulatory Tag', val: '92%' },
                                { name: 'Audit Trail', val: '99%' },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50/50">
                                    <td className="px-6 py-4 text-gray-600 font-medium">{row.name}</td>
                                    <td className="px-6 py-4 text-gray-900 font-bold text-right">{row.val}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-blue-50/50 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border border-blue-500/20 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-[#007AFF]" />
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none">Foundation of truth for every report</span>
                </div>
            </div>
        </div>
    );
};

const EngagementVisual = () => {
    return (
        <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 border border-blue-100/20 shadow-inner">
            <div className="w-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="font-bold text-gray-900 text-lg mb-1">Stakeholder Portal</div>
                        <div className="text-xs text-gray-400 font-medium italic">Custom Watermarked Access</div>
                    </div>
                    <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold">Encrypted</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
                                <Shield size={14} className="text-blue-500" />
                            </div>
                            <div className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">Security</div>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full w-full mb-1" />
                        <div className="h-1.5 bg-gray-200 rounded-full w-2/3" />
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
                                <LayoutActive size={14} className="text-green-500" />
                            </div>
                            <div className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">Reports</div>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full w-full mb-1" />
                        <div className="h-1.5 bg-gray-200 rounded-full w-1/2" />
                    </div>
                </div>

                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Live Activity</div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-[11px] font-medium text-blue-900">
                            <span>Q3 Performance Report</span>
                            <span className="opacity-60">Verified</span>
                        </div>
                        <div className="h-1 bg-blue-200 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const AgentsVisual = () => {
    return (
        <div className="bg-[#F8F9FB] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-inner">
            <div className="grid grid-cols-2 gap-6">
                {[
                    { name: 'Reconciliation', status: 'Running', val: 98 },
                    { name: 'Policy Apply', status: 'Active', val: 100 },
                    { name: 'Tax Compute', status: 'Scheduled', val: 45 },
                    { name: 'Report Gen', status: 'Queue', val: 0 },
                ].map((agent, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-xl border border-gray-50 p-6 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-[#007AFF]/5 flex items-center justify-center">
                                <Cpu size={20} className="text-[#007AFF]" />
                            </div>
                            <div className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase ${agent.status === 'Running' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-400'}`}>
                                {agent.status}
                            </div>
                        </div>
                        <div>
                            <div className="text-xs font-bold text-gray-900 mb-1">{agent.name}</div>
                            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${agent.val}%` }}
                                    className="h-full bg-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const LayoutActive = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
    </svg>
);
