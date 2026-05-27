"use client"
import { useState } from 'react';
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

export function FaqSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: 'Is the platform really free?',
      a: 'Yes — the core platform is completely free with no time limits. The Starter plan (up to 100 animals, 2 users) is free forever. Pro and Enterprise plans are available for larger operations needing advanced features.',
    },
    {
      q: 'How does multi-farm management work?',
      a: 'Each farm is a separate tenant with its own animals, users, and data. As an Admin you can oversee all farms from a unified dashboard, while farm-level managers and workers only see their assigned farm.',
    },
    {
      q: 'What animal types are supported?',
      a: 'The platform supports cattle, sheep, goats, pigs, poultry, horses, fish, aquatic animals, and any custom type. Each type has relevant fields (e.g., milk yield for dairy cattle, egg production for poultry).',
    },
    {
      q: 'How secure is shared animal data?',
      a: 'Shares use unique codes with optional password protection. Links are time-limited and every access is logged. Role-based shares ensure a vet only sees health data, not financial records.',
    },
    {
      q: 'Can I import existing animal records?',
      a: 'Yes — CSV import is supported for bulk animal onboarding. Custom field mapping lets you align your existing spreadsheet columns to the platform\'s data model.',
    },
    {
      q: 'Does it work offline or on mobile?',
      a: 'The web app is fully responsive and works on mobile browsers. A Progressive Web App (PWA) mode for offline use on farm is on the roadmap for Q3 2025.',
    },
  ];
 
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 md:px-8 bg-muted/20 border-y border-border">
      <SectionTitle
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know before getting started. Still have questions? Email us at support@livestockms.app"
      />
 
      <div className="mt-12 w-full max-w-2xl space-y-1">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-foreground hover:bg-muted/50 transition"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              {open === i
                ? <MinusIcon className="size-4 shrink-0 text-primary" />
                : <PlusIcon className="size-4 shrink-0 text-muted-foreground" />
              }
            </button>
            {open === i && (
              <div className="border-t border-border px-5 py-4 text-sm/6 text-muted-foreground">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}