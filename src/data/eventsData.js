export const eventsData = [
  {
    id: 1,
    title: 'Annual Sports Day',
    date: 'March 15-17, 2024',
    category: 'Sports',
    shortDescription: 'Inter-house competitions, athletics, and team sports',
    fullDescription: 'Our Annual Sports Day is a three-day extravaganza celebrating physical fitness and competitive spirit. Students participate in various track and field events, team sports, and inter-house competitions. The event showcases our commitment to holistic education, emphasizing the importance of physical development alongside academic excellence. Winners receive medals and certificates, fostering a culture of healthy competition and sportsmanship.',
    image: '/pictures/gallery/badminton.png',
    gallery: [
      '/pictures/gallery/badminton.png',
      '/pictures/gallery/science-workshop.png',
      '/pictures/gallery/annual-meet-falakata.png'
    ],
    highlights: [
      '100m Sprint Championships',
      'Football Tournament',
      'Basketball Competition',
      'Relay Races',
      'Field Events'
    ]
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: 'February 28, 2024',
    category: 'Academic',
    shortDescription: 'Student projects and innovative experiments showcase',
    fullDescription: 'The Annual Science Exhibition provides a platform for students to showcase their scientific creativity and innovation. Students from all grades present their research projects, working models, and experiments. The exhibition covers various fields including Physics, Chemistry, Biology, and Environmental Science. Expert judges evaluate projects based on creativity, scientific accuracy, and presentation skills.',
    image: '/pictures/gallery/science-workshop.png',
    gallery: [
      '/pictures/gallery/science-workshop.png',
      '/pictures/gallery/science-day.png'
    ],
    highlights: [
      'Robotics Demonstrations',
      'Chemistry Lab Experiments',
      'Biology Research Projects',
      'Environmental Awareness Models',
      'Physics Working Models'
    ]
  },
  {
    id: 3,
    title: 'Cultural Festival',
    date: 'December 20-22, 2023',
    category: 'Cultural',
    shortDescription: 'Dance, music, drama and art performances',
    fullDescription: 'Our Cultural Festival celebrates the rich diversity of Indian culture and traditions. Students perform classical and folk dances, musical concerts, theatrical performances, and art exhibitions. The three-day festival brings together students, parents, and the community to appreciate and preserve our cultural heritage while encouraging artistic expression among students.',
    image: '/pictures/gallery/gallery-diwali.png',
    gallery: [
      '/pictures/gallery/gallery-diwali.png',
      '/pictures/gallery/gallery-agimony.png',
      '/pictures/gallery/annual-meet-falakata.png'
    ],
    highlights: [
      'Classical Dance Performances',
      'Musical Concerts',
      'Drama Competitions',
      'Art Exhibition',
      'Cultural Fashion Show'
    ]
  },
  {
    id: 4,
    title: 'Annual Day Celebration',
    date: 'January 26, 2024',
    category: 'Celebration',
    shortDescription: 'Grand celebration with performances and awards',
    fullDescription: 'The Annual Day is our most prestigious event, celebrating academic achievements, extracurricular excellence, and overall student development. The ceremony includes award presentations, cultural performances, and speeches by distinguished guests. It serves as a platform to recognize outstanding students and showcase the school\'s accomplishments throughout the year.',
    image: '/pictures/gallery/annual-meet-falakata.png',
    gallery: [
      '/pictures/gallery/annual-meet-falakata.png',
      '/pictures/gallery/gallery-agimony.png'
    ],
    highlights: [
      'Academic Excellence Awards',
      'Cultural Performances',
      'Guest Speaker Sessions',
      'Achievement Recognition',
      'School Report Presentation'
    ]
  },
  {
    id: 5,
    title: 'Inter-School Quiz Competition',
    date: 'April 10, 2024',
    category: 'Academic',
    shortDescription: 'Knowledge competition across multiple subjects',
    fullDescription: 'The Inter-School Quiz Competition brings together bright minds from various schools to compete in a battle of knowledge and quick thinking. The competition covers diverse topics including General Knowledge, Science, History, Geography, and Current Affairs. It promotes healthy academic competition and encourages students to expand their knowledge beyond textbooks.',
    image: '/pictures/gallery/science-day.png',
    gallery: [
      '/pictures/gallery/science-day.png',
      '/pictures/gallery/science-workshop.png'
    ],
    highlights: [
      'Multiple Round Competition',
      'Rapid Fire Questions',
      'Team Collaboration',
      'Knowledge Assessment',
      'Inter-School Networking'
    ]
  },
  {
    id: 6,
    title: 'Environment Day',
    date: 'June 5, 2024',
    category: 'Social',
    shortDescription: 'Tree plantation and eco-awareness activities',
    fullDescription: 'Environment Day at TIGPS focuses on creating environmental awareness and promoting sustainable practices. Students participate in tree plantation drives, waste management workshops, and eco-friendly project presentations. The event emphasizes our responsibility towards environmental conservation and encourages students to become environmental ambassadors in their communities.',
    image: '/pictures/gallery/gallery-garden-min.png',
    gallery: [
      '/pictures/gallery/gallery-garden-min.png',
      '/pictures/gallery/tea-gallery-min.png'
    ],
    highlights: [
      'Tree Plantation Drive',
      'Waste Management Workshop',
      'Eco-friendly Projects',
      'Environmental Awareness Campaign',
      'Green School Initiative'
    ]
  }
];

export const getEventById = (id) => {
  return eventsData.find(event => event.id === parseInt(id));
};

export const getEventsByCategory = (category) => {
  return eventsData.filter(event => event.category === category);
};

export const getAllEvents = () => {
  return eventsData;
};