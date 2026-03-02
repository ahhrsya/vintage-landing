import { HeroSectionV2 } from '../components/sections/HeroSectionV2';
import { AboutUsSection } from '../components/sections/AboutUsSection';
import { TabsFeatureSection } from '../components/sections/TabsFeatureSection';
import { OperatingSystemSection } from '../components/sections/OperatingSystemSection';
import { TestimonialStickySection } from '../components/sections/TestimonialStickySection';
import { AutomationSection } from '../components/sections/AutomationSection';
import { SecuritySection } from '../components/sections/SecuritySection';
import { CTASection } from '../components/sections/CTASection';

export const HomeV2 = () => {
    return (
        <>
            <HeroSectionV2 />
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
