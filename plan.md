# Plan: Chandra's Essentials Static Website

## Overview
Build a multi-page static HTML/CSS/JS website for Chandra Skinner's brand "Chandra's Essentials" — deployable to GitHub Pages at www.chandraskinner.com. The site showcases two apps (Velvet Ladle, MySeedBook) and a PM bio page.

## Assets Available
- `assets/Chandra Skinner.docx` — resume (bio content, need to extract text)
- `assets/VelvetLadle Screenshot presentation/` — 10 app screenshots
- `assets/MySeedBook Screenshot presentation.zip` — MySeedBook screenshots (need to unzip)

## App Info
- **Velvet Ladle** — recipe manager app
  - iOS: https://apps.apple.com/us/app/velvet-ladle/id6759836584
  - Android: https://play.google.com/store/apps/details?id=com.qtea.VelvetLadle
  - Features: Save from any website URL, nutrition tracking, search/filter, favorites, recipe scaling
- **MySeedBook** — digital seed journal for gardeners
  - Android: https://play.google.com/store/apps/details?id=com.myseedbook.catalogue
  - iOS: Coming soon

## Design System (from app screenshots)
- Background: `#F0EBE1` (cream/beige)
- Primary text: `#1B2A5F` (dark navy)
- Accent: `#7D2E30` (burgundy/maroon)
- Clean, minimal, elegant aesthetic

## File Structure

/
├── index.html — Home/landing page
├── about.html — PM resume page
├── apps.html — Apps page (Velvet Ladle + MySeedBook + sub-links)
├── terms.html — Terms of Service
├── privacy.html — Privacy Policy
├── delete-restore.html — Account delete/restore instructions
├── README.md
├── CNAME — www.chandraskinner.com
├── assets/
│ ├── css/styles.css
│ ├── js/main.js
│ └── images/ — optimized copies of screenshots


## Phase 1: Content Extraction
1. Extract text from `assets/Chandra Skinner.docx` using PowerShell/Python
2. Unzip `assets/MySeedBook Screenshot presentation.zip` to get screenshots
3. Copy Velvet Ladle screenshots into `assets/images/velvet-ladle/`
4. Copy MySeedBook screenshots into `assets/images/myseedbook/`

## Phase 2: Core Files
5. Create `assets/css/styles.css` — design system, shared nav/footer styles
6. Create `assets/js/main.js` — mobile nav toggle, smooth scroll

## Phase 3: Pages (can be built in parallel after Phase 2)
7. `index.html` — Hero + brand intro + app preview cards + nav to all pages
8. `about.html` — Professional PM resume page: career history, roles/titles, companies worked for, certifications, skills, education, contact — sourced from `assets/Chandra Skinner.docx`
9. `apps.html` — App cards with screenshots carousel, store badges, links to terms/privacy/delete-restore
10. `terms.html` — Terms of Service (covering both apps)
11. `privacy.html` — Privacy Policy (GDPR-friendly, covers both apps)
12. `delete-restore.html` — Step-by-step account management instructions

## Phase 4: README + Deployment Config
13. `README.md` — project description, pages, deployment instructions
14. `CNAME` file — www.chandraskinner.com for GitHub Pages custom domain

## Verification
1. Open each HTML page in browser and verify nav links work
2. Verify all app store links open correctly
3. Verify responsive layout on mobile viewport
4. Verify CNAME file is correct for GitHub Pages deployment
5. Check that images load from correct paths

## Decisions
- Static HTML only (no framework/build step) for simplicity and GH Pages compatibility
- Design mirrors the app's cream/navy/burgundy color palette
- Terms/Privacy pages will cover both Velvet Ladle and MySeedBook under "Chandra's Essentials"
- MySeedBook iOS shown as "Coming Soon" badge
- about.html = professional PM resume page (career history, certifications, companies, education)
- Resume content will be extracted from docx during implementation

Tip: To enable file editing tools in future chats so Copilot can create/move files directly, go to VS Code Settings → enable GitHub Copilot: Edit tools.