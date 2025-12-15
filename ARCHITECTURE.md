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
    facilities: true,
    academics: true,
    admissions: true,
    gallery: false,             // Hide this section
    contact: true,
    customSection: true         // Add custom section
  },
  content: {                    // School-specific content for each section
    hero: {
      title: 'Welcome to School Name',
      subtitle: 'Excellence in Education',
      description: 'School-specific hero description'
    },
    about: {
      title: 'About Our School',
      content: 'Detailed about content for this school...',
      images: ['/images/school/about1.jpg', '/images/school/about2.jpg'],
      history: 'Founded in year...',
      mission: 'Our mission statement...'
    },
    academics: {
      title: 'Academic Excellence',
      programs: ['Program 1', 'Program 2', 'Program 3'],
      curriculum: 'CBSE/ICSE/State Board',
      achievements: ['Achievement 1', 'Achievement 2'],
      subjects: ['Mathematics', 'Science', 'English'],
      extracurricular: ['Sports', 'Music', 'Art']
    },
    admissions: {
      title: 'Admissions Process',
      process: 'Step-by-step admission process...',
      eligibility: 'Eligibility criteria...',
      fees: 'Fee structure details...',
      documents: ['Document 1', 'Document 2'],
      deadlines: 'Important dates and deadlines'
    },
    lifeAtSchool: {
      title: 'Life at Our School',
      activities: ['Activity 1', 'Activity 2'],
      events: ['Annual Day', 'Sports Day'],
      clubs: ['Science Club', 'Drama Club'],
      gallery: ['/images/school/life1.jpg', '/images/school/life2.jpg']
    },
    contact: {
      address: 'Complete school address',
      phone: 'Contact numbers',
      email: 'school@tigps.in',
      hours: 'Office hours',
      directions: 'How to reach us'
    },
    customSection: {
      title: 'Special Features',
      content: 'School-specific custom content...'
    }
  },
  facilities: [...]             // School-specific facilities
}
```

## Adding a New School

1. Open `src/config/schoolsConfig.js`
2. Add new school object to `schoolsConfig` array:
```javascript
{
  id: 'new-school',
  name: 'TIGPS - New Location',
  location: 'New City',
  contact: '(0123) 456789',
  email: 'newschool@tigps.in',
  logo: '/pictures/logo.png',
  heroImage: '/path/to/image.jpg',
  description: 'School description',
  sections: {
    hero: true,
    facilities: true,
    academics: true,
    admissions: true,
    gallery: true,
    contact: true
  },
  content: {
    hero: {
      title: 'Welcome to TIGPS New Location',
      subtitle: 'Building Tomorrow\'s Leaders',
      description: 'Discover excellence in New City'
    },
    about: {
      title: 'About TIGPS New Location',
      content: 'Our story and commitment to education...',
      images: ['/images/new-school/campus.jpg']
    },
    academics: {
      title: 'Academic Programs',
      programs: ['CBSE Curriculum', 'Advanced Sciences'],
      achievements: ['100% Pass Rate', 'District Toppers']
    },
    // Add other content sections as needed
  },
  facilities: [
    { number: '01', title: 'Infrastructure', description: '...' },
    // Add more facilities
  ]
}
```

3. School will automatically appear in listings and be accessible at `/schools/new-school`

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
