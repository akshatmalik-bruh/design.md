# design.md (create-design-md)

NPM Package: https://www.npmjs.com/package/create-design-md

`create-design-md` is a CLI tool that injects standardized AI design system rulebooks directly into any web project directory (`./.agents/`).

---

## Quick Usage

Run anywhere in your terminal:

```bash
npx create-design-md
# or
npm create design-md
```

### Direct Flag Usage (Non-Interactive)

```bash
# Inject Minimalism skill bundle:
npx create-design-md --minimalism

# Inject Neobrutalism skill bundle:
npx create-design-md --neobrutalism
```

---

## Available Design Skill Bundles

### 1. Minimalism
- **Best Used For**: Clean SaaS dashboards, developer tools, tech portfolios, and documentation sites.
- **Rules Included**: Hairline surfaces, 4px grid spacing, accessibility floor, typography tokens, reversible motion.

### 2. Neobrutalism
- **Best Used For**: Bold landing pages, Web3 apps, indie hacker products, and vibrant retro brands.
- **Rules Included**: Flat high-contrast palette, 2px black outlines, 4px hard offset shadows, physical press mechanics.

---

## The Four Core Pillars (.agents Structure)

Running `npx create-design-md` creates a `./.agents/` folder in your project root containing:
- `design.md`: Color tokens, themes, and design primitives.
- `components.md`: UI component definitions and layout patterns.
- `structure.md`: Responsive hierarchy and layout composition rules.
- `animation.md`: Motion curves and interaction states.

---

Created by Akshat Malik
