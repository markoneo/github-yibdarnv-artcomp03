# Artcomp Slovenia - AI Consulting & Strategy Website

A modern, responsive landing page for Artcomp Slovenia, an AI consulting company specializing in AI strategy and cloud solutions.

## Features

- Modern dark theme with glass-morphism effects
- Animated background using UnicornStudio
- Scroll reveal animations
- Fully responsive design
- AWS Partner section
- Interactive process flow visualizations

## Tech Stack

- HTML5
- Tailwind CSS (via CDN)
- Iconify Icons
- Google Fonts (Geist, Inter, Plus Jakarta Sans)
- UnicornStudio for animated backgrounds

## Deployment

This site is configured for deployment on Netlify.

### Deploy to Netlify

1. Push this repository to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the configuration from `netlify.toml`
4. The `public` folder will be deployed as the static site

### Configuration

The `netlify.toml` file contains:
- Build settings pointing to the `public` folder
- Security headers
- Caching rules for static assets

## Local Development

Since this is a static HTML site, you can simply open `public/index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000 --directory public

# Using Node.js (npx)
npx serve public
```

## Contact

For inquiries: info@artcomp.net

## License

All rights reserved - Artcomp Slovenia
