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
  facilities: [
    { number: '01', title: 'Infrastructure', description: '...' },
    // Add more facilities
  ]
}
```

3. School will automatically appear in listings and be accessible at `/schools/new-school`

## Conditional Rendering

Components check the school config to show/hide sections:
```javascript
{school.sections.facilities && <Facilities facilities={school.facilities} />}
{school.sections.customSection && <CustomSection />}
```

## Key Features

✅ Single codebase for all 28 schools
✅ Configurable sections per school
✅ Shared header/footer with dynamic navigation
✅ Direct URL access to all pages
✅ Easy to add/remove schools
✅ Consistent design across all schools
✅ SEO-friendly routing

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
