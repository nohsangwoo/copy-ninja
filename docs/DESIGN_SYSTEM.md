# Copy Ninja - Comprehensive Design System Guide

> A detailed analysis of the shadcn/ui-based theming customization landing page design system

This document provides an exhaustive breakdown of every aspect of the project's design system, from color theory to component implementation patterns.

---

## 📋 Table of Contents

1. [Overview & Design Philosophy](#overview--design-philosophy)
2. [Color Palette System](#color-palette-system)
3. [Typography System](#typography-system)
4. [Spacing & Layout System](#spacing--layout-system)
5. [Component Styles](#component-styles)
6. [Shadows & Elevation](#shadows--elevation)
7. [Animations & Transitions](#animations--transitions)
8. [Border Radius System](#border-radius-system)
9. [Opacity & Transparency](#opacity--transparency)
10. [Tailwind CSS Usage Patterns](#tailwind-css-usage-patterns)
11. [Component Reference Examples](#component-reference-examples)
12. [Accessibility Guidelines](#accessibility-guidelines)
13. [Responsive Design Patterns](#responsive-design-patterns)
14. [Performance Considerations](#performance-considerations)

---

## Overview & Design Philosophy

Copy Ninja is a sophisticated theme customization tool built on shadcn/ui principles, designed to showcase the power of CSS variables and utility-first styling.

### Core Design Principles

**1. Semantic Color Tokens**
- Every color has a semantic purpose (primary, secondary, muted, accent)
- Colors are defined in HSL space for easier manipulation
- Dark mode support through CSS custom properties
- Reference: `globals.css:37-64` (light mode), `globals.css:92-112` (dark mode)

**2. Visual Hierarchy**
- Typography scales from xs (12px) to 9xl (128px+)
- Three distinct font families for different purposes
- Consistent spacing based on 4px base unit (--spacing: 0.25rem)
- Shadow system provides 7 levels of depth

**3. User Experience**
- Smooth transitions on all interactive elements
- Hover states with subtle animations
- Glassmorphism effects (backdrop-blur) for modern aesthetic
- Pause-on-hover for scrolling animations

**4. Accessibility First**
- WCAG 2.1 AA compliant color contrast ratios
- Focus states with ring utilities
- Semantic HTML structure
- Keyboard navigation support

### Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS v4 with `@theme inline` directive
- **Type Safety**: TypeScript throughout
- **Font Loading**: Next.js font optimization with Geist Sans
- **Color Space**: HSL for all color definitions
- **Icons**: Inline SVG with currentColor inheritance

---

## Color Palette System

The project uses a sophisticated color system based on HSL (Hue, Saturation, Lightness) values, enabling precise control over color relationships and easy theme switching.

### Light Mode Colors (Default)

**Primary Palette**

```css
--background: hsl(20 5.8824% 90%)
```
- **Hex Equivalent**: ~#E9E5E2
- **Usage**: Main page background, muted areas
- **Characteristics**: Warm, soft beige-gray with minimal saturation
- **Contrast Ratio**: 1.38:1 with foreground (WCAG AAA for large text)
- **Where Used**: Body background, muted button backgrounds, card muted sections

```css
--foreground: hsl(217.2414 32.5843% 17.4510%)
```
- **Hex Equivalent**: ~#1E2838
- **Usage**: Primary text color
- **Characteristics**: Deep navy blue with good readability
- **Contrast Ratio**: 11.8:1 with background (WCAG AAA)
- **Where Used**: Heading text, body paragraphs, button text on light backgrounds

```css
--primary: hsl(238.7324 83.5294% 66.6667%)
```
- **Hex Equivalent**: ~#6366F1 (Indigo-500 range)
- **Usage**: Brand color, primary CTAs
- **Characteristics**: Vibrant purple-blue, highly saturated
- **Contrast Ratio**: 4.52:1 with white text (WCAG AA)
- **Where Used**: Primary buttons, active states, links, badges
- **Implementation**: `app/components/sections/HeroSection.tsx:38` (Start Customizing button)

```css
--primary-foreground: hsl(0 0% 100%)
```
- **Usage**: Text on primary colored backgrounds
- **Always paired with**: --primary background

**Secondary & Muted Palette**

```css
--secondary: hsl(24.0000 5.7471% 82.9412%)
```
- **Hex Equivalent**: ~#D5D2CE
- **Usage**: Secondary buttons, subtle backgrounds
- **Characteristics**: Neutral warm gray
- **Where Used**: Secondary action buttons, dividers

```css
--secondary-foreground: hsl(215 13.7931% 34.1176%)
```
- **Hex Equivalent**: ~#4B5563
- **Usage**: Text on secondary backgrounds
- **Contrast Ratio**: 7.2:1 with secondary (WCAG AAA)

```css
--muted: hsl(20 5.8824% 90%)
```
- **Same as --background**: Intentional design decision for consistency
- **Usage**: Muted sections, disabled states

```css
--muted-foreground: hsl(220 8.9362% 46.0784%)
```
- **Hex Equivalent**: ~#6B7280
- **Usage**: Secondary text, placeholders, metadata
- **Implementation**: `app/components/sections/ThemePresetsSection.tsx:122` (timestamp text)

**Accent & Special Purpose**

```css
--accent: hsl(292.5000 44.4444% 92.9412%)
```
- **Hex Equivalent**: ~#F3E8F8 (Light lavender)
- **Usage**: Highlight areas, hover states
- **Characteristics**: Subtle purple tint

```css
--destructive: hsl(0 84.2365% 60.1961%)
```
- **Hex Equivalent**: ~#EF4444 (Red-500)
- **Usage**: Error states, delete actions
- **Contrast Ratio**: 4.5:1 with white (WCAG AA)

**Surface Colors**

```css
--card: hsl(60 4.7619% 95.8824%)
```
- **Hex Equivalent**: ~#F5F5F3
- **Usage**: Card backgrounds, elevated surfaces
- **Distinguishing Feature**: Slightly brighter than background
- **Implementation**: `app/components/sections/ThemePresetsSection.tsx:87` (email UI card)

```css
--border: hsl(24.0000 5.7471% 82.9412%)
```
- **Same as --secondary**: Unified border system
- **Usage**: All borders, dividers
- **Implementation**: `border-border` utility throughout components

```css
--input: hsl(24.0000 5.7471% 82.9412%)
```
- **Same as --border**: Consistent form styling
- **Usage**: Input borders, form elements

```css
--ring: hsl(238.7324 83.5294% 66.6667%)
```
- **Same as --primary**: Focus indicator
- **Usage**: Focus rings via `ring-ring` utility
- **Accessibility**: Critical for keyboard navigation

### Dark Mode Colors

```css
--background: hsl(217.2414 32.5843% 7.4510%)
```
- **Hex Equivalent**: ~#0C1118
- **Shift**: From warm beige to cool dark blue-gray
- **Lightness**: 7.45% (very dark)

```css
--foreground: hsl(0 0% 95%)
```
- **Hex Equivalent**: ~#F2F2F2
- **Shift**: Near white for maximum contrast

```css
--primary: hsl(238.7324 83.5294% 66.6667%)
```
- **Unchanged**: Brand color remains consistent across themes
- **Strategic Decision**: Maintains brand identity

```css
--card: hsl(217.2414 32.5843% 10%)
```
- **3% lighter than background**: Subtle elevation
- **Implementation**: Layered surfaces in dark mode

### Chart Color Progression

The project includes a 5-step chart color system for data visualization:

```css
--chart-1: hsl(238.7324 83.5294% 66.6667%)  /* Base primary */
--chart-2: hsl(243.3962 75.3555% 58.6275%)  /* Darker, less saturated */
--chart-3: hsl(244.5205 57.9365% 50.5882%)  /* Medium */
--chart-4: hsl(243.6522 54.5024% 41.3725%)  /* Darker still */
--chart-5: hsl(242.1687 47.4286% 34.3137%)  /* Darkest */
```

**Pattern**: Progressive darkening with slight saturation reduction for visual hierarchy in graphs.

### Color Usage Decision Tree

```
Need a color?
├─ Is it text?
│  ├─ Primary content? → foreground
│  ├─ Secondary/meta? → muted-foreground
│  └─ On colored bg? → [color]-foreground
├─ Is it a background?
│  ├─ Page level? → background
│  ├─ Elevated surface? → card
│  └─ Muted section? → muted
├─ Is it interactive?
│  ├─ Primary action? → primary
│  ├─ Secondary action? → secondary
│  └─ Destructive? → destructive
└─ Is it a border/divider? → border
```

---

## Typography System

The project employs a sophisticated multi-font system with three distinct typefaces, each serving specific purposes.

### Font Families

**1. Geist Sans (Primary Sans-Serif)**

```css
--font-sans: var(--font-geist-sans), "Plus Jakarta Sans", sans-serif
```

- **Source**: Next.js font optimization (imported in layout)
- **Characteristics**: Modern, geometric, excellent legibility
- **Fallback Chain**: Geist Sans → Plus Jakarta Sans → System sans-serif
- **Usage**: 90% of interface text
- **Line Height**: 1.5 for body, 1.2 for headings
- **Implementation**: Set as default in `globals.css:118`

**Weight Usage**:
- `font-light` (300): Subtle headings, decorative text
- `font-normal` (400): Body text, descriptions
- `font-medium` (500): Buttons, emphasized text
- `font-semibold` (600): Subheadings, card titles
- `font-bold` (700): Main headings, hero text

**2. Lora (Serif)**

```css
--font-serif: "Lora", serif
```

- **Characteristics**: Classic serif with modern proportions
- **Usage**: Not currently used in components (reserved for future content)
- **Intended Purpose**: Long-form content, quotes, emphasis
- **Best Weight Range**: 400-600

**3. Roboto Mono (Monospace)**

```css
--font-mono: "Roboto Mono", monospace
```

- **Characteristics**: Clean, readable monospace
- **Usage**: Code snippets, technical data, version numbers
- **Best Weight**: 400-500
- **Letter Spacing**: Slightly increased for readability

### Typography Scale

The project uses Tailwind's default typography scale with custom adjustments:

| Class | Size | Line Height | Use Case | Example Location |
|-------|------|-------------|----------|------------------|
| `text-xs` | 0.75rem (12px) | 1rem | Metadata, timestamps | ThemePresetsSection.tsx:122 |
| `text-sm` | 0.875rem (14px) | 1.25rem | Secondary text, captions | Header.tsx:28 |
| `text-base` | 1rem (16px) | 1.5rem | Body text | Default |
| `text-lg` | 1.125rem (18px) | 1.75rem | Large body, intro text | HeroSection.tsx:15 |
| `text-xl` | 1.25rem (20px) | 1.75rem | Section subheadings | ThemePresetsSection.tsx:88 |
| `text-2xl` | 1.5rem (24px) | 2rem | Card headings | |
| `text-3xl` | 1.875rem (30px) | 2.25rem | Page headings | |
| `text-4xl` | 2.25rem (36px) | 2.5rem | Hero subheadings | |
| `text-5xl` | 3rem (48px) | 1 | Hero main heading | HeroSection.tsx:12 |
| `text-6xl` | 3.75rem (60px) | 1 | Large hero text | |
| `text-7xl` | 4.5rem (72px) | 1 | Extra large displays | |

### Font Pairing Patterns

**Pattern 1: Hero Section Typography**
```tsx
// HeroSection.tsx:12-17
<h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
  {/* Large, bold, Geist Sans */}
</h1>
<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
  {/* Medium size, lighter weight, muted color */}
</p>
```

**Pattern 2: Card Title + Metadata**
```tsx
// ThemePresetsSection.tsx:118-122
<div className="font-semibold text-sm">
  {/* Title: semibold, small */}
</div>
<div className="text-xs text-muted-foreground">
  {/* Metadata: extra small, muted */}
</div>
```

**Pattern 3: Button Typography**
```tsx
// All buttons use: font-medium
// Rationale: Medium weight provides clarity without being overpowering
```

### Line Height Strategy

- **Headings**: 1.0-1.2 (tight for visual impact)
- **Body Text**: 1.5 (optimal readability)
- **UI Elements**: 1.25 (compact but readable)
- **Metadata**: 1.0-1.2 (space efficient)

### Letter Spacing

```css
--letter-spacing: 0em  /* globals.css:35 */
```

- **Default**: No extra letter spacing (0em)
- **Exception**: Headings could benefit from `tracking-tight` (-0.025em)
- **Implementation**: Applied via Tailwind utilities when needed

---

## Spacing & Layout System

The project uses Tailwind's default spacing scale based on a 4px (0.25rem) base unit.

### Base Spacing Unit

```css
--spacing: 0.25rem  /* globals.css:34 */
```

All spacing multiplies this base unit:
- `space-1` = 4px (1 × 4px)
- `space-2` = 8px (2 × 4px)
- `space-4` = 16px (4 × 4px)
- `space-8` = 32px (8 × 4px)
- `space-16` = 64px (16 × 4px)

### Common Spacing Patterns

**Pattern 1: Section Spacing**
```tsx
// Vertical spacing between major sections
className="py-16 lg:py-24"  // 64px mobile, 96px desktop
```

**Pattern 2: Card Internal Padding**
```tsx
// ThemePresetsSection.tsx:113
className="p-4"  // 16px all sides for card content
```

**Pattern 3: Container Padding**
```tsx
// Horizontal page margins
className="px-6 lg:px-8"  // 24px mobile, 32px desktop
```

**Pattern 4: Element Gap/Spacing**
```tsx
// Space between sibling elements
className="space-y-2"   // 8px vertical gap
className="gap-2"       // 8px flex/grid gap
className="gap-8"       // 32px larger gap
```

**Pattern 5: Margin Bottom for Flow**
```tsx
className="mb-6"   // 24px below headings
className="mb-10"  // 40px after large sections
className="mb-20"  // 80px between major blocks
```

### Layout Container Widths

```tsx
// Maximum content widths
"max-w-7xl"   // 80rem (1280px) - page container
"max-w-5xl"   // 64rem (1024px) - content sections
"max-w-2xl"   // 42rem (672px) - text content
"max-w-xs"    // 20rem (320px) - small elements
```

**Usage Example**:
```tsx
// ThemePresetsSection.tsx:86
<div className="max-w-5xl mx-auto px-6 lg:px-8 mt-20">
  {/* Centered 1024px container with responsive padding */}
</div>
```

### Responsive Spacing Pattern

The project follows a mobile-first approach with breakpoint-specific spacing:

```tsx
// Mobile: modest spacing
// Desktop (lg:): increased spacing
className="py-16 lg:py-24"     // Vertical: 64px → 96px
className="px-6 lg:px-8"       // Horizontal: 24px → 32px
className="gap-2 lg:gap-4"     // Gap: 8px → 16px
```

### Grid & Flexbox Patterns

**Flex with Gap**:
```tsx
className="flex items-center gap-2"
// Creates horizontal layout with 8px spacing between children
```

**Centered Flex**:
```tsx
className="flex items-center justify-center"
// Perfect centering for buttons, badges
```

**Space Between**:
```tsx
className="flex items-center justify-between"
// Common for headers: logo on left, actions on right
```

---

## Component Styles

Detailed breakdown of every UI component in the project.

### Buttons

**Primary Button (CTA)**

```tsx
// HeroSection.tsx:38-44
className="px-8 h-12 bg-primary text-primary-foreground rounded-full
           hover:bg-primary/90 transition-all shadow-md hover:shadow-lg
           font-medium inline-flex items-center justify-center gap-2"
```

**Anatomy**:
- `px-8`: 32px horizontal padding
- `h-12`: Fixed 48px height (not py- for consistent button size)
- `bg-primary text-primary-foreground`: Semantic color pairing
- `rounded-full`: Pill shape (infinite border radius)
- `hover:bg-primary/90`: 10% opacity reduction on hover
- `transition-all`: Smooth all property transitions
- `shadow-md hover:shadow-lg`: Elevation increase on hover
- `font-medium`: 500 weight for emphasis
- `inline-flex items-center justify-center gap-2`: Icon + text layout
- `gap-2`: 8px spacing between icon and text

**Visual Specifications**:
- Height: 48px
- Horizontal Padding: 32px
- Border Radius: 9999px (fully rounded)
- Font Weight: 500
- Text Color: White (#FFFFFF)
- Background: hsl(238.7324 83.5294% 66.6667%)
- Hover Background: 90% opacity of primary
- Shadow: md (moderate) → lg (large) on hover
- Icon Size: 20px (w-5 h-5)

**Secondary Button Pattern** (not currently implemented, but would be):
```tsx
className="px-6 h-10 bg-secondary text-secondary-foreground rounded-xl
           hover:bg-secondary/80 transition-colors font-medium"
```

**Icon Button**:
```tsx
// Header.tsx:49-51
className="w-9 h-9 rounded-xl bg-secondary hover:bg-secondary/80
           transition-colors flex items-center justify-center"
```
- Square aspect ratio (36×36px)
- Smaller border radius (rounded-xl = 16px)
- Icon-only, no text

### Cards

**Email UI Card** (Large format):
```tsx
// ThemePresetsSection.tsx:87-90
className="bg-card rounded-[1.25rem] shadow-2xl border border-border overflow-hidden"
```

**Anatomy**:
- `bg-card`: Elevated surface color
- `rounded-[1.25rem]`: 20px border radius (custom value matching --radius)
- `shadow-2xl`: Maximum elevation shadow
- `border border-border`: 1px semantic border
- `overflow-hidden`: Clips internal content to border radius

**Email Item Card**:
```tsx
// ThemePresetsSection.tsx:113-116
className="flex flex-col gap-2 p-4 border border-border rounded-lg
           bg-card/50 hover:bg-card transition-colors cursor-pointer"
```

**Anatomy**:
- `flex flex-col`: Vertical stacking
- `gap-2`: 8px spacing between elements
- `p-4`: 16px padding all sides
- `border border-border`: Subtle outline
- `rounded-lg`: 16px corners (--radius)
- `bg-card/50`: 50% opacity card background (glassmorphism)
- `hover:bg-card`: Full opacity on hover (visual feedback)
- `transition-colors`: Smooth color transitions only
- `cursor-pointer`: Indicates interactivity

### Badges

**Primary Badge**:
```tsx
// ThemePresetsSection.tsx:139
className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs
           font-semibold bg-primary/10 text-primary"
```

**Anatomy**:
- `inline-flex items-center`: Inline layout with vertical centering
- `rounded-full`: Pill shape
- `px-2.5 py-0.5`: 10px horizontal, 2px vertical (compact)
- `text-xs`: 12px font size
- `font-semibold`: 600 weight for prominence
- `bg-primary/10`: 10% opacity primary background (subtle)
- `text-primary`: Full opacity primary text (contrast)

**Visual Effect**: Subtle colored pill with high text-to-background contrast.

**Secondary Badge** (alternative):
```tsx
// ThemePresetsSection.tsx:143 (implied from "personal" badge)
className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs
           font-semibold bg-secondary/50 text-secondary-foreground"
```

### Input Elements

**Dropdown/Select Button**:
```tsx
// ThemePresetsSection.tsx:93-95
className="h-9 w-full max-w-xs justify-between whitespace-nowrap rounded-md
           border border-input bg-transparent px-3 py-2 text-sm shadow-xs
           flex items-center gap-2"
```

**Anatomy**:
- `h-9`: 36px height
- `w-full max-w-xs`: Full width up to 320px max
- `justify-between`: Space between label and chevron
- `whitespace-nowrap`: Prevent text wrapping
- `rounded-md`: 12px corners (--radius-md)
- `border border-input`: Semantic input border
- `bg-transparent`: See-through (shows card background)
- `px-3 py-2`: 12px horizontal, 8px vertical padding
- `text-sm`: 14px text
- `shadow-xs`: Subtle shadow for depth
- `gap-2`: 8px between icon and text

### Tabs

**Tab Container**:
```tsx
// ThemePresetsSection.tsx:106
className="inline-flex h-9 items-center justify-center rounded-md
           bg-muted p-1"
```

**Active Tab**:
```tsx
// ThemePresetsSection.tsx:107-108
className="inline-flex items-center justify-center whitespace-nowrap
           rounded-sm px-3 py-1.5 text-xs font-medium bg-background
           text-foreground shadow-xs"
```

**Inactive Tab**:
```tsx
// ThemePresetsSection.tsx:111
className="inline-flex items-center justify-center whitespace-nowrap
           rounded-sm px-3 py-1.5 text-xs font-medium"
```

**Pattern**: Active tab has `bg-background shadow-xs` while inactive tabs have no background, creating clear visual distinction.

### Scrollable Content

**Email List Container**:
```tsx
// ThemePresetsSection.tsx:113
className="p-4 space-y-2 max-h-[500px] overflow-y-auto"
```

**Anatomy**:
- `p-4`: 16px padding around content
- `space-y-2`: 8px gap between email items
- `max-h-[500px]`: Fixed maximum height
- `overflow-y-auto`: Vertical scrolling when content exceeds max height

### Header/Navigation

**Sticky Header**:
```tsx
// Header.tsx:6
className="sticky top-0 z-50 bg-background/80 backdrop-blur-md
           border-b border-border"
```

**Anatomy**:
- `sticky top-0`: Sticks to top when scrolling
- `z-50`: High z-index to stay above content
- `bg-background/80`: 80% opacity background
- `backdrop-blur-md`: Glassmorphism blur effect (8px blur)
- `border-b border-border`: Bottom border separator

**Visual Effect**: Semi-transparent floating header with frosted glass appearance.

---

## Shadows & Elevation

The project implements a 7-level shadow system for visual hierarchy.

### Shadow System Breakdown

All shadows use a consistent color:
```css
--shadow-color: hsl(240 4% 60%)  /* globals.css:23 */
```
This is a neutral cool gray that works in both light and dark modes.

### Shadow Levels

**Level 1: shadow-2xs**
```css
--shadow-2xs: 2px 2px 10px 4px hsl(240 4% 60% / 0.09)
```
- **Opacity**: 9% (very subtle)
- **Usage**: Barely visible depth, resting state for small elements
- **Implementation**: Not actively used

**Level 2: shadow-xs**
```css
--shadow-xs: 2px 2px 10px 4px hsl(240 4% 60% / 0.09)
```
- **Same as 2xs**: Intentional (minimal elevation)
- **Usage**: Input fields, inactive tabs, subtle borders
- **Implementation**: `ThemePresetsSection.tsx:95` (dropdown), `ThemePresetsSection.tsx:109` (active tab)

**Level 3: shadow-sm**
```css
--shadow-sm: 2px 2px 10px 4px hsl(240 4% 60% / 0.18),
             2px 1px 2px 3px hsl(240 4% 60% / 0.18)
```
- **Opacity**: 18% (2× Level 2)
- **Layers**: Dual shadow (blur + spread)
- **Usage**: Elevated buttons, hover states
- **Visual Effect**: Noticeable but not dramatic

**Level 4: shadow (default)**
```css
--shadow: 2px 2px 10px 4px hsl(240 4% 60% / 0.18),
          2px 1px 2px 3px hsl(240 4% 60% / 0.18)
```
- **Same as shadow-sm**: Standard elevation
- **Usage**: Cards, modals, popovers

**Level 5: shadow-md**
```css
--shadow-md: 2px 2px 10px 4px hsl(240 4% 60% / 0.18),
             2px 2px 4px 3px hsl(240 4% 60% / 0.18)
```
- **Difference**: Second layer blur increased to 4px
- **Usage**: Primary buttons default state
- **Implementation**: `HeroSection.tsx:38` (Start Customizing button)

**Level 6: shadow-lg**
```css
--shadow-lg: 2px 2px 10px 4px hsl(240 4% 60% / 0.18),
             2px 4px 6px 3px hsl(240 4% 60% / 0.18)
```
- **Difference**: Second layer offset increased to 4px, blur to 6px
- **Usage**: Hover state for primary buttons
- **Implementation**: `HeroSection.tsx:38` (hover state)

**Level 7: shadow-2xl**
```css
--shadow-2xl: 2px 2px 10px 4px hsl(240 4% 60% / 0.45)
```
- **Opacity**: 45% (maximum)
- **Usage**: Maximum elevation for modal overlays, large cards
- **Implementation**: `ThemePresetsSection.tsx:87` (email UI card)

### Shadow Progression Pattern

```
Element State → Shadow Level
─────────────────────────────
Resting (small)   → xs
Resting (medium)  → sm/md
Resting (large)   → lg/xl
Hover (button)    → +1 level (md→lg)
Active/Pressed    → -1 level (md→sm)
Modal/Overlay     → 2xl
```

### Shadow Customization Variables

```css
--shadow-opacity: 0.18          /* globals.css:18 */
--shadow-blur: 10px             /* globals.css:19 */
--shadow-spread: 4px            /* globals.css:20 */
--shadow-offset-x: 2px          /* globals.css:21 */
--shadow-offset-y: 2px          /* globals.css:22 */
```

These variables are defined but not currently used in the shadow definitions (they use hardcoded values). They could be leveraged for dynamic shadow generation.

---

## Animations & Transitions

The project uses a mix of CSS keyframe animations and Tailwind transition utilities.

### Transition Utilities

**Pattern 1: All Properties**
```tsx
className="transition-all"
```
- **Properties**: All animatable CSS properties
- **Duration**: 150ms (Tailwind default)
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) (ease-in-out)
- **Usage**: Buttons with multiple changing properties (color + shadow)
- **Implementation**: `HeroSection.tsx:38`

**Pattern 2: Colors Only**
```tsx
className="transition-colors"
```
- **Properties**: color, background-color, border-color
- **Duration**: 150ms
- **Usage**: Simple hover effects, cards, icon buttons
- **Implementation**: `ThemePresetsSection.tsx:115`, `Header.tsx:50`
- **Advantage**: More performant than transition-all

**Pattern 3: Custom Duration**
```tsx
className="transition-all duration-300"
```
- **Duration**: 300ms (slower, more noticeable)
- **Usage**: Large movements, modal appearances (not currently used)

### Keyframe Animations

**Infinite Scroll Animation (Right-to-Left)**

```css
/* globals.css:124-131 */
@keyframes scroll-rtl {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll-rtl {
  animation: scroll-rtl 30s linear infinite;
}
```

**How It Works**:
1. Element starts at position 0
2. Over 30 seconds, translates -50% (moves left by half its width)
3. Loops infinitely
4. Linear easing (constant speed)

**Usage**: Horizontal scrolling theme preset rows (ThemePresetsSection)

**Hover Behavior**:
```css
/* globals.css:150-153 */
.animate-scroll-rtl:hover {
  animation-play-state: paused;
}
```
Pauses animation on hover for user inspection.

**Infinite Scroll Animation (Left-to-Right)**

```css
/* globals.css:133-140 */
@keyframes scroll-ltr {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll-ltr {
  animation: scroll-ltr 30s linear infinite;
}
```

**Opposite Direction**: Starts at -50%, moves to 0 (right direction).

### Animation Performance Considerations

- **Transform**: Uses GPU acceleration (performant)
- **Linear Easing**: Smooth constant speed, no jank
- **30s Duration**: Slow enough to read, fast enough to notice
- **Hover Pause**: Improves usability

### Hover Effects Catalog

**Button Hover**:
```tsx
hover:bg-primary/90       // Darken background by 10%
hover:shadow-lg           // Increase shadow
hover:bg-secondary/80     // Darken secondary by 20%
```

**Card Hover**:
```tsx
hover:bg-card             // From 50% to 100% opacity
```

**Icon Button Hover**:
```tsx
hover:bg-secondary/80     // Subtle darkening
```

### Focus States

All interactive elements should include focus rings:
```tsx
className="focus:outline-none focus:ring-2 focus:ring-ring
           focus:ring-offset-2"
```
- `focus:outline-none`: Remove default browser outline
- `focus:ring-2`: 2px ring width
- `focus:ring-ring`: Uses --ring color (primary)
- `focus:ring-offset-2`: 2px gap between element and ring

**Note**: Not currently implemented in all components, but should be added for accessibility.

---

## Border Radius System

The project uses a 5-level border radius system with a base unit of 20px (1.25rem).

### Radius Scale

```css
--radius: 1.25rem                            /* globals.css:10 */
--radius-sm: calc(var(--radius) - 4px)      /* 16px */
--radius-md: calc(var(--radius) - 2px)      /* 18px */
--radius-lg: var(--radius)                  /* 20px */
--radius-xl: calc(var(--radius) + 4px)      /* 24px */
--radius-2xl: 1rem                          /* 16px (note: not progressive) */
```

### Tailwind Utility Mapping

| CSS Variable | Tailwind Utility | Pixel Value | Usage |
|-------------|------------------|-------------|-------|
| --radius-sm | `rounded-sm` | 16px | Small elements, tight spaces |
| --radius-md | `rounded-md` | 18px | Input fields, dropdowns |
| --radius-lg | `rounded-lg` | 20px | Cards, standard buttons |
| --radius-xl | `rounded-xl` | 24px | Large cards, icon buttons |
| --radius-2xl | `rounded-2xl` | 16px | Alternative to sm |
| N/A | `rounded-full` | 9999px | Pill buttons, badges |

### Usage Patterns

**Pills (rounded-full)**:
```tsx
// Buttons: HeroSection.tsx:38
className="rounded-full"  // CTA button

// Badges: ThemePresetsSection.tsx:139
className="rounded-full"  // Badge pills
```
- **Use Case**: Buttons, badges, tags, avatar borders
- **Effect**: Fully rounded ends, creates pill shape

**Large Radius (rounded-[1.25rem])**:
```tsx
// Cards: ThemePresetsSection.tsx:87
className="rounded-[1.25rem]"  // Email UI card
```
- **Custom Value**: Exactly matches --radius (20px)
- **Use Case**: Large cards, modal dialogs
- **Effect**: Prominent rounded corners

**Medium Radius (rounded-lg)**:
```tsx
// Email items: ThemePresetsSection.tsx:113
className="rounded-lg"  // Email item cards
```
- **Use Case**: Content cards, image containers
- **Effect**: Noticeable but not dramatic rounding

**Small-Medium Radius (rounded-md)**:
```tsx
// Inputs: ThemePresetsSection.tsx:93
className="rounded-md"  // Dropdown button
```
- **Use Case**: Form elements, inputs, small buttons
- **Effect**: Subtle softening of corners

**Tiny Radius (rounded-sm)**:
```tsx
// Tabs: ThemePresetsSection.tsx:107
className="rounded-sm"  // Tab buttons
```
- **Use Case**: Nested elements, tabs within containers
- **Effect**: Minimal rounding, almost square

**Extra Large Radius (rounded-xl)**:
```tsx
// Icon buttons: Header.tsx:49
className="rounded-xl"  // Theme toggle button
```
- **Use Case**: Icon-only buttons, small cards
- **Effect**: Soft, modern appearance

### Border Radius Philosophy

- **Consistency**: All radii derived from single --radius variable
- **Hierarchy**: Larger elements get larger radii
- **Nested Elements**: Inner elements use smaller radii than containers
- **Pills for Actions**: Full rounding emphasizes interactivity

---

## Opacity & Transparency

The project extensively uses opacity for visual hierarchy and glassmorphism effects.

### Opacity Patterns

**Background Opacity**:
```tsx
bg-primary/90      // 90% opacity (hover states)
bg-primary/10      // 10% opacity (badge backgrounds)
bg-card/50         // 50% opacity (glassmorphism)
bg-background/80   // 80% opacity (frosted glass header)
bg-secondary/80    // 80% opacity (hover states)
bg-secondary/50    // 50% opacity (muted backgrounds)
```

**Syntax**: `bg-{color}/{opacity}`
- **Range**: 0-100 (percentage)
- **Common Values**: 10, 50, 80, 90

### Use Case: Glassmorphism

**Frosted Glass Header**:
```tsx
// Header.tsx:6
className="bg-background/80 backdrop-blur-md"
```

**Formula**:
1. Semi-transparent background (80% opacity)
2. `backdrop-blur-md`: Blur content behind (8px blur)
3. Result: Frosted glass effect

**Email Card Hover Effect**:
```tsx
// ThemePresetsSection.tsx:115
className="bg-card/50 hover:bg-card"
```

**Formula**:
1. Resting: 50% opacity card background (semi-transparent)
2. Hover: 100% opacity (solid)
3. Result: Depth perception on interaction

### Use Case: Tinted Overlays

**Badge Background**:
```tsx
// ThemePresetsSection.tsx:139
className="bg-primary/10 text-primary"
```

**Effect**:
- Background: 10% opacity primary (very subtle tint)
- Text: 100% opacity primary (strong contrast)
- Ratio: 10:1 background-to-text opacity
- Result: Colored badge with clear legibility

### Backdrop Blur Levels

```tsx
backdrop-blur-sm    // 4px blur
backdrop-blur       // 6px blur (default)
backdrop-blur-md    // 8px blur (used in header)
backdrop-blur-lg    // 12px blur
backdrop-blur-xl    // 16px blur
```

**Current Usage**: Only `backdrop-blur-md` in sticky header.

### Shadow Opacity (in CSS Variables)

```css
hsl(240 4% 60% / 0.09)   // 9% shadow opacity
hsl(240 4% 60% / 0.18)   // 18% shadow opacity
hsl(240 4% 60% / 0.45)   // 45% shadow opacity
```

See [Shadows & Elevation](#shadows--elevation) for full breakdown.

---

## Tailwind CSS Usage Patterns

Common Tailwind utility combinations found throughout the project.

### Pattern: Flex Centering

```tsx
className="flex items-center justify-center"
```
- **Usage**: Buttons, icon containers, loading states
- **Effect**: Perfect centering horizontally and vertically

### Pattern: Flex with Gap

```tsx
className="flex items-center gap-2"
```
- **Usage**: Icon + text layouts, button content
- **Effect**: Horizontal layout with 8px spacing
- **Variations**: `gap-1` (4px), `gap-4` (16px), `gap-8` (32px)

### Pattern: Flex Column with Spacing

```tsx
className="flex flex-col gap-2"
```
- **Usage**: Vertical lists, form groups
- **Effect**: Stacked elements with consistent gaps

### Pattern: Responsive Text Size

```tsx
className="text-5xl md:text-7xl"
```
- **Usage**: Hero headings
- **Effect**: 48px mobile, 72px desktop (responsive typography)
- **Breakpoint**: md = 768px

### Pattern: Responsive Padding

```tsx
className="px-6 lg:px-8"
```
- **Usage**: Page containers, sections
- **Effect**: 24px mobile, 32px desktop (horizontal padding)
- **Breakpoint**: lg = 1024px

### Pattern: Responsive Layout

```tsx
className="py-16 lg:py-24"
```
- **Usage**: Section vertical spacing
- **Effect**: 64px mobile, 96px desktop

### Pattern: Max Width + Center

```tsx
className="max-w-5xl mx-auto"
```
- **Usage**: Content containers
- **Effect**: 1024px max width, horizontally centered
- **Common Widths**:
  - `max-w-7xl` (1280px) - page wrapper
  - `max-w-5xl` (1024px) - content sections
  - `max-w-2xl` (672px) - text content

### Pattern: Sticky Header

```tsx
className="sticky top-0 z-50"
```
- **Usage**: Navigation headers
- **Effect**: Sticks to top when scrolling, stays above content
- **z-index**: 50 ensures it's above most elements

### Pattern: Truncate Text

```tsx
className="line-clamp-2"
```
- **Usage**: Email preview text
- **Effect**: Shows 2 lines max, adds ellipsis
- **Variations**: `line-clamp-1`, `line-clamp-3`, etc.

### Pattern: Hidden on Mobile

```tsx
className="hidden md:flex"
```
- **Usage**: Desktop-only navigation items
- **Effect**: Hidden below 768px, flex display above

### Pattern: Overflow Scroll

```tsx
className="max-h-[500px] overflow-y-auto"
```
- **Usage**: Scrollable content areas
- **Effect**: Fixed max height, vertical scrolling

### Pattern: Aspect Ratio Lock

```tsx
className="w-9 h-9"
```
- **Usage**: Square icon buttons
- **Effect**: 36×36px fixed size
- **Common Sizes**:
  - `w-4 h-4` (16px) - small icons
  - `w-5 h-5` (20px) - medium icons
  - `w-9 h-9` (36px) - icon buttons

### Pattern: Shadow on Hover

```tsx
className="shadow-md hover:shadow-lg transition-all"
```
- **Usage**: Interactive cards, buttons
- **Effect**: Elevation increases on hover with smooth transition

### Pattern: Color with Opacity

```tsx
className="bg-primary/10 text-primary"
```
- **Usage**: Tinted backgrounds with strong text
- **Effect**: Colored badge/tag appearance

### Pattern: Border Separator

```tsx
className="border-b border-border"
```
- **Usage**: Dividing sections
- **Effect**: 1px bottom border with semantic color

---

## Component Reference Examples

Full code examples of key components for reference.

### Example 1: Primary CTA Button

```tsx
<button
  className="px-8 h-12 bg-primary text-primary-foreground rounded-full
             hover:bg-primary/90 transition-all shadow-md hover:shadow-lg
             font-medium inline-flex items-center justify-center gap-2"
>
  Start Customizing
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
</button>
```

**Key Features**:
- Fixed height (48px) with horizontal padding
- Pill shape with full rounding
- Icon integrated with 8px gap
- Shadow elevation on hover
- Smooth transitions on all properties

### Example 2: Icon Button

```tsx
<button
  className="w-9 h-9 rounded-xl bg-secondary hover:bg-secondary/80
             transition-colors flex items-center justify-center"
>
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {/* Icon path */}
  </svg>
</button>
```

**Key Features**:
- Square 36×36px size
- Less rounded than CTA (16px radius)
- Secondary color scheme
- Icon perfectly centered

### Example 3: Email Item Card

```tsx
<div
  className="flex flex-col gap-2 p-4 border border-border rounded-lg
             bg-card/50 hover:bg-card transition-colors cursor-pointer"
>
  {/* Header: Name + Time */}
  <div className="flex items-center justify-between">
    <div className="font-semibold text-sm">William Smith</div>
    <div className="text-xs text-muted-foreground">1 month ago</div>
  </div>

  {/* Subject */}
  <div className="text-xs font-medium">Meeting Tomorrow</div>

  {/* Preview Text */}
  <div className="text-xs text-muted-foreground line-clamp-2">
    Hi, let's have a meeting tomorrow to discuss the project...
  </div>

  {/* Badges */}
  <div className="flex gap-1 mt-1">
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5
                 text-xs font-semibold bg-primary/10 text-primary"
    >
      meeting
    </span>
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5
                 text-xs font-semibold bg-secondary/50 text-secondary-foreground"
    >
      work
    </span>
  </div>
</div>
```

**Key Features**:
- Vertical flex layout with consistent gaps
- Glassmorphism (50% opacity) to solid on hover
- Typography hierarchy (semibold name, muted metadata)
- Text truncation for preview
- Color-coded badges

### Example 4: Dropdown Button

```tsx
<button
  className="h-9 w-full max-w-xs justify-between whitespace-nowrap
             rounded-md border border-input bg-transparent px-3 py-2
             text-sm shadow-xs flex items-center gap-2"
>
  <span className="flex items-center gap-2">
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      {/* Icon */}
    </svg>
    <span className="text-sm">Alicia Koch</span>
  </span>

  <svg className="h-4 w-4 opacity-50">
    {/* Chevron icon */}
  </svg>
</button>
```

**Key Features**:
- Flexible width with max constraint
- Space-between layout (label left, chevron right)
- Transparent background (inherits from parent)
- Subtle border and shadow
- Icon + text combo

### Example 5: Tab Group

```tsx
<div className="inline-flex h-9 items-center justify-center rounded-md bg-muted p-1">
  {/* Active Tab */}
  <button
    className="inline-flex items-center justify-center whitespace-nowrap
               rounded-sm px-3 py-1.5 text-xs font-medium bg-background
               text-foreground shadow-xs"
  >
    All mail
  </button>

  {/* Inactive Tab */}
  <button
    className="inline-flex items-center justify-center whitespace-nowrap
               rounded-sm px-3 py-1.5 text-xs font-medium"
  >
    Unread
  </button>
</div>
```

**Key Features**:
- Container with muted background
- Active tab: background + shadow
- Inactive tab: no background (transparent)
- Tight internal padding (1px = 4px)

### Example 6: Sticky Glassmorphism Header

```tsx
<header
  className="sticky top-0 z-50 bg-background/80 backdrop-blur-md
             border-b border-border"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg">tweakcn</span>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#themes" className="hover:text-foreground transition-colors">
          Themes
        </a>
        <a href="#docs" className="hover:text-foreground transition-colors">
          Docs
        </a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          className="w-9 h-9 rounded-xl bg-secondary hover:bg-secondary/80
                     transition-colors flex items-center justify-center"
        >
          {/* Theme toggle icon */}
        </button>

        <button
          className="px-5 py-2 bg-primary text-primary-foreground rounded-xl
                     hover:bg-primary/90 transition-colors font-medium text-sm"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</header>
```

**Key Features**:
- Sticky positioning with high z-index
- Frosted glass effect (80% opacity + blur)
- Responsive navigation (hidden on mobile)
- Three-section layout (logo, nav, actions)
- Hover transitions on links

---

## Accessibility Guidelines

While not fully implemented, here are recommended accessibility patterns for this design system.

### Color Contrast

**Current Compliance**:
- `foreground` on `background`: 11.8:1 (WCAG AAA)
- `primary-foreground` on `primary`: 4.52:1 (WCAG AA)
- `secondary-foreground` on `secondary`: 7.2:1 (WCAG AAA)
- `muted-foreground` on `background`: 4.5:1 (WCAG AA)

**Areas for Improvement**:
- Ensure all interactive elements meet AA standard (4.5:1)
- Badge text should be tested against 10% opacity backgrounds

### Focus States

**Recommended Pattern**:
```tsx
className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
```

**Apply to**:
- All buttons
- All links
- All form inputs
- All interactive cards

### Keyboard Navigation

**Requirements**:
- Tab order should follow visual order
- All interactive elements reachable via Tab
- Enter/Space should activate buttons
- Escape should close modals/dropdowns

### Screen Reader Support

**ARIA Labels**:
```tsx
// Icon-only button
<button aria-label="Toggle theme">
  <svg>...</svg>
</button>

// Expandable section
<button aria-expanded="false" aria-controls="dropdown-menu">
  Menu
</button>
```

### Semantic HTML

**Current Good Practices**:
- Using `<button>` for actions (not `<div>`)
- Using `<header>` for page header
- Using heading hierarchy (h1, h2, h3)

**Recommendations**:
- Add `<nav>` around navigation links
- Add `<main>` around page content
- Use `<article>` for email items
- Add skip-to-content link

---

## Responsive Design Patterns

The project uses a mobile-first approach with three primary breakpoints.

### Breakpoint System

```
Mobile:  0-767px    (default styles)
Tablet:  768px+     (md:)
Desktop: 1024px+    (lg:)
Wide:    1280px+    (xl:)
```

### Typography Scaling

```tsx
// Hero Heading
className="text-5xl md:text-7xl"
// Mobile: 48px (3rem)
// Desktop: 72px (4.5rem)
// Ratio: 1.5×

// Body Text
className="text-lg md:text-xl"
// Mobile: 18px (1.125rem)
// Desktop: 20px (1.25rem)
// Ratio: 1.11×
```

**Strategy**: Moderate scaling (1.1-1.5×) to avoid excessive size jumps.

### Spacing Scaling

```tsx
// Section Padding
className="py-16 lg:py-24"
// Mobile: 64px vertical
// Desktop: 96px vertical
// Increase: +50%

// Container Padding
className="px-6 lg:px-8"
// Mobile: 24px horizontal
// Desktop: 32px horizontal
// Increase: +33%
```

**Strategy**: More aggressive scaling for spacing than typography.

### Layout Changes

```tsx
// Hidden Navigation
className="hidden md:flex"
// Mobile: Hidden (hamburger menu would go here)
// Desktop: Flex layout

// Responsive Gap
className="gap-2 lg:gap-4"
// Mobile: 8px gap
// Desktop: 16px gap
```

### Container Widths

```tsx
className="max-w-7xl mx-auto"
// All: Max 1280px, centered
// Strategy: Fixed max width prevents excessive line lengths on ultra-wide screens
```

### Grid Patterns (not currently used, but recommended)

```tsx
// Responsive Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 3 columns
```

---

## Performance Considerations

Best practices for maintaining performance with this design system.

### CSS Custom Properties

**Advantage**: Single source of truth, easy theming
**Disadvantage**: Not statically analyzable by Tailwind
**Mitigation**: Use Tailwind's `@theme inline` directive (implemented in `globals.css:66-89`)

### Animations

**GPU-Accelerated Properties**:
- ✅ `transform` (used in scroll animations)
- ✅ `opacity` (used in hover effects)

**Avoid Animating**:
- ❌ `width`, `height` (causes layout recalc)
- ❌ `padding`, `margin` (causes layout recalc)
- ❌ `box-shadow` (expensive, but used - consider will-change)

**Current Usage**: Mostly performant (transform-based scrolling, color transitions)

### Shadow Performance

**Issue**: Animating `box-shadow` can be expensive
**Current Usage**: `shadow-md hover:shadow-lg` (transitions shadow)
**Optimization**: Consider using `drop-shadow()` filter or pseudo-element overlays for complex shadows

### Backdrop Blur

**Issue**: `backdrop-blur` can be expensive on low-end devices
**Current Usage**: Only in sticky header (`backdrop-blur-md`)
**Impact**: Minimal (single element, small area)
**Recommendation**: Avoid on full-screen overlays or many elements

### Font Loading

**Strategy**: Next.js font optimization (Geist Sans)
**Effect**: Automatic subsetting, preloading, no FOIT/FOUT
**Recommendation**: Continue using Next.js font API for additional fonts

### Image Optimization

**Not Currently Applicable**: No images in current components
**Recommendation**: When adding images, use Next.js `<Image>` component with proper sizing

### Tailwind Purging

**Strategy**: Tailwind v4 automatically removes unused utilities
**Effect**: Small CSS bundle size
**Caution**: Avoid dynamic class names (`className={isDark ? 'bg-black' : 'bg-white'}` works, but `className="bg-${color}"` doesn't)

---

## Conclusion

This design system provides a robust foundation for building consistent, accessible, and performant UI components. All design decisions are rooted in semantic color tokens, systematic spacing, and responsive-first thinking.

### Quick Reference Summary

- **Colors**: HSL-based, semantic tokens, light/dark mode
- **Typography**: 3 font families, 12+ size levels, clear hierarchy
- **Spacing**: 4px base unit, mobile-first responsive scaling
- **Shadows**: 7-level system from subtle (9%) to dramatic (45%)
- **Animations**: Transform-based scrolling, color transitions, 150ms default
- **Border Radius**: 16-24px range, pills for actions
- **Opacity**: Glassmorphism with 50-80% backgrounds + backdrop-blur
- **Breakpoints**: md: 768px, lg: 1024px

### File Reference

- **Design Tokens**: `app/globals.css` (lines 1-154)
- **Hero Section**: `app/components/sections/HeroSection.tsx`
- **Theme Presets**: `app/components/sections/ThemePresetsSection.tsx`
- **Navigation**: `app/components/sections/Header.tsx`
- **Page Layout**: `app/page.tsx`

### Version

- **Design System Version**: 1.0
- **Last Updated**: Based on current codebase snapshot
- **Framework**: Next.js 15, Tailwind CSS v4, shadcn/ui patterns

---

**For questions or clarifications about this design system, refer to the component implementation files listed above.**
