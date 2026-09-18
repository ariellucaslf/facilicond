# Facili Landing Page & Showcase - AI Guidelines

Welcome to the **Facili Landing Page** repository. This project serves as our public showcase and marketing website.

## Core Directives for AI Agents

1. **Server-First**: Default to React Server Components. Only use `"use client"` for interactivity (framer-motion, state, events).
2. **UI/UX Excellence**: 
   - Ensure pixel-perfect, mobile-first responsive design.
   - Use `framer-motion` for polished, professional animations (e.g., scroll reveals, hover effects).
   - Maintain excellent Core Web Vitals (optimize images, fonts, and reduce Cumulative Layout Shift).
3. **Code Quality**: 
   - Strict TypeScript. No `any` types.
   - Extract reusable components into small, modular files.
   - Use `clsx` and `tailwind-merge` when constructing dynamic class names.
4. **Commit Standards**: Provide conventional commit suggestions (`feat:`, `fix:`, `ui:`) in a copy-pasteable format. Do not commit directly.

*Note: For Next.js specific framework rules and detailed UI guidelines, please refer to the `AGENTS.md` file.*
