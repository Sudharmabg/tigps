export const eventsData = [
  {
    id: 1,
    title: 'Global Honour for Satyam Roychowdhury',
    date: '2024',
    category: 'Cultural',
    shortDescription: 'First Indian to receive Honorary Academician title in Italy.',
    fullDescription: 'Satyam Roychowdhury, Founder and Managing Director of Techno India Group and Chancellor of Sister Nivedita University and Techno India University, Tripura becomes the first Indian to be conferred with the Honorary Academician title by Albertina Academy of Fine Arts, Turin, Italy, as Patron of the Arts.',
    image: '/pictures/events/honoray-event.png',
    gallery: [
      '/pictures/events/honoray-event.png',
      
    ],
    highlights: [
      
    ]
  },
  {
    id: 2,
    title: 'Excursion to the tea plantations',
    date: '2024',
    category: 'Educational Excursion',
    shortDescription: 'Excursion to the tea plantations and processing industry',
    fullDescription: 'Techno India Group Public School, Raiganj organized an enriching educational excursion to the tea plantations and processing industry in North Bengal.',
    image: '/pictures/events/tea-event-min.png',
    gallery: [
      '/pictures/events/tea-event-min.png',
      
    ],
    highlights: [
      
    ]
  },
  {
    id: 3,
    title: 'Celebrating Children’s Day with Love & Laughter',
    date: '2024',
    category: 'Cultural',
    shortDescription: 'Dance, music, drama and art performances',
    fullDescription: 'On this special occasion of Children’s Day, Techno India Group Public School, Raiganj, organized a delightful celebration filled with love, laughter, and joy.',
    image: '/pictures/events/children-day-event-.png',
    gallery: [
      '/pictures/events/children-day-event-.png',
      
    ],
    highlights: [
      
    ]
  },
  {
    id: 4,
    title: 'Exemplary Leadership Awarded in Bangkok',
    date: '2024',
    category: 'Education',
    shortDescription: 'Awarded “Visionary Educationist & Exemplary Leader” in Bangkok.',
    fullDescription: 'Shri Satyam Roychowdhury , has been honored with the title "Visionary Educationist & Exemplary Leader" by the Asia Education Conclave 2024 in Bangkok, Thailand.',
    image: '/pictures/events/Education_Conclave-event.png',
    gallery: [
      '/pictures/events/Education_Conclave-event.png',
      
    ],
    highlights: [
      
    ]
  },
  {
    id: 5,
    title: 'Excursion to the Butterfly Garden',
    date: '2024',
    category: 'Educational Excursion',
    shortDescription: 'Excursion to the Butterfly Garden',
    fullDescription: 'Techno India Group Public School, Alipurduar embarked on an exciting excursion to the Butterfly Garden at Rajabhatkhawa',
    image: '/pictures/events/garden-event--min.png',
    gallery: [
      '/pictures/events/garden-event--min.png',
      
    ],
    highlights: [
      
    ]
  },
  {
    id: 6,
    title: 'Festival of Lights at TIGPS',
    date: '2024',
    category: 'Cultural',
    shortDescription: 'TIGPS students celebrated the festival with rangoli, sweets, and joyful activities',
    fullDescription: 'Techno India Group Public School lit up with joy as our young students indulged in festive activities. From firing crackers and making vibrant rangoli to enjoying traditional sweets, the event truly celebrated light and joy.',
    image: '/pictures/events/diwali-event.png',
    gallery: [
      '/pictures/events/diwali-event.png',
      
    ],
    highlights: [
      
    ]
  },
  {
    id: 7,
    title: 'Sarodiya celebrations',
    date: '2024',
    category: 'Cultural',
    shortDescription: 'Dance, music, drama and art performances',
    fullDescription: 'Some glimpses from all our Techno India Group Public Schools and their Sarodiya celebrations.',
    image: '/pictures/events/agimoni-event.png',
    gallery: [
      '/pictures/events/agimoni-event.png',
      
    ],
    highlights: [
      
    ]
  },
  {
    id: 8,
    title: 'Champions at CBSE Cluster-II',
    date: '2024',
    category: 'Sports Achievement',
    shortDescription: 'TIGPS Siliguri won 1st position at the CBSE Cluster-II Table Tennis Championship 2024.',
    fullDescription: 'TIGPS Siliguri has secured the 1st position in the CBSE Cluster-II Table Tennis Championship 2024 held at the Asian International School.',
    image: '/pictures/events/event-tennis.png',
    gallery: [
      '/pictures/events/event-tennis.png',
    ],
    highlights: [
      
    ]
  },
  {
    id: 9,
    title: 'State-Level Recitation Achievement',
    date: 'july 27, 2024',
    category: 'Cultural Achievement',
    shortDescription: 'TIGPS Falakata secured 5th position at the State Level Recitation Competition.',
    fullDescription: 'We are filled with pride as Reyansh Roy of IV of TIGPS Falakata has secured the 5th position in the State Level Recitation Competition, "Sara Bangla Abriti Protijogita" held on 27th July 2024.',
    image: '/pictures/events/event-2.png',
    gallery: [
      '/pictures/events/event-2.png',

    ],
    highlights: [
      
    ]

  },
  {
    id: 10,
    title: 'State Badminton Championship',
    date: 'Auguest 23, 2024',
    category: 'Social',
    shortDescription: 'Inter-house competitions, athletics, and team sports',
    fullDescription: 'our student, Master Ahil Roshen Rahaman of class IV of TIGPS Falakata has achieved a remarkable feat by winning the State Badminton Championship!',
    image: '/pictures/events/eventtigps-badminton.png',
    gallery: [
      '/pictures/events/eventtigps-badminton.png',

    ],
    highlights: [
      "State Badminton Champion",
      "Master Ahil Roshen Rahaman",
      "Class IV",
      "TIGPS Falakata"
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