# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start the dev server (shows QR code for Expo Go)
npx expo start

# Start with tunnel (use if phone and PC are on different networks)
npx expo start --tunnel

# Target a specific platform
npx expo start --android
npx expo start --ios

# Type-check the project (no test suite exists yet)
npx tsc --noEmit
```

There is no test suite configured. TypeScript strict mode is on — run `npx tsc --noEmit` to catch type errors before committing.

## Architecture

**Framework:** React Native + Expo SDK 54 (managed workflow), TypeScript strict, React 19, React Native 0.81 (New Architecture enabled).

**Entry point:** `index.ts` → `App.tsx` — loads Google Fonts (`PlayfairDisplay_700Bold`, `PlayfairDisplay_700Bold_Italic`, `Inter_400Regular`, `Inter_500Medium`, `Inter_700Bold`) via `useFonts`, shows a cream/gold spinner until fonts resolve, then renders `RootNavigator`.

**Navigation (`src/navigation/RootNavigator.tsx`):**
- Stack navigator wraps everything
- First screen: `WelcomeScreen` (uses `navigation.replace('MainTabs')` so back doesn't return here)
- `MainTabs`: floating charcoal pill bottom tab navigator — 5 tabs: Home, Services, Gallery, About, Contact
- Stack also contains `MembershipScreen` and `BookingScreen` (pushed from Home/Services, not tabs)

**Data (`src/data/`):** All static, no backend. Three files:
- `services.ts` — 12 services typed as `Service`, with `ServiceCategory` union (`'Haarschnitt' | 'Bart' | 'Kombi' | 'Add-ons'`)
- `team.ts` — 3 placeholder team members
- `membership.ts` — 3 membership plans (`MembershipPlan`), Gold is `highlighted: true`

**Theme (`src/theme/index.ts`):** Single source of truth for all design tokens — `colors`, `typography`, `spacing`, `borderRadius`, `shadows`. Always import from here; never hardcode color hex values in screen files.

**Components (`src/components/`):** Reusable primitives:
- `ImagePlaceholder` — warm grey box with gold border + scissors icon. Accepts `width`, `height`, `circular?`, `style?`. Used everywhere real images will go.
- `BookButton` — gold pill "Jetzt Buchen" button with `activeOpacity={1}` and **no `onPress`** (intentionally dead for V1).
- `ServiceCard` — horizontal list card (name + description + gold price).
- `MembershipCard` — full plan card with perks list and dead "Auswählen" button.
- `TeamMemberCard` — vertical card with circular placeholder + name + role.

## Design System

**Palette:** cream `#F5F0E8` (bg), charcoal `#1A1A1A` (text/buttons), gold `#C9A84C` (accent/active), warmGrey `#E8E2D9` (cards/placeholders), mutedText `#6B6258`, white `#FFFFFF`.

**Fonts:** Playfair Display (headings/display — use `fontFamily: 'PlayfairDisplay_700Bold'`), Inter (body/labels/prices). Fonts are loaded in `App.tsx`; they are available on all screens after mount.

**Floating nav:** The bottom tab bar is `position: 'absolute'` with `bottom: 20`, so all scrollable screen content needs `paddingBottom: 100` at the bottom to avoid being hidden behind the nav.

**Images:** All images are currently `ImagePlaceholder` components. Real photos go in `assets/`. Already present: `assets/logo.png` (EB monogram, use `tintColor` to recolor), `assets/photo.png` (B&W barbershop shot, used on WelcomeScreen).

**SafeAreaView:** Always import from `react-native-safe-area-context`, never from `react-native`. Tab screens with a navigation header use `edges={['bottom']}`; screens without a header use `edges={['top']}` or both.

## V1 Constraints

This is a **frontend-only** app — no backend, no API calls, no auth. All content is static German copy. The "Jetzt Buchen" button intentionally does nothing. Phase 2 will add real booking (SimplyBook.it integration) and Phase 3 will add a loyalty/membership payment system (Stripe).

## GitHub

Repo: `https://github.com/d3f4lt72/edos-barbers`
Active branch: `feat/v1-frontend`
Account: `d3f4lt72` (authenticated via `gh` CLI)
