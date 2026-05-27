import {
  ArrowRightIcon, CheckIcon, ChevronRightIcon, PlayIcon,
  PlusIcon, MinusIcon, StarIcon, ShieldCheckIcon, BarChart3Icon,
  HeartPulseIcon, DnaIcon, PackageIcon, UsersIcon, GlobeIcon,
  ZapIcon, TrendingUpIcon, BellIcon, LockIcon, Share2Icon,
  ActivityIcon, LeafIcon, VeganIcon,
} from 'lucide-react';
import Link from 'next/link';

function StatCard({ value, suffix, label, icon: Icon }) {
  return (
    <div className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="size-5 text-primary" />
      </div>
      <p className="mt-2 text-3xl font-bold text-foreground">
        {value}<span className="text-primary">{suffix}</span>
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}


export function StatsSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard value="50K+" suffix="" label="Animals tracked globally" icon={VeganIcon} />
          <StatCard value="99.9" suffix="%" label="Uptime SLA guaranteed" icon={ActivityIcon} />
          <StatCard value="120+" suffix="" label="Farms using the platform" icon={GlobeIcon} />
          <StatCard value="40" suffix="%" label="Avg. productivity boost" icon={TrendingUpIcon} />
        </div>
      </div>
    </section>
  );
}