import { HeroSection } from '../components/sections/HeroSection';
import { AboutUsSection } from '../components/sections/AboutUsSection';
import { TabsFeatureSection } from '../components/sections/TabsFeatureSection';
import { OperatingSystemSection } from '../components/sections/OperatingSystemSection';
import { TestimonialStickySection } from '../components/sections/TestimonialStickySection';
import { AutomationSection } from '../components/sections/AutomationSection';
import { SecuritySection } from '../components/sections/SecuritySection';
import { CTASection } from '../components/sections/CTASection';

export const HomeV1 = () => {
    return (
        <>
            <HeroSection />
            <AboutUsSection />
            <TabsFeatureSection />
            <OperatingSystemSection />
            <TestimonialStickySection />
            <AutomationSection />
            <SecuritySection />
            <CTASection />
        </>
    );
};
