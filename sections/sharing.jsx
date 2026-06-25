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

export function SharingSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <div>
            <SectionTitle
              eyebrow="Collaboration"
              title="Share securely with the right people"
              description="Grant vets, inspectors, and partners exactly the access they need — nothing more. Every view is tracked, every link is time-limited."
              center={false}
            />
            <ul className="mt-8 space-y-4">
              {[
                { icon: GlobeIcon, title: 'Public profiles', desc: 'Read-only animal profiles with a clean public URL' },
                { icon: LockIcon, title: 'Private secure access', desc: 'Password-protected or token-gated share links' },
                { icon: UsersIcon, title: 'Role-based shared access', desc: 'Vets see only health data; buyers see only identity & weight' },
                { icon: ActivityIcon, title: 'Activity tracking', desc: 'Full audit log — who accessed what and when' },
                { icon: BarChart3Icon, title: 'PDF export', desc: 'Generate professional animal reports with one click' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary/30 bg-primary/10">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Share UI mockup — styled as a tag record */}
          <div className="punch-hole tag-notch border-2 border-foreground/70 bg-card p-6 pl-9 shadow-lg">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-semibold text-foreground">Share Animal Profile</h4>
              <span className="border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Active</span>
            </div>

            {/* Share link */}
            <div className="flex items-center gap-2 border border-border bg-muted p-3 mb-4">
              <code className="flex-1 truncate text-xs text-muted-foreground">
                livestockms.app/share/Xk9mP2aBcQ
              </code>
              <button className="border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition">
                Copy
              </button>
            </div>

            {/* Access modes */}
            <div className="space-y-2 mb-5">
              {[
                { label: 'Public (read-only)', active: false },
                { label: 'Private (token required)', active: true },
                { label: 'Role-based (vet access)', active: false },
              ].map((m) => (
                <label key={m.label} className={`flex cursor-pointer items-center justify-between border p-3 transition
                  ${m.active ? 'border-primary/50 bg-primary/5' : 'border-border bg-background'}`}>
                  <span className="text-sm text-foreground">{m.label}</span>
                  <div className={`h-5 w-9 rounded-full transition ${m.active ? 'bg-primary' : 'bg-muted'} relative`}>
                    <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${m.active ? 'left-4' : 'left-0.5'}`} />
                  </div>
                </label>
              ))}
            </div>

            {/* Expiry */}
            <div className="flex items-center justify-between bg-muted p-3 text-sm">
              <span className="text-muted-foreground">Link expires</span>
              <span className="font-medium text-foreground">14 days · 23 views</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="border border-border bg-card py-2 text-sm font-medium text-foreground hover:bg-muted transition">
                Export PDF
              </button>
              <button className="bg-primary py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
                Send Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}