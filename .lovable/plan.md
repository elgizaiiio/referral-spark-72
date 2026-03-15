

# Megsy AI Referral Portal — Full Redesign Plan

## 1. Dark Theme (matching megsyai.com)

Redesign the entire color system to match the main site:
- **Background**: Pure black `#000000` / near-black `#0a0a0a`
- **Cards**: Dark gray `#111111` with subtle borders `#1a1a1a`
- **Text**: White `#ffffff` primary, `#888888` muted
- **Primary accent**: Purple gradient (from `#8B5CF6` to `#D946EF` — matching the purple-to-pink gradient seen on megsyai.com headings)
- **CTA buttons**: Orange-red gradient (`#F97316` to `#EF4444`) matching the "Start Creating" button
- **Success/Earnings**: Keep emerald `#10B981`
- **Font**: Keep Inter (matches megsyai.com)

Update `src/index.css` CSS variables and all component styles.

## 2. Landing Page (`/landing`)

A large, bold landing page accessible to everyone (not behind auth). Sections:

### Hero Section
- Bold typography: "EARN 20% ON EVERY REFERRAL" with purple-pink gradient text
- Subtitle: "Share Megsy AI. Earn commission on every subscription."
- CTA: "Start Earning" (gradient button) + "Learn More"
- Background: Pure black with subtle gradient glow

### How It Works (3 steps)
- Step cards with numbers (01, 02, 03) — same style as megsyai.com "GET STARTED" section
- 1: Share your unique link → 2: Friends sign up → 3: Earn 20% commission

### Earnings Calculator
- Interactive slider showing potential earnings based on referral count
- Visual display of monthly/yearly income potential

### Features Grid
- QR Code sharing, Social media sharing, Real-time tracking, Instant payouts
- Dark cards with colored borders (similar to megsyai.com step cards)

### Testimonials / Trust Section
- "TRUSTED BY LEADING CREATORS" heading (matching main site style)
- Stats: Total referrers, Total earned, etc.

### Pricing/Commission Info
- Clear breakdown of the 20% commission structure
- What counts (subscriptions, plans)

### CTA Footer
- Final call to action with gradient button
- Link to login/signup

### Footer
- Matching megsyai.com footer with social links (X, Instagram, YouTube, LinkedIn)
- Links to Terms, Privacy, main site

### Mobile vs Desktop
- **Desktop**: Multi-column grids, horizontal step cards, large hero text
- **Mobile**: Single column, stacked cards, smaller text, hamburger menu for nav

## 3. Navigation Changes

```text
Routes:
  /landing     → Landing Page (public, default for non-auth users)
  /login       → Login Page (dark themed)
  /             → Dashboard Overview (auth required)
  /referrals   → Referrals (auth required)
  /payouts     → Payouts (auth required)  
  /settings    → Settings (auth required)
```

- Add a top navigation bar on the landing page matching megsyai.com style (logo left, links center, CTA right)
- Redirect `/` to `/landing` if not logged in

## 4. Auth System

The current Supabase Auth (email/password) login works since it's the same Supabase project. Keep the existing `useAuth` hook. The user mentioned "Auth apps" — this likely means the existing login flow is sufficient. Restyle the login page to match the dark theme.

## 5. Dashboard Redesign (Dark Theme)

All existing dashboard pages (Overview, Referrals, Payouts, Settings) get dark theme:
- Dark sidebar with subtle borders
- Dark cards with glass-morphism effect
- Gradient accents on stat numbers
- Chart colors updated for dark background
- Tables with dark rows and hover states

## 6. Files to Create/Modify

**New files:**
- `src/pages/Landing.tsx` — Full landing page
- `src/components/landing/` — Hero, HowItWorks, Calculator, Features, Trust, CTAFooter, Footer, Navbar components

**Modified files:**
- `src/index.css` — Dark theme CSS variables
- `src/App.tsx` — Add landing route, redirect logic
- `src/pages/Login.tsx` — Dark theme restyle
- `src/components/layout/DashboardLayout.tsx` — Dark styling
- `src/components/layout/AppSidebar.tsx` — Dark sidebar
- `src/components/dashboard/*` — Dark theme all cards/charts
- `src/components/referrals/ReferralsTable.tsx` — Dark table
- `src/components/payouts/*` — Dark theme
- `src/components/settings/SettingsForm.tsx` — Dark theme
- `src/components/layout/AuthGuard.tsx` — Redirect to /landing instead of /login

**No database changes needed** — all existing tables remain untouched.

