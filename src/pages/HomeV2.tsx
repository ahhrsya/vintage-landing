import { HeroSectionV2 } from '../components/sections/HeroSectionV2';
import { AboutSectionV2 } from '../components/sections/AboutSectionV2';
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
            <AboutSectionV2 />
            <TabsFeatureSection />
            <OperatingSystemSection />
            <TestimonialStickySection />
            <AutomationSection />
            <SecuritySection />
            <CTASection />
        </>
    );
};
