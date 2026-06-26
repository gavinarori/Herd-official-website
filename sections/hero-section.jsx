import {
  ArrowRightIcon, CheckIcon, ChevronRightIcon, PlayIcon,
  PlusIcon, MinusIcon, StarIcon, ShieldCheckIcon, BarChart3Icon,
  HeartPulseIcon, DnaIcon, PackageIcon, UsersIcon, GlobeIcon,
  ZapIcon, TrendingUpIcon, BellIcon, LockIcon, Share2Icon,
  ActivityIcon, LeafIcon,
} from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const features = [, 'Multi-farm ready'];

  return (
    <section className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-28 md:px-8">

      {/* ── Background video: grazing herd footage ──────────────── */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#0b1709]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-pasture-poster.jpg"
          className="h-full w-full object-cover"
        >
          {/* Replace with your own footage — a slow pan across grazing cattle
              or a milking-parlour morning works best at this aspect ratio. */}
          <source src="https://video.gumlet.io/67690fd82fbe90b354d66613/68d50bcc028ee75622efdb7a/download.mp4" type="video/mp4" />
        </video>
        {/* Deep pasture-green scrim for text legibility — not a generic black overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1709]/85 via-[#0b1709]/55 to-[#0b1709]/90" />
        <div className="absolute inset-0 ledger-rule opacity-[0.06]" />
      </div>


      <h1 className="max-w-4xl text-center text-5xl font-bold leading-[1.05] text-white md:text-7xl">
        Every animal,<br />
        <span className="relative inline-block">
          tagged
          <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 200 14" preserveAspectRatio="none">
            <path d="M2,8 Q50,2 100,7 T198,6" stroke="var(--accent)" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </span>
        {' '}and{' '}
        <span className="text-accent">accounted for.</span>
      </h1>

      <p className="mt-7 max-w-xl text-center text-lg/8 text-white/80">
        Built with farmers, for farmers. From the first calf to the last sale —
        health, breeding, and the books, all in one place that works as hard as you do.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://livestock-mangement-system.vercel.app/"
          className="flex items-center gap-2 bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg transition hover:opacity-90 hover:shadow-xl"
        >
          Start Managing Free
          <ArrowRightIcon className="size-4" />
        </a>
        <a
          href="https://livestock-mangement-system.vercel.app/"
          className="flex items-center gap-2 border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <PlayIcon className="size-4 fill-current" />
          Watch It in the Field
        </a>
      </div>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-6 text-sm text-white/75">
        {features.map((f) => (
          <span key={f} className="flex items-center gap-2">
            <CheckIcon className="size-4 text-accent" />
            {f}
          </span>
        ))}
      </div>

      {/* SIGNATURE VISUAL: a hanging livestock ear tag, floating glass-on-video */}
      <div className="relative mt-16 flex w-full max-w-5xl items-start justify-center gap-6 md:gap-10">

        {/* Left: small swinging stat tag */}
        <div className="hidden flex-col items-center pt-10 lg:flex">
          <div className="h-10 w-px bg-white/30" />
          <div className="animate-swing tag-notch-sm w-44 border border-white/25 bg-white/95 p-4 shadow-xl punch-hole pl-6 backdrop-blur">
            <p className="stamp-label text-[10px] text-muted-foreground">Tag #C-1042</p>
            <p className="mt-1.5 font-display text-lg font-bold text-foreground">Bessie</p>
            <span className="mt-1.5 inline-block badge-healthy px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
              Healthy
            </span>
          </div>
        </div>

        {/* Center: the main tag — large, stamped, the literal hero */}
        <div className="flex flex-col items-center">
          <div className="h-12 w-px bg-white/30" />
          <div className="punch-hole tag-notch w-[300px] border-2 border-foreground/80 bg-card/97 p-7 pl-10 shadow-2xl animate-stamp-in backdrop-blur md:w-[360px]">
            <div className="flex items-center justify-between stamp-label text-[10px] text-muted-foreground">
              <span>Tag #B-0001</span>
              <span>EST. 2025</span>
            </div>
            <p className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              FarmStead
              <br />Ledger
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <ActivityIcon className="size-3.5 text-primary" />
              2,847 animals tracked today
            </div>
            <div className="mt-5 h-px w-full border-t border-dashed border-border" />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { v: '94%', l: 'Healthy' },
                { v: '120+', l: 'Farms' },
                { v: '40%', l: 'Output ↑' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="stat-number text-base font-bold text-primary">{s.v}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: small swinging stat tag */}
        <div className="hidden flex-col items-center pt-16 lg:flex">
          <div className="h-10 w-px bg-white/30" />
          <div className="animate-swing tag-notch-sm w-44 border border-white/25 bg-white/95 p-4 shadow-xl punch-hole pl-6 backdrop-blur" style={{ animationDelay: '0.6s' }}>
            <p className="stamp-label text-[10px] text-muted-foreground">Tag #S-0219</p>
            <p className="mt-1.5 font-display text-lg font-bold text-foreground">Romeo</p>
            <span className="mt-1.5 inline-block badge-recovering px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
              Recovering
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}