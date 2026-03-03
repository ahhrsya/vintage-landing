import { NavbarV3 } from '../components/finage/NavbarV3';
import { HeroV3 } from '../components/finage/HeroV3';
import { StatsSectionV3 } from '../components/finage/StatsSectionV3';
import { CoreFeaturesV3 } from '../components/finage/CoreFeaturesV3';
import { OperatingSystemV3 } from '../components/finage/OperatingSystemV3';
import { AutomationSectionV3 } from '../components/finage/AutomationSectionV3';
import { SecuritySectionV3 } from '../components/finage/SecuritySectionV3';
import { CTAV3 } from '../components/finage/CTAV3';
import { FooterV3 } from '../components/finage/FooterV3';

export const HomeV3 = () => {
    return (
        <div className="bg-[#09090B] min-h-screen text-white font-['DM_Sans']">
            <NavbarV3 />
            <HeroV3 />
            <StatsSectionV3 />
            <CoreFeaturesV3 />
            <OperatingSystemV3 />
            <AutomationSectionV3 />
            <SecuritySectionV3 />
            <CTAV3 />
            <FooterV3 />
        </div>
    );
};
