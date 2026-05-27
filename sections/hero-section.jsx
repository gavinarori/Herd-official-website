
import {
  ArrowRightIcon, CheckIcon, ChevronRightIcon, PlayIcon,
  PlusIcon, MinusIcon, StarIcon, ShieldCheckIcon, BarChart3Icon,
  HeartPulseIcon, DnaIcon, PackageIcon, UsersIcon, GlobeIcon,
  ZapIcon, TrendingUpIcon, BellIcon, LockIcon, Share2Icon,
  ActivityIcon, LeafIcon, CowIcon,
} from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const features = ['No credit card required', '30-day free trial', 'Multi-farm ready'];
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-24 md:px-8">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeOpacity="0.04" strokeWidth="1" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
 
      {/* Glowing orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
 
      {/* Badge */}
      <a
        href="https://livestock-mangement-system.vercel.app/"
        className="group mb-6 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-sm transition hover:border-primary/40 hover:bg-primary/5"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
          <ZapIcon className="size-3 text-primary-foreground" />
        </span>
        Enterprise-grade. Completely free.
        <ChevronRightIcon className="size-4 text-muted-foreground transition group-hover:translate-x-0.5" />
      </a>
 
      <h1 className="max-w-4xl text-center text-5xl font-bold leading-tight text-foreground md:text-7xl md:leading-[1.1]">
        The Future of{' '}
        <span className="relative inline-block">
          <span className="relative z-10 bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">Livestock</span>
          <span className="absolute -inset-1 -z-0 rounded-lg bg-primary/10 blur-sm" />
        </span>{' '}
        Management
      </h1>
 
      <p className="mt-6 max-w-2xl text-center text-lg/8 text-muted-foreground">
        A scalable, enterprise-grade platform for commercial farmers, cooperatives, and agribusinesses.
        Multi-farm operations, real-time health monitoring, and AI-powered insights — all in one place.
      </p>
 
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://livestock-mangement-system.vercel.app/"
          className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 hover:shadow-md"
        >
          Start Managing Free
          <ArrowRightIcon className="size-4" />
        </a>
        <a
          href="https://livestock-mangement-system.vercel.app/"
          className="flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3 font-semibold text-foreground transition hover:bg-muted"
        >
          <PlayIcon className="size-4 fill-current" />
          Watch Demo
        </a>
      </div>
 
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        {features.map((f) => (
          <span key={f} className="flex items-center gap-2">
            <CheckIcon className="size-4 text-primary" />
            {f}
          </span>
        ))}
      </div>
 
      {/* Dashboard preview */}
      <div className="relative mt-16 w-full max-w-5xl">
        <div className="rounded-2xl border border-border bg-card p-1 shadow-xl ring-1 ring-border/50">
          {/* Faux browser bar */}
          <div className="flex items-center gap-2 rounded-t-xl border-b border-border bg-muted px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-amber-400/70" />
            <span className="h-3 w-3 rounded-full bg-green-400/70" />
            <span className="mx-auto flex h-6 w-48 items-center justify-center rounded-md border border-border bg-background px-3 text-xs text-muted-foreground">
              livestock-mangement-system.vercel.app
            </span>
          </div>
 
          {/* Dashboard mock */}
          <div className="grid grid-cols-4 gap-3 rounded-b-xl bg-background p-4">
            {/* Sidebar mini */}
            <div className="col-span-1 hidden flex-col gap-2 md:flex">
              {['Dashboard', 'Animals', 'Health', 'Breeding', 'Resources', 'Analytics'].map((item, i) => (
                <div key={item} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${i === 0 ? 'bg-primary/10 font-medium text-primary' : 'text-muted-foreground'}`}>
                  <div className="h-4 w-4 rounded bg-current opacity-30" />
                  {item}
                </div>
              ))}
            </div>
            {/* Main area */}
            <div className="col-span-4 space-y-3 md:col-span-3">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: 'Total Animals', value: '2,847', change: '+12%', color: 'text-primary' },
                  { label: 'Healthy', value: '2,691', change: '94.5%', color: 'text-emerald-600' },
                  { label: 'Under Treatment', value: '89', change: '-3%', color: 'text-amber-600' },
                  { label: 'This Month Revenue', value: 'KSH 842K', change: '+18%', color: 'text-blue-600' },
                ].map((card) => (
                  <div key={card.label} className="rounded-xl border border-border bg-card p-3">
                    <p className="text-xs text-muted-foreground">{card.label}</p>
                    <p className={`mt-1 text-lg font-bold ${card.color}`}>{card.value}</p>
                    <p className="text-xs text-muted-foreground">{card.change}</p>
                  </div>
                ))}
              </div>
              {/* Chart placeholder */}
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="mb-3 text-xs font-medium text-muted-foreground">Animal Health Trend — Last 30 days</p>
                <div className="flex items-end gap-1 h-20">
                  {[65, 70, 72, 68, 80, 85, 82, 88, 91, 87, 90, 94, 92, 95, 94].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-primary/20 transition-all"
                      style={{ height: `${h}%` }}
                    >
                      <div className="h-full w-full rounded-sm bg-primary/60" style={{ height: `${h * 0.6}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              {/* Recent animals */}
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="mb-2 text-xs font-medium text-muted-foreground">Recent Animals</p>
                <div className="space-y-2">
                  {[
                    { name: 'Bessie #A-1042', type: 'Cattle', status: 'Healthy', color: 'text-emerald-600 bg-emerald-50' },
                    { name: 'Romeo #S-0219', type: 'Sheep', status: 'Recovering', color: 'text-blue-600 bg-blue-50' },
                    { name: 'Trigger #H-0088', type: 'Horse', status: 'Healthy', color: 'text-emerald-600 bg-emerald-50' },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                          {a.name[0]}
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-xs">{a.name}</p>
                          <p className="text-xs text-muted-foreground">{a.type}</p>
                        </div>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${a.color}`}>{a.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Glow under card */}
        <div className="absolute -bottom-8 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl" />
      </div>
    </section>
  );
}
