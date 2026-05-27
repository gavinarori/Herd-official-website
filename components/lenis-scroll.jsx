'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
            smoothWheel: true,
            smoothTouch: true,
            touchMultiplier: 1.5,
            wheelMultiplier: 0.9,
            anchors: true,
            syncTouch: false,
            infinite: false,
        });

        // Tie lenis into requestAnimationFrame
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Expose lenis globally so other components can call lenis.scrollTo()
        window.__lenis = lenis;

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            delete window.__lenis;
        };
    }, []);

    return null;
}