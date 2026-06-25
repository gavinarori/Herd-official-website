import {
  ArrowRightIcon, CheckIcon, ChevronRightIcon, PlayIcon,
  PlusIcon, MinusIcon, StarIcon, ShieldCheckIcon, BarChart3Icon,
  HeartPulseIcon, DnaIcon, PackageIcon, UsersIcon, GlobeIcon,
  ZapIcon, TrendingUpIcon, BellIcon, LockIcon, Share2Icon,
  ActivityIcon, LeafIcon,
} from 'lucide-react';
import Link from 'next/link';

function SectionTitle({ eyebrow, title, description, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="stamp-label inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-xs text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
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
      photo: '/images/farmer-team-setup.jpg',
      title: 'Set Up Your Farm',
      description: 'Create your organisation, invite team members with role-based permissions (Admin, Manager, Vet, Worker), and configure your multi-farm structure in minutes.',
    },
    {
      step: '02',
      icon: ActivityIcon,
      photo: '/images/calf-eartag-closeup.jpg',
      title: 'Register Your Livestock',
      description: 'Add animals with full lifecycle data — lineage, weight, health status, breed, and production records. Import via CSV or add individually.',
    },
    {
      step: '03',
      icon: HeartPulseIcon,
      photo: '/images/vet-treating-cow.jpg',
      title: 'Monitor Health & Breeding',
      description: 'Track vaccinations, disease outbreaks, treatment workflows, heat cycles, and genetic lineage. Automated alerts flag anomalies before they become problems.',
    },
    {
      step: '04',
      icon: BarChart3Icon,
      photo: '/images/farmer-tablet-dashboard.jpg',
      title: 'Analyse & Grow',
      description: 'Real-time dashboards surface mortality rates, productivity KPIs, cost-per-animal, and revenue trends. Export reports or share with vets via secure links.',
    },
  ];

  return (
    <section id='how-it-works' className="flex flex-col items-center justify-center py-24 px-4 md:px-8 bg-muted/30 border-y border-border">
      <SectionTitle
        eyebrow="The Onboarding Trail"
        title="From setup to insights in under a day"
        description="A streamlined onboarding flow means your team is tracking animals, scheduling vaccines, and reading analytics before the end of day one."
      />

      <div className="relative mt-20 grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Connector line (desktop only) — like a fence line */}
        <div className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-border lg:block" />

        {steps.map((s, i) => (
          <div key={s.step} className="group relative flex flex-col items-start">
            <div className="relative z-10 h-16 w-16 overflow-hidden border-2 border-foreground/70 shadow-sm transition group-hover:border-primary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.photo} alt={s.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/55 opacity-0 transition group-hover:opacity-100">
                <s.icon className="size-6 text-primary-foreground" />
              </div>
              <span className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center stamp-label rounded-full bg-rust text-[11px] text-rust-foreground">
                {s.step}
              </span>
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm/6 text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>

      {/* Visual proof — Video Embed */}
      <div className="relative mt-16 w-full max-w-4xl overflow-hidden border-2 border-foreground/70 bg-card shadow-xl">
        <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
          <span className="stamp-label text-[10px] text-muted-foreground">Field Footage</span>
        </div>
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
      </div>
    </section>
  );
}