# Edos Barbers — Mobile App Blueprint
**Project:** Edos Barbers Official App  
**Location:** Hauptstraße 3, 1110 Simmering, Vienna, Austria  
**Brand Concept:** LA Vibes Premium Barbershop  
**Document Type:** Product Concept & Blueprint  
**Version:** 1.0  
**Date:** April 2026  

---

## 1. Executive Summary

Edos Barbers is a premium barbershop based in Vienna's Simmering district, known for its LA-inspired aesthetic, high-quality cuts, beard styling, and grooming services. This document outlines the full concept and technical blueprint for the **Edos Barbers Mobile App** — a client-facing application designed to showcase the brand, present services and pricing, display portfolio work, and provide essential business information.

This first phase focuses on the **client-side presentation app**. A second phase (documented separately) will cover the full online booking system with admin panel, digital invoicing, and barber management.

---

## 2. Project Goals

| Goal | Description |
|------|-------------|
| Brand Presence | Give Edos Barbers a premium digital identity on mobile |
| Service Discovery | Allow clients to browse all services and pricing clearly |
| Portfolio Showcase | Display haircut and styling work to attract new clients |
| Easy Contact | One-tap access to location, phone, and social media |
| Booking Entry Point | Link to the future integrated booking system (Phase 2) |
| Retention | Keep existing clients engaged with the Edos brand |

---

## 3. Target Audience

- **Primary:** Men aged 18–40 in Vienna, particularly in and around Simmering (1110)
- **Secondary:** Walk-in clients who want to learn more before or after their visit
- **Tertiary:** Tourists and newcomers to Vienna looking for a premium barbershop
- **Language:** German primary, English secondary (bilingual app)

---

## 4. App Platform & Technology

| Item | Decision |
|------|----------|
| Platform | iOS & Android (cross-platform) |
| Framework | React Native (Expo) — single codebase for both platforms |
| Design Language | Dark luxury theme — black, gold, and off-white |
| Typography | Bold display font + clean sans-serif (e.g., Playfair Display + Inter) |
| State Management | Zustand or React Context |
| Navigation | React Navigation (Bottom Tab + Stack) |
| Backend (Phase 1) | Static / CMS (e.g., Sanity.io or Contentful for portfolio updates) |
| Hosting | Expo EAS Build + App Store / Google Play |

---

## 5. App Structure & Navigation

```
App
├── Splash Screen (Edos Logo Animation)
├── Home
├── Services & Pricing
├── Portfolio / Gallery
├── Membership / Subscription        ← NEW
├── About & Team
├── Contact & Location
└── Book Now (→ Phase 2 Booking System)
```

### 5.1 Bottom Navigation Bar
The app uses a fixed bottom navigation bar with 5 tabs:

| Tab | Icon | Screen |
|-----|------|--------|
| Home | 🏠 | Home Feed |
| Services | ✂️ | Services & Pricing |
| Gallery | 🖼️ | Portfolio |
| Members | 👑 | Membership / Subscription |
| Contact | 📍 | Contact & Location |

> *About & Team is accessible via the Home screen or a hamburger menu, keeping the bottom nav focused on the most-used screens.*

---

## 6. Screen-by-Screen Breakdown

---

### 6.1 Splash Screen
- Full-screen display of the Edos Barbers logo
- Dark background with subtle gold shimmer animation
- Transitions to Home after ~2 seconds

---

### 6.2 Home Screen

**Purpose:** First impression — brand energy, quick access to key actions

**Elements:**
- Hero banner (looping video or high-quality photo — LA Vibes aesthetic)
- Shop tagline: *"Premium Cuts | Beard | Style — Vienna's Finest"*
- Quick-action buttons:
  - **Book Appointment** (primary CTA — gold button)
  - **See Our Work** (links to Portfolio)
  - **Become a Member** (secondary CTA — links to Membership screen)
- "What's New" section (latest portfolio post or special offer)
- Instagram feed strip (last 6 posts, pulls from @edosbarbers)
- Shop hours widget (Today's hours highlighted)

---

### 6.3 Services & Pricing Screen

**Purpose:** Full transparency on all offered services and their prices

**Layout:** Categorized list with expandable cards

**Service Categories:**

#### ✂️ Haircuts
| Service | Description | Price |
|---------|-------------|-------|
| Classic Cut | Traditional scissor or clipper cut | €25 |
| Fade | Skin/low/mid/high fade | €28 |
| Textured Cut | Crop, French crop, textured top | €30 |
| Kids Cut | Under 12 years | €18 |

#### 🪒 Beard Services
| Service | Description | Price |
|---------|-------------|-------|
| Beard Trim | Shape and clean up | €15 |
| Beard Lineup | Sharp edge definition | €12 |
| Full Beard Styling | Wash, condition, shape, oil | €22 |
| Hot Towel Shave | Classic straight razor shave | €30 |

#### 💈 Combo Packages
| Service | Description | Price |
|---------|-------------|-------|
| Cut + Beard | Haircut and full beard service | €40 |
| The Full Package | Cut + Beard + Hot Towel + Hair Product | €55 |

#### 💇 Styling Add-ons
| Service | Description | Price |
|---------|-------------|-------|
| Hair Wash & Blow Dry | Included in some packages | €10 |
| Hair Color / Toning | Price on consultation | from €35 |
| Scalp Treatment | Conditioning treatment | €15 |

> *Note: Prices are editable via CMS — no app update required to change them.*

**UI Details:**
- Each service card shows: name, short description, price, estimated duration
- "Add to Booking" button on each card (Phase 2 integration)
- Search/filter bar at the top

---

### 6.4 Portfolio / Gallery Screen

**Purpose:** Showcase the quality and range of Edos Barbers' work

**Layout:**
- Masonry or 3-column grid of photos
- Filter tabs: All | Haircuts | Fades | Beards | Transformations
- Tap any photo → full-screen view with swipe navigation
- Each photo optionally tagged with: barber name, service type
- "Follow us on Instagram" CTA at the bottom

**Content Source:**
- Photos managed via CMS or synced from Instagram (via Instagram Basic Display API)
- Admin can add/remove portfolio photos without app update

---

### 6.5 About & Team Screen

**Purpose:** Build trust and personal connection with the brand

**Sections:**

**Our Story**
> Short paragraph about Edos Barbers — the LA Vibes concept, how it started in Vienna's Simmering district, the passion for premium grooming.

**Meet the Team**
- Barber profile cards (photo, name, specialty, years of experience)
- Each card is tappable → short bio page

**Our Values**
- Precision. Style. Confidence.
- Icons with 3–4 core brand values

**Certifications / Awards** *(if applicable)*

---

### 6.6 Contact & Location Screen

**Purpose:** Make it effortless for clients to reach or find the shop

**Elements:**

| Element | Detail |
|---------|--------|
| Address | Hauptstraße 3, 1110 Wien (Simmering) |
| Map | Embedded interactive map (tap → opens Google Maps / Apple Maps) |
| Phone | Click-to-call button |
| Email | Click-to-email button |
| Instagram | Deep-link to @edosbarbers |
| Opening Hours | Full weekly schedule with today highlighted |
| Walk-ins Welcome | Badge/notice shown on the screen |

**Opening Hours Display (example):**
```
Monday     09:00 – 20:00
Tuesday    09:00 – 20:00
Wednesday  09:00 – 20:00
Thursday   09:00 – 20:00
Friday     09:00 – 20:00
Saturday   09:00 – 18:00
Sunday     Closed
```

---

### 6.7 Membership / Subscription Screen

**Purpose:** Offer loyal clients exclusive membership plans with discounts and perks, building long-term retention and predictable revenue for Edos Barbers.

---

#### Concept Overview

Clients can subscribe to one of three membership plans. Each plan unlocks percentage discounts on haircuts and a set of complimentary or discounted add-on services. The membership is tied to the client's account, verified automatically at check-in via the app or a digital member card (QR code).

---

#### 💳 Membership Plans

---

##### 🥈 Silver Plan — 3 Months
**Price: €69 / 3 months** *(~€23/month)*

| Perk | Detail |
|------|--------|
| Haircut Discount | 10% off every haircut |
| Beard Trim | 1× free beard trim per month |
| Priority Booking | Skip the waitlist — book up to 7 days in advance |
| Welcome Gift | Free hair product sample on first visit |
| Member Badge | Silver badge displayed in app profile |

> *Best for clients who visit once a month and want to save on regulars.*

---

##### 🥇 Gold Plan — 6 Months
**Price: €119 / 6 months** *(~€20/month)*

| Perk | Detail |
|------|--------|
| Haircut Discount | 15% off every haircut |
| Beard Trim | 1× free beard trim per month |
| Hair Wash | 1× free hair wash & blow dry per month |
| Priority Booking | Book up to 10 days in advance |
| Birthday Bonus | Free beard lineup on your birthday month |
| Member Badge | Gold badge displayed in app profile |
| Loyalty Points | Earn 1.5× points per visit (Phase 3) |

> *Best for regular monthly clients who want the full grooming experience.*

---

##### 💎 Diamond Plan — 12 Months
**Price: €199 / 12 months** *(~€16.60/month)*

| Perk | Detail |
|------|--------|
| Haircut Discount | 20% off every haircut |
| Beard Service | 1× free full beard styling per month |
| Hair Wash | 1× free hair wash & blow dry per month |
| Scalp Treatment | 1× free scalp treatment per quarter |
| Priority Booking | VIP booking — always first slot available |
| Dedicated Barber | Request your preferred barber, guaranteed |
| Birthday Bonus | Free haircut on your birthday month |
| Exclusive Offers | Access to members-only seasonal promotions |
| Member Badge | Diamond badge + special profile frame in app |
| Loyalty Points | Earn 2× points per visit (Phase 3) |

> *Best for frequent clients who see Edos Barbers as their permanent grooming home.*

---

#### Plan Comparison Table

| Feature | 🥈 Silver (3M) | 🥇 Gold (6M) | 💎 Diamond (12M) |
|---------|--------------|-------------|----------------|
| Price | €69 | €119 | €199 |
| Haircut Discount | 10% | 15% | 20% |
| Free Beard Trim | 1×/month | 1×/month | — |
| Free Beard Styling | — | — | 1×/month |
| Free Hair Wash | — | 1×/month | 1×/month |
| Free Scalp Treatment | — | — | 1×/quarter |
| Priority Booking | 7 days | 10 days | VIP always |
| Birthday Perk | — | Free Lineup | Free Haircut |
| Dedicated Barber | — | — | ✅ |
| Exclusive Offers | — | — | ✅ |
| Loyalty Multiplier | 1× | 1.5× | 2× |

---

#### 6.7.1 Membership Screen UI

**Layout:**

1. **Header** — "Edos Members Club" with a premium badge graphic
2. **Tagline** — *"Invest in your style. Save every visit."*
3. **Plan Toggle** — horizontal pill selector: `3 Months | 6 Months | 12 Months`
4. **Plan Card** — animated card showing the selected plan's perks and price
5. **Savings Calculator** — *"If you visit 2× per month, you save approx. €X over your plan period"*
6. **Subscribe Button** — gold CTA: "Activate My Membership"
7. **Active Membership View** (if already subscribed):
   - Member badge + plan name
   - Days remaining in plan + expiry date
   - Monthly perks tracker (e.g., "Beard Trim: ✅ Used | Hair Wash: ⬜ Available")
   - QR Code for in-shop verification
   - "Upgrade Plan" button (if on Silver or Gold)

---

#### 6.7.2 Digital Member Card

Every subscriber receives a digital member card inside the app:

- Displays: client name, plan tier, member since date, expiry date
- **QR Code** that the barber scans at the shop to verify membership and apply discounts automatically
- Card design follows the brand color for each tier:
  - Silver → metallic silver gradient
  - Gold → warm gold gradient
  - Diamond → deep dark blue + diamond shimmer

---

#### 6.7.3 Payment & Management

| Feature | Detail |
|---------|--------|
| Payment Methods | Credit/Debit card, Apple Pay, Google Pay |
| Auto-Renewal | Optional — client can toggle on/off |
| Cancellation | Allowed, membership active until end of paid period |
| Upgrade | Can upgrade mid-plan — difference prorated |
| Refund Policy | No refund after activation (displayed clearly before purchase) |
| Receipts | Digital receipt sent to email on purchase |

---

#### 6.7.4 Admin Side (Phase 2 Integration)

- Admin panel shows a list of all active members with tier, expiry, and usage stats
- Barber at check-in scans the client's QR code → app shows their plan, available perks for this month, and automatic discount applied to the booking invoice (Rechnung)
- Perks reset on the 1st of each month
- Admin can manually gift or extend a membership

---

### 6.8 Book Now (Phase 2 Entry Point)

In Phase 1, this button links to the existing SimplyBook.it page.  
In Phase 2, this becomes the full integrated booking flow with:
- Real-time availability calendar
- Service selection with automatic price calculation
- Admin accept/decline system
- Barber assignment
- Digital invoice generation (Rechnung)
- Booking history for returning clients

> See **BOOKING_SYSTEM_BLUEPRINT.md** for the Phase 2 detailed spec.

---

## 7. Design System

### 7.1 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Midnight Black | `#0A0A0A` | Primary background |
| Luxury Gold | `#C9A84C` | CTAs, highlights, icons |
| Off White | `#F5F0E8` | Primary text |
| Warm Grey | `#2A2A2A` | Cards, secondary backgrounds |
| Accent Red | `#8B1A1A` | Alerts, badges (used sparingly) |

### 7.2 Typography

| Role | Font | Weight |
|------|------|--------|
| Display / Hero | Playfair Display | Bold / Italic |
| Headings | Inter | SemiBold (600) |
| Body Text | Inter | Regular (400) |
| Prices / Numbers | Inter | Bold (700) |
| Labels | Inter | Medium (500) |

### 7.3 UI Components

- **Cards:** Rounded corners (12px), dark background, subtle gold border on hover/active
- **Buttons:** 
  - Primary: Gold background, black text, full-width
  - Secondary: Transparent with gold border
- **Icons:** Feather Icons or Phosphor Icons (clean, minimal)
- **Spacing:** 8px base grid system
- **Animations:** Subtle fade-in on scroll, micro-interactions on button press

---

## 8. Content Management

To allow Edos Barbers to update content without requiring a new app release:

| Content Type | Managed Via |
|--------------|-------------|
| Service names & prices | CMS (Sanity.io recommended) |
| Portfolio photos | CMS or Instagram sync |
| Team profiles | CMS |
| Opening hours | CMS |
| Promotions / offers | CMS |
| Contact info | CMS |

The CMS has a simple web dashboard that any admin can access from a phone or computer.

---

## 9. App Store Presence

### App Name
**Edos Barbers**

### Short Description
*Vienna's Premium Barbershop — Services, Portfolio & Booking*

### Keywords
barbershop vienna, haircut wien, premium barber, beard styling, simmering barber, LA barber vienna, fade haircut

### App Icon
- Dark background with stylized scissors or "E" monogram in gold
- Works at all sizes (1024x1024 master)

### Screenshots (for App Store)
1. Home screen — brand hero
2. Services & pricing list
3. Portfolio gallery
4. Contact & map
5. Booking screen (Phase 2)

---

## 10. Phase Roadmap

| Phase | Scope | Timeline |
|-------|-------|----------|
| **Phase 1** | Presentation app — Home, Services, Portfolio, About, Contact, Membership screen (view only) | 4–6 weeks |
| **Phase 2** | Integrated booking system + Membership payments + admin panel + Rechnung | 8–12 weeks |
| **Phase 3** | Loyalty points system, push notifications, repeat client profiles, member referral program | TBD |

---

## 11. Success Metrics

| Metric | Target (3 months post-launch) |
|--------|-------------------------------|
| App Downloads | 500+ |
| Monthly Active Users | 200+ |
| Portfolio views per session | 3+ screens |
| Contact tap-throughs | 50+ per month |
| Booking conversions (Phase 2) | 30% of app sessions |

---

## 12. Technical Requirements Summary

| Requirement | Detail |
|-------------|--------|
| Minimum iOS | iOS 14+ |
| Minimum Android | Android 8.0 (API 26)+ |
| Internet | Required for portfolio, map, booking |
| Offline | Basic info (address, hours, static services) works offline |
| Permissions | Camera (optional, for profile photo), Location (for map directions) |
| App Size | Target under 30MB |
| Accessibility | Minimum AA contrast, scalable font support |

---

## 13. Deliverables Checklist

- [ ] Wireframes (low-fidelity, all screens)
- [ ] UI Design mockups (high-fidelity, Figma)
- [ ] Design system / component library
- [ ] React Native app (iOS + Android)
- [ ] CMS setup and content entry
- [ ] Membership screen UI (plan cards, savings calculator, member card)
- [ ] Payment integration (Stripe or similar) for membership purchases
- [ ] QR code generation for digital member cards
- [ ] App Store & Google Play submission
- [ ] App Store screenshots & description
- [ ] Admin guide for CMS usage
- [ ] Membership plan content finalized by client (prices, perks)
- [ ] Phase 2 booking system spec document

---

## 14. Notes & Recommendations

1. **Brand Photography:** High-quality photos are critical for the portfolio and hero sections. A professional photo session of the shop interior and team is strongly recommended before launch.

2. **Instagram Integration:** Edos Barbers already has an active Instagram (@edosbarbers, 1,202 followers). Syncing the portfolio section with Instagram reduces double-posting effort.

3. **German/English:** Given Vienna's diverse population, the app should offer both German and English — German as default, English toggled via settings.

4. **SimplyBook.it Migration:** In Phase 2, the existing SimplyBook.it system should be fully replaced. Client data and booking history should be exported and migrated.

5. **Barber Assignment (Phase 2):** When the admin assigns a barber to a booking, that barber should receive a push notification on their own device.

6. **Membership Plan Finalization:** The plan prices, perks, and tier names in this document are placeholders based on best practice for a premium Vienna barbershop. Edos Barbers should review and update all values before development begins — no code changes are needed as these are managed via CMS.

7. **Payment Provider:** Stripe is recommended for membership payment processing — it supports Apple Pay, Google Pay, card payments, and automatic renewal billing. Stripe is fully available in Austria and compliant with EU regulations (SCA/PSD2).

8. **Legal (Österreich):** Membership subscriptions sold in Austria require a clear cancellation/refund policy and must comply with the Konsumentenschutzgesetz (KSchG). A lawyer should review the terms before launch.

---

*Document prepared as part of the Edos Barbers digital transformation project.*  
*Next document: BOOKING_SYSTEM_BLUEPRINT.md (Phase 2)*
