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

export function OurPricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      priceNote: 'forever',
      desc: 'For small farms getting started',
      cta: 'Get Started',
      features: [
        'Up to 100 animals',
        '2 users / farm',
        'Basic health records',
        'Vaccination reminders',
        'Community support',
      ],
    },
    {
      name: 'Pro',
      price: '$49',
      priceNote: '/month per farm',
      desc: 'For growing commercial operations',
      cta: 'Start Free Trial',
      featured: true,
      features: [
        'Unlimited animals',
        '15 users with role-based access',
        'Full health intelligence suite',
        'Breeding & genetics engine',
        'Advanced analytics dashboard',
        'Secure sharing & PDF export',
        'Priority support',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      priceNote: 'contact sales',
      desc: 'For cooperatives & agribusinesses',
      cta: 'Contact Sales',
      features: [
        'Multi-farm management',
        'Unlimited users & farms',
        'Dedicated account manager',
        'Custom API integrations',
        'SLA uptime guarantee',
        'On-premise deployment option',
        'White-label option',
      ],
    },
  ];

  return (
    <section id="pricing" className="flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <SectionTitle
        eyebrow="Pricing"
        title="Straightforward pricing, no surprises"
        description="Start free and scale as your operation grows. Every plan includes a 30-day trial of Pro features."
      />

      <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`group relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-1
              ${plan.featured
                ? 'punch-hole tag-notch border-2 border-primary pl-9 bg-primary/[0.04] shadow-lg md:-mt-3 md:mb-3'
                : 'border border-border bg-card hover:shadow-md'}`}
          >
            {plan.featured && (
              <div className="absolute -top-3 right-5 bg-rust px-3 py-1 stamp-label text-[10px] text-rust-foreground shadow">
                Most Popular
              </div>
            )}
            <div>
              <h3 className="text-base font-semibold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.desc}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="stat-number text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.priceNote}</span>
              </div>
            </div>

            <a
              href="https://livestock-mangement-system.vercel.app/"
              className={`mt-5 w-full py-2.5 text-center text-sm font-semibold transition
                ${plan.featured
                  ? 'bg-primary text-primary-foreground hover:opacity-90'
                  : 'border border-border bg-card text-foreground hover:bg-muted'}`}
            >
              {plan.cta}
            </a>

            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center
                    ${plan.featured ? 'bg-primary' : 'bg-muted-foreground/20'}`}>
                    <CheckIcon className={`size-2.5 ${plan.featured ? 'text-primary-foreground' : 'text-muted-foreground'}`} strokeWidth={3} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground text-center">
        All plans include SSL encryption, daily backups, and GDPR compliance. No contracts, cancel anytime.
      </p>
    </section>
  );
}