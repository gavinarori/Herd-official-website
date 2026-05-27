
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


export function OurTestimonialSection() {
  const testimonials = [
    {
      quote: 'We manage 3,200 cattle across two ranches. Before this platform, coordination was a nightmare. Now our vets and farm managers share a single source of truth.',
      name: 'James Mwangi',
      title: 'Owner, Mwangi Agro-Ranch Ltd',
      rating: 5,
      initials: 'JM',
      color: 'bg-primary/10 text-primary',
    },
    {
      quote: 'The vaccination reminder system alone has saved us from three potential outbreak scenarios. The automated alerts are worth everything.',
      name: 'Dr. Amina Osei',
      title: 'Chief Veterinarian, NileFarm Cooperative',
      rating: 5,
      initials: 'AO',
      color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400',
    },
    {
      quote: 'The breeding and genetics engine is incredible. We\'ve measurably improved our herd quality by tracking lineage and inbreeding coefficients.',
      name: 'Peter Kimani',
      title: 'Director, Rift Valley Dairy Co-op',
      rating: 5,
      initials: 'PK',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400',
    },
    {
      quote: 'Sharing secure animal profiles with buyers via time-limited links has completely changed how we sell. Professional, trustworthy, fast.',
      name: 'Sarah Ndung\'u',
      title: 'Operations Manager, SunSet Livestock',
      rating: 5,
      initials: 'SN',
      color: 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400',
    },
    {
      quote: 'Multi-farm management under one dashboard is a game-changer. I can see health status across all four farms before my morning tea.',
      name: 'Mohammed Al-Rashid',
      title: 'COO, Al-Rashid Agribusiness',
      rating: 5,
      initials: 'MR',
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400',
    },
    {
      quote: 'The analytics dashboard helped us identify that our feed costs per animal were 22% above optimal. We fixed it in two weeks.',
      name: 'Grace Atieno',
      title: 'Farm Manager, Lake Basin Farms',
      rating: 5,
      initials: 'GA',
      color: 'bg-teal-100 text-teal-700 dark:bg-teal-950/50 dark:text-teal-400',
    },
  ];
 
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 md:px-8 bg-muted/20 border-y border-border">
      <SectionTitle
        eyebrow="Testimonials"
        title="Trusted by farmers and vets across Africa"
        description="From small family farms to large cooperatives — real results from real livestock operations."
      />
 
      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <StarIcon key={j} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="flex-1 text-sm/6 text-muted-foreground">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${t.color}`}>
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
 