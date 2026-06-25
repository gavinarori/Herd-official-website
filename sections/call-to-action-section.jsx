import {
  ArrowRightIcon, CheckIcon, ChevronRightIcon, PlayIcon,
  PlusIcon, MinusIcon, StarIcon, ShieldCheckIcon, BarChart3Icon,
  HeartPulseIcon, DnaIcon, PackageIcon, UsersIcon, GlobeIcon,
  ZapIcon, TrendingUpIcon, BellIcon, LockIcon, Share2Icon,
  ActivityIcon, LeafIcon,
} from 'lucide-react';
import Link from 'next/link';

export function CallToActionSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-28 px-4 md:px-8">
      {/* Background — faded pasture photo + ledger lines, not blur orbs */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/pasture-sunset-cattle.jpg" alt="" className="h-full w-full object-cover opacity-[0.16]" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 ledger-rule opacity-30" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 via-background to-background" />

      <span className="mb-5 stamp-label inline-flex items-center gap-2 border border-foreground/15 bg-card px-4 py-1.5 text-[11px] text-foreground/70">
        <ShieldCheckIcon className="size-3.5 text-primary" />
        Completely Free · No Credit Card
      </span>

      <h2 className="max-w-3xl text-center text-4xl font-bold text-foreground md:text-5xl">
        Ready to transform your livestock operation?
      </h2>
      <p className="mt-5 max-w-xl text-center text-base/7 text-muted-foreground">
        Join over 120 farms already using the platform. Get started in minutes, not months.
        Enterprise-grade features, zero cost to begin.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://livestock-mangement-system.vercel.app/"
          className="flex items-center gap-2 bg-primary px-10 py-3.5 text-base font-semibold text-primary-foreground shadow-md transition hover:opacity-90 hover:shadow-lg"
        >
          Start Managing for Free
          <ArrowRightIcon className="size-5" />
        </a>
        <a
          href="https://livestock-mangement-system.vercel.app/"
          className="flex items-center gap-2 border border-border bg-card px-8 py-3.5 text-base font-semibold text-foreground transition hover:bg-muted"
        >
          View Live Demo
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        {[
          'SSL encrypted',
          'GDPR compliant',
          'Daily backups',
          'Cancel anytime',
          '99.9% uptime SLA',
        ].map((t) => (
          <span key={t} className="flex items-center gap-2">
            <CheckIcon className="size-4 text-primary" />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}