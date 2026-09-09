# Vincent — Architectural & Spatial Designer Portfolio

A modern, high-contrast, responsive portfolio website built for **Vincent**, an interior, exterior, and landscape designer specializing in SketchUp 3D modeling and Adobe Photoshop rendering/post-production.

---

## 🎨 Design System & Color Palette

Designed specifically with an architectural blueprint mood, deep navy backgrounds, and high-contrast typography:

| Role | Color Hex | CSS Variable | Visual Use |
| :--- | :--- | :--- | :--- |
| **Primary Navy Background** | `#0A1A2F` | `--bg-primary` | Deep midnight canvas background |
| **Elevated Card Navy** | `#12294A` | `--bg-secondary` | Elevated surfaces, project cards, service blocks |
| **Borders & Hover State** | `#1B3A5F` | `--bg-tertiary` | Subtle framing lines, card hover elevation |
| **Soft Steel Blue Accent** | `#3E6D9C` | `--accent-steel` | Primary CTA buttons, icon accents, active filters |
| **Light Silver-Gray Accent** | `#C9D6E3` | `--accent-light` | Blueprint lines, secondary typography, badges |
| **High-Contrast Headings** | `#FFFFFF` | `--text-white` | Section titles, brand logo, prominent numbers |

---

## 🏛️ Sections Included

1. **Header / Navigation**: Sticky glassmorphic navbar with architectural branding, active scroll spy, CTA button, and mobile hamburger drawer.
2. **Hero / Landing**: Bold typography, tagline (`Interior · Exterior · Landscape Design`), spatial vision statement, dual action CTAs, and specialty badges.
3. **About Me**: Professional biography articulating Vincent's spatial design philosophy, 3 core pillars (*Contextual Harmony*, *Precision 3D Modeling*, *Atmospheric Illumination*), and profile visual with live status badge (*"Available for Commissions"*).
4. **Skills & Tools**: Deep dive cards into **SketchUp (3D Modeling)**, **Adobe Photoshop (Post-Processing & Rendering)**, **Landscape Design**, **Interior Design**, and **Exterior Architecture**.
5. **Portfolio / Projects Gallery**:
   - Filterable tabs: **All**, **Interior**, **Exterior**, and **Landscape** with dynamic count badges.
   - 8 pre-loaded architectural projects with tools badges (*"Modeled in SketchUp · Rendered in Photoshop"*).
   - **Interactive Modal Lightbox**: Opens on project click with multi-angle gallery, challenge & resolution narrative, and specifications breakdown.
6. **Services**: 5 comprehensive offerings (Interior, Exterior, Landscape, 3D Visualization, Photorealistic Rendering) with deliverables lists and direct commission links.
7. **Contact**: Polished dark-themed contact form with client-side validation, direct contact details, studio location, and professional social links (LinkedIn, Behance, Instagram, ArtStation).
8. **Footer**: Architectural copyright, quick links, and smooth back-to-top button.

---

## 🚀 How to Run & Preview

This website is completely dependency-free and built with modern semantic HTML5, CSS3, and ES6 JavaScript.

### Option 1: Direct File Open
Simply double-click `index.html` or open it in any modern browser (Chrome, Safari, Firefox, Edge).

### Option 2: Local Web Server
```bash
# Python 3
python3 -m http.server 8080

# Or via Node.js
npx serve .
```
Then visit `http://localhost:8080` in your web browser.

---

## 📁 Project Structure

```
vincent/
├── index.html                  # Semantic markup & page layout
├── README.md                   # Documentation & customization guide
├── css/
│   └── style.css               # Architectural styling, palette & responsive design
├── js/
│   ├── projects-data.js        # Structured project catalog & modal metadata
│   └── main.js                 # Navigation, filtering, modal & contact interactions
└── assets/
    └── images/                 # Standalone SVG fallbacks and portrait artwork
        ├── vincent-portrait.svg
        ├── villa-lumina.svg
        ├── azure-courtyard.svg
        ├── cantilever-house.svg
        ├── nordic-loft.svg
        ├── zenith-garden.svg
        ├── geometric-pavilion.svg
        ├── atrium-sanctuary.svg
        └── verona-estate.svg
```

---

## ✏️ Customization Guide

### Adding or Modifying Projects
Open `js/projects-data.js` and edit or append new entries:
```javascript
{
  id: "your-project-id",
  title: "Your Project Title",
  category: "interior", // or "exterior" or "landscape"
  categoryLabel: "Interior Design",
  subtitle: "Brief one-line summary",
  location: "City, Country",
  year: "2026",
  area: "400 sq.m",
  tools: "Modeled in SketchUp · Rendered in Photoshop",
  software: ["SketchUp Pro", "Adobe Photoshop CC"],
  summary: "Comprehensive description...",
  challenge: "Specific design or site challenge...",
  solution: "How SketchUp and Photoshop solved it...",
  image: "assets/images/your-render.jpg", // or URL
  fallbackImage: "assets/images/your-fallback.svg",
  gallery: [
    "assets/images/angle-1.jpg",
    "assets/images/angle-2.jpg"
  ],
  tags: ["Interior", "SketchUp 3D"]
}
```

### Updating Profile Photo
Replace `assets/images/vincent-portrait.svg` with your preferred JPG/PNG render or headshot and update the `src` attribute in `index.html`.
