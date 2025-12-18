# TIGPS Multi-School Architecture

## Overview
This React application supports a master homepage and 23 individual school pages with configurable sections.

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
Each school inherits ALL master sections by default. Only specify what's different:

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
  
  // OPTIONAL: All pages enabled by default
  pages: {
    home: true,
    about: true,
    academics: true,
    admissions: true,
    lifeAtTigps: true,
    contact: true
  },
  
  // OPTIONAL: All sections enabled by default - only specify to disable
  sections: {
    // Homepage sections
    hero: true,
    aboutSection: true,
    missionSection: true,
    legacySection: false,        // Hide this section
    founderSection: true,
    campusesSection: true,
    internationalSection: true,
    
    // About page sections
    aboutHero: true,
    aboutStory: true,
    aboutMission: true,
    aboutFacilities: true,
    
    // Academics page sections
    academicsHero: true,
    prePrimary: true,
    primary: true,
    senior: true,
    seniorSecondary: true,
    questionBank: false,         // Hide this section
    technoAEP: true,
    
    // Admissions page sections
    admissionsHero: true,
    criteria: true,
    procedure: true,
    applicationForm: true,
    
    // Life page sections
    lifeHero: true,
    clubActivities: true,
    lifeSection: true,
    popularEvents: true,
    achieversSection: true,
    
    // Contact page sections
    contactHero: true,
    contactForm: true,
    contactInfo: true
  },
  
  // OPTIONAL: Content customization - inherits master content if not specified
  content: {
    hero: {
      title: 'Custom title for this school',
      subtitle: 'Custom subtitle'
    },
    about: {
      customText: 'School-specific about text...'
    },
    mission: {
      mission: 'Custom mission statement',
      vision: 'Custom vision statement'
    },
    contact: {
      officeHours: 'Custom office hours'
    }
  },
  
  // OPTIONAL: Add custom sections to any page
  customSections: {
    aboutPage: [
      {
        title: 'Special Achievement',
        content: 'Content here...',
        image: '/path/to/image.jpg'
      }
    ],
    lifePage: [
      {
        title: 'Unique Program',
        content: 'Program details...',
        image: '/path/to/image.jpg'
      }
    ]
  },
  
  // OPTIONAL: Custom admission procedure
  customAdmissionProcedure: {
    text: 'Custom procedure text',
    manualSubmission: 'Custom manual process',
    onlineSubmission: 'Custom online process'
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

### Step 1: Prepare School Assets
1. **Add school hero image** to `/public/pictures/home/school/[school-id].webp`
2. **Add carousel images** to `/public/pictures/hero_section/[school-id]/`:
   - `banner-1.webp`
   - `banner-2.webp` 
   - `banner-3.webp`
3. **Ensure image paths** use leading slash (`/pictures/...`)
4. **Optimize images** for web (WebP format recommended)

### Step 2: Add School Configuration

Open `src/config/schoolsConfig.js` and add new school to the `schoolsConfig` array:

```javascript
{
  // REQUIRED: Basic School Information
  id: 'new-school',                    // URL slug (lowercase, hyphenated)
  name: 'TIGPS - New Location',        // Full school name
  location: 'New City',                // City/Area name
  address: 'Full Address with Pin Code', // Complete address
  contact: '(0123) 456789',           // Primary phone number
  email: 'newschool@tigps.in',        // School email
  logo: '/pictures/logo.png',          // School logo (usually same for all)
  heroImage: '/pictures/home/school/new-school.webp', // School-specific hero image
  description: 'Excellence in education at New Location', // Brief description
  
  // OPTIONAL: School-specific carousel images (uses master carousel if not specified)
  carouselImages: [
    '/pictures/hero_section/new-school/banner-1.webp',
    '/pictures/hero_section/new-school/banner-2.webp',
    '/pictures/hero_section/new-school/banner-3.webp'
  ],
  
  // REQUIRED: Section Images (uses master images by default)
  images: {
    about: '/pictures/image.jpg',      // Hero image for all school pages
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
  
  // REQUIRED: Homepage Section Configuration
  homepage: [
    { type: 'hero', props: { carousel: true } }, // Always use carousel for homepage
    { type: 'about' },                           // School about section
    { type: 'mission' },                         // Mission & Vision
    { type: 'legacy' },                          // Legacy section (optional)
    { type: 'founder' },                         // Founder message
    { type: 'campuses' },                        // Campuses section (optional)
    { type: 'international' }                    // International section
  ],
  
  // OPTIONAL: Custom Content (inherits master content if not specified)
  content: {
    about: {
      text: 'Custom about text for this school...' // Replaces default about content
    },
    hero: {
      title: 'Custom Hero Title',
      subtitle: 'Custom Subtitle'
    },
    mission: {
      mission: 'Custom mission statement',
      vision: 'Custom vision statement'
    }
  },
  
  // OPTIONAL: About Page Configuration (uses master structure if not specified)
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
```

### Step 3: Customize Homepage Sections (Optional)

To remove sections from homepage, simply remove them from the `homepage` array:

```javascript
// Example: Remove campuses section
homepage: [
  { type: 'hero', props: { carousel: true } },
  { type: 'about' },
  { type: 'mission' },
  { type: 'legacy' },
  { type: 'founder' },
  // { type: 'campuses' },        // Removed
  { type: 'international' }
],
```

### Step 4: Add Custom Content (Optional)

To customize specific sections with school-specific content:

```javascript
content: {
  about: {
    text: 'Established in 2014, TIGPS New Location is a co-educational English-medium school...'
  },
  mission: {
    mission: 'Our specific mission for this location...',
    vision: 'Our specific vision for this location...'
  }
},
```

### Step 5: Test the New School

1. **Save** `schoolsConfig.js`
2. **Start development server**: `npm start`
3. **Navigate** to `http://localhost:3000/schools/new-school`
4. **Test all pages**:
   - Homepage: `/schools/new-school`
   - About: `/schools/new-school/about`
   - Academics: `/schools/new-school/academics`
   - Admissions: `/schools/new-school/admissions`
   - Life: `/schools/new-school/life-at-tigps`
   - Contact: `/schools/new-school/contact`

### Step 6: Verify Image Loading

1. **Check hero images** load properly on all pages
2. **Verify carousel** works on homepage
3. **Ensure all section images** display correctly
4. **Fix any missing images** by adding leading slash to paths

## Changing Images for Specific Sections

### Global Image Changes (All Schools)
To change images for all schools, update `masterImages` in `schoolsConfig.js`:

```javascript
// Master default images
export const masterImages = {
  hero: '/pictures/new-hero-image.jpg',        // Changes hero for all schools
  about: '/pictures/new-about-image.jpg',     // Changes about page hero
  mission: '/pictures/new-mission-image.jpg', // Changes mission section image
  academics: '/pictures/new-academics.jpg',   // Changes academics page hero
  // ... other sections
};
```

### School-Specific Image Changes
To change images for a specific school only, update the school's `images` object:

```javascript
{
  id: 'alipurduar',
  name: 'TIGPS - Alipurduar',
  // ... other config
  
  images: {
    about: '/pictures/alipurduar-about.jpg',      // Custom about page image
    academics: '/pictures/alipurduar-academics.jpg', // Custom academics image
    life: '/pictures/alipurduar-life.jpg',        // Custom life page image
    // Use master images for other sections by omitting them
  }
}
```

### Section-Specific Images
Different sections use different image properties:

| Section | Image Usage | How to Change |
|---------|-------------|---------------|
| **Homepage Hero Carousel** | Uses `carouselImages` array | Update school's `carouselImages` |
| **About Page Hero** | Uses `images.about` | Update school's `images.about` |
| **Academics Hero** | Uses `images.academics` | Update school's `images.academics` |
| **Mission Section** | Fixed image | Update `MissionSection.jsx` src |
| **Founder Section** | Fixed image | Update `FounderSection.jsx` src |
| **Life Page Hero** | Uses `images.life` | Update school's `images.life` |
| **Contact Hero** | Uses `images.contact` | Update school's `images.contact` |

### Examples

**Change About Page Image for One School:**
```javascript
{
  id: 'alipurduar',
  // ... other config
  images: {
    about: '/pictures/alipurduar-campus.jpg', // Only this school uses custom image
    // All other sections inherit master images
  }
}
```

**Change Mission Section Image Globally:**
```javascript
// In MissionSection.jsx
<img
  src="/pictures/home/new-mission-image.png"  // Update this path
  alt="TIGPS Campus"
  className="mission-image"
/>
```

**Change Homepage Carousel for One School:**
```javascript
{
  id: 'alipurduar',
  // ... other config
  carouselImages: [
    '/pictures/hero_section/alipurduar/banner-1.webp',
    '/pictures/hero_section/alipurduar/banner-2.webp',
    '/pictures/hero_section/alipurduar/banner-3.webp'
  ]
}
```

**Change Multiple Images for One School:**
```javascript
{
  id: 'alipurduar',
  // ... other config
  carouselImages: [
    '/pictures/hero_section/alipurduar/banner-1.webp',
    '/pictures/hero_section/alipurduar/banner-2.webp',
    '/pictures/hero_section/alipurduar/banner-3.webp'
  ],
  images: {
    about: '/pictures/alipurduar-about.jpg',
    academics: '/pictures/alipurduar-academics.jpg',
    life: '/pictures/alipurduar-life.jpg',
    contact: '/pictures/alipurduar-contact.jpg',
    // mission, legacy, founder, etc. will use master images
  }
}
```

## School Configuration Examples

### Minimal School (Uses All Defaults)
```javascript
{
  id: 'minimal-school',
  name: 'TIGPS - Minimal',
  location: 'City',
  address: 'Address',
  contact: 'Phone',
  email: 'email@tigps.in',
  logo: '/pictures/logo.png',
  heroImage: '/pictures/home/school/minimal-school.webp',
  description: 'Description',
  images: {
    about: '/pictures/image.jpg',
    // ... other images
  },
  homepage: [
    { type: 'hero', props: { carousel: true } },
    { type: 'about' },
    { type: 'mission' },
    { type: 'legacy' },
    { type: 'founder' },
    { type: 'campuses' },
    { type: 'international' }
  ]
}
```

### Customized School (With Custom Content)
```javascript
{
  id: 'custom-school',
  name: 'TIGPS - Custom',
  location: 'City',
  address: 'Address',
  contact: 'Phone',
  email: 'email@tigps.in',
  logo: '/pictures/logo.png',
  heroImage: '/pictures/home/school/custom-school.webp',
  description: 'Description',
  
  content: {
    about: {
      text: 'Our unique story and achievements...'
    }
  },
  
  images: {
    about: '/pictures/image.jpg',
    // ... other images
  },
  
  // Remove campuses section
  homepage: [
    { type: 'hero', props: { carousel: true } },
    { type: 'about' },
    { type: 'mission' },
    { type: 'legacy' },
    { type: 'founder' },
    { type: 'international' }
  ]
}
```

## Important Notes

### Image Path Requirements
- **Always use leading slash**: `/pictures/image.jpg` ✅
- **Never omit leading slash**: `pictures/image.jpg` ❌
- **Use consistent format**: WebP recommended for optimization
- **Place images in public folder**: `/public/pictures/` directory
- **Use descriptive names**: `school-section-purpose.jpg`

### Content Inheritance
- Schools inherit **all master content** by default
- Only specify `content` object for **custom text**
- Custom content **completely replaces** master content for that section

### Homepage Configuration
- **Always include** `{ type: 'hero', props: { carousel: true } }` for homepage
- **Order matters** - sections display in array order
- **Remove sections** by omitting from array (don't set to false)

### Automatic Features
- **All school pages** work automatically (about, academics, admissions, life, contact)
- **Navigation** updates automatically
- **Routing** works immediately after adding to config
- **Master styling** applies to all schools
- **Image resolution** handled by `getImageForSection` function

**New school will be automatically accessible at:** `/schools/new-school`

## Section-Based Conditional Rendering

All components automatically check school config to show/hide sections:

**Homepage sections:**
```javascript
{school.sections.hero && <Hero schoolData={school} />}
{school.sections.aboutSection && <AboutSection schoolData={school} />}
{school.sections.missionSection && <MissionSection schoolData={school} />}
{school.sections.legacySection && <LegacySection schoolData={school} />}
{school.sections.founderSection && <FounderSection schoolData={school} />}
{school.sections.campusesSection && <CampusesSection schoolData={school} />}
{school.sections.internationalSection && <InternationalSection schoolData={school} />}
```

**About page sections:**
```javascript
{school.sections.aboutHero && <Hero schoolData={school} />}
{school.sections.aboutStory && <AboutStorySection schoolData={school} />}
{school.sections.aboutMission && <MissionVisionSection schoolData={school} />}
{school.sections.aboutFacilities && <FacilitiesOverview schoolData={school} />}
```

**All other pages follow the same pattern with their respective sections.**

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

✅ **Inheritance System** - All schools inherit master structure by default
✅ **Section-Based Control** - Granular show/hide control for every section
✅ **Content Inheritance** - Schools inherit master content unless overridden
✅ **Zero CSS Changes** - All styling applies automatically
✅ **5-Minute Setup** - New schools require minimal configuration
✅ **Custom Sections** - Add unique sections per school/page
✅ **Custom Procedures** - School-specific admission processes
✅ **Consistent Design** - Same styling across all schools
✅ **Selective Customization** - Only specify what's different
✅ **Dynamic Content** - Content adapts based on school data
✅ **Scalable Architecture** - Easy to add hundreds of schools
✅ **SEO-friendly routing** - Each school has proper URLs
✅ **Image Management** - Centralized image resolution system
✅ **Homepage Customization** - Flexible section ordering and removal
✅ **Content Override** - School-specific content replaces master content
✅ **Automatic Page Generation** - All school pages work without additional setup
✅ **School-Specific Carousels** - Each school can have unique homepage carousel images
✅ **Carousel Fallback** - Uses master carousel if school images not provided

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

## Troubleshooting

### Images Not Loading
- **Check path**: Ensure leading slash (`/pictures/...`)
- **Verify file exists**: Check `/public/pictures/` directory
- **Case sensitivity**: Ensure exact filename match
- **File format**: Use web-optimized formats (WebP, JPG, PNG)

### School Not Appearing
- **Check schoolsConfig.js**: Ensure school added to array
- **Verify syntax**: Check for missing commas, brackets
- **Restart server**: `npm start` after config changes
- **Check browser console**: Look for JavaScript errors

### Content Not Updating
- **Clear browser cache**: Hard refresh (Ctrl+F5)
- **Check content structure**: Ensure proper nesting in config
- **Verify component usage**: Check if component uses custom content

### Homepage Sections Missing
- **Check homepage array**: Ensure sections included
- **Verify section types**: Use exact type names from registry
- **Check component imports**: Ensure all components imported in SectionRegistry.js

## Next Steps

1. **Add remaining schools** using the complete template
2. **Customize homepage sections** by modifying homepage arrays
3. **Add custom content** only where different from master
4. **Optimize images** for better performance (WebP format)
5. **Test all school pages** thoroughly
6. **Implement form handling** for admissions and contact
7. **Add school-specific events** to configuration
8. **Monitor and fix** any image loading issues
