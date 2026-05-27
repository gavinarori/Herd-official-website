'use client';

import {
    MenuIcon, XIcon, ChevronDown,
    HeartPulseIcon, DnaIcon, BarChart3Icon,
    PackageIcon, Share2Icon, UsersIcon,
    ArrowRightIcon, LeafIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/* ── Logo wordmark ─────────────────────────────────────────── */
function HerdLogo({ className = '' }) {
    return (
        <Link href='/' className={`group flex items-center gap-2 ${className}`} aria-label='Herd – go home'>
            {/* Icon mark: stylised "H" in a leaf shape */}
            <span className='flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition group-hover:opacity-90'>
                <LeafIcon className='size-4.5' />
            </span>
            <span className='font-serif text-xl font-bold tracking-tight text-foreground'>
                Herd
            </span>
        </Link>
    );
}

/* ── Nav data ──────────────────────────────────────────────── */
const links = [
    { name: 'Home', href: '/' },
    {
        name: 'Features',
        subLinks: [
            { name: 'Health Intelligence',     href: '#features', icon: HeartPulseIcon, description: 'Vaccinations, disease tracking & vet workflows' },
            { name: 'Breeding & Genetics',     href: '#features', icon: DnaIcon,        description: 'Heat cycles, lineage trees & inbreeding detection' },
            { name: 'Analytics Dashboard',     href: '#features', icon: BarChart3Icon,  description: 'KPIs, mortality rates & financial insights' },
            { name: 'Resource Management',     href: '#features', icon: PackageIcon,    description: 'Feed, medicine & equipment inventory' },
            { name: 'Sharing & Collaboration', href: '#features', icon: Share2Icon,     description: 'Secure links, PDF export & role-based access' },
            { name: 'Multi-Farm Management',   href: '#features', icon: UsersIcon,      description: 'Multiple tenants, roles & unified dashboards' },
        ],
    },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing',      href: '#pricing' },
    { name: 'About',        href: '#about' },
];

/* ── Navbar ────────────────────────────────────────────────── */
export default function Navbar() {
    const [isOpen,       setIsOpen]       = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled,     setScrolled]     = useState(false);

    // Shrink / shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Smooth-scroll via Lenis when clicking anchor links
    const handleAnchor = (href) => (e) => {
        if (!href.startsWith('#')) return;
        e.preventDefault();
        setIsOpen(false);
        const target = document.querySelector(href);
        if (window.__lenis) {
            window.__lenis.scrollTo(target ?? href, { offset: -80, duration: 1.6 });
        } else {
            target?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* ── Desktop nav ───────────────────────────────────── */}
            <nav
                className={`sticky top-0 z-50 w-full transition-all duration-300
                    ${scrolled
                        ? 'border-b border-border bg-background/90 py-3 shadow-sm backdrop-blur-xl'
                        : 'border-b border-transparent bg-background/60 py-4 backdrop-blur-md'
                    }`}
            >
                <div className='mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8'>
                    <HerdLogo />

                    {/* Desktop links */}
                    <div className='hidden items-center gap-1 text-sm text-muted-foreground md:flex'>
                        {links.map((link) =>
                            link.subLinks ? (
                                <div
                                    key={link.name}
                                    className='relative'
                                    onMouseEnter={() => setOpenDropdown(link.name)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button className='flex items-center gap-1 rounded-lg px-3.5 py-2 font-medium transition hover:bg-muted hover:text-foreground'>
                                        {link.name}
                                        <ChevronDown className={`size-3.5 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180 text-primary' : ''}`} />
                                    </button>

                                    {/* Mega dropdown */}
                                    <div className={`absolute left-1/2 top-full mt-1 w-[520px] -translate-x-1/2 transition-all duration-200
                                        ${openDropdown === link.name
                                            ? 'visible translate-y-0 opacity-100'
                                            : 'invisible -translate-y-2 opacity-0'}`}
                                    >
                                        <div className='rounded-2xl border border-border bg-card p-4 shadow-lg'>
                                            <p className='mb-3 px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground'>
                                                Platform Capabilities
                                            </p>
                                            <div className='grid grid-cols-2 gap-1'>
                                                {link.subLinks.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        onClick={handleAnchor(sub.href)}
                                                        className='group/item flex items-start gap-3 rounded-xl p-3 transition hover:bg-muted'
                                                    >
                                                        <div className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition group-hover/item:bg-primary group-hover/item:text-primary-foreground'>
                                                            <sub.icon className='size-4 text-primary transition group-hover/item:text-primary-foreground' />
                                                        </div>
                                                        <div>
                                                            <p className='text-sm font-medium text-foreground'>{sub.name}</p>
                                                            <p className='mt-0.5 text-xs text-muted-foreground leading-snug'>{sub.description}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleAnchor(link.href)}
                                    className='rounded-lg px-3.5 py-2 font-medium transition hover:bg-muted hover:text-foreground'
                                >
                                    {link.name}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Desktop CTAs */}
                    <div className='hidden items-center gap-3 md:flex'>
                        <a
                            href='https://livestock-mangement-system.vercel.app/'
                            className='rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground'
                        >
                            Sign in
                        </a>
                        <a
                            href='https://livestock-mangement-system.vercel.app/'
                            className='flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 hover:shadow-md'
                        >
                            Get Started Free
                            <ArrowRightIcon className='size-3.5' />
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className='rounded-lg p-2 text-foreground transition hover:bg-muted md:hidden'
                        aria-label='Open menu'
                    >
                        <MenuIcon className='size-6' />
                    </button>
                </div>
            </nav>

            {/* ── Mobile drawer ─────────────────────────────────── */}
            {/* Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-50 bg-background/60 backdrop-blur-sm transition-opacity duration-300 md:hidden
                    ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            />

            {/* Drawer panel */}
            <div
                className={`fixed right-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-card shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Drawer header */}
                <div className='flex items-center justify-between border-b border-border px-5 py-4'>
                    <HerdLogo />
                    <button
                        onClick={() => setIsOpen(false)}
                        className='rounded-lg p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground'
                        aria-label='Close menu'
                    >
                        <XIcon className='size-5' />
                    </button>
                </div>

                {/* Drawer links */}
                <div className='flex-1 overflow-y-auto px-4 py-4 space-y-1'>
                    {links.map((link) =>
                        link.subLinks ? (
                            <div key={link.name}>
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                                    className='flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted'
                                >
                                    {link.name}
                                    <ChevronDown className={`size-4 text-muted-foreground transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-200 ${openDropdown === link.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className='mt-1 ml-3 space-y-1 border-l border-border pl-3'>
                                        {link.subLinks.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                onClick={(e) => { handleAnchor(sub.href)(e); setIsOpen(false); }}
                                                className='flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground'
                                            >
                                                <sub.icon className='size-4 shrink-0 text-primary' />
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { handleAnchor(link.href)(e); setIsOpen(false); }}
                                className='block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted'
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                </div>

                {/* Drawer footer CTAs */}
                <div className='border-t border-border p-4 space-y-2'>
                    <a
                        href='https://livestock-mangement-system.vercel.app/'
                        onClick={() => setIsOpen(false)}
                        className='block w-full rounded-xl border border-border py-2.5 text-center text-sm font-medium text-foreground transition hover:bg-muted'
                    >
                        Sign in
                    </a>
                    <a
                        href='https://livestock-mangement-system.vercel.app/'
                        onClick={() => setIsOpen(false)}
                        className='flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90'
                    >
                        Get Started Free
                        <ArrowRightIcon className='size-4' />
                    </a>
                </div>
            </div>
        </>
    );
}