# 🌿 Spice Garden — Luxury Modern Indian Restaurant & Interactive Showcase

An agency-grade, high-converting digital flagship website for **Spice Garden**, a luxury modern Indian dining restaurant. Engineered with semantic HTML5, modern custom-property CSS3, and vanilla ES6+ JavaScript.

Designed specifically as an interactive pitch demonstration prototype for upscale restaurant owners, showcasing micro-interactions, responsive typography, and authentic culinary touches.

---

## 🌟 Key Features & Visual Showcase

### 1. Brand Identity & Visual Language
- **Warm Luxury Palette:** Saffron Clay (`#C84B19`), Royal Warm Gold (`#D4A373`), Warm Cream (`#FDFBF7`), and Deep Charcoal (`#1E1815`).
- **Typography:** `Playfair Display` serif for regal headings paired with `Plus Jakarta Sans` for clean, modern readability.
- **Micro-Interactions:** Subtle ambient glow animations, hover lifts, and smooth 250ms cubic-bezier transitions.

### 2. Interactive Data-Driven Menu
- **Category Filter Tabs:** Instant client-side filtering between *All Creations*, *Royal Biryanis*, *Tandoor & Starters*, *South Indian Curations*, *Royal Mains*, and *Artisanal Beverages*.
- **Authentic Dietary Iconography:** Authentic Indian FSSAI-compliant Vegetarian (green dot in square) and Non-Vegetarian (maroon dot in square) badges.
- **Spice Intensity Indicators:** 🌶️ (Mild, Medium, Hot & Fiery).
- **Per-Dish WhatsApp Micro-CTA:** "Order on WhatsApp" pre-fills the specific dish name and price directly into a WhatsApp order conversation.

### 3. Food & Ambiance Gallery with Accessible Lightbox
- High-resolution culinary photography with CSS fallbacks.
- Fully accessible lightbox modal dialog with keyboard navigation (`Left` / `Right` arrows, `Escape` key, and focus trap).

### 4. Interactive Reservation Engine
- **Date Constraints:** Automated minimum date set to today (`min="YYYY-MM-DD"`) to eliminate past-date booking errors.
- **Client-Side Validation:** Real-time validation for Name, Phone, Date, and Time slots.
- **Custom Confirmation Toast:** Instant feedback modal featuring a generated reference number (e.g. `#SG-9842`), full summary of reservation, and a 1-click **"Send Details to WhatsApp"** button.

### 5. Mobile Conversion Optimization
- **Sticky Bottom Quick Action Dock:** Persistent bottom bar on viewports `< 768px` offering instant **Call**, **Reserve**, and **WhatsApp** actions.
- **Slide-Over Navigation Drawer:** Accessible slide-in navigation with hamburger animation and focus management.

---

## 🚀 Zero-Dependency Architecture

- **Semantic HTML5:** 100% accessible landmarks (`<header>`, `<main>`, `<nav>`, `<section>`, `<aside>`, `<footer>`, `<dialog>`).
- **Modern CSS3:** Custom CSS variables, CSS Grid, Flexbox, fluid `clamp()` responsive typography, and `@media (prefers-reduced-motion)` support.
- **Vanilla JavaScript (ES6+):** Zero external libraries (No jQuery, React, or Bootstrap). 100% client-side with zero backend dependencies.

---

## 📁 File Structure

```text
spice-garden-restaurant/
├── index.html       # Complete semantic, accessible HTML5 structure with inline SVGs
├── style.css        # Modular design tokens, typography, layout grids & animations
├── script.js        # Menu array, filter engine, lightbox, form validator & WhatsApp links
└── README.md        # Comprehensive documentation & deployment guide
```

---

## 🛠️ Quickstart & Local Development

No package manager, build step, or Node.js required!

### Option A: Direct Open in Browser
Double-click `index.html` or open it with any web browser (Chrome, Firefox, Safari, Edge).

### Option B: Local Live Server (Recommended)
If using VS Code or any terminal:
```bash
# Using Python 3 built-in HTTP server:
python -m http.server 8000

# Or using npx serve:
npx serve .
```
Navigate to `http://localhost:8000`.

---

## ⚙️ Customization Guide

### 1. Updating the WhatsApp Booking Number
Open [`script.js`](file:///c:/Users/nutha/OneDrive/Desktop/spice-garden-restaurant/script.js) and locate the global configuration constant near the top:
```javascript
// Replace with your restaurant's WhatsApp business number:
// (Country code + Phone number, no plus (+) signs or spaces)
const WHATSAPP_PHONE = "919876543210";
```

### 2. Changing Brand Colors
Open [`style.css`](file:///c:/Users/nutha/OneDrive/Desktop/spice-garden-restaurant/style.css) and customize the CSS root variables:
```css
:root {
  --color-primary: #C84B19;          /* Deep terracotta spice */
  --color-primary-hover: #B33D0F;    /* Darker spice hover */
  --color-accent-gold: #D4A373;      /* Royal Warm Gold */
  --color-bg-cream: #FDFBF7;         /* Warm off-white background */
  --color-text-primary: #1E1815;     /* Main text */
}
```

### 3. Adding or Editing Menu Items
In [`script.js`](file:///c:/Users/nutha/OneDrive/Desktop/spice-garden-restaurant/script.js), edit the `MENU_DATA` array. Each object adheres to this structure:
```javascript
{
  id: "biryani-4",
  title: "Hyderabadi Kachche Gosht Biryani",
  category: "biryani", // "biryani" | "starters" | "south-indian" | "main-course" | "beverages"
  price: 685,
  isVeg: false,        // true for Veg (green dot), false for Non-Veg (maroon dot)
  spiceLevel: 2,       // 0 (Mild), 1 (Mild Spice), 2 (Medium), 3 (Hot & Fiery)
  tag: "Royal Heritage", // Optional pill tag (e.g., "Bestseller", "Chef Special")
  description: "Marinated overnight with raw papaya, potli spices, and aged basmati.",
  image: "https://images.unsplash.com/photo-..."
}
```

---

## 🌐 One-Click Deployment Guide

Because Spice Garden requires no build process, it can be hosted instantly on any static web host.

### 1. Deploying to GitHub Pages
1. Initialize a git repository and commit the files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Spice Garden Website"
   ```
2. Push to your GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/your-username/spice-garden-restaurant.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings > Pages**.
4. Under **Source**, choose `Deploy from a branch`, select `main`, and click **Save**.
5. Your website will be live at `https://your-username.github.io/spice-garden-restaurant/`.

### 2. Deploying to Netlify
- **Option A (Drag & Drop):**
  1. Log into [Netlify](https://app.netlify.com).
  2. Drag and drop the `spice-garden-restaurant` project folder into the Netlify "Sites" dropzone.
  3. Your site is live within 5 seconds with a free SSL certificate.
- **Option B (Netlify CLI):**
  ```bash
  npm install -g netlify-cli
  netlify deploy --prod --dir=.
  ```

### 3. Deploying to Vercel
- **Option A (Vercel CLI):**
  ```bash
  npm install -g vercel
  vercel --prod
  ```
- **Option B (Vercel Dashboard):**
  1. Push code to GitHub.
  2. In [Vercel Dashboard](https://vercel.com/new), select **Import Git Repository**.
  3. Leave build settings default (Framework preset: `Other`) and click **Deploy**.

---

## ♿ Accessibility & Performance Standards

- **WCAG AA Compliance:** Text contrast ratios pass WCAG AA standards (minimum 4.5:1 for body copy).
- **Focus Indicators:** High-contrast `:focus-visible` outlines for full keyboard navigation.
- **Screen Reader Support:** Semantic HTML5 elements, descriptive `aria-labels`, `aria-expanded` state trackers, and `role="dialog"` modal containers.
- **Reduced Motion Support:** Respects user OS preferences via `@media (prefers-reduced-motion: reduce)`.

---

## 📄 License
Demonstration Showcase prototype created for **Spice Garden** restaurant pitch presentations. All rights reserved.
