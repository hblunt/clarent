# Clarent - Web & Software Development Agency

A modern, high-performance website built with the latest web technologies.

## Tech Stack

- **Next.js 16** - React framework with App Router and Turbopack
- **React 19.2** - Latest React with new features
- **Tailwind CSS v4** - Utility-first CSS framework with CSS-first configuration
- **TypeScript** - Type-safe development
- **Inter Font** - From Google Fonts

## Features

- ⚡ Lightning-fast builds with Turbopack
- 🎨 Modern design with custom orange accent (#FF5E00)
- 📱 Fully responsive layout
- 🚀 Optimized for Vercel deployment
- ♿ Accessible components
- 🎯 SEO-ready

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and global providers
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles with Tailwind v4 configuration
│   ├── services/
│   │   └── page.tsx        # Services page with pricing tiers
│   ├── projects/
│   │   └── page.tsx        # Projects showcase page
│   └── contact/
│       └── page.tsx        # Contact form page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section component
│   ├── Button.tsx          # Reusable button component
│   ├── PricingCard.tsx     # Pricing tier card
│   ├── ProjectCard.tsx     # Project showcase card
│   └── ContactForm.tsx     # Contact form component
└── public/                 # Static assets

## Pages

- **/** - Homepage with hero, intro, client work, internal projects, and contact sections
- **/services** - Services page with pricing tiers
- **/projects** - Projects showcase with grid layout
- **/contact** - Contact form page

## Brand Guidelines

- **Primary Orange:** #FF5E00
- **Dark Background:** #000000
- **Light Background:** #FFFFFF
- **Design Motif:** Orange asterisk (*) after page titles

## Deployment

This project is optimized for deployment on Vercel:

```bash
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Customization

### Adding a New Project

Edit `app/projects/page.tsx` and add a new `<ProjectCard />` component:

```tsx
<ProjectCard
  name="Your Project Name"
  description="Project description"
  link="/project-link"
/>
```

### Modifying Colors

Update the theme in `app/globals.css`:

```css
@theme {
  --color-clarent-orange: #FF5E00;
  /* Add more custom colors */
}
```

### Updating Pricing Tiers

Modify the pricing cards in `app/services/page.tsx`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [Vercel Deployment](https://vercel.com/docs)
