import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Herd — Enterprise Livestock Management',
    description:
        'Herd is a scalable, enterprise-grade livestock management platform for commercial farmers, cooperatives, and agribusinesses. Multi-farm operations, real-time health monitoring, breeding analytics, and AI-powered insights — completely free to start.',
    keywords: [
        'livestock management',
        'farm management software',
        'cattle tracking',
        'veterinary management',
        'agritech platform',
        'multi-farm management',
    ],
    openGraph: {
        title: 'Herd — Enterprise Livestock Management',
        description: 'Multi-farm operations, real-time health monitoring, and AI-powered insights — completely free.',
        siteName: 'Herd',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Herd — Enterprise Livestock Management',
    },
    appleWebApp: {
        title: 'Herd',
    },
};

export default function MarketingLayout({ children }) {
    return (
        <>
            <Banner />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}