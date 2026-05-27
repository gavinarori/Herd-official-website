import {
  ArrowRightIcon, CheckIcon, ChevronRightIcon, PlayIcon,
  PlusIcon, MinusIcon, StarIcon, ShieldCheckIcon, BarChart3Icon,
  HeartPulseIcon, DnaIcon, PackageIcon, UsersIcon, GlobeIcon,
  ZapIcon, TrendingUpIcon, BellIcon, LockIcon, Share2Icon,
  ActivityIcon, LeafIcon, VeganIcon,
} from 'lucide-react';
import Link from 'next/link';

function SectionTitle({ eyebrow, title, description, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <LeafIcon className="size-3" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base/7 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, accent = false }) {
  return (
    <div className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md
      ${accent ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'}`}>
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl
        ${accent ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm/6 text-muted-foreground">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: UsersIcon,
      title: 'Multi-Tenant Architecture',
      description: 'Manage multiple farms under one account. Each farm has its own isolated data, users, and roles — Admin, Manager, Vet, Worker, or External Viewer.',
      accent: true,
    },
    {
      icon: VeganIcon,
      title: 'Advanced Animal Lifecycle',
      description: 'Track every animal from birth to sale — RFID tags, lineage, weight history, milk/egg production, and status (Active / Sold / Quarantined / Deceased).',
    },
    {
      icon: HeartPulseIcon,
      title: 'Health Intelligence System',
      description: 'Automated vaccination reminders, disease outbreak tracking, vet assignment workflows, and anomaly detection (weight loss patterns, high-risk flags).',
      accent: true,
    },
    {
      icon: DnaIcon,
      title: 'Breeding & Genetics Engine',
      description: 'Heat cycle tracking, breeding success analytics, genetic lineage trees, and inbreeding coefficient calculations to optimise your herd genetics.',
    },
    {
      icon: BarChart3Icon,
      title: 'Analytics & Insights Dashboard',
      description: 'Real-time KPIs: growth trends, mortality rates, cost-per-animal, revenue tracking, and financial insights — all visualised in intuitive dashboards.',
      accent: true,
    },
    {
      icon: Share2Icon,
      title: 'Advanced Sharing & Collaboration',
      description: 'Share animal profiles publicly or via secure time-limited links. Role-based access (e.g., vets see only health data). Track who viewed what, export PDF.',
    },
    {
      icon: PackageIcon,
      title: 'Inventory & Resource Management',
      description: 'Feed inventory, medicine stock with expiry alerts, equipment maintenance logs, and stock transaction history — all linked to your animals.',
    },
    {
      icon: BellIcon,
      title: 'Smart Alerts & Notifications',
      description: 'Never miss a vaccination, breeding window, or low-stock alert. Configurable notification system keeps your whole team informed in real time.',
    },
  ];
 
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <SectionTitle
        eyebrow="Core Capabilities"
        title="Everything your livestock operation needs"
        description="Built for commercial farmers, cooperatives, and agribusinesses that need more than a spreadsheet. Enterprise-grade features at zero cost."
      />
 
      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
 
      {/* Feature spotlight — large visual */}
      <div className="mt-16 grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left: Health monitoring */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border bg-muted/50 px-6 py-4">
            <div className="flex items-center gap-2">
              <HeartPulseIcon className="size-5 text-primary" />
              <h3 className="font-semibold text-foreground">Health Intelligence Dashboard</h3>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {/* Vaccination progress */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Vaccination Coverage</span>
                <span className="font-semibold text-foreground">87%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[87%] rounded-full bg-primary" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Treatment Success Rate</span>
                <span className="font-semibold text-foreground">94%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[94%] rounded-full bg-emerald-500" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Vet Response Time (avg)</span>
                <span className="font-semibold text-foreground">2.4 hrs</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[60%] rounded-full bg-amber-500" />
              </div>
            </div>
 
            {/* Recent alerts */}
            <div className="mt-2 space-y-2">
              {[
                { msg: 'Bovine #B-204 — Weight loss anomaly detected', level: 'warn' },
                { msg: '12 animals due for FMD vaccine tomorrow', level: 'info' },
                { msg: 'Disease outbreak: Mastitis — 3 cows quarantined', level: 'danger' },
              ].map((a) => (
                <div key={a.msg} className={`flex items-start gap-2 rounded-lg p-2.5 text-xs
                  ${a.level === 'warn' ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/30 dark:text-amber-300' : ''}
                  ${a.level === 'info' ? 'bg-blue-50 text-blue-800 dark:bg-blue-950/30 dark:text-blue-300' : ''}
                  ${a.level === 'danger' ? 'bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-300' : ''}
                `}>
                  <BellIcon className="size-3 mt-0.5 shrink-0" />
                  {a.msg}
                </div>
              ))}
            </div>
          </div>
        </div>
 
        {/* Right: Breeding analytics */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border bg-muted/50 px-6 py-4">
            <div className="flex items-center gap-2">
              <DnaIcon className="size-5 text-primary" />
              <h3 className="font-semibold text-foreground">Breeding & Genetics Engine</h3>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {/* Lineage tree */}
            <div className="flex flex-col items-center gap-2 py-2">
              <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-semibold text-primary">
                🐄 Daisy #C-1001
              </div>
              <div className="flex gap-12">
                <div className="h-8 w-px bg-border" />
                <div className="h-8 w-px bg-border" />
              </div>
              <div className="flex gap-4">
                <div className="rounded-xl border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground">
                  🐄 Bella #C-0820 (Dam)
                </div>
                <div className="rounded-xl border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground">
                  🐂 Max #B-0412 (Sire)
                </div>
              </div>
            </div>
 
            {/* Breeding stats */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { label: 'Conception Rate', value: '78%' },
                { label: 'Inbreeding Coeff.', value: '0.04' },
                { label: 'Avg. Gestation', value: '283 days' },
                { label: 'Breeding Cycles', value: '14 active' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-muted p-3">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="mt-1 text-lg font-bold text-foreground">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}