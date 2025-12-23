# QUBESO TECH Website - Complete Guide

## 🎯 Project Overview

This is a premium, fully responsive company website for QUBESO TECH built with modern web technologies. The site features smooth animations, a clean design system, and a professional user experience.

## ✅ Completed Features

### Pages Built

1. **Home Page** (`/`)
   - Premium hero section with animated background
   - Smooth scroll animations
   - Feature cards with hover effects
   - CTA sections with gradient backgrounds

2. **Services Page** (`/services`)
   - ⭐ **Animated Timeline** (Main Feature)
   - 5-step process flow (Requirement Analysis → Research & Planning → UI/UX Design → Development → Deployment)
   - Horizontal layout on desktop, vertical on mobile
   - Smooth scroll-triggered animations
   - Hover effects with glow and scale
   - Arrow animations between steps
   - Additional services grid

3. **About Page** (`/about`)
   - Company mission and vision sections
   - **Animated counters** (Projects, Clients, Experience)
   - "Why Choose Us" section with feature cards
   - Smooth fade-in animations

4. **Portfolio Page** (`/portfolio`)
   - Animated filter buttons
   - Project grid with 9 sample projects
   - Hover overlays with external links
   - Category-based filtering
   - Smooth transitions

5. **Blog Page** (`/blog`)
   - Featured article section
   - Blog post grid with 6 articles
   - Clean reading layout
   - Newsletter subscription form

6. **Contact Page** (`/contact`)
   - **Modern form with floating labels**
   - Real-time validation
   - Animated submit button
   - Contact information cards
   - Map placeholder section

### Components

- **Navbar**: 
  - Sticky with scroll-based styling
  - Animated underline indicator
  - Mobile-responsive hamburger menu
  - Smooth transitions

- **Footer**:
  - Multi-column layout
  - Social media links
  - Contact information
  - Responsive design

## 🎨 Design System

### Color Palette

```
Brand Colors:
- Navy: #0a1929 to #102a43
- Brand Blue: #6172f3 to #4343cc
- Purple: #8B5CF6 to #9333EA
- Pink: #EC4899 to #DB2777

Gradients:
- Blue-Cyan: from-blue-500 to-cyan-500
- Purple-Pink: from-purple-500 to-pink-500
- Orange-Amber: from-orange-500 to-amber-500
- Green-Emerald: from-green-500 to-emerald-500
```

### Typography
- Font Family: Inter (Google Fonts)
- Headings: Bold, Large sizes (4xl to 7xl)
- Body: Regular, 16-20px

### Spacing
- Sections: py-24 (6rem)
- Cards: p-6 to p-12
- Gaps: gap-4 to gap-12

### Shadows
- Cards: shadow-lg to shadow-2xl
- Hover: Enhanced shadows with brand colors

## 🎬 Animations

### Framer Motion Effects

1. **Page Entry Animations**
   - Fade in with Y-axis slide
   - Staggered children animations
   - Scale transitions

2. **Scroll Animations**
   - `useInView` hook for scroll-triggered effects
   - Progressive reveal on scroll
   - Smooth transitions

3. **Hover Effects**
   - Scale (1.05-1.1)
   - Y-axis translation (-5px to -10px)
   - Color transitions
   - Shadow enhancements

4. **Special Animations**
   - Rotating background gradients
   - Spinning icons (360deg rotation)
   - Number counting (About page)
   - Timeline progression (Services page)

## 📱 Responsiveness

### Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

### Responsive Features
- Mobile menu (hamburger)
- Vertical timeline on mobile
- Flexible grid layouts (1/2/3/4 columns)
- Touch-friendly buttons (py-3 to py-4)
- Responsive typography (text-xl to text-7xl)

## 🚀 Getting Started

### Installation

```bash
# Navigate to project directory
cd qubeso-tech

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 File Structure

```
qubeso-tech/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page with counters
│   ├── blog/
│   │   └── page.tsx          # Blog listing page
│   ├── contact/
│   │   └── page.tsx          # Contact form page
│   ├── portfolio/
│   │   └── page.tsx          # Portfolio grid page
│   ├── services/
│   │   └── page.tsx          # Services timeline page ⭐
│   ├── layout.tsx            # Root layout with navbar/footer
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation component
│   └── Footer.tsx            # Footer component
├── lib/
│   └── utils.ts              # Utility functions
├── public/
│   └── grid.svg              # Background grid pattern
├── package.json
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md
```

## 🎯 Key Features Implementation

### Services Page Timeline (Most Important)

The Services page features a premium animated timeline:

**Desktop (Horizontal)**:
- 5 cards arranged horizontally
- Connected by arrows
- Each step slides in from left on scroll
- Hover effects: glow + scale
- Smooth staggered animations

**Mobile (Vertical)**:
- Vertical timeline with connecting line
- Icons in timeline circles
- Cards slide in from bottom
- Touch-optimized spacing

### Contact Form Floating Labels

The contact form features animated floating labels:
- Labels start inside input fields
- Float up and scale down on focus/input
- Color changes on focus
- Smooth transitions
- Form validation

### About Page Counters

Animated number counters that count up when scrolled into view:
- 150+ Projects
- 50+ Clients
- 5+ Years Experience

## 🔧 Customization

### Updating Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    // Your custom colors
  }
}
```

### Adding New Pages

1. Create folder in `app/` directory
2. Add `page.tsx` file
3. Add route to `components/Navbar.tsx`

### Modifying Animations

Edit animation parameters in component files:
- `initial`: Starting state
- `animate`: End state
- `transition`: Animation timing

## 📊 Performance

### Optimization Features
- Next.js 14 App Router
- Automatic code splitting
- Image optimization ready
- CSS optimization with Tailwind
- Framer Motion lazy loading

## 🎨 Design Patterns

### Card Component Pattern
```tsx
<motion.div
  whileHover={{ y: -10, scale: 1.05 }}
  className="group bg-white rounded-2xl p-8 shadow-lg"
>
  {/* Content */}
</motion.div>
```

### Gradient Pattern
```tsx
className="bg-gradient-to-br from-brand-600 to-purple-600"
```

### Glass Effect Pattern
```tsx
className="glass backdrop-blur-lg bg-white/80"
```

## ✅ Checklist Completed

- ✅ Premium design (not basic template)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Framer Motion animations throughout
- ✅ Services timeline (horizontal/vertical)
- ✅ Animated counters on About page
- ✅ Portfolio grid with filters
- ✅ Contact form with floating labels
- ✅ Clean code structure
- ✅ TypeScript throughout
- ✅ Tailwind CSS styling
- ✅ SEO metadata
- ✅ No broken animations
- ✅ Professional IT company feel

## 🎓 Learning Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📞 Support

For questions or issues:
- Email: info@qubesotech.com
- Website: [Your website]

---

**Built with precision and passion using Next.js 14, TypeScript, Tailwind CSS, and Framer Motion** ✨
