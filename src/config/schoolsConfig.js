// School configurations - each school inherits master structure by default
// Updated with section-based system
export const schoolsConfig = [
  {
    id: 'alipurduar',
    name: 'TIGPS - Alipurduar',
    location: 'Alipurduar',
    address: 'TOPSHIKHATA, NEAR:- PARARPAR GRAM PANCHAYET, ALIPURDUAR Pin no: 736121 West Bengal',
    contact: '(03564) 257355',
    email: 'alipurduar@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: '/pictures/home/school/alipurduar.webp',
    description: 'Excellence in education in the heart of tea garden region',
    
    // Custom content for Alipurduar
    content: {
      about: {
        text: 'Established in 2014, TIGPS Alipurduar is a co-educational English-medium school located on the outskirts of the town, blessed with a lush green natural periphery. The school is dedicated to fostering students\' growth and development from the elementary level. Securing CBSE affiliation in 2021, since then it has achieved remarkable success in the academic field. The committed faculty of the school facilitates cognitive and effective learning through the use of Interactive Boards and audiovisual presentations.'
      }
    },
    
    // School-specific carousel images
    carouselImages: [
      '/pictures/hero_section/alipurduar/banner-1.webp',
      '/pictures/hero_section/alipurduar/banner-2.webp',
      '/pictures/hero_section/alipurduar/banner-3.webp'
    ],
    
    // Section-specific images (hero uses master carousel, others use school image)
    images: {
      about: '/pictures/image.jpg',
      mission: '/pictures/image.jpg',
      legacy: '/pictures/image.jpg',
      founder: '/pictures/image.jpg',
      campuses: '/pictures/image.jpg',
      international: '/pictures/image.jpg',
      academics: '/pictures/image.jpg',
      admissions: '/pictures/image.jpg',
      life: '/pictures/image.jpg',
      contact: '/pictures/image.jpg'
    },
    
    // Homepage section configuration
    homepage: [
      { type: 'hero', props: { carousel: true } },
      { type: 'about' },
      { type: 'mission' },
      { type: 'legacy' },
      { type: 'founder' },
      { type: 'international' }
    ],
    
    // About page configuration - use master structure
    aboutPage: [
      { type: 'aboutHero' },
      { type: 'aboutContent' },
      { type: 'missionVision' },
      { type: 'affiliations' },
      { type: 'awards' },
      { type: 'societyPrograms' },
      { type: 'mentorship' },
      { type: 'founder' }
    ]
  },
  {
    id: 'bolpur',
    name: 'TIGPS - Bolpur',
    location: 'Bolpur',
    address: 'Bolpur, Birbhum, West Bengal Pin no: 731204',
    contact: '(03463) 255123',
    email: 'bolpur@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: '/pictures/home/school/bolpur.webp',
    description: 'Excellence in education in the cultural heart of Bengal',
    
    // School-specific carousel images
    carouselImages: [
      '/pictures/hero_section/bolpur/banner-1.webp',
      '/pictures/hero_section/bolpur/banner-2.webp',
      '/pictures/hero_section/bolpur/banner-3.webp'
    ],
    
    images: {
      about: '/pictures/image.jpg',
      mission: '/pictures/image.jpg',
      legacy: '/pictures/image.jpg',
      founder: '/pictures/image.jpg',
      campuses: '/pictures/image.jpg',
      international: '/pictures/image.jpg',
      academics: '/pictures/image.jpg',
      admissions: '/pictures/image.jpg',
      life: '/pictures/image.jpg',
      contact: '/pictures/image.jpg'
    },
    
    homepage: [
      { type: 'hero', props: { carousel: true } },
      { type: 'about' },
      { type: 'mission' },
      { type: 'legacy' },
      { type: 'founder' },
      { type: 'campuses' },
      { type: 'international' }
    ],
    
    aboutPage: [
      { type: 'aboutHero' },
      { type: 'aboutContent' },
      { type: 'missionVision' },
      { type: 'affiliations' },
      { type: 'awards' },
      { type: 'societyPrograms' },
      { type: 'mentorship' },
      { type: 'founder' }
    ]
  },
  {
    id: 'coochbehar',
    name: 'TIGPS - Coochbehar',
    location: 'Coochbehar',
    address: 'Coochbehar, West Bengal Pin no: 736101',
    contact: '(03582) 228456',
    email: 'coochbehar@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: '/pictures/home/school/coochbehar.webp',
    description: 'Excellence in education in the royal city',
    
    // School-specific carousel images
    carouselImages: [
      '/pictures/hero_section/coochbehar/banner-1.webp',
      '/pictures/hero_section/coochbehar/banner-2.webp',
      '/pictures/hero_section/coochbehar/banner-3.webp'
    ],
    
    images: {
      about: '/pictures/image.jpg',
      mission: '/pictures/image.jpg',
      legacy: '/pictures/image.jpg',
      founder: '/pictures/image.jpg',
      campuses: '/pictures/image.jpg',
      international: '/pictures/image.jpg',
      academics: '/pictures/image.jpg',
      admissions: '/pictures/image.jpg',
      life: '/pictures/image.jpg',
      contact: '/pictures/image.jpg'
    },
    
    homepage: [
      { type: 'hero', props: { carousel: true } },
      { type: 'about' },
      { type: 'mission' },
      { type: 'legacy' },
      { type: 'founder' },
      { type: 'campuses' },
      { type: 'international' }
    ],
    
    aboutPage: [
      { type: 'aboutHero' },
      { type: 'aboutContent' },
      { type: 'missionVision' },
      { type: 'affiliations' },
      { type: 'awards' },
      { type: 'societyPrograms' },
      { type: 'mentorship' },
      { type: 'founder' }
    ]
  },
  {
    id: 'durgapur',
    name: 'TIGPS - Durgapur',
    location: 'Durgapur',
    address: 'Durgapur, Paschim Bardhaman, West Bengal Pin no: 713216',
    contact: '(0343) 2548789',
    email: 'durgapur@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: '/pictures/home/school/durgapur.webp',
    description: 'Excellence in education in the steel city',
    
    // School-specific carousel images
    carouselImages: [
      '/pictures/hero_section/durgapur/banner-1.webp',
      '/pictures/hero_section/durgapur/banner-2.webp',
      '/pictures/hero_section/durgapur/banner-3.webp'
    ],
    
    images: {
      about: '/pictures/image.jpg',
      mission: '/pictures/image.jpg',
      legacy: '/pictures/image.jpg',
      founder: '/pictures/image.jpg',
      campuses: '/pictures/image.jpg',
      international: '/pictures/image.jpg',
      academics: '/pictures/image.jpg',
      admissions: '/pictures/image.jpg',
      life: '/pictures/image.jpg',
      contact: '/pictures/image.jpg'
    },
    
    homepage: [
      { type: 'hero', props: { carousel: true } },
      { type: 'about' },
      { type: 'mission' },
      { type: 'legacy' },
      { type: 'founder' },
      { type: 'campuses' },
      { type: 'international' }
    ],
    
    aboutPage: [
      { type: 'aboutHero' },
      { type: 'aboutContent' },
      { type: 'missionVision' },
      { type: 'affiliations' },
      { type: 'awards' },
      { type: 'societyPrograms' },
      { type: 'mentorship' },
      { type: 'founder' }
    ]
  },
  {
    id: 'falakata',
    name: 'TIGPS - Falakata',
    location: 'Falakata',
    address: 'Falakata, Alipurduar, West Bengal Pin no: 735211',
    contact: '(03563) 287654',
    email: 'falakata@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: '/pictures/home/school/falakata.webp',
    description: 'Excellence in education in the gateway to Bhutan',
    
    // School-specific carousel images
    carouselImages: [
      '/pictures/hero_section/falakata/banner-1.webp',
      '/pictures/hero_section/falakata/banner-2.webp',
      '/pictures/hero_section/falakata/banner-3.webp'
    ],
    
    images: {
      about: '/pictures/image.jpg',
      mission: '/pictures/image.jpg',
      legacy: '/pictures/image.jpg',
      founder: '/pictures/image.jpg',
      campuses: '/pictures/image.jpg',
      international: '/pictures/image.jpg',
      academics: '/pictures/image.jpg',
      admissions: '/pictures/image.jpg',
      life: '/pictures/image.jpg',
      contact: '/pictures/image.jpg'
    },
    
    homepage: [
      { type: 'hero', props: { carousel: true } },
      { type: 'about' },
      { type: 'mission' },
      { type: 'legacy' },
      { type: 'founder' },
      { type: 'campuses' },
      { type: 'international' }
    ],
    
    aboutPage: [
      { type: 'aboutHero' },
      { type: 'aboutContent' },
      { type: 'missionVision' },
      { type: 'affiliations' },
      { type: 'awards' },
      { type: 'societyPrograms' },
      { type: 'mentorship' },
      { type: 'founder' }
    ]
  }

];

// Master default images
export const masterImages = {
  hero: '/pictures/image.jpg',
  about: '/pictures/image.jpg',
  mission: '/pictures/image.jpg',
  legacy: '/pictures/image.jpg',
  founder: '/pictures/image.jpg',
  campuses: '/pictures/image.jpg',
  international: '/pictures/image.jpg',
  academics: '/pictures/image.jpg',
  admissions: '/pictures/image.jpg',
  life: '/pictures/image.jpg',
  contact: '/pictures/image.jpg'
};

// Default master content that schools inherit
export const masterContent = {
  hero: {
    title: 'TECHNO INDIA GROUP PUBLIC SCHOOL',
    subtitle: 'Excellence in Education'
  },
  about: {
    defaultText: 'Welcome to Techno India Group Public Schools, where education meets excellence...'
  },
  mission: {
    mission: 'To cultivate a nurturing and progressive learning environment...',
    vision: 'To be recognized as a premier chain of schools...'
  }
};

// Default homepage section configuration
export const defaultHomepage = [
  { type: 'hero', props: { carousel: true } },
  { type: 'about' },
  { type: 'mission' },
  { type: 'legacy' },
  { type: 'founder' },
  { type: 'campuses' },
  { type: 'international' }
];

// Default sections configuration
export const defaultSections = {
  hero: true,
  aboutSection: true,
  missionSection: true,
  legacySection: true,
  founderSection: true,
  campusesSection: true,
  internationalSection: true,
  academicsHero: true,
  prePrimary: true,
  primary: true,
  senior: true,
  seniorSecondary: true,
  questionBank: true,
  technoAEP: true,
  admissionsHero: true,
  criteria: true,
  procedure: true,
  applicationForm: true,
  lifeHero: true,
  clubActivities: true,
  lifeSection: true,
  popularEvents: true,
  achieversSection: true,
  contactHero: true,
  contactForm: true,
  contactInfo: true
};

// Image resolution helper
export const getImageForSection = (schoolData, sectionName, fallbackImage) => {
  return schoolData?.images?.[sectionName] || 
         masterImages[sectionName] || 
         fallbackImage || 
         schoolData?.heroImage;
};

export const getSchoolById = (id) => {
  const school = schoolsConfig.find(school => school.id === id);
  if (!school) return null;
  
  // Merge with defaults
  return {
    ...school,
    sections: { ...defaultSections, ...school.sections },
    content: { ...masterContent, ...school.content },
    images: { ...masterImages, ...school.images },
    homepage: school.homepage || defaultHomepage
  };
};

export const getAllSchools = () => {
  return schoolsConfig;
};
