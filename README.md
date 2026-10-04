<img width="1906" height="943" alt="image" src="https://github.com/user-attachments/assets/1f54baf7-ca52-4471-98cf-a8b0d9af1520" />

# design.md

A CLI package and design system injector that delivers production-grade design skill bundles for Minimalism and Neobrutalism directly into your project workspace.

NPM Package: https://www.npmjs.com/package/create-design-md

---

## Overview

`design.md` allows developers and AI coding agents to instantly setup standardized design rulebooks inside any project using a clean `./.agents/` folder structure.

By running the CLI, the selected design bundle is automatically copied into `./.agents/`, giving your AI tools (Cursor, Antigravity, Claude, ChatGPT, Codex) complete architectural guidance for building UIs.

---

## Quick Start

NPM Package Link: https://www.npmjs.com/package/create-design-md

Run either command in your project terminal:

```bash
npx create-design-md
```

or

```bash
npm create design-md
```

### Direct Execution Flags

```bash
# Inject Minimalism:
npx create-design-md --minimalism

# Inject Neobrutalism:
npx create-design-md --neobrutalism
```

---

## Available Design Skill Bundles

### 1. Minimalism
- **Focus**: Sleek, high-elegance UIs with hairline borders, subtle elevation, 4px grid alignment, and typography tokens.
- **Best Suited For**: Modern SaaS applications, developer tools, documentation sites, and technical portfolios.

### 2. Neobrutalism
- **Focus**: High-contrast, vibrant UIs featuring flat palettes, 2px solid black outlines, 4px hard offset shadows, and tactile press mechanics.
- **Best Suited For**: Landing pages, Web3 applications, indie hacker products, and high-energy brand experiences.

---

## The Four Core Pillars (.agents Structure)

Every injected design skill bundle establishes a standardized `./.agents/` directory containing four specialized focus files:

1. **`design.md`**
   - Core design primitives, color system tokens, surface levels, contrast ratios, and theme tokens.

2. **`components.md`**
   - Detailed specifications for atomic UI components including buttons, cards, form inputs, badges, and modals.

3. **`structure.md`**
   - Layout architecture, responsive breakpoint rules, grid alignment, and section composition guidelines.

4. **`animation.md`**
   - Motion principles, timing curves, micro-interactions, state transitions, and accessibility reduced-motion rules.

---

Created by Akshat Malik
