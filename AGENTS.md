<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Facili Landing Page & Showcase - Agent Guidelines

Welcome to the **Facili Landing Page** repository. This project serves as our public showcase and marketing website. It is built with high standards to ensure excellent performance, accessibility, and visual appeal.

As an AI agent contributing to this project, you must adhere strictly to the following architectural, UI, and coding guidelines.

## 1. UI/UX & Design Directives

As a Showcase and Landing Page, the visual quality is paramount:

- **Typography & Layout**:
  - Maintain ample whitespace (`gap`, `p`, `m` classes in Tailwind) to let elements breathe.
  - Use clear visual hierarchy for headings (`h1` through `h6`) and body text.
- **Animations & Transitions**:
  - Implement subtle entrance animations using `framer-motion` (e.g., fade-in and slide-up on scroll).
  - Add interactive states (hover, focus, active) to all clickable elements (buttons, links, cards) with smooth CSS transitions (`transition-all duration-300`).
- **Responsiveness**:
  - The design must be flawlessly responsive. Adopt a **mobile-first** approach.
  - Test layouts across standard breakpoints (`sm`, `md`, `lg`, `xl`). Avoid horizontal scrolling on small devices.
- **Performance**:
  - Optimize images using Next.js `<Image />` component.
  - Minimize layout shifts (CLS) and ensure high Core Web Vitals.
  - Lazy load heavy client components if they are below the fold.

## 2. Code Quality & Component Standards

- **Server vs. Client Components**:
  - Default to **Server Components** (`React Server Components`) for performance and SEO.
  - Only use the `"use client"` directive when necessary (e.g., for `framer-motion`, hooks like `useState`, or event listeners).
- **Clean Code & Modularity**:
  - Keep components small, focused, and pure. Extract reusable UI elements (Buttons, Cards, Inputs) into their own files.
  - Avoid deeply nested DOM structures.
  - Use descriptive variable and function names.
- **TypeScript**:
  - No `any` types. Define interfaces or types for all component props and state variables.

## 3. Development & Commit Workflow

- **Atomic Commits**: Create small, logical commits. Use conventional commit formats (`feat:`, `fix:`, `chore:`, `refactor:`, `ui:`).
- **Do NOT execute git commits automatically**: Always provide the commit commands as copy-pasteable blocks for the developer.

By following these rules, you will help maintain a fast, beautiful, and maintainable landing page that effectively represents the Facili brand.
