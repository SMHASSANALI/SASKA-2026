# SASKA Solutions — Website

Sourced from `AbdulHannan242001/saska-redesign` and carried forward as the
canonical repo for saskasolutions.com, with a new visual design system and a
round of SEO/bug fixes applied.

## Stack
React 19 + Vite 6 + Tailwind v4, React Router, Framer Motion, EmailJS.

## Scripts
- `npm run dev` — local dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview the production build

## Deploy
Firebase Hosting (`firebase.json` / `.firebaserc` already point at the live
`saskasolution-7890` project) — `firebase deploy` after `npm run build`.
