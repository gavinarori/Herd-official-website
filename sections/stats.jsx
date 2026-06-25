import {
  ArrowRightIcon, CheckIcon, ChevronRightIcon, PlayIcon,
  PlusIcon, MinusIcon, StarIcon, ShieldCheckIcon, BarChart3Icon,
  HeartPulseIcon, DnaIcon, PackageIcon, UsersIcon, GlobeIcon,
  ZapIcon, TrendingUpIcon, BellIcon, LockIcon, Share2Icon,
  ActivityIcon, LeafIcon,
} from 'lucide-react';
import Link from 'next/link';

function LedgerStat({ value, suffix, label, icon: Icon, isLast }) {
  return (
    <div className={`relative flex flex-col gap-3 px-6 py-8 md:px-8 ${!isLast ? 'md:border-r' : ''} border-border`}>
      <Icon className="size-5 text-primary" />
      <p className="stat-number text-3xl font-bold text-foreground md:text-4xl">
        {value}<span className="text-primary">{suffix}</span>
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    { value: '50K+', suffix: '', label: 'Animals tracked globally', icon: ActivityIcon },
    { value: '99.9', suffix: '%', label: 'Uptime SLA guaranteed', icon: ShieldCheckIcon },
    { value: '120+', suffix: '', label: 'Farms using the platform', icon: GlobeIcon },
    { value: '40', suffix: '%', label: 'Avg. productivity boost', icon: TrendingUpIcon },
  ];

  return (
    <section className="border-y border-border bg-card">
      {/* Photo strip — real herd, not stock-icon decoration */}
      <div className="grid grid-cols-3 gap-0.5 sm:grid-cols-5">
        {[
          { src: '/assets/a-c-6ZgaRPKd05I-unsplash.jpg', alt: 'Dairy cattle grazing on green pasture' },
          { src: '/assets/damir-korotaj-L_qgwgmCH2k-unsplash.jpg', alt: 'Calf with ear tag identification' },
          { src: '/assets/candes-j-6zH7dzEJ4UI-unsplash.jpg', alt: 'Morning milking at a dairy farm' },
          { src: '/assets/bastian-wardana--VfH_PG6p2k-unsplash.jpg', alt: 'Farmer checking cattle health in the field' },
          { src: '/assets/sara-abilova-DtT_bRTVfEY-unsplash.jpg', alt: 'Goats in a farm enclosure' },
        ].map((img, i) => (
          <div
            key={img.src}
            className={`relative aspect-square overflow-hidden bg-muted ${i >= 3 ? 'hidden sm:block' : ''}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover grayscale-[15%] transition duration-500 hover:grayscale-0 hover:scale-105" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <LedgerStat key={s.label} {...s} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}