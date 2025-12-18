import Hero from './Hero';
import AboutSection from './AboutSection';
import MissionSection from './MissionSection';
import LegacySection from './LegacySection';
import FounderSection from './FounderSection';
import CampusesSection from './CampusesSection';
import InternationalSection from './InternationalSection';

// Available sections registry
export const AVAILABLE_SECTIONS = {
  hero: Hero,
  about: AboutSection,
  mission: MissionSection,
  legacy: LegacySection,
  founder: FounderSection,
  campuses: CampusesSection,
  international: InternationalSection
};

// Dynamic section renderer
export const renderSection = (sectionConfig, schoolData, index) => {
  const { type, props = {} } = sectionConfig;
  const Component = AVAILABLE_SECTIONS[type];
  
  if (!Component) return null;
  
  return (
    <Component 
      key={`${type}-${index}`} 
      schoolData={schoolData} 
      {...props} 
    />
  );
};