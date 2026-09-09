# Vincent — Architectural & Spatial Designer Portfolio

A modern, high-contrast, responsive portfolio website built for **Vincent**, an interior, exterior, and landscape designer specializing in SketchUp 3D modeling and Adobe Photoshop rendering/post-production.

---

## 🎨 Design System & Color Palette (Dark Blue-Green / Deep Teal)

The portfolio adopts an architectural and organic visual tone with dark blue-green and deep teal shades that harmoniously represent landscape architecture, spatial planning, and natural materials:

| Role | Color Hex | CSS Variable | Visual Use |
| :--- | :--- | :--- | :--- |
| **Deep Teal-Navy Canvas** | `#0B2027` | `--bg-primary` | Deep midnight blue-green background |
| **Elevated Dark Teal Card** | `#10333A` | `--bg-secondary` | Elevated surfaces, project cards, service blocks |
| **Borders & Hover State** | `#16454C` | `--bg-tertiary` | Framing lines, card hover elevation, dividing rules |
| **Muted Teal Accent** | `#2E7D74` | `--accent-teal` | Primary CTA buttons, icon accents, active filters |
| **Soft Sage / Steel Accent** | `#8FB3AE` | `--accent-sage` | Blueprint line work, secondary text, metadata badges |
| **High-Contrast Headings** | `#FFFFFF` | `--text-white` | Section titles, brand logo, prominent numbers |

---

## 🏛️ Sections Included

1. **Header / Navigation**: Sticky glassmorphic navbar with architectural branding, active scroll spy, CTA button, and mobile hamburger drawer.
2. **Hero / Landing**: Bold typography, tagline (`Interior · Exterior · Landscape Design`), spatial vision statement, dual action CTAs, and specialty badges.
3. **About Me**: Professional biography articulating Vincent's spatial design philosophy, 3 core pillars (*Contextual Harmony*, *Precision 3D Modeling*, *Atmospheric Illumination*), and profile visual with live status badge (*"Available for Commissions"*).
4. **Skills & Tools**: Deep dive cards in the teal/sage palette highlighting **SketchUp (3D Modeling)**, **Adobe Photoshop (Post-Processing & Rendering)**, **Landscape Design**, **Interior Design**, and **Exterior Architecture**.
5. **Portfolio / Projects Gallery**:
   - Filterable tabs: **All**, **Interior**, **Exterior**, and **Landscape** with dynamic count badges.
   - 8 pre-loaded architectural projects with tools badges (*"Modeled in SketchUp · Rendered in Photoshop"*).
   - **Interactive Modal Lightbox**: Opens on project click with multi-angle gallery, challenge & resolution narrative, and specifications breakdown.
6. **Services**: 5 comprehensive offerings (Interior, Exterior, Landscape, 3D Visualization, Photorealistic Rendering) with deliverables lists and direct commission links.
7. **Contact**: Polished dark teal contact form with client-side validation, direct contact details, studio location, and professional social links (LinkedIn, Behance, Instagram, ArtStation).
8. **Footer**: Architectural copyright, quick links, and smooth back-to-top button.

---

## 🚀 How to Run & Preview

The website is running live via local web server:
- URL: **`http://localhost:8080`**

To start the server at any time:
```bash
python3 -m http.server 8080
```
Or simply open `index.html` directly in any web browser.

---

## 📁 Project Structure

```
vincent/
├── index.html                  # Semantic markup & page layout
├── README.md                   # Documentation & customization guide
├── css/
│   └── style.css               # Deep teal & sage styling, palette & responsive design
├── js/
│   ├── projects-data.js        # Structured project catalog & modal metadata
│   └── main.js                 # Navigation, filtering, modal & contact interactions
└── assets/
    └── images/                 # Standalone SVG fallbacks and portrait artwork in teal/sage
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
