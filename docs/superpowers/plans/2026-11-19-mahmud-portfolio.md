# A.F.M Mahmud Ullah — Futuristic Portfolio Implementation Plan (React 19 + Vite + TypeScript)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an Awwwards-caliber, futuristic, ultra-smooth web developer portfolio for **A.F.M Mahmud Ullah** (Full-Stack Web Developer & Systems Architect) using React 19, TypeScript, Vite, Tailwind CSS, Lenis, GSAP, and Framer Motion, ready for direct Vercel deployment.

**Architecture:** Pure frontend Single Page Application (Vite + React 19 + TypeScript) designed with zero backend dependencies for instant Vercel/edge deployment. Structured TypeScript data models (`src/data/projects.ts`, `src/data/experience.ts`, `src/data/skills.ts`) store rich, authentic project details and career milestones. Client-side contact handling with real-time validation, Web3Forms integration, and toast feedback. 60fps kinetic dark-mode UI with Lenis smooth scrolling, GSAP ScrollTrigger timeline choreography, Framer Motion tactile micro-interactions, Doppelrand double-bezel bento cards, and interactive 60fps canvas.

**Tech Stack:**
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS, custom obsidian color tokens (`#050508`, `#0C0C12`, `#151520`), hairline glassmorphism (`border-white/10`)
- **Smooth Scrolling:** `lenis` (synced cleanly with GSAP ticker)
- **Animation & Motion:** `gsap` + `ScrollTrigger` (kinetic reveals, scroll progress, parallax) + `framer-motion` (magnetic buttons, slide-over drawer modal, tactile hover micro-physics)
- **Visuals & Icons:** `lucide-react` (standard 1.5 stroke), interactive Canvas ambient dot-grid with cursor spotlight
- **Deployment:** Vercel (static single-page app, fast CDN edge delivery)

---

## Design Read & Dial Configuration (per `design-taste-frontend` & `high-end-visual-design`)

- **Design Read:** *Elite Full-Stack Developer & Systems Architect portfolio for A.F.M Mahmud Ullah, targeting high-end tech clients, hiring managers, and engineering leaders, with an obsidian/void dark luxury engineering visual language, leaning toward a custom Doppelrand (double-bezel) bento system + Syne/Geist typography + 60fps GSAP/Lenis choreography.*
- **Dial Values:**
  - `DESIGN_VARIANCE: 8` — Asymmetrical bento grid, dynamic card spans, squircle geometry (`rounded-[2rem]`), offset spatial rhythm.
  - `MOTION_INTENSITY: 8` — Lenis smooth scroll, magnetic cursor with inertia, kinetic text reveals, scroll-linked glowing SVG timeline, slide-over case-study modal.
  - `VISUAL_DENSITY: 4` — Generous macro-whitespace (`py-28` to `py-36`), razor-sharp contrast, restrained single electric cyan/indigo accent.

---

## Global Constraints

- **Theme Lock:** 100% deep dark mode (`#050508` root, `#0C0C12` elevated surfaces, `#151520` cards). No inverted light sections.
- **Eyebrow Restraint:** Max 1 eyebrow per 3 sections. The headline carries the weight.
- **Anti-Default Discipline:** No generic AI purple gradients, no fake placeholder metrics, no div-based fake screenshots.
- **Button Architecture:** Doppelrand / nested button-in-button trailing icon (`rounded-full` pill with inner circle arrow).
- **Double-Bezel Architecture:** Major cards use outer shell (`bg-white/5 border border-white/10 p-2 rounded-[2rem]`) + inner core (`bg-[#0C0C12] rounded-[calc(2rem-0.5rem)]`).
- **Performance Guardrails:** GPU-accelerated transforms (`transform`, `opacity`) only; zero layout-thrashing scroll listeners. `backdrop-blur` restricted to fixed/sticky elements (nav, modal).
- **Reduced Motion Support:** All GSAP timelines and Motion hooks gracefully disable when `prefers-reduced-motion` is detected.
- **Responsive Collapse:** Mobile views (<768px) cleanly stack into single columns with touch-friendly 48px+ targets, magnetic cursor auto-disabled on touch devices.

---

## Directory & Component Structure

```
Portfolio/
├── index.html                           // HTML entry with Syne, Space Grotesk, Geist & JetBrains Mono fonts
├── vite.config.ts                       // Vite configuration with React plugin
├── tailwind.config.js                   // Obsidian theme tokens, glassmorphism utilities
├── tsconfig.json                        // Strict TypeScript configuration
├── package.json                         // Dependencies: react 19, vite, lenis, gsap, framer-motion, lucide-react
├── vercel.json                          // Vercel deployment configuration
├── src/
│   ├── main.tsx                         // React DOM root render
│   ├── App.tsx                          // Main portfolio assembly
│   ├── index.css                        // Tailwind directives, custom scrollbars, typography
│   ├── types/
│   │   └── portfolio.ts                 // Project, Experience, Skill, ContactFormData interfaces
│   ├── data/
│   │   ├── projects.ts                  // Authentic data for all 7 key projects
│   │   ├── experience.ts                // SK IT Centre, Marketorr, IUB Computer Science
│   │   └── skills.ts                    // Frontend, Backend, Tools & Systems categories
│   ├── hooks/
│   │   ├── useLenis.ts                  // Lenis smooth scroll + GSAP ticker synchronization
│   │   ├── useMagnetic.ts               // Magnetic physics for buttons/cursor
│   │   └── useReducedMotion.ts          // Accessibility prefers-reduced-motion hook
│   ├── layouts/
│   │   └── PortfolioLayout.tsx          // Root shell: CustomCursor, NoiseOverlay, ToastProvider
│   └── components/
│       ├── common/
│       │   ├── CustomCursor.tsx         // Trailing magnetic dot + circle (desktop only)
│       │   ├── DoubleBezelCard.tsx      // Doppelrand outer shell + inner core container
│       │   ├── MagneticButton.tsx       // Button-in-button trailing icon pill
│       │   ├── NoiseOverlay.tsx         // Fixed pointer-events-none film grain
│       │   ├── SectionHeading.tsx       // Balanced typography + category mark
│       │   └── Toast.tsx                // Feedback for clipboard & form submissions
│       ├── canvas/
│       │   └── AmbientGridCanvas.tsx    // 60fps lightweight interactive dot matrix with spotlight
│       ├── navigation/
│       │   ├── FloatingNav.tsx          // Floating detached glass pill navbar with magnetic links
│       │   └── MobileMenu.tsx           // Fluid hamburger morph & fullscreen glass overlay
│       ├── hero/
│       │   ├── HeroSection.tsx          // Status badge, kinetic H1, tagline, dual magnetic CTAs
│       │   └── StatusIndicator.tsx      // Pulsing radar dot: "Available for Select Projects"
│       ├── about/
│       │   ├── BentoAbout.tsx           // 4-card asymmetric double-bezel bento grid
│       │   ├── LiveDhakaClock.tsx       // Real-time running BST clock (UTC+6)
│       │   └── PhilosophyCard.tsx       // Edward Teller quote with glassmorphic backing
│       ├── stack/
│       │   ├── TechArsenal.tsx          // Dual-direction kinetic marquee & categorized filter grid
│       │   └── TechBadge.tsx            // Categorized technology pill
│       ├── projects/
│       │   ├── ProjectsShowcase.tsx     // Case-study card grid with hover tilt & status tags
│       │   ├── ProjectCard.tsx          // Double-bezel card with private/enterprise badge
│       │   └── ProjectModal.tsx         // Accessible slide-over drawer with architecture deep-dive
│       ├── timeline/
│       │   ├── ExperienceTimeline.tsx   // ScrollTrigger-scrubbed glowing vertical timeline
│       │   └── TimelineItem.tsx         // SK IT Centre, Marketorr, IUB CSE
│       └── contact/
│           ├── ContactSection.tsx       // High-impact CTA, copy-email button, live form
│           ├── ContactForm.tsx          // Client-side validated form with Web3Forms/feedback
│           └── Footer.tsx               // Oversized kinetic display typography & Back to Top button
```

---

## Execution Tasks

- [ ] **Task 1: Project Scaffolding & Core Configuration**
  Initialize Vite + React 19 + TypeScript, configure Tailwind CSS with custom obsidian palette, Syne/Geist/JetBrains Mono typography, hairline borders, and install `lenis`, `gsap`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- [ ] **Task 2: Typed Data Stores & Interfaces**
  Create `src/types/portfolio.ts`, `src/data/projects.ts`, `src/data/experience.ts`, and `src/data/skills.ts` with real data for Mahmud Ullah's 7 key projects, experience, and technical arsenal.
- [ ] **Task 3: Layout Shell, Lenis Smooth Scroll & Ambient Canvas**
  Implement `useLenis.ts` (synced to GSAP ticker), `CustomCursor.tsx`, `NoiseOverlay.tsx`, `AmbientGridCanvas.tsx`, and `PortfolioLayout.tsx`.
- [ ] **Task 4: Floating Glass Navigation & Mobile Morphing Menu**
  Implement `FloatingNav.tsx` with magnetic links, `MobileMenu.tsx` with morphing hamburger icon, and `MagneticButton.tsx`.
- [ ] **Task 5: Hero Section with Kinetic Typography & Parallax Elements**
  Implement `HeroSection.tsx` with pulsing status badge, kinetic headline, tagline, and dual magnetic CTAs.
- [ ] **Task 6: Bento Grid — About & Engineering Philosophy**
  Implement `BentoAbout.tsx`, `LiveDhakaClock.tsx` (live BST time UTC+6), `PhilosophyCard.tsx` (Teller quote), and `DoubleBezelCard.tsx`.
- [ ] **Task 7: Technical Arsenal (Interactive Stack Showcase)**
  Implement `TechArsenal.tsx` with smooth dual-direction marquee and categorized interactive grid.
- [ ] **Task 8: Featured Projects Showcase & Slide-Over Case-Study Drawer**
  Implement `ProjectsShowcase.tsx`, `ProjectCard.tsx` (with private/enterprise badges and hover previews), and `ProjectModal.tsx` (deep-dive slide-over modal).
- [ ] **Task 9: Scroll-Linked Experience & Education Timeline**
  Implement `ExperienceTimeline.tsx` with vertical glowing SVG progress line filling on scroll, and `TimelineItem.tsx`.
- [ ] **Task 10: Contact Section, Client Form & Kinetic Footer**
  Implement `ContactSection.tsx`, `ContactForm.tsx` (with instant copy-to-clipboard email and client-side form handler), and `Footer.tsx`.
- [ ] **Task 11: Production Build, Browser Verification & Quality Audit**
  Verify live dev server across desktop (`1440px`) and mobile (`390px`) viewports, audit performance, and run `npm run build` with zero errors.
