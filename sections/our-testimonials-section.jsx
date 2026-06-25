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

export function OurTestimonialSection() {
  const testimonials = [
    {
      quote: 'We manage 3,200 cattle across two ranches. Before this platform, coordination was a nightmare. Now our vets and farm managers share a single source of truth.',
      name: 'James Mwangi',
      title: 'Owner, Mwangi Agro-Ranch Ltd',
      rating: 5,
      initials: 'JM',
    },
    {
      quote: 'The vaccination reminder system alone has saved us from three potential outbreak scenarios. The automated alerts are worth everything.',
      name: 'Dr. Amina Osei',
      title: 'Chief Veterinarian, NileFarm Cooperative',
      rating: 5,
      initials: 'AO',
    },
    {
      quote: 'The breeding and genetics engine is incredible. We\'ve measurably improved our herd quality by tracking lineage and inbreeding coefficients.',
      name: 'Peter Kimani',
      title: 'Director, Rift Valley Dairy Co-op',
      rating: 5,
      initials: 'PK',
    },
    {
      quote: 'Sharing secure animal profiles with buyers via time-limited links has completely changed how we sell. Professional, trustworthy, fast.',
      name: 'Sarah Ndung\'u',
      title: 'Operations Manager, SunSet Livestock',
      rating: 5,
      initials: 'SN',
    },
    {
      quote: 'Multi-farm management under one dashboard is a game-changer. I can see health status across all four farms before my morning tea.',
      name: 'Mohammed Al-Rashid',
      title: 'COO, Al-Rashid Agribusiness',
      rating: 5,
      initials: 'MR',
    },
    {
      quote: 'The analytics dashboard helped us identify that our feed costs per animal were 22% above optimal. We fixed it in two weeks.',
      name: 'Grace Atieno',
      title: 'Farm Manager, Lake Basin Farms',
      rating: 5,
      initials: 'GA',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <SectionTitle
        eyebrow="From the Field"
        title="Trusted by farmers and vets across Africa"
        description="From small family farms to large cooperatives — real results from real livestock operations."
      />

      {/* Photo strip — farmers and vets in the field */}
      <div className="mt-10 grid w-full max-w-5xl grid-cols-3 gap-3">
        {[
          { src: '/assets/willy-the-wizard-hpSRHM5dDd4-unsplash.jpg', alt: 'Veterinarian consulting with a farmer' },
          { src: '/assets/istockphoto-2161960815-612x612.jpg', alt: 'Farmer walking through a cattle yard' },
          { src: '/assets/AdobeStock_1784752676-1024x681.jpeg', alt: 'Farm team reviewing herd records together' },
        ].map((img) => (
          <div key={img.src} className="aspect-[4/3] overflow-hidden border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-4 border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <StarIcon key={j} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="flex-1 text-sm/6 text-muted-foreground">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-3 border-t border-dashed border-border">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary/30 bg-primary/10 text-xs font-bold text-primary">
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