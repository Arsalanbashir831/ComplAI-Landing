import { TooltipProvider } from '@radix-ui/react-tooltip';

import DemoHeroSection from '@/components/demo/demo-hero-section';
import TestimonialCarousel from '@/components/testimonials';
import TeamsSlider from '@/components/teams-slider';

export default function Demo() {
    return (
        <>
            <main className="pt-20 ">
                <TooltipProvider>
                    <DemoHeroSection />
                    <TeamsSlider
                        className="md:text-3xl font-semibold justify-self-center text-left px-12"
                        showSidesFade={false}
                    />
                    <TestimonialCarousel />

                </TooltipProvider>
            </main>
        </>
    );
}
