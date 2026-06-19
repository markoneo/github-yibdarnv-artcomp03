# Artcomp Slovenia - AI Consulting Website

## Overview

This is a landing page website for Artcomp Slovenia, an AI consulting company specializing in AI strategy and cloud solutions. The project has a dual architecture: a static HTML landing page in the `public` folder for Netlify deployment, and a full-stack React/Express application for dynamic features.

The static site features a modern dark theme with glass-morphism effects, animated backgrounds using UnicornStudio, scroll reveal animations, and responsive design. The React application provides additional capabilities with a component library and backend API support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Static Landing Page (`public/index.html`)**
- Pure HTML with Tailwind CSS via CDN
- No build step required for the static version
- Uses Iconify for icons and Google Fonts (Geist, Inter, Plus Jakarta Sans)
- UnicornStudio integration for animated backgrounds
- Custom animations and glass-morphism effects defined inline

**React Application (`client/`)**
- React 18 with TypeScript
- Vite as the build tool and dev server
- Wouter for client-side routing
- TanStack Query for server state management
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS with custom theme configuration

### Backend Architecture

**Express Server (`server/`)**
- Express.js with TypeScript
- HTTP server with JSON body parsing
- Modular route registration system
- Static file serving for production builds
- Vite dev server integration for development

**Storage Layer**
- Abstract storage interface (`IStorage`) for data operations
- In-memory storage implementation (`MemStorage`) as default
- Drizzle ORM configured for PostgreSQL (when database is provisioned)
- User schema defined with Zod validation

### Build System

- `npm run dev`: Development mode with hot reloading via Vite
- `npm run build`: Production build using esbuild for server and Vite for client
- Server bundles common dependencies to reduce cold start times
- Client outputs to `dist/public` directory

### Design System

The site follows specific design guidelines:
- Dark theme (#050505 background) with subtle glass-morphism
- Typography: Geist (primary), Plus Jakarta Sans (headings), Inter (fallback)
- Glass cards with white/2% background, blur effects, and subtle borders
- Custom animations for scroll reveals and flow effects
- Responsive grid layouts using Tailwind's responsive utilities

## External Dependencies

### Frontend Services
- **Tailwind CSS CDN**: Styling framework loaded via CDN for static pages
- **Iconify**: Icon library for Lucide icons
- **Google Fonts**: Geist, Inter, and Plus Jakarta Sans font families
- **UnicornStudio**: Animated background canvas integration

### Backend Integrations
- **PostgreSQL**: Database via Drizzle ORM (requires DATABASE_URL environment variable)
- **GitHub API**: Integration via Octokit for repository management (uses Replit's GitHub connector)

### Development Tools
- **Vite**: Build tool with React plugin and Replit-specific plugins
- **Drizzle Kit**: Database migration and schema management
- **esbuild**: Server bundling for production

### Deployment
- **Netlify**: Static site deployment configured via `netlify.toml`
- The `public` folder serves as the deployment root for the static landing page