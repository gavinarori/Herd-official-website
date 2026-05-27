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

export function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      icon: UsersIcon,
      title: 'Set Up Your Farm',
      description: 'Create your organisation, invite team members with role-based permissions (Admin, Manager, Vet, Worker), and configure your multi-farm structure in minutes.',
    },
    {
      step: '02',
      icon: VeganIcon,
      title: 'Register Your Livestock',
      description: 'Add animals with full lifecycle data — RFID tags, lineage, weight, health status, breed, and production records. Import via CSV or add individually.',
    },
    {
      step: '03',
      icon: HeartPulseIcon,
      title: 'Monitor Health & Breeding',
      description: 'Track vaccinations, disease outbreaks, treatment workflows, heat cycles, and genetic lineage. Automated alerts flag anomalies before they become problems.',
    },
    {
      step: '04',
      icon: BarChart3Icon,
      title: 'Analyse & Grow',
      description: 'Real-time dashboards surface mortality rates, productivity KPIs, cost-per-animal, and revenue trends. Export reports or share with vets via secure links.',
    },
  ];
 
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <SectionTitle
        eyebrow="How It Works"
        title="From setup to insights in under a day"
        description="A streamlined onboarding flow means your team is tracking animals, scheduling vaccines, and reading analytics before the end of day one."
      />
 
      <div className="relative mt-20 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Connector line (desktop only) */}
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
 
        {steps.map((s, i) => (
          <div key={s.step} className="group relative flex flex-col items-start">
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-primary/20 bg-card shadow-sm transition group-hover:border-primary group-hover:bg-primary/5">
              <s.icon className="size-7 text-primary" />
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm/6 text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
 
      {/* Visual proof — Video Embed */}
      <div className="relative mt-16 w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        <div className="aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/QCl4hjcGzIA"
            title="20 cows on an 1/8th of an acre - Dairy farming success story - FarmKenya"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Corner accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 h-8 w-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
        </div>
      </div>
    </section>
  );
}