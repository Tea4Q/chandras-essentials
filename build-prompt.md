# Build Prompt: Chandra's Essentials Website

Use this prompt in **Agent mode (Edit agent)** to implement the full website.

---

## Prompt to Run

Build the complete static website for **Chandra's Essentials** in the workspace at `c:\dev\ChandraSEssejtials-web`. Follow every step below in order.

### Brand & Design System
- Brand name: **Chandra's Essentials**
- Owner: **Chandra Skinner**
- Custom domain: **www.chandraskinner.com**
- Color palette (match Velvet Ladle app aesthetic):
  - Background: `#F0EBE1` (cream/beige)
  - Primary text: `#1B2A5F` (dark navy)
  - Accent / CTA: `#7D2E30` (burgundy)
  - White: `#FFFFFF`
- Fonts: Google Fonts — `Playfair Display` (headings) + `Inter` (body)
- Style: Clean, minimal, elegant — consistent with a recipe/gardening app brand

### File Structure to Create
```
c:\dev\ChandraSEssejtials-web\
├── index.html
├── about.html
├── apps.html
├── terms.html
├── privacy.html
├── delete-restore.html
├── README.md
├── CNAME
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── images/
        ├── velvet-ladle/   (copy from assets/VelvetLadle Screenshot presentation/)
        └── myseedbook/     (unzip from assets/MySeedBook Screenshot presentation.zip)
```

### Phase 1 — Prepare Assets
1. Run a PowerShell command to extract text from `assets/Chandra Skinner.docx` (use `$doc = New-Object -ComObject Word.Application` or python-docx if Python is available) and print it to the terminal so you can read the resume content.
2. Unzip `assets/MySeedBook Screenshot presentation.zip` into `assets/images/myseedbook/`.
3. Copy all files from `assets/VelvetLadle Screenshot presentation/` into `assets/images/velvet-ladle/`.

### Phase 2 — Shared Assets
4. Create `assets/css/styles.css`:
   - CSS custom properties for the color palette and fonts
   - Shared `<nav>` styles: horizontal desktop nav, hamburger mobile nav
   - Shared `<footer>` styles
   - Utility classes: `.btn-primary` (burgundy), `.btn-secondary` (navy outline), `.section`, `.container`
   - Responsive grid using CSS Grid / Flexbox
   - App store badge styles (side-by-side Apple + Google badges)
   - Screenshot gallery / carousel styles

5. Create `assets/js/main.js`:
   - Mobile hamburger menu toggle
   - Smooth scroll for anchor links
   - Screenshot carousel/slider for app screenshots (no external library)

### Phase 3 — Pages

#### `index.html` — Home / Landing Page
- Full-width hero: "Chandra's Essentials" headline, tagline "Tools for everyday life — beautifully simple apps", CTA buttons to Apps page and About page
- Two app preview cards side by side: Velvet Ladle and MySeedBook with one screenshot each and short description
- Brief "Meet the Developer" section with link to about.html
- Navigation bar linking all pages
- Footer with copyright and nav links

#### `about.html` — Professional PM Resume Page
- This is a **professional Project Manager resume page**, NOT an informal bio.
- Extract content from `assets/Chandra Skinner.docx` (run extraction first).
- Sections to include:
  - Name + PM title header with contact info (email, LinkedIn if present, location)
  - Professional Summary paragraph
  - Core Competencies / Skills (grid of skill tags)
  - Work Experience (timeline/cards — company, title, dates, bullet points)
  - Education
  - Certifications
  - Apps Built (link back to apps.html)
- Use a clean resume-card layout, not a sidebar layout — full-width sections.
- Print-friendly: add `@media print` CSS so the page prints cleanly as a resume.

#### `apps.html` — Apps Showcase Page
- Page title: "Our Apps"
- **Velvet Ladle** section:
  - App name, subtitle ("Your personal recipe manager")
  - Screenshot gallery using images from `assets/images/velvet-ladle/` — use these specific screenshots:
    - `Title Page.jpg` — hero/dashboard
    - `import.jpg` — "Save From Any Website" feature
    - `nutrition.jpg` — "Track Your Nutrition" feature
    - `Filter.jpg` or `Filter.png` — "Find Recipes Fast" feature
    - `favorites2.jpg` or `farvorites.jpg` — Favorites feature
    - `transform receipe.jpg` — recipe transformation feature
    - `Upgrade2.jpg` — premium/upgrade screen
  - Feature highlights (4 cards): Save from URL, Nutrition Tracking, Smart Search & Filter, Favorites
  - App Store badges:
    - Apple: https://apps.apple.com/us/app/velvet-ladle/id6759836584
    - Google Play: https://play.google.com/store/apps/details?id=com.qtea.VelvetLadle
  - Links to Terms, Privacy, Delete/Restore pages for this app
- **MySeedBook** section:
  - App name, subtitle ("A digital seed journal for gardeners")
  - Description: "Organize, plan, and grow better gardens. Track your seeds, planting schedules, and garden notes all in one place."
  - Screenshots from `assets/images/myseedbook/` (if any extracted from zip)
  - App Store badges:
    - Google Play: https://play.google.com/store/apps/details?id=com.myseedbook.catalogue
    - Apple: "Coming Soon" badge (styled badge, no link, grayed out)
  - Links to Terms, Privacy, Delete/Restore pages for this app

#### `terms.html` — Terms of Service
- Cover both Velvet Ladle and MySeedBook under "Chandra's Essentials"
- Standard ToS sections: Acceptance, Use of App, User Content, Subscriptions/Purchases, Intellectual Property, Disclaimer, Limitation of Liability, Changes to Terms, Contact
- Effective date: March 20, 2026
- Contact email placeholder: `[your-email@chandraskinner.com]` (leave as placeholder)

#### `privacy.html` — Privacy Policy
- Cover both apps under "Chandra's Essentials"
- GDPR + CCPA + App Store compliant sections:
  - What data we collect (account info, usage data, device info)
  - How we use your data
  - Third-party services (Firebase/analytics if applicable — use generic "analytics providers" if unsure)
  - Data retention
  - Your rights (access, deletion, portability)
  - Children's privacy (under 13)
  - Contact information
- Effective date: March 20, 2026

#### `delete-restore.html` — Account Deletion & Data Restore
- Clear step-by-step instructions for:
  - **How to delete your account**: In-app steps + contact email as backup
  - **What data gets deleted**: Account info, recipes/seeds data, preferences
  - **Data restore**: If account was recently deleted, contact instructions + timeframe (e.g., within 30 days)
- Friendly, non-legal tone — this is a user-facing help page, not a policy page.

### Phase 4 — Finishing
- Create `README.md` with: project overview, page list with descriptions, how to deploy to GitHub Pages, how to set up custom domain with CNAME
- Create `CNAME` file with single line: `www.chandraskinner.com`

### Quality Requirements
- All pages must share the same `<nav>` and `<footer>` HTML structure
- Active page highlighted in nav
- All external links open in `target="_blank" rel="noopener noreferrer"`
- All images have descriptive `alt` text
- Mobile responsive — test at 375px, 768px, 1280px breakpoints
- No JavaScript frameworks or external CSS frameworks — vanilla only
- Google Fonts loaded via `<link>` in `<head>` of each page
