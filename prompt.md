# Prompt — Finage Landing Page Implementation

You are building a premium SaaS landing page for **Finage** — "The Agentic Operating System for Family Offices." The tech stack is **React + TypeScript + Tailwind CSS**. Use **Framer Motion** for animations.

Before you start coding, read the attached `prd.md` for full specifications and `knowledge.md` for the design system, color tokens, typography, animation specs, and component reference.

---

## Critical Instructions

### 1. Copywriting — Use EXACTLY as specified below. Do NOT rewrite or paraphrase.

### 2. Color Scheme — Alternating dark ↔ white sections:
- Hero: **DARK** (`#09090B`)
- Stats + Engineered: **WHITE** (`#FFFFFF`)
- Core Features (3 features): **LIGHT** (`#F8F9FA`)
- Built as OS (tabs): **DARK** (`#09090B`)
- Automation grid: **WHITE** (`#FFFFFF`)
- Security: **DARK** (`#09090B`)
- CTA: **DARK** (`#09090B`)
- Footer: **DARK** (`#09090B`)

### 3. Interactions — Implement these three:
1. **Scroll-triggered fade-in + translateY** on every section (Framer Motion `whileInView`)
2. **Interactive tab switcher** in "Built as OS" section with animated panel transitions
3. **Hover micro-interactions** on all buttons (translateY + shadow) and cards (translateY + border glow)

### 4. Typography:
- Headings: `Instrument Serif` from Google Fonts (use italic for emphasis words)
- Body: `DM Sans` from Google Fonts
- Hero H1: `text-6xl md:text-7xl lg:text-8xl`, tracking-tight, leading-none
- Section H2: `text-4xl md:text-5xl`, tracking-tight
- Body: `text-base md:text-lg`, text-secondary color

### 5. Accent Color: `#3B82F6` (Tailwind `blue-500`)

---

## Build each section in order. Here is the EXACT copywriting for each section:

---

### SECTION 1: Navbar (fixed, dark transparent, blur on scroll)
- Logo: Blue square with "F" + "Finage" text
- Links: `Features` · `Customers` · `Company` · `Docs` · `Pricing`
- Right side: `Log in` (ghost button) · `Get Started` (blue filled button)

---

### SECTION 2: Hero (DARK background)

**Badge** (pill shape with green pulsing dot):
"Trusted by Leading Single and Multi-Family Offices"

**H1**:
"The Agentic Operating System for Family Offices"
(Style "Family Offices" in italic with gradient accent color)

**Subtitle**:
"Consolidate every asset, automate every workflow, and close your books in hours — not weeks. Purpose-built for the complexity of private wealth."

**Buttons**:
- `Request a Demo` → blue primary, large
- `Watch Overview →` → outline/ghost, large

**Below buttons**: Dashboard browser mockup (dark card with traffic-light dots at top). Inside the mockup, show 3 metric cards:
- Card 1: Label "Total AUM" · Value "$4.7B" · Change "↑ 12.3% YTD" (green) · Mini bar chart below
- Card 2: Label "Asset Allocation" · Value "Diversified" · Sub "7 Asset Classes" · Donut chart (CSS conic-gradient)
- Card 3: Label "Pending Tasks" · Value "12" · Change "3 overdue" (red) · Mini table with 3 rows: "K-1 Processing" (Processing/blue), "Q4 Statements" (Complete/green), "Capital Call #7" (Pending/yellow)

---

### SECTION 3: Stats + "Engineered" (WHITE background)

**Eyebrow**: "CORE METRICS"

**Title**: "Engineered for the Complexity of Private Wealth"

**Body text**:
"Family office operations require a level of precision, security, and flexibility that legacy software simply can't deliver. We built the first operating system designed specifically for this complexity."

**Stats row (4 items)**:
- `$50B+` — "AUM Tracked"
- `500+` — "Integrations"
- `200+` — "Family Offices Served"
- `99.9%` — "Uptime SLA"

---

### SECTION 4: Three Core Features (LIGHT `#F8F9FA` background)

**Section eyebrow**: "THE CORE"

**Section title**: "The Agentic Operating System for Family Offices"

**Section subtitle**: "Engineered for the complexity of private wealth. Every feature is built to handle multi-entity, multi-asset class, and multi-jurisdictional operations — autonomously."

Layout: Each feature is a 2-column row (text left, mockup visual right). Build these as 3 separate rows, NOT as tabs.

---

**Feature 1:**

**Heading**: "Family offices were never designed for unstructured data"

**Body**: "Custodians, fund admins, and GP portals all deliver data differently — different formats, different schedules, different levels of detail. Finage ingests, normalizes, and reconciles it all automatically."

**Bullets**:
- "Ingests data from custodians, fund admins, and GP portals automatically"
- "Normalizes across formats — PDFs, spreadsheets, API feeds"
- "Flags discrepancies and exceptions for review"

**Visual (right)**: Mockup dashboard with:
- 2 metric cards: "Data Sources Connected: 147" with progress bar (85%), "Records Processed: 2.4M" with progress bar (92%)
- Table: "Goldman Sachs PB" (Synced/green), "JP Morgan Custody" (Synced/green), "Northern Trust" (Syncing/blue), "Blackstone Fund Admin" (Synced/green), "Citadel Securities" (Queued/yellow)

---

**Feature 2:**

**Heading**: "Stop Chasing GPs for Statements"

**Body**: "Capital calls. Distributions. NAV statements. They arrive in every format imaginable — PDFs, emails, portal downloads. Finage extracts, classifies, and books them automatically."

**Bullets**:
- "Extracts data from capital call notices and distribution statements"
- "Automatically classifies and books transactions"
- "Tracks commitment pacing and unfunded obligations"

**Visual (right)**: Mockup dashboard with:
- 2 metric cards: "Statements Processed: 1,847" with bar (78%), "Accuracy Rate: 99.7%" with bar (99%)
- Table: "Capital Call — Fund VII" (Processed/green), "Q3 NAV Statement" (Validated/green), "Distribution Notice" (Reviewing/blue), "K-1 Tax Document" (Queued/yellow)

---

**Feature 3:**

**Heading**: "One Trusted View of Public & Private Wealth"

**Body**: "For the first time, see every asset — public equities, fixed income, private equity, real estate, digital assets — in a single, real-time view."

**Bullets**:
- "Full portfolio transparency across all asset classes"
- "Real-time mark-to-market and fair value tracking"
- "Aggregated reporting and family-level dashboards"
- "Look-through into fund-of-fund structures"

**Visual (right)**: Mockup with 4 metric cards in 2x2 grid:
- "Public Equities: $1.2B" (bar 65%)
- "Private Markets: $2.8B" (bar 88%)
- "Real Estate: $480M" (bar 42%)
- "Digital Assets: $220M" (bar 30%)

---

### SECTION 5: "Built as an Operating System" (DARK background)

**Section title**: "Built as an Operating System — Not a Dashboard"

**Tab navigation** (horizontal pill switcher, blue active state):
Tab 1: `System of Record`
Tab 2: `Unstructured to Structured`
Tab 3: `Month-End Close`

**Tab 1 — "System of Record"**:
Left side:
- Heading: "System of Record"
- Body: "Every position, transaction, document, and contact — consolidated in a single, auditable system. No more stitching together spreadsheets, PDFs, and portal logins."
Right side: Dashboard mockup visual

**Tab 2 — "From Unstructured Documents to Structured Intelligence"**:
Left side:
- Heading: "From Unstructured Documents to Structured Intelligence"
- Body: "Finage reads PDFs, scans, and emails — and turns them into structured, reconciled data. AI-powered document intelligence, purpose-built for the family office."
- CTA link: "Explore document intelligence →"
Right side bullets:
- "Automatically extracts data from PDFs, scans, emails"
- "Classifies and maps to your chart of accounts"
- "Flags exceptions with confidence scoring"

**Tab 3 — "Month-End Close in Hours — Not Weeks"**:
Left side:
- Heading: "Month-End Close in Hours — Not Weeks"
- Body: "Automate every step of the close — from reconciliation to reporting. Finage eliminates the bottlenecks that keep your team stuck in spreadsheets every month."
- CTA link: "See how it works →"
Right side bullets:
- "Automated multi-entity reconciliation"
- "Exception management with AI triage"
- "One-click report generation for stakeholders"
- "Full audit trail for every adjustment"

---

### SECTION 6: "Automation" (WHITE background)

**Section title**: "Automation, Built on Trustworthy Data"

**Subtitle**: "Every automated workflow is powered by verified, reconciled data. No black boxes."

**5 cards in grid** (3 top row, 2 bottom row centered):

1. **Automated Ingestion** — "PDFs, emails, and API feeds — processed, classified, and routed automatically."
2. **Intelligent Analytics** — "Query your data in natural language. Get answers with full attribution."
3. **Automation & Outreach** — "Scheduled reports, alerts, and stakeholder communications — on your terms."
4. **Regulatory Reporting** — "FATCA, CRS, Form PF — generated automatically from your verified data."
5. **Audit Trail** — "Every change, every access, every calculation — fully traceable and immutable."

Each card: icon on top (use Lucide icons), title in bold, description below.

---

### SECTION 7: "Security" (DARK background)

**Eyebrow**: "ENTERPRISE SECURITY"

**Title**: "Built for the Security and Compliance Needs of Family Offices"

**Body**: "We understand the sensitivity of family office data. Finage is designed from the ground up with bank-grade security and full regulatory compliance."

**Visual**: Laptop/product mockup or animated security orb

**4 badges in 2x2 grid**:
- 🛡️ SOC 2 Type II — "Certified annually"
- 🔐 256-bit Encryption — "At rest & in transit"
- 🏛️ GDPR Compliant — "EU data residency"
- 🔑 SSO & MFA — "Enterprise access control"

---

### SECTION 8: CTA (DARK background)

**H2**: "Close Faster. Operate Smarter."
(Style "Smarter" in italic with gradient)

**Subtitle**: "Finage is the intelligent operating system built for family offices that refuse to settle for spreadsheets and legacy software."

**Buttons**:
- `Request a Demo` → blue primary large
- `Talk to Sales →` → outline large

---

### SECTION 9: Footer (DARK background)

**Left column**: Finage logo + "The agentic operating system built for the complexity of private wealth management."

**Column 2 — Product**: Features, Integrations, Pricing, Changelog

**Column 3 — Company**: About, Careers, Blog, Contact

**Column 4 — Legal**: Privacy Policy, Terms of Service, Security, Compliance

**Bottom bar**: "© 2026 Finage. All rights reserved." left · "Built for families that think in generations." right

---

## Final Checklist
- [ ] All sections use EXACT copywriting from above
- [ ] Dark/white alternation follows the specified pattern
- [ ] Scroll reveal animations on every section
- [ ] Tab switcher works with animated panel transitions
- [ ] Hover effects on all buttons and cards
- [ ] Dashboard mockups are coded UI (not images)
- [ ] Responsive: works on mobile, tablet, desktop
- [ ] Fonts loaded: Instrument Serif + DM Sans
- [ ] Accent blue `#3B82F6` used consistently
