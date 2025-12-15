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

## Key Features

✅ Single codebase for all 28 schools
✅ Configurable sections per school
✅ School-specific content for each section
✅ Shared header/footer with dynamic navigation
✅ Direct URL access to all pages
✅ Easy to add/remove schools
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

## Next Steps

1. Add remaining 26 schools to `schoolsConfig.js`
2. Create additional page components (About, Academics, etc.)
3. Add custom sections for specific schools
4. Implement gallery, events, and other features
5. Add form handling for admissions
