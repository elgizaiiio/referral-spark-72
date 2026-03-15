

# Megsy AI Referral Portal — Updated Plan

## Key Change: Shared Backend Strategy

The Supabase backend is shared with the main Megsy AI site. The existing tables (`referrals`, `referral_codes`, `referral_earnings`, `withdrawal_requests`, `profiles`) already contain the referral data we need. The portal will **read from these existing tables** directly — no duplication needed.

For portal-specific features (click tracking, portal preferences), we create new tables with a `rp_` (referral portal) prefix.

## New Database Tables

Only 2 new tables needed:

```text
rp_referral_clicks          rp_portal_settings
├── id (uuid, PK)           ├── id (uuid, PK)
├── referral_code (text)    ├── user_id (uuid, unique)
├── ip_hash (text)          ├── payment_method (text)
├── user_agent (text)       ├── payment_details (text)
├── referrer_url (text)     ├── notify_on_signup (bool)
├── country (text)          ├── notify_on_earning (bool)
└── clicked_at (timestamptz)└── created_at / updated_at
```

**Existing tables used as-is:**
- `referral_codes` — user's unique codes
- `referrals` — referral records (referrer_id, referred_id, status)
- `referral_earnings` — 20% commission tracking
- `withdrawal_requests` — payout history
- `profiles` — user display info

## Open-Source Libraries

| Library | Purpose |
|---------|---------|
| **recharts** | Dashboard charts (earnings over time, referral trends) |
| **qrcode.react** | QR code generation for referral links |
| **react-share** | Social sharing buttons (WhatsApp, Twitter, Facebook, Telegram) |
| **@tanstack/react-table** | Advanced table with sorting, filtering, pagination |
| **date-fns** | Date formatting and relative time |

## Pages & Components

### Layout
- Sidebar (Shadcn Sidebar component) with 4 nav items
- Header with SidebarTrigger + user avatar
- Auth guard — redirects to main site login if not authenticated

### 1. Overview `/`
- Hero card: referral link + Copy button + QR code + social share buttons
- 4 stat cards from existing tables (clicks from `rp_referral_clicks`, signups from `referrals`, earnings from `referral_earnings`)
- Recharts area chart: earnings over last 30 days
- Recent referrals mini-table (last 5)

### 2. Referrals `/referrals`
- TanStack table with all referrals from `referrals` table
- Columns: referred user email (from profiles join), date, status badge
- Filter by status, search by email

### 3. Payouts `/payouts`
- Summary cards: available balance, total earned, total withdrawn
- Withdrawal request form (writes to `withdrawal_requests`)
- Payment history table from `withdrawal_requests`

### 4. Settings `/settings`
- Payment method config (saved to `rp_portal_settings`)
- Notification preferences
- Referral code display/regeneration

### Auth
- Login page with email/password using existing Supabase Auth
- "Don't have an account? Sign up on Megsy AI" link to main site
- AuthProvider context wrapping the app

## Design System
- Primary: Electric Indigo `hsl(239 84% 67%)` → `#6366F1`
- Success/Earnings: Emerald `hsl(160 84% 39%)` → `#10B981`
- Background: Slate 50 `#F8FAFC`
- Light mode only
- Inter font

## File Structure
```text
src/
├── components/
│   ├── layout/
│   │   ├── AppSidebar.tsx
│   │   ├── DashboardLayout.tsx
│   │   └── AuthGuard.tsx
│   ├── dashboard/
│   │   ├── ReferralLinkCard.tsx
│   │   ├── StatCards.tsx
│   │   ├── EarningsChart.tsx
│   │   └── RecentReferrals.tsx
│   ├── referrals/
│   │   └── ReferralsTable.tsx
│   ├── payouts/
│   │   ├── PayoutSummary.tsx
│   │   ├── WithdrawForm.tsx
│   │   └── PayoutHistory.tsx
│   └── settings/
│       └── SettingsForm.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useReferralStats.ts
│   └── useEarnings.ts
├── pages/
│   ├── Login.tsx
│   ├── Overview.tsx
│   ├── Referrals.tsx
│   ├── Payouts.tsx
│   └── Settings.tsx
```

## RLS Policies for New Tables
- `rp_referral_clicks`: INSERT for `anon` (public tracking), SELECT for authenticated where referral_code belongs to user
- `rp_portal_settings`: Full CRUD for authenticated users on own rows only

