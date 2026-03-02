import { HeroSectionV2 } from '../components/sections/HeroSectionV2';
import { AboutSectionV2 } from '../components/sections/AboutSectionV2';
import { FeatureGridV2 } from '../components/sections/FeatureGridV2';
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
            <FeatureGridV2 />
            <OperatingSystemSection />
            <TestimonialStickySection />
            <AutomationSection />
            <SecuritySection />
            <CTASection />
        </>
    );
};
