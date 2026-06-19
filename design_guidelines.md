# Design Guidelines: Artcomp Slovenia Website

## User Directive
**Use the existing HTML code without any modifications.** All design decisions have been pre-defined in the provided code.

## Design Specifications (Extracted from Provided Code)

### Typography
- **Primary Font**: Geist (sans-serif)
- **Display Font**: Plus Jakarta Sans (for headings and brand)
- **Fallback**: Inter
- **Hero Headline**: 5xl mobile, 7xl desktop, tight tracking, medium weight
- **Body Text**: Base to xl, light weight (300), gray-400
- **Small Text**: xs to sm, medium weight

### Layout System
- **Container**: max-w-7xl, max-w-6xl, max-w-5xl depending on section
- **Spacing**: Tailwind defaults - p-6, py-24, py-32, gap-4/6/8
- **Grid**: 1 column mobile, up to 4 columns desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)

### Visual Elements
- **Background Pattern**: Grid overlay with fade mask
- **Glass Cards**: white/2% background, 10px blur, white/8% border, rounded-xl
- **Glow Effects**: Blue-900/20 blur-[120px] positioned absolutely
- **Animated Elements**: Horizontal/vertical flow animations on lines, pulse effects
- **Icons**: Iconify (Lucide icon set) - brain-circuit, blocks, infinity, shield-check, etc.

### Component Library
- **Navigation**: Fixed top bar, 14px height, blur backdrop, minimal links
- **Hero**: Center-aligned, badge component with icon, dual CTA layout
- **Trust Badges**: Horizontal flex layout with brand names, grayscale hover effect
- **Feature Cards**: Icon container (40x40), title, description, hover scale effect
- **Sections**: Border-top/bottom separators using white/5% opacity

### Animations
- **Scroll Reveals**: Opacity 0→1, translateY 30px→0, 1s cubic-bezier easing
- **Stagger Delays**: 100ms increments (delay-100 through delay-500)
- **Hover States**: Scale transforms, background transitions, grayscale toggles
- **Flow Animations**: Linear 3s infinite on gradient lines

### Images
- **Background**: UnicornStudio animated canvas (data-us-project integration)
- **No hero image**: Uses gradient glow and grid pattern instead
- **Brand Logos**: Text-based trust indicators in "Trusted by" section

### Key Characteristics
- Dark theme with subtle glass-morphism
- Minimal, refined aesthetic inspired by modern SaaS platforms
- Focus on micro-interactions and subtle animations
- Professional, technical positioning for B2B audience
- Emphasis on trust signals and credibility indicators

**Implementation Note**: The complete HTML structure, styling, and animations are already defined in the provided code. No design decisions need to be made - simply use the existing implementation as-is.