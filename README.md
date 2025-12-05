# Minimal Landing Page - Next.js + Tailwind CSS

A beautiful, modern landing page built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. This project follows best practices for performance, accessibility, and SEO.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   ├── Navbar.tsx           # Navigation bar with mobile menu
│   ├── Hero.tsx             # Hero section with CTA buttons
│   ├── FeaturesSection.tsx  # Features section container
│   ├── FeatureCard.tsx      # Individual feature card component
│   ├── Testimonials.tsx     # Testimonials section
│   ├── Pricing.tsx          # Pricing cards section
│   ├── CTA.tsx              # Call-to-action section
│   ├── Footer.tsx           # Footer with links and social icons
│   └── HeaderMeta.tsx       # SEO meta tags component
├── public/
│   └── assets/              # Images and assets (create this folder)
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Replacing Figma Assets

### Step 1: Export Assets from Figma

1. Open your Figma design file
2. Select the image/illustration you want to export
3. Right-click → **Export** → Choose **WebP** format (or PNG/SVG)
4. Export at 2x resolution for retina displays

### Step 2: Place Assets in Project

1. Create the `public/assets/` folder if it doesn't exist:

```bash
mkdir -p public/assets
```

2. Place your exported images in `public/assets/`:
   - `hero-image.webp` - Hero section illustration
   - `feature-1.svg`, `feature-2.svg`, `feature-3.svg` - Feature icons
   - `avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg` - Testimonial avatars

### Step 3: Update Component Code

#### Hero Section (`components/Hero.tsx`)

Find the commented section and uncomment the Image component:

```tsx
// Replace this placeholder:
<div className="w-full h-full bg-primary-300/50 rounded-xl" />

// With this (uncomment):
<Image
  src="/assets/hero-image.webp"
  alt="Hero illustration showing digital presence and growth"
  fill
  className="object-contain"
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### Feature Cards (`components/FeatureCard.tsx`)

Uncomment the Image component in the icon section:

```tsx
<Image
  src={icon}
  alt={`${title} icon`}
  width={32}
  height={32}
  className="object-contain"
/>
```

#### Testimonials (`components/Testimonials.tsx`)

Uncomment the Image component in the avatar section:

```tsx
<Image
  src={testimonial.avatar}
  alt={`${testimonial.name} avatar`}
  width={48}
  height={48}
  className="object-cover"
/>
```

### Step 4: Update Image Paths

Update the image paths in the component files to match your exported file names:

- `components/FeaturesSection.tsx` - Update the `icon` paths in the `features` array
- `components/Testimonials.tsx` - Update the `avatar` paths in the `testimonials` array

## 🎯 Design Assumptions

Since the exact Figma design details couldn't be fully extracted, the following design decisions were made:

1. **Color Scheme**: Used a modern blue primary color (`#0ea5e9`) with gray scale for text
2. **Typography**: Inter font family for clean, modern look
3. **Spacing**: Consistent spacing using Tailwind's spacing scale
4. **Layout**: Mobile-first responsive design with breakpoints at sm, md, lg, xl
5. **Shadows**: Subtle shadows for depth (shadow-lg, shadow-xl)
6. **Border Radius**: Rounded corners (rounded-lg, rounded-2xl) for modern feel
7. **Animations**: Light fade and slide animations using Framer Motion

**To match your Figma design exactly:**
- Update colors in `tailwind.config.ts` under the `colors` section
- Adjust spacing, shadows, and border radius in component classes
- Update font family if different from Inter

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click **"New Project"**
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click **"Deploy"**

3. **Your site will be live!** Vercel provides a URL like `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**

```bash
npm i -g vercel
```

2. **Deploy:**

```bash
vercel
```

3. **Follow the prompts:**
   - Login to Vercel (if not already)
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

### Production Build

To test the production build locally:

```bash
npm run build
npm start
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```ts
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Content

- **Features**: Edit the `features` array in `components/FeaturesSection.tsx`
- **Testimonials**: Edit the `testimonials` array in `components/Testimonials.tsx`
- **Pricing**: Edit the `pricingTiers` array in `components/Pricing.tsx`

### SEO

Update metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Custom Title',
  description: 'Your custom description',
  // ... more metadata
}
```

## ✨ Features

- ✅ Next.js 14 App Router with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Fully responsive (mobile-first)
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ SEO optimized (meta tags, semantic structure)
- ✅ Image optimization (next/image)
- ✅ Performance optimized (code splitting, lazy loading)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

If you have questions or need help:
1. Check the comments in component files
2. Review the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Review the Tailwind CSS documentation: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Note**: Remember to replace all placeholder images and update content to match your brand before deploying to production!

