export const schoolsConfig = [
  {
    id: 'alipurduar',
    name: 'TIGPS - Alipurduar',
    location: 'Alipurduar',
    contact: '(03564) 257355',
    email: 'alipurduar@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Excellence in education at Alipurduar',
    sections: {
      hero: true,
      facilities: true,
      academics: true,
      admissions: true,
      gallery: true,
      contact: true
    },
    facilities: [
      { number: '01', title: 'Infrastructure', description: 'State-of-the-art infrastructure for holistic learning.' },
      { number: '02', title: 'Sports', description: 'World-class sports facilities for physical development.' },
      { number: '03', title: 'Transport', description: 'Safe and reliable transportation services.' },
      { number: '04', title: 'Hostel', description: 'Comfortable hostel facilities with modern amenities.' },
      { number: '05', title: 'Technology', description: 'Advanced technology integration in education.' }
    ]
  },
  {
    id: 'durgapur',
    name: 'TIGPS - Durgapur',
    location: 'Durgapur',
    contact: '(0343) 2546789',
    email: 'durgapur@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Nurturing future leaders in Durgapur',
    sections: {
      hero: true,
      facilities: true,
      academics: true,
      admissions: true,
      gallery: false,
      contact: true,
      customSection: true // Example of custom section
    },
    facilities: [
      { number: '01', title: 'Infrastructure', description: 'Modern infrastructure for comprehensive learning.' },
      { number: '02', title: 'Sports', description: 'Excellent sports facilities.' },
      { number: '03', title: 'Transport', description: 'Reliable transportation network.' }
    ]
  },
  {
    id: 'siliguri',
    name: 'TIGPS - Siliguri',
    location: 'Siliguri',
    contact: '(0353) 2548900',
    email: 'siliguri@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Quality education in Siliguri',
    sections: { hero: true, facilities: true, academics: true, admissions: true, gallery: true, contact: true },
    facilities: [
      { number: '01', title: 'Infrastructure', description: 'State-of-the-art infrastructure.' },
      { number: '02', title: 'Sports', description: 'World-class sports facilities.' },
      { number: '03', title: 'Transport', description: 'Safe transportation services.' }
    ]
  },
  {
    id: 'kolkata',
    name: 'TIGPS - Kolkata',
    location: 'Kolkata',
    contact: '(033) 2548900',
    email: 'kolkata@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Premier education in Kolkata',
    sections: { hero: true, facilities: true, academics: true, admissions: true, gallery: true, contact: true },
    facilities: [
      { number: '01', title: 'Infrastructure', description: 'Modern infrastructure.' },
      { number: '02', title: 'Sports', description: 'Excellent sports facilities.' }
    ]
  },
  {
    id: 'malda',
    name: 'TIGPS - Malda',
    location: 'Malda',
    contact: '(03512) 258900',
    email: 'malda@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Excellence in Malda',
    sections: { hero: true, facilities: true, academics: true, admissions: true, gallery: true, contact: true },
    facilities: [
      { number: '01', title: 'Infrastructure', description: 'Quality infrastructure.' },
      { number: '02', title: 'Sports', description: 'Sports facilities.' }
    ]
  },
  {
    id: 'asansol',
    name: 'TIGPS - Asansol',
    location: 'Asansol',
    contact: '(0341) 2258900',
    email: 'asansol@tigps.in',
    logo: '/pictures/logo.png',
    heroImage: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Quality education in Asansol',
    sections: { hero: true, facilities: true, academics: true, admissions: true, gallery: true, contact: true },
    facilities: [
      { number: '01', title: 'Infrastructure', description: 'Modern facilities.' }
    ]
  }
];

export const getSchoolById = (id) => {
  return schoolsConfig.find(school => school.id === id);
};

export const getAllSchools = () => {
  return schoolsConfig;
};

// Add remaining 22 schools as needed
