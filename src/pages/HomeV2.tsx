import { HeroSectionV2 } from '../components/sections/HeroSectionV2';
import { AboutSectionV2 } from '../components/sections/AboutSectionV2';
import { FeatureGridV2 } from '../components/sections/FeatureGridV2';
import { StackSectionV2 } from '../components/sections/StackSectionV2';
import { BenefitsSectionV2 } from '../components/sections/BenefitsSectionV2';
import { TestimonialV2 } from '../components/sections/TestimonialV2';
import { CTAV2 } from '../components/sections/CTAV2';

export const HomeV2 = () => {
    return (
        <>
            <HeroSectionV2 />
            <AboutSectionV2 />
            <FeatureGridV2 />
            <StackSectionV2 />
            <BenefitsSectionV2 />
            <TestimonialV2 />
            <CTAV2 />
        </>
    );
};
