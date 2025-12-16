# TIGPS Multi-School Architecture

## Overview
This React application supports a master homepage and 28 individual school pages with configurable sections.

## Directory Structure
```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation (adapts for master/school)
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Hero section (configurable)
│   ├── Facilities.jsx  # Facilities section (configurable)
│   ├── Schools.jsx     # Schools listing section
│   └── Layout.jsx      # Layout wrapper with Header/Footer
├── pages/
│   ├── master/         # Master homepage pages
│   │   └── HomePage.jsx
│   ├── school/         # School-specific pages
│   │   └── SchoolHome.jsx
│   └── SchoolsListPage.jsx
├── config/
│   └── schoolsConfig.js # All school configurations
├── App.jsx             # Main routing
└── index.jsx           # Entry point
```

## Routing Structure

### Master Routes
- `/` - Master homepage
- `/about` - About TIGPS
- `/academics` - Academics overview
- `/admissions` - Admissions info
- `/life-at-tigps` - Life at TIGPS
- `/contact` - Contact page
- `/schools` - All schools listing

### School Routes (Dynamic)
- `/schools/:schoolId` - School homepage
- `/schools/:schoolId/about` - School about
- `/schools/:schoolId/academics` - School academics
- `/schools/:schoolId/admissions` - School admissions
- `/schools/:schoolId/life-at-tigps` - School life
- `/schools/:schoolId/contact` - School contact

## Configuration System

### schoolsConfig.js
Each school has:
```javascript
{
  id: 'school-slug',           // URL identifier
  name: 'School Name',
  location: 'City',
  contact: 'Phone',
  email: 'email@tigps.in',
  logo: '/path/to/logo.png',
  heroImage: '/path/to/hero.jpg',
  description: 'Description',
  sections: {                   // Control which sections to show
    hero: true,
    about: true,
    academics: true,
    admissions: true,
    lifeAtSchool: true,
    contact: true,
    facilities: true,
    events: true,               // Popular events section
    gallery: false,             // Hide this section
    customSection: true         // Add custom section
  },
  pages: {                      // Available pages for this school
    home: true,
    about: true,
    academics: true,
    admissions: true,
    lifeAtTigps: true,
    contact: true
  },
  content: {                    // School-specific content for each section
    hero: {
      title: 'Welcome to School Name',
      subtitle: 'Excellence in Education',
      description: 'School-specific hero description',
      backgroundImage: '/path/to/hero-bg.jpg'
    },
    about: {
      title: 'About Our School',
      content: 'Detailed about content for this school...',
      images: ['/images/school/about1.jpg', '/images/school/about2.jpg'],
      history: 'Founded in year...',
      mission: 'Our mission statement...',
      vision: 'Our vision for the future...',
      principalMessage: 'Message from the principal...',
      achievements: ['Achievement 1', 'Achievement 2'],
      affiliations: {
        cbse: 'CBSE Affiliation Number',
        other: ['Other affiliations']
      }
    },
    academics: {
      title: 'Academic Excellence',
      curriculum: 'CBSE/ICSE/State Board',
      programs: [
        {
          name: 'Primary Education',
          classes: 'Nursery - Class V',
          description: 'Foundation learning program'
        },
        {
          name: 'Secondary Education', 
          classes: 'Class VI - X',
          description: 'Comprehensive secondary program'
        },
        {
          name: 'Senior Secondary',
          classes: 'Class XI - XII',
          description: 'Specialized streams available'
        }
      ],
      subjects: {
        primary: ['English', 'Mathematics', 'Science', 'Social Studies'],
        secondary: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
        streams: ['Science', 'Commerce', 'Arts']
      },
      achievements: ['100% Pass Rate', 'District Toppers'],
      examResults: {
        class10: { passRate: '100%', toppers: 5 },
        class12: { passRate: '98%', toppers: 3 }
      },
      extracurricular: {
        sports: ['Cricket', 'Football', 'Basketball'],
        arts: ['Music', 'Dance', 'Drama'],
        clubs: ['Science Club', 'Debate Club', 'Quiz Club']
      }
    },
    admissions: {
      title: 'Admissions Process',
      process: [
        'Online Application Submission',
        'Document Verification',
        'Entrance Test (if applicable)',
        'Interview',
        'Final Selection'
      ],
      eligibility: {
        nursery: 'Age 3+ years',
        class1: 'Age 5+ years',
        other: 'As per CBSE guidelines'
      },
      fees: {
        application: 'Rs. 500',
        admission: 'Rs. 10,000',
        monthly: 'Rs. 3,000 - 5,000',
        annual: 'Rs. 15,000 - 25,000'
      },
      documents: [
        'Birth Certificate',
        'Previous School Records',
        'Passport Size Photos',
        'Address Proof',
        'Medical Certificate'
      ],
      deadlines: {
        application: 'March 31st',
        admission: 'April 30th',
        lateAdmission: 'Subject to availability'
      },
      scholarships: [
        'Merit-based Scholarships',
        'Need-based Financial Aid',
        'Sports Excellence Awards'
      ]
    },
    lifeAtSchool: {
      title: 'Life at Our School',
      description: 'Vibrant campus life with diverse opportunities',
      activities: {
        daily: ['Morning Assembly', 'Classes', 'Sports Period'],
        weekly: ['Library Period', 'Art & Craft', 'Music Classes'],
        monthly: ['Field Trips', 'Competitions', 'Celebrations']
      },
      events: [
        {
          id: 1,
          title: 'Annual Sports Day',
          date: 'March 15-17, 2024',
          description: 'Three-day sports extravaganza',
          image: '/images/school/sports-day.jpg',
          category: 'Sports'
        }
      ],
      clubs: [
        {
          name: 'Science Club',
          description: 'Hands-on experiments and projects',
          meetingDay: 'Wednesday'
        },
        {
          name: 'Drama Club',
          description: 'Theatre and performance arts',
          meetingDay: 'Friday'
        }
      ],
      facilities: {
        academic: ['Smart Classrooms', 'Library', 'Computer Lab'],
        sports: ['Playground', 'Indoor Games', 'Swimming Pool'],
        other: ['Cafeteria', 'Medical Room', 'Transport']
      },
      gallery: ['/images/school/life1.jpg', '/images/school/life2.jpg'],
      testimonials: [
        {
          name: 'Parent Name',
          message: 'Excellent school with caring teachers',
          relation: 'Parent of Class X student'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      address: {
        street: 'School Address Line 1',
        area: 'Area/Locality',
        city: 'City Name',
        state: 'West Bengal',
        pincode: '700001',
        landmark: 'Near Famous Landmark'
      },
      phone: {
        primary: '+91-XXXXXXXXXX',
        secondary: '+91-XXXXXXXXXX',
        whatsapp: '+91-XXXXXXXXXX'
      },
      email: {
        general: 'info@school.tigps.in',
        admissions: 'admissions@school.tigps.in',
        principal: 'principal@school.tigps.in'
      },
      hours: {
        office: 'Mon-Fri: 8:00 AM - 4:00 PM',
        saturday: 'Sat: 8:00 AM - 12:00 PM',
        holidays: 'Closed on Sundays and Public Holidays'
      },
      directions: 'Detailed directions to reach the school',
      mapCoordinates: {
        latitude: 22.5726,
        longitude: 88.3639
      },
      socialMedia: {
        facebook: 'https://facebook.com/school',
        instagram: 'https://instagram.com/school',
        youtube: 'https://youtube.com/school'
      }
    },
    customSection: {
      title: 'Special Features',
      content: 'School-specific custom content...',
      features: [
        'Feature 1 description',
        'Feature 2 description'
      ]
    }
  },
  facilities: [
    {
      number: '01',
      title: 'Infrastructure',
      description: 'State-of-the-art infrastructure',
      image: '/images/facilities/infrastructure.jpg',
      details: 'Detailed description of infrastructure'
    }
  ],
  staff: {
    principal: {
      name: 'Principal Name',
      qualification: 'M.Ed, Ph.D',
      experience: '20+ years',
      message: 'Welcome message from principal'
    },
    teachers: [
      {
        name: 'Teacher Name',
        subject: 'Mathematics',
        qualification: 'M.Sc, B.Ed',
        experience: '10 years'
      }
    ]
  }
}
```

## Adding a New School - Complete Guide

### Step 1: Prepare School Information
Gather the following information before adding a school:

**Basic Information:**
- School name and location
- Contact details (phone, email, address)
- CBSE affiliation number
- Principal and key staff details
- School establishment year

**Content Requirements:**
- School description and mission
- Academic programs and achievements
- Facilities and infrastructure details
- Admission process and fee structure
- Events and activities information

**Media Assets:**
- Hero image for homepage
- School logo
- Facility images
- Gallery images for events/activities
- Staff photos (optional)

### Step 2: Add Images to Project
1. Create school-specific folder: `/public/images/schools/[school-id]/`
2. Add required images:
   ```
   /public/images/schools/new-school/
   ├── hero.jpg              # Main hero image
   ├── about/
   │   ├── campus1.jpg       # Campus images
   │   └── campus2.jpg
   ├── facilities/
   │   ├── classroom.jpg     # Facility images
   │   ├── library.jpg
   │   └── playground.jpg
   ├── events/
   │   ├── sports-day.jpg    # Event images
   │   └── annual-day.jpg
   └── staff/
       └── principal.jpg     # Staff photos
   ```

### Step 3: Configure School in schoolsConfig.js

1. **Open** `src/config/schoolsConfig.js`
2. **Add** new school object to `schoolsConfig` array:

```javascript
{
  // STEP 3A: Basic School Information
  id: 'new-school',                    // URL slug (lowercase, hyphenated)
  name: 'TIGPS - New Location',        // Full school name
  location: 'New City',                // City/Area name
  contact: '(0123) 456789',           // Primary phone number
  email: 'newschool@tigps.in',        // School email
  logo: '/pictures/logo.png',          // School logo path
  heroImage: '/images/schools/new-school/hero.jpg', // Hero image
  description: 'Excellence in education at New Location', // Brief description
  
  // STEP 3B: Enable/Disable Pages
  pages: {
    home: true,           // School homepage
    about: true,          // About page
    academics: true,      // Academics page
    admissions: true,     // Admissions page
    lifeAtTigps: true,   // Life at school page
    contact: true         // Contact page
  },
  
  // STEP 3C: Enable/Disable Sections
  sections: {
    hero: true,           // Hero section on homepage
    about: true,          // About section
    academics: true,      // Academics section
    admissions: true,     // Admissions section
    lifeAtSchool: true,   // Life at school section
    contact: true,        // Contact section
    facilities: true,     // Facilities section
    events: true,         // Events section
    gallery: true,        // Gallery section
    customSection: false  // Custom section (if needed)
  },
  
  // STEP 3D: Content for Each Section
  content: {
    // Hero Section Content
    hero: {
      title: 'Welcome to TIGPS New Location',
      subtitle: 'Building Tomorrow\'s Leaders',
      description: 'Discover excellence in education at New City',
      backgroundImage: '/images/schools/new-school/hero.jpg'
    },
    
    // About Section Content
    about: {
      title: 'About TIGPS New Location',
      content: 'Established in 2020, TIGPS New Location has been committed to providing quality education...',
      images: [
        '/images/schools/new-school/about/campus1.jpg',
        '/images/schools/new-school/about/campus2.jpg'
      ],
      history: 'Founded in 2020 with a vision to provide world-class education...',
      mission: 'To nurture young minds and develop future leaders...',
      vision: 'To be the leading educational institution in the region...',
      principalMessage: 'Welcome to our school family. We are committed to...',
      achievements: [
        '100% Pass Rate in Board Exams',
        'District Champions in Sports',
        'Excellence in Co-curricular Activities'
      ],
      affiliations: {
        cbse: '2430XXX',  // CBSE Affiliation Number
        other: ['ISO Certified', 'Green School Certified']
      }
    },
    
    // Academics Section Content
    academics: {
      title: 'Academic Excellence',
      curriculum: 'CBSE',
      programs: [
        {
          name: 'Pre-Primary',
          classes: 'Nursery - UKG',
          description: 'Play-based learning with focus on development'
        },
        {
          name: 'Primary Education',
          classes: 'Class I - V',
          description: 'Foundation building with interactive learning'
        },
        {
          name: 'Secondary Education',
          classes: 'Class VI - X',
          description: 'Comprehensive curriculum with practical approach'
        },
        {
          name: 'Senior Secondary',
          classes: 'Class XI - XII',
          description: 'Specialized streams: Science, Commerce, Arts'
        }
      ],
      subjects: {
        primary: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi'],
        secondary: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English'],
        streams: ['Science (PCM/PCB)', 'Commerce', 'Arts']
      },
      achievements: [
        '100% Pass Rate in Class X (2023)',
        '98% Pass Rate in Class XII (2023)',
        '5 District Toppers in 2023'
      ],
      examResults: {
        class10: { passRate: '100%', toppers: 3, average: '85%' },
        class12: { passRate: '98%', toppers: 2, average: '82%' }
      },
      extracurricular: {
        sports: ['Cricket', 'Football', 'Basketball', 'Badminton', 'Athletics'],
        arts: ['Music', 'Dance', 'Drama', 'Fine Arts', 'Craft'],
        clubs: ['Science Club', 'Debate Club', 'Quiz Club', 'Eco Club', 'Math Club']
      }
    },
    
    // Admissions Section Content
    admissions: {
      title: 'Admissions 2024-25',
      process: [
        'Fill Online Application Form',
        'Submit Required Documents',
        'Entrance Test (for Classes VI onwards)',
        'Personal Interview',
        'Final Selection and Admission'
      ],
      eligibility: {
        nursery: 'Age 3+ years (as on March 31st)',
        lkg: 'Age 4+ years (as on March 31st)',
        ukg: 'Age 5+ years (as on March 31st)',
        class1: 'Age 6+ years (as on March 31st)',
        other: 'As per CBSE age criteria'
      },
      fees: {
        application: 'Rs. 500',
        admission: 'Rs. 15,000',
        monthly: 'Rs. 4,000 - 6,000 (varies by class)',
        annual: 'Rs. 20,000 - 30,000',
        transport: 'Rs. 2,000 - 4,000 (distance-based)'
      },
      documents: [
        'Birth Certificate (Original + 2 copies)',
        'Previous School Transfer Certificate',
        'Previous School Report Card',
        '4 Passport Size Photographs',
        'Address Proof (Ration Card/Voter ID)',
        'Medical Certificate',
        'Caste Certificate (if applicable)'
      ],
      deadlines: {
        application: 'March 31, 2024',
        admission: 'April 30, 2024',
        lateAdmission: 'Subject to seat availability'
      },
      scholarships: [
        'Merit Scholarship (Top 10% students)',
        'Need-based Financial Assistance',
        'Sports Excellence Scholarship',
        'Sibling Discount (10% for 2nd child)'
      ]
    },
    
    // Life at School Section Content
    lifeAtSchool: {
      title: 'Life at TIGPS New Location',
      description: 'Experience vibrant campus life with diverse learning opportunities',
      activities: {
        daily: ['Morning Assembly', 'Regular Classes', 'Sports Period', 'Library Time'],
        weekly: ['Art & Craft', 'Music Classes', 'Computer Lab', 'Science Lab'],
        monthly: ['Field Trips', 'Inter-house Competitions', 'Cultural Programs']
      },
      events: [
        {
          id: 1,
          title: 'Annual Sports Day',
          date: 'February 15-16, 2024',
          description: 'Two-day sports extravaganza with various competitions',
          image: '/images/schools/new-school/events/sports-day.jpg',
          category: 'Sports'
        },
        {
          id: 2,
          title: 'Annual Day Celebration',
          date: 'December 20, 2023',
          description: 'Grand celebration showcasing student talents',
          image: '/images/schools/new-school/events/annual-day.jpg',
          category: 'Cultural'
        }
      ],
      clubs: [
        {
          name: 'Science Club',
          description: 'Hands-on experiments and science projects',
          meetingDay: 'Wednesday',
          coordinator: 'Ms. Science Teacher'
        },
        {
          name: 'Drama Club',
          description: 'Theatre arts and performance skills',
          meetingDay: 'Friday',
          coordinator: 'Mr. Arts Teacher'
        }
      ],
      facilities: {
        academic: ['Smart Classrooms', 'Well-stocked Library', 'Computer Lab', 'Science Labs'],
        sports: ['Multi-purpose Playground', 'Indoor Games Room', 'Basketball Court'],
        other: ['Hygienic Cafeteria', 'Medical Room', 'School Transport', 'CCTV Security']
      },
      gallery: [
        '/images/schools/new-school/gallery/classroom.jpg',
        '/images/schools/new-school/gallery/playground.jpg',
        '/images/schools/new-school/gallery/library.jpg'
      ],
      testimonials: [
        {
          name: 'Mrs. Parent Name',
          message: 'Excellent school with dedicated teachers and great facilities',
          relation: 'Parent of Class VIII student'
        }
      ]
    },
    
    // Contact Section Content
    contact: {
      title: 'Contact TIGPS New Location',
      address: {
        street: 'School Campus, Main Road',
        area: 'Education District',
        city: 'New City',
        state: 'West Bengal',
        pincode: '700XXX',
        landmark: 'Near City Hospital'
      },
      phone: {
        primary: '+91-XXXXXXXXXX',
        secondary: '+91-XXXXXXXXXX',
        whatsapp: '+91-XXXXXXXXXX'
      },
      email: {
        general: 'info@newschool.tigps.in',
        admissions: 'admissions@newschool.tigps.in',
        principal: 'principal@newschool.tigps.in'
      },
      hours: {
        office: 'Monday - Friday: 8:00 AM - 4:00 PM',
        saturday: 'Saturday: 8:00 AM - 12:00 PM',
        holidays: 'Closed on Sundays and Public Holidays'
      },
      directions: 'From City Center: Take Main Road towards Education District. School is located 2km from City Hospital.',
      mapCoordinates: {
        latitude: 22.XXXX,  // Replace with actual coordinates
        longitude: 88.XXXX
      },
      socialMedia: {
        facebook: 'https://facebook.com/tigps.newschool',
        instagram: 'https://instagram.com/tigps_newschool',
        youtube: 'https://youtube.com/c/TIGPSNewSchool'
      }
    }
  },
  
  // STEP 3E: Facilities Information
  facilities: [
    {
      number: '01',
      title: 'Smart Classrooms',
      description: 'Technology-enabled classrooms with interactive boards',
      image: '/images/schools/new-school/facilities/classroom.jpg',
      details: 'All classrooms equipped with smart boards, projectors, and audio systems'
    },
    {
      number: '02',
      title: 'Science Laboratories',
      description: 'Well-equipped Physics, Chemistry, and Biology labs',
      image: '/images/schools/new-school/facilities/lab.jpg',
      details: 'Separate labs for each science subject with modern equipment'
    },
    {
      number: '03',
      title: 'Sports Complex',
      description: 'Multi-purpose playground and indoor sports facilities',
      image: '/images/schools/new-school/facilities/sports.jpg',
      details: 'Cricket ground, football field, basketball court, and indoor games'
    }
  ],
  
  // STEP 3F: Staff Information
  staff: {
    principal: {
      name: 'Dr. Principal Name',
      qualification: 'M.Ed, Ph.D in Education',
      experience: '25+ years in education',
      message: 'Welcome to TIGPS New Location. We are committed to providing quality education...'
    },
    teachers: [
      {
        name: 'Ms. Teacher Name',
        subject: 'Mathematics',
        qualification: 'M.Sc Mathematics, B.Ed',
        experience: '12 years'
      },
      {
        name: 'Mr. Teacher Name',
        subject: 'Science',
        qualification: 'M.Sc Physics, B.Ed',
        experience: '8 years'
      }
    ]
  }
}
```

### Step 4: Verify and Test
1. **Save** the file and restart the development server
2. **Check** that school appears in `/schools` listing
3. **Navigate** to `/schools/new-school` to verify homepage
4. **Test** all pages: about, academics, admissions, life-at-tigps, contact
5. **Verify** all images load correctly
6. **Test** responsive design on different screen sizes

### Step 5: Optional Customizations

**Custom Sections:**
If school needs unique sections, add to `customSection`:
```javascript
customSection: {
  title: 'Special Programs',
  content: 'Details about special programs...',
  features: [
    'International Exchange Program',
    'Robotics Lab',
    'Entrepreneurship Club'
  ]
}
```

**School-Specific Events:**
Add unique events to the `lifeAtSchool.events` array for school-specific celebrations.

**Additional Pages:**
To add more pages, update the `pages` object and create corresponding page components.

### Step 6: Production Deployment
1. **Optimize** all images (compress, resize appropriately)
2. **Verify** all links and contact information
3. **Test** on multiple devices and browsers
4. **Deploy** to production server

**School will be automatically accessible at:** `/schools/new-school`

## Conditional Rendering

Components check the school config to show/hide sections and render school-specific content:
```javascript
{school.sections.hero && <Hero content={school.content.hero} image={school.heroImage} />}
{school.sections.facilities && <Facilities facilities={school.facilities} />}
{school.sections.academics && <Academics content={school.content.academics} />}
{school.sections.admissions && <Admissions content={school.content.admissions} />}
{school.sections.customSection && <CustomSection content={school.content.customSection} />}
```

## Popular Events System

### Dynamic Events Management
The application includes a comprehensive events system with:

```javascript
// src/data/eventsData.js
export const eventsData = [
  {
    id: 1,
    title: 'Annual Sports Day',
    date: 'March 15-17, 2024',
    category: 'Sports',
    shortDescription: 'Brief description for carousel',
    fullDescription: 'Detailed description for event page',
    image: '/pictures/events/sports-day.jpg',
    gallery: ['/path/image1.jpg', '/path/image2.jpg'],
    highlights: ['Highlight 1', 'Highlight 2']
  }
];
```

### Event Features
- **Infinite Carousel**: Auto-scrolling events display on Life at TIGPS page
- **Dynamic Routing**: `/events/:eventId` and `/schools/:schoolId/events/:eventId`
- **Detailed Pages**: Full event information with image galleries
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Easy Management**: Add/remove events by editing eventsData.js

### Event Detail Pages
- **Layout Logic**:
  - Multiple images: Text → Gallery carousel (full-width)
  - Single image: Text → Two-column (info left, image right)
  - No images: Text → Event info below
- **Navigation**: Breadcrumb navigation and "Back to Events" button
- **Gallery**: Infinite scrolling image carousel for multiple images

## Key Features

✅ Single codebase for all 28 schools
✅ Configurable sections per school
✅ School-specific content for each section
✅ Dynamic events system with detailed pages
✅ Infinite carousel components
✅ Shared header/footer with dynamic navigation
✅ Direct URL access to all pages
✅ Easy to add/remove schools and events
✅ Consistent design with unique content
✅ SEO-friendly routing
✅ Flexible content management per school

## Development

Run the app:
```bash
npm start
```

Build for production:
```bash
npm run build
```

## Adding New Events

1. Open `src/data/eventsData.js`
2. Add new event object to `eventsData` array:
```javascript
{
  id: 7,
  title: 'New Event Name',
  date: 'Event Date',
  category: 'Category',
  shortDescription: 'Brief description',
  fullDescription: 'Detailed description...',
  image: '/path/to/main/image.jpg',
  gallery: ['/path/to/gallery1.jpg', '/path/to/gallery2.jpg'],
  highlights: ['Key point 1', 'Key point 2']
}
```
3. Event automatically appears in carousel and is accessible via routing

## Next Steps

1. Add remaining 26 schools to `schoolsConfig.js`
2. Create additional page components (About, Academics, etc.)
3. Add school-specific events to configuration
4. Expand event categories and filtering
5. Add form handling for admissions
6. Implement event registration system
