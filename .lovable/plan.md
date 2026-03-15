

# Megsy AI Partner Platform — Complete Redesign Plan

## The Vision
Transform from a simple referral portal into a **full earning/work platform** matching megsyai.com's exact design language: massive bold italic typography, purple-pink gradients, orange CTA buttons, pure black background, NO icons anywhere.

## Phase 1: Design System Overhaul

**Typography**: Massive uppercase bold italic headings (like "DEPTH OF CREATION", "TRUSTED BY LEADING CREATORS"). Use CSS `font-style: italic` + `font-weight: 900` + `text-transform: uppercase`.

**Colors** (matching screenshots exactly):
- Background: `#000000` pure black
- Text: `#FFFFFF` white
- Gradient text: purple `#A855F7` → pink `#EC4899` 
- CTA buttons: orange `#F97316` → red `#EF4444` gradient
- Step card borders: teal, dark red, purple, dark green variations
- Muted text: `#6B7280`

**No icons anywhere** — pure typography-driven design.

**Logo**: Copy the uploaded purple logo to `src/assets/logo.png` and use it as the site logo.

## Phase 2: Landing Page (Complete Rebuild)

Matching megsyai.com style exactly with these sections:

1. **Navbar**: Logo left, links center (How it Works, Features, Calculator, FAQ), "Log in" + "Start Earning" (orange gradient) buttons right. Mobile: hamburger menu.

2. **Hero**: 
```text
EARN MONEY
WITH MEGSY
```
   "EARN MONEY" in white, "WITH MEGSY" in purple-pink gradient. Massive italic bold uppercase. Subtitle below. Two buttons: "Start Earning" (orange gradient) + "Learn More" (outline).

3. **How It Works** (matching "GET STARTED WITH MEGSY" style):
   - Giant italic heading with teal gradient text
   - 5 step cards with colored top borders and numbered (01-05)
   - Cards: dark background, colored number, bold title, description

4. **Earnings Calculator**: Interactive slider, monthly/yearly display

5. **Features Section**: Typography-only cards, no icons, bold titles

6. **Trust Section** (matching "TRUSTED BY LEADING CREATORS"):
   - Massive italic text, purple gradient on "LEADING CREATORS"
   - Subtitle + orange CTA button

7. **FAQ Section** (matching screenshots):
   - Giant "FAQS" heading with gradient on "QS"
   - Accordion items with dark borders

8. **Commission Info**: Clean text layout with perks list

9. **Footer** (matching megsyai.com exactly):
   - Social icons row (X, IG, YT, LI)
   - 4-column grid: Megsy description, Referral links, Platform links, Legal links
   - Giant "MEGSY" watermark in dark purple at bottom
   - Bottom bar with Terms | Privacy | Cookie + copyright

## Phase 3: Dashboard Pages Redesign

All dashboard pages get the same dark aesthetic with bold typography headings, no icons, gradient accents:

- **Overview**: Bold "OVERVIEW" heading, stat numbers with gradient text, clean cards
- **Referrals**: Dark table with hover states, gradient header text  
- **Payouts**: Clean withdrawal form, dark cards for balances
- **Settings**: Dark form inputs matching the theme

**Sidebar**: Dark, text-only navigation (no icons), logo at top, sign out at bottom.

## Phase 4: Referral System (Real Working Links)

The referral URL will point to the **main site**: `https://megsyai.com?ref={code}`

This means the main site's signup flow already handles `?ref=` parameter (based on the existing `referral_codes` and `referrals` tables in the database). The portal just needs to generate and display the correct URL.

## Phase 5: Platform Expansion (Beyond Referrals)

Add sections/pages to make this a "work platform":
- **Resources Hub**: Links to marketing materials, templates, social media post templates
- **Learning Center**: Tips and strategies for earning more
- **Performance Tiers**: Bronze/Silver/Gold/Platinum levels based on referral count
- **Leaderboard**: Top earners display
- **Marketing Tools**: Pre-made social posts, email templates, banner images

These will be content-driven pages (no new DB tables needed initially).

## Files to Create/Modify

**New:**
- `src/assets/logo.png` (copy uploaded logo)
- All `src/components/landing/` components (rewrite from scratch)
- `src/components/landing/FAQSection.tsx`
- `src/components/landing/ResourcesSection.tsx`
- `src/pages/Resources.tsx`

**Modified:**
- `src/index.css` — New design system
- `src/pages/Landing.tsx` — Complete rebuild
- `src/pages/Login.tsx` — Match dark theme
- `src/pages/Overview.tsx` — Redesign
- `src/pages/Referrals.tsx` — Redesign  
- `src/pages/Payouts.tsx` — Redesign
- `src/pages/Settings.tsx` — Redesign
- `src/components/layout/AppSidebar.tsx` — No icons, text-only
- `src/components/layout/DashboardLayout.tsx` — Dark theme
- `src/components/dashboard/*` — All redesigned
- `src/App.tsx` — Add new routes

**No database changes needed.**

## Implementation Note
This is a large redesign. I recommend implementing it in 2-3 messages:
1. First: Design system + Landing page + Login
2. Second: Dashboard pages + Sidebar
3. Third: Resources/Tools pages + Polish

