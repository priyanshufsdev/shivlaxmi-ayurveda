# Shivlaxmi Ayurveda 🌿

A beautiful, elegant, and minimalistic Ayurveda website built with Next.js 15.5+, React 19, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern & Elegant Design**: Clean, minimalistic UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **SEO Optimized**: Built-in metadata and semantic HTML
- **Fast Performance**: Leveraging Next.js 15.5+ App Router and React 19
- **Beautiful Sections**:
  - Hero Section with floating animations
  - About Us with feature cards
  - Products showcase (3 premium Ayurvedic products)
  - Our Philosophy with ancient wisdom
  - Customer Testimonials with ratings
  - Contact Form with business hours
  - Comprehensive Footer with newsletter

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Color Palette

The website uses an Ayurveda-inspired color scheme:

- **Primary**: `#2d5016` - Deep forest green
- **Secondary**: `#4a7c2c` - Medium green
- **Accent**: `#8bc34a` - Light green
- **Light**: `#c5e1a5` - Pale green
- **Cream**: `#fdfbf7` - Warm cream background

## 📦 Tech Stack

- **Framework**: Next.js 15.5+
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Products.tsx        # Products showcase
│   ├── Philosophy.tsx      # Philosophy section
│   ├── Testimonials.tsx    # Customer reviews
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer section
├── public/
│   ├── Shivlaxmi ayurveda.PNG  # Logo
│   └── products/               # Product images
├── data/
│   └── products.ts             # Product data
```

## 📸 Adding Product Images

1. Place product images in the `public/products/` folder
2. Name them according to product ID:
   - `chandi-bhasma.jpg`
   - `face-pack.jpg`
   - `hair-capsules.jpg`
3. Recommended: 800x800px, high quality, square aspect ratio
4. Currently using placeholder icons until images are added

```

## 🌟 Products

The website showcases 3 premium Ayurvedic products:

1. **Chandi Bhasma (₹5,100)** - Premium Ayurvedic Vitalizer for Strength, Stamina & Immunity
2. **Gold Aloe Vera Face Pack (₹600)** - Natural Face Pack for Glowing & Clear Skin
3. **Hair Care Capsules (₹495)** - Plant-Based Formula for Strong, Healthy & Beautiful Hair

Each product has:
- Home page preview card with price and key benefits
- Dedicated detail page with full information
- Complete ingredient list and usage instructions
- Product specifications and manufacturing details

## 📱 Sections

### Home Page
1. **Header**: Sticky navigation with smooth scroll and mobile menu
2. **Hero**: Eye-catching intro with animated elements and CTAs
3. **About**: Company story, values, and feature cards
4. **Products**: 3 featured Ayurvedic products with pricing
5. **Philosophy**: Ayurvedic principles and Dosha information
6. **Testimonials**: 6 customer reviews with ratings and stats
7. **Contact**: Contact form with business hours and info
8. **Footer**: Complete footer with links, newsletter, and social media
9. **Scroll to Top**: Floating button for easy navigation

### Product Detail Pages
- Full product information and description
- Complete ingredient list with benefits
- Usage instructions and dosage
- Manufacturing and expiry details
- "Why Choose Us" section
- Related contact information

## 🎯 Performance Features

- Optimized images with Next.js Image component
- Lazy loading for smooth performance
- CSS optimization with Tailwind
- Font optimization with next/font
- Smooth scroll behavior
- Framer Motion animations with reduced motion support

## 📄 License

This project is created for Shivlaxmi Ayurveda.

## 🙏 Credits

Built with ❤️ using modern web technologies for holistic wellness.

---

**Made with ancient wisdom and modern code** 🌿✨

