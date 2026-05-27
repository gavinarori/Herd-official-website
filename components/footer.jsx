import {
    TwitterIcon, LinkedinIcon, GithubIcon, YoutubeIcon,
    LeafIcon, ArrowRightIcon, MailIcon, MapPinIcon, PhoneIcon,
    HeartPulseIcon, DnaIcon, BarChart3Icon, PackageIcon,
    ShieldCheckIcon, FileTextIcon, CookieIcon,
} from 'lucide-react';
import Link from 'next/link';

/* ── Logo ─────────────────────────────────────────────────── */
function HerdLogo() {
    return (
        <Link href='/' className='group flex items-center gap-2' aria-label='Herd – home'>
            <span className='flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition group-hover:opacity-90'>
                <LeafIcon className='size-4.5' />
            </span>
            <span className='font-serif text-xl font-bold tracking-tight text-foreground'>
                Herd
            </span>
        </Link>
    );
}

/* ── Footer data ──────────────────────────────────────────── */
const footerLinks = [
    {
        heading: 'Platform',
        links: [
            { label: 'Animal Lifecycle',       href: '#features' },
            { label: 'Health Intelligence',    href: '#features' },
            { label: 'Breeding & Genetics',    href: '#features' },
            { label: 'Analytics Dashboard',    href: '#features' },
            { label: 'Resource Management',    href: '#features' },
            { label: 'Sharing & Collaboration',href: '#features' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { label: 'About Herd',   href: '#about' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Pricing',      href: '#pricing' },
            { label: 'Blog',         href: '#blog' },
            { label: 'Careers',      href: '#careers' },
            { label: 'Contact',      href: '#contact' },
        ],
    },
    {
        heading: 'Support',
        links: [
            { label: 'Documentation',  href: '#docs' },
            { label: 'API Reference',  href: '#docs' },
            { label: 'Status Page',    href: '#status' },
            { label: 'Help Centre',    href: '#help' },
            { label: 'Community',      href: '#community' },
            { label: 'Release Notes',  href: '#changelog' },
        ],
    },
];

const socialLinks = [
    { icon: TwitterIcon,  href: '#', label: 'Twitter / X' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: GithubIcon,   href: '#', label: 'GitHub' },
    { icon: YoutubeIcon,  href: '#', label: 'YouTube' },
];

const trustBadges = [
    { icon: ShieldCheckIcon, label: 'SSL Encrypted' },
    { icon: LeafIcon,        label: 'GDPR Compliant' },
    { icon: HeartPulseIcon,  label: '99.9% Uptime' },
    { icon: DnaIcon,         label: 'ISO 27001' },
];

/* ── Footer ───────────────────────────────────────────────── */
export default function Footer() {
    return (
        <footer className='border-t border-border bg-background'>

            {/* ── Trust strip ─────────────────────────────────── */}
            <div className='border-b border-border bg-muted/30'>
                <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 md:px-8'>
                    {trustBadges.map(({ icon: Icon, label }) => (
                        <div key={label} className='flex items-center gap-2 text-sm text-muted-foreground'>
                            <Icon className='size-4 text-primary' />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Main footer grid ────────────────────────────── */}
            <div className='mx-auto max-w-7xl px-4 py-16 md:px-8'>
                <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5'>

                    {/* Brand column */}
                    <div className='lg:col-span-2'>
                        <HerdLogo />
                        <p className='mt-4 max-w-xs text-sm/6 text-muted-foreground'>
                            Enterprise-grade livestock management for commercial farmers, cooperatives,
                            and agribusinesses. Multi-farm operations, real-time health monitoring,
                            and AI-powered insights — completely free to start.
                        </p>

                        {/* Contact micro-info */}
                        <div className='mt-5 space-y-2 text-sm text-muted-foreground'>
                            <a href='mailto:support@herd.app' className='flex items-center gap-2 transition hover:text-foreground'>
                                <MailIcon className='size-4 shrink-0 text-primary' />
                                support@herd.app
                            </a>
                            <p className='flex items-center gap-2'>
                                <MapPinIcon className='size-4 shrink-0 text-primary' />
                                Nairobi, Kenya · Serving Africa & beyond
                            </p>
                        </div>

                        {/* Socials */}
                        <div className='mt-6 flex items-center gap-2'>
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    title={label}
                                    className='flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                                >
                                    <Icon className='size-4' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((col) => (
                        <div key={col.heading}>
                            <h3 className='mb-4 text-xs font-semibold uppercase tracking-widest text-foreground'>
                                {col.heading}
                            </h3>
                            <ul className='space-y-2.5'>
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <Link
                                            href={l.href}
                                            className='text-sm text-muted-foreground transition hover:text-foreground'
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── Newsletter bar ───────────────────────────── */}
                <div className='mt-14 rounded-2xl border border-border bg-card p-6 md:p-8'>
                    <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
                        <div>
                            <h3 className='font-semibold text-foreground'>
                                Stay ahead of your herd
                            </h3>
                            <p className='mt-1 text-sm text-muted-foreground'>
                                Weekly insights on livestock management, agritech, and platform updates.
                            </p>
                        </div>
                        <div className='flex w-full max-w-sm items-center gap-2 rounded-xl border border-border bg-background p-1.5'>
                            <MailIcon className='ml-2 size-4 shrink-0 text-muted-foreground' />
                            <input
                                type='email'
                                placeholder='your@email.com'
                                className='flex-1 bg-transparent py-1.5 text-sm text-foreground placeholder:text-muted-foreground outline-none'
                            />
                            <button className='flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 shrink-0'>
                                Subscribe
                                <ArrowRightIcon className='size-3.5' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom bar ──────────────────────────────────── */}
            <div className='border-t border-border'>
                <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-muted-foreground md:flex-row md:px-8'>
                    <p>
                        © {new Date().getFullYear()} Herd. All rights reserved. Built for farmers, by farmers.
                    </p>
                    <div className='flex flex-wrap items-center justify-center gap-5'>
                        <Link href='#privacy' className='flex items-center gap-1.5 transition hover:text-foreground'>
                            <ShieldCheckIcon className='size-3.5' />
                            Privacy Policy
                        </Link>
                        <Link href='#terms' className='flex items-center gap-1.5 transition hover:text-foreground'>
                            <FileTextIcon className='size-3.5' />
                            Terms of Service
                        </Link>
                        <Link href='#cookies' className='flex items-center gap-1.5 transition hover:text-foreground'>
                            <CookieIcon className='size-3.5' />
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}