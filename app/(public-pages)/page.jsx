
import { HeroSection } from '@/sections/hero-section';
import { StatsSection } from '@/sections/stats';
import { HowItWorksSection } from '@/sections/how-it-works';
import { FeaturesSection } from '@/sections/features';
import { SharingSection } from '@/sections/sharing';
import { OurPricingSection } from '@/sections/our-pricing-section';
import { FaqSection } from '@/sections/faq-section';
import { OurTestimonialSection } from '@/sections/our-testimonials-section';
import { CallToActionSection } from '@/sections/call-to-action-section';



export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <StatsSection/>
            <HowItWorksSection />
            <FeaturesSection/>
            <SharingSection/>
            <OurPricingSection/>
            <OurTestimonialSection />
            <FaqSection />
            <CallToActionSection />
        </main>
    );
}
