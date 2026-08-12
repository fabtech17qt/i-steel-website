# Content Gaps — iSteel Engineering Website

Review every item below with the client before launch. Each `[CONTENT NEEDED]` block in the code corresponds to an entry here.

---

## Critical (blocks launch)

- [ ] **iSteel logo SVG** — Currently using a text placeholder. Supply `/public/assets/logos/isteel-logo.svg`.
- [ ] **Office address** — The footer and Contact page show only "Doha, Qatar". Supply full street address for footer + Google Maps embed URL (`lib/content/company.ts → address`).
- [ ] **Email address** — Verify `info@i-steelgroup.com` is monitored. Update `lib/content/company.ts`.
- [ ] **Contact form backend** — Wire up `app/api/contact/route.ts` with Resend API key. Set `RESEND_API_KEY` environment variable on Vercel.
- [x] **Stats (homepage + about)** — Real numbers set: 5+ years experience, 52+ projects delivered, 45+ skilled workers, 3000+ tonnes fabricated annually. `lib/content/company.ts → stats`.

---

## High priority

- [ ] **Project case studies** — Currently 6 placeholder projects. Supply for each: name, client (with permission), sector, year, location, scope, description, and 2–4 photos. Update `lib/content/projects.ts`.
- [ ] **Certification badges** — Supply SVG logos for ISO 9001, ISO 14001, ISO 45001, ICV. Place in `/public/assets/logos/`. Update `lib/content/certifications.ts`.
- [ ] **Client appreciation letters** — Scan / photograph all letters. Add to `lib/content/certifications.ts` with client name, year, project.
- [ ] **Hero video (Envato)** — Source a cinematic B-roll of structural steel construction at golden hour. Max 3MB / 20s / muted. Place at `/public/assets/envato/hero-steel-construction.mp4`. Uncomment the `<video>` tag in `components/sections/Hero.tsx`.
- [ ] **Service photos** — Real photos (from WhatsApp/site) for each of the 12 services. Place at paths listed in `lib/content/services.ts → image`.
- [ ] **Project photos** — Real photos for each project. Place at paths in `lib/content/projects.ts → images`.

---

## Important

- [ ] **About page copy** — Current text is inferred. Client to review and approve.
- [ ] **Social media links** — Add real LinkedIn, Instagram, Facebook URLs to `lib/content/company.ts → social`.
- [ ] **Company profile PDF** — Place at `/public/assets/ISTEEL-Company-Profile.pdf` (or update path in `company.ts`).
- [ ] **Client logos for trust strip** — Get permission from Qatar Petroleum, Qatari Diar, etc. Place in `/public/assets/logos/`.
- [ ] **Service detail copy** — Review and expand `fullDescription` and `capabilities` for all 12 services in `lib/content/services.ts`.

---

## Before go-live

- [ ] Remove `noindex` from the live WordPress site before switching DNS.
- [ ] Verify old PDF URL redirects: `/wp-content/uploads/2025/06/ISTEEL-Company-Profile.pdf` → `/assets/ISTEEL-Company-Profile.pdf`.
- [ ] Set Vercel environment variables: `RESEND_API_KEY`, `NEXT_PUBLIC_SITE_URL`.
- [ ] Add `manifest.json`, favicon, and Apple touch icons to `/public/`.
- [ ] Create branded OG image (1200×630) at `/public/assets/og-image.jpg`.
- [ ] Google Maps embed URL for contact section.
- [ ] Privacy Policy and Terms pages (linked in footer).

---

## Sections removed (pending content)

- **Team section** — Removed. Real names + headshots required before it can be added back. Do NOT use placeholder names (Harrison Scott, William Hobbs, Alison White — these are template defaults from the old site).
- **Testimonials** — Removed. Real client quotes with name, title, company, and (ideally) logo permission required.
- **Blog / newsletter** — Removed. Requires 4+ real posts before restoring.

---

## LICENSES.md (Envato)

When Envato assets are added to `/public/assets/envato/`, create `/public/assets/envato/LICENSES.md` listing:
- File name
- Envato item ID
- License type (Extended / Regular)
- Domain licensed for
