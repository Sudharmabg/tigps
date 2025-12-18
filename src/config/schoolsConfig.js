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
    
    // Dynamic page configurations
    pages: {
      aboutPage: {
        sections: [
          { type: 'heroImage' },
          { type: 'aboutContent' },
          { type: 'missionVision' },
          { type: 'affiliations' },
          { type: 'awards' },
          { type: 'societyPrograms' },
          { type: 'mentorship' },
          { type: 'founder' }
        ]
      },
      academicsPage: {
        sections: [
          { type: 'academicsHero' },
          { type: 'prePrimary', content: { title: 'Early Learning at Alipurduar' } },
          { type: 'primary', content: { title: 'Primary Education Excellence' } },
          { type: 'senior', content: { title: 'Secondary Education' } },
          { type: 'seniorSecondary', content: { title: 'Senior Secondary Programs' } },
          { type: 'questionBank' }
        ]
      },
      admissionsPage: {
        sections: [
          { type: 'admissionsHero' },
          { type: 'criteria', content: { title: 'Admission Criteria for TIGPS Alipurduar' } },
          { type: 'procedure', content: { title: 'How to Apply' } },
          { type: 'applicationForm' }
        ]
      },
      lifePage: {
        sections: [
          { type: 'lifeHero' },
          { type: 'clubActivities', content: { title: 'Student Life at Alipurduar' } },
          { type: 'events' },
          { type: 'achievers' }
        ]
      },
      contactPage: {
        sections: [
          { type: 'contactHero' },
          { type: 'contactInfo' },
          { type: 'contactForm' }
        ]
      }
    }
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
      { type: 'international' }
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
      { type: 'international' }
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
      { type: 'international' }
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
      { type: 'international' }
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
  },
  
  // Dynamic content for sections
  missionVision: {
    title: 'Mission & Vision',
    introText: 'Welcome to Techno India Group Public Schools, where we believe in nurturing young minds to become the leaders of tomorrow.',
    introImage: '/pictures/mission_vision/vission_mission.png',
    mission: [
      'To cultivate a nurturing and progressive learning environment that fosters intellectual curiosity, creativity, and critical thinking skills.',
      'To equip students with a robust foundation in core subjects and prepare them for future academic endeavors.',
      'To empower students to become responsible global citizens who are ethical, compassionate, and lifelong learners.'
    ],
    vision: [
      'To be recognized as a premier chain of schools in West Bengal, renowned for academic excellence, innovative teaching methodologies, and holistic student development.',
      'To nurture future generations of leaders who are equipped with the knowledge, skills, and values to thrive in the ever-evolving global landscape.'
    ]
  },
  
  affiliations: {
    title: 'Affiliations and Certifications',
    paragraphs: [
      'Techno India Group Public Schools are proud affiliates of the Central Board of Secondary Education (CBSE), renowned for delivering high-quality education in line with national standards.',
      'Our schools rigorously follow the CBSE curriculum, meticulously developed by the National Council for Education Research and Training (NCERT).'
    ],
    table: {
      headers: ['SL NO', 'SCHOOL', 'CLASS', 'AFFILIATION NUMBER'],
      rows: [
        ['1', 'SILIGURI', 'PlayGroup-XII', '2430126'],
        ['2', 'JALPAIGURI', 'PlayGroup-XII', '2430238'],
        ['3', 'ALIPURDUAR', 'PlayGroup-XI', '2430299'],
        ['4', 'FALAKATA', 'PlayGroup-X', '2430402'],
        ['5', 'COOCHBEHAR', 'PlayGroup-XII', '2430158']
      ]
    }
  },
  
  awards: {
    title: 'Accolades & Awards',
    sections: [
      {
        title: 'Meritorious Scholarships',
        description: 'We believe in nurturing brilliance. These scholarships cover full or partial tuition fees.'
      },
      {
        title: 'Sports Achievements',
        description: 'Our athletes shine on the field, earning medals and trophies in various tournaments.'
      }
    ],
    image: 'https://tigps.in/assets/images/section_image/awards.webp'
  },
  
  mentorship: {
    title: 'Mentorship',
    quote: 'The beautiful thing about learning is that no one can take it away from you.',
    paragraphs: [
      'Our mentors in Techno India Group Public Schools are highly experienced experts in their fields.',
      'TIGPS empowers students beyond academics with wide exposure in performing arts, sports, and co-curricular activities.'
    ],
    mentors: [
      { image: '/pictures/mentors/sports.png', alt: 'Sports Mentorship', title: 'Sports Training' },
      { image: '/pictures/mentors/music.png', alt: 'Music Mentorship', title: 'Music Classes' },
      { image: '/pictures/mentors/dance.png', alt: 'Dance Mentorship', title: 'Classical Dance' },
      { image: '/pictures/mentors/arts.png', alt: 'Fine Arts Mentorship', title: 'Fine Arts' }
    ]
  }
};

// Default page configurations
export const defaultPages = {
  homepage: {
    sections: [
      { type: 'hero', props: { carousel: true } },
      { type: 'about' },
      { type: 'mission' },
      { type: 'legacy' },
      { type: 'founder' },
      { type: 'campuses' },
      { type: 'international' }
    ]
  },
  
  aboutPage: {
    sections: [
      { type: 'heroImage' },
      { type: 'aboutContent' },
      { type: 'missionVision' },
      { type: 'affiliations' },
      { type: 'awards' },
      { type: 'societyPrograms' },
      { type: 'mentorship' },
      { type: 'founder' }
    ]
  },
  
  academicsPage: {
    sections: [
      { type: 'heroImage' },
      { type: 'customSection', content: { title: 'Academic Excellence' } },
      { type: 'customSection', content: { title: 'Pre-Primary Education' } },
      { type: 'customSection', content: { title: 'Primary Education' } },
      { type: 'customSection', content: { title: 'Secondary Education' } },
      { type: 'customSection', content: { title: 'Senior Secondary' } }
    ]
  },
  
  admissionsPage: {
    sections: [
      { type: 'heroImage' },
      { type: 'customSection', content: { title: 'Admission Process' } },
      { type: 'customSection', content: { title: 'Eligibility Criteria' } },
      { type: 'customSection', content: { title: 'Application Procedure' } }
    ]
  },
  
  lifePage: {
    sections: [
      { type: 'heroImage' },
      { type: 'life' },
      { type: 'events' },
      { type: 'achievers' }
    ]
  },
  
  contactPage: {
    sections: [
      { type: 'heroImage' },
      { type: 'customSection', content: { title: 'Contact Information' } }
    ]
  }
};

// Default homepage section configuration (for backward compatibility)
export const defaultHomepage = defaultPages.homepage.sections;

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
    homepage: school.homepage || defaultHomepage,
    pages: {
      ...defaultPages,
      ...school.pages
    }
  };
};

// Get page configuration for a school
export const getSchoolPage = (schoolId, pageName) => {
  const school = getSchoolById(schoolId);
  if (!school) return null;
  
  return school.pages?.[pageName] || defaultPages[pageName];
};

export const getAllSchools = () => {
  return schoolsConfig;
};
