import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';

// Serif display font — matches the app's --font-serif token
const fraunces = Fraunces({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
    axes: ['SOFT', 'WONK'],
});

// Sans body font — matches the app's --font-sans token
const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${fraunces.variable} ${dmSans.variable}`}>
            <body>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}