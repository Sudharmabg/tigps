# TIGPS School Addition Summary

## Current Project Status

### ✅ Completed Features
- **Master Homepage**: Fully functional with carousel, sections, and navigation
- **School System**: Dynamic multi-school architecture with inheritance
- **Alipurduar School**: Complete implementation with custom content
- **Image Management**: Centralized system with master/school-specific images
- **Hero Images**: Unified `/pictures/image.jpg` across all school pages (excluding homepages)
- **Section Components**: Mission, Founder, About, Legacy, International sections
- **Content System**: Custom content override for school-specific text
- **Homepage Customization**: Flexible section ordering and removal
- **Image Path Fixes**: All components use proper leading slash paths
- **Events Foundation**: Basic events system structure in place

### 🚧 In Progress
- **Dynamic Events System**: School-specific events integration
- **Popular Events Component**: Enhanced to support per-school events
- **Event Routing**: School-context event detail pages

### 📋 Current Configuration
- **Schools Configured**: 1 (Alipurduar)
- **Master Images**: `/pictures/image.jpg` for all school pages
- **Homepage Carousel**: 3 banner images in hero section
- **Fixed Section Images**: Mission (`/pictures/home/mssn_vission.png`), Founder (`/pictures/home/founder_desk.jpg`)
- **Alipurduar Custom Content**: Established 2014 text in about section
- **Alipurduar Homepage**: Hero → About → Mission → Legacy → Founder → International (campuses removed)

### 🎯 Ready for Production
- ✅ Add new schools using the template below
- ✅ Customize content per school
- ✅ Manage images globally or per school
- ✅ Remove/reorder homepage sections
- ✅ All pages work automatically (about, academics, admissions, life, contact)

### 📁 Current File Structure
```
/public/pictures/
├── image.jpg                    # Master hero for all school pages
├── logo.png                     # TIGPS logo
├── home/
│   ├── mssn_vission.png        # Mission section (fixed)
│   ├── founder_desk.jpg        # Founder section (fixed)
│   └── school/
│       └── alipurduar.webp     # Alipurduar hero image
└── hero_section/               # Homepage carousel
    ├── banner-tigps-1.webp
    ├── banner-tigps-2.png
    └── banner-tigps-3.png
```

---

## Quick Start: Adding a New School

### 1. Prepare Assets (2 minutes)
```bash
# Add school hero image
/public/pictures/home/school/new-school.webp

# Create events folder (optional)
/public/pictures/events/new-school/
```

### 2. Add School Configuration (3 minutes)
Open `src/config/schoolsConfig.js` and add to `schoolsConfig` array:

```javascript
{
  // REQUIRED FIELDS
  id: 'new-school',                                    // URL slug
  name: 'TIGPS - New School',                         // Display name
  location: 'City Name',                              // Location
  address: 'Full Address with Pin Code',             // Complete address
  contact: '(0123) 456789',                          // Phone
  email: 'newschool@tigps.in',                       // Email
  logo: '/pictures/logo.png',                        // Logo (same for all)
  heroImage: '/pictures/home/school/new-school.webp', // School hero
  description: 'Brief description',                   // Short description
  
  // REQUIRED: Images for all pages
  images: {
    about: '/pictures/image.jpg',      // About page hero
    mission: '/pictures/image.jpg',    // Mission section
    legacy: '/pictures/image.jpg',     // Legacy section
    founder: '/pictures/image.jpg',    // Founder section
    international: '/pictures/image.jpg', // International section
    academics: '/pictures/image.jpg',  // Academics page hero
    admissions: '/pictures/image.jpg', // Admissions page hero
    life: '/pictures/image.jpg',       // Life page hero
    contact: '/pictures/image.jpg'     // Contact page hero
  },
  
  // REQUIRED: Homepage sections
  homepage: [
    { type: 'hero', props: { carousel: true } },
    { type: 'about' },
    { type: 'mission' },
    { type: 'legacy' },
    { type: 'founder' },
    { type: 'international' }
  ],
  
  // OPTIONAL: Custom content
  content: {
    about: {
      text: 'Custom about text for this school...'
    }
  },
  
  // OPTIONAL: School-specific events
  events: [
    {
      id: 'new-school-sports-2024',
      title: 'Annual Sports Day',
      date: 'March 15, 2024',
      category: 'Sports',
      shortDescription: 'School sports competition',
      fullDescription: 'Annual sports day with various competitions...',
      image: '/pictures/events/new-school/sports.jpg',
      highlights: ['100+ participants', 'Multiple events']
    }
  ]
}
```

### 3. Test (1 minute)
- Save file
- Visit `http://localhost:3000/schools/new-school`
- Check all pages work automatically

## Image Management

### Master Images (All Schools)
Update `masterImages` in `schoolsConfig.js`:
```javascript
export const masterImages = {
  about: '/pictures/new-global-image.jpg'  // Changes for ALL schools
};
```

### School-Specific Images
Update individual school's `images` object:
```javascript
{
  id: 'specific-school',
  images: {
    about: '/pictures/school-specific-image.jpg'  // Only this school
  }
}
```

### Image Requirements
- ✅ Always use leading slash: `/pictures/image.jpg`
- ❌ Never omit slash: `pictures/image.jpg`
- 📁 Place in `/public/pictures/` directory
- 🖼️ Use WebP format for optimization

## Homepage Customization

### Remove Sections
```javascript
homepage: [
  { type: 'hero', props: { carousel: true } },
  { type: 'about' },
  { type: 'mission' },
  // { type: 'legacy' },        // REMOVED
  { type: 'founder' },
  // { type: 'campuses' },      // REMOVED
  { type: 'international' }
]
```

### Custom Content
```javascript
content: {
  about: {
    text: 'Established in 2014, TIGPS School is a co-educational...'
  },
  mission: {
    mission: 'Custom mission statement',
    vision: 'Custom vision statement'
  }
}
```

## Dynamic Events System

### School-Specific Events
Add to school configuration:
```javascript
events: [
  {
    id: 'school-annual-day-2024',           // Unique ID
    title: 'Annual Day Celebration',        // Event title
    date: 'December 15, 2024',             // Event date
    category: 'Cultural',                   // Category
    shortDescription: 'Grand celebration', // Brief description
    fullDescription: 'Detailed description of the annual day...',
    image: '/pictures/events/school/annual-day.jpg',
    gallery: [                             // Optional image gallery
      '/pictures/events/school/annual-1.jpg',
      '/pictures/events/school/annual-2.jpg'
    ],
    highlights: [                          // Key highlights
      'Cultural performances',
      'Award ceremony',
      'Parent participation'
    ]
  }
]
```

### Event Features
- 🎠 **Carousel Display**: Events show in Life page carousel
- 🔗 **Dynamic Routing**: `/schools/school-id/events/event-id`
- 📱 **Responsive**: Works on all devices
- 🖼️ **Image Galleries**: Multiple images with carousel
- 🏆 **Highlights**: Key event features

## File Structure
```
/public/pictures/
├── image.jpg                    # Master hero for all school pages
├── logo.png                     # TIGPS logo
├── home/
│   ├── mssn_vission.png        # Mission section image
│   ├── founder_desk.jpg        # Founder section image
│   └── school/
│       ├── alipurduar.webp     # School hero images
│       └── new-school.webp
├── events/
│   ├── master/                 # Master events (all schools)
│   ├── alipurduar/            # School-specific events
│   └── new-school/
└── hero_section/              # Homepage carousel
    ├── banner-tigps-1.webp
    ├── banner-tigps-2.png
    └── banner-tigps-3.png
```

## Automatic Features

✅ **All Pages Work**: About, Academics, Admissions, Life, Contact  
✅ **Navigation**: Updates automatically  
✅ **Routing**: Works immediately  
✅ **Styling**: Master CSS applies  
✅ **Images**: Resolved automatically  
✅ **Events**: Display in carousel  
✅ **SEO**: Proper URLs generated  

## Common Tasks

### Add School Without Events
```javascript
{
  id: 'simple-school',
  name: 'TIGPS - Simple',
  location: 'City',
  address: 'Address',
  contact: 'Phone',
  email: 'email@tigps.in',
  logo: '/pictures/logo.png',
  heroImage: '/pictures/home/school/simple-school.webp',
  description: 'Description',
  images: { /* all images */ },
  homepage: [ /* sections */ ]
  // No events - will show master events only
}
```

### Add School With Custom About
```javascript
{
  // ... basic config
  content: {
    about: {
      text: 'Established in 2020, our school focuses on...'
    }
  }
}
```

### Remove Homepage Sections
```javascript
homepage: [
  { type: 'hero', props: { carousel: true } },
  { type: 'about' },
  { type: 'mission' },
  { type: 'founder' },
  { type: 'international' }
  // Removed: legacy, campuses
]
```

## Troubleshooting

### Images Not Loading
- Check leading slash in path
- Verify file exists in `/public/pictures/`
- Check filename case sensitivity

### School Not Appearing
- Verify syntax in `schoolsConfig.js`
- Check for missing commas
- Restart development server

### Events Not Showing
- Check `events` array in school config
- Verify image paths for events
- Ensure unique event IDs

## Testing Checklist

- [ ] School loads at `/schools/school-id`
- [ ] All pages accessible (about, academics, etc.)
- [ ] Images display correctly
- [ ] Custom content appears
- [ ] Events show in Life page carousel
- [ ] Event detail pages work
- [ ] Navigation functions properly

## Time Estimate
- **Basic School**: 5 minutes
- **With Custom Content**: 8 minutes  
- **With Events**: 12 minutes
- **Full Customization**: 15 minutes

## Key Benefits

🚀 **Fast Setup**: New schools in minutes  
🎨 **Consistent Design**: Same styling everywhere  
🔧 **Flexible**: Customize only what's different  
📱 **Responsive**: Works on all devices  
🎯 **Scalable**: Add hundreds of schools easily  
🎪 **Dynamic Events**: School-specific events system  

---

**Result**: New school automatically accessible at `/schools/new-school` with all pages, navigation, and features working immediately.