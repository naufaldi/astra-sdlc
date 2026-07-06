# open-slide — Agent Guide

You are authoring **slides** in this repo. Every slide is arbitrary React code that you write.

## Hard rules

- Put your slide under `slides/<kebab-case-id>/`.
- The entry is `slides/<id>/index.tsx`.
- Put slide-specific images/videos/fonts under `slides/<id>/assets/`. For assets reused across decks or themes (logos, avatars), use the global `assets/` folder and import via `@assets/...`.
- Do **not** touch `package.json`, `open-slide.config.ts`, or other slides.
- Do not add dependencies. Use only `react` and standard web APIs.

## Which skill to use

- **Drafting a new deck** — use the `create-slide` skill. It walks through scoping questions, structure, and hand-off.
- **Applying inspector comments** (`@slide-comment` markers in a page) — use the `apply-comments` skill.
- **Creating or extracting a theme** — use the `create-theme` skill. Themes live as markdown under `themes/<id>.md` and are read by `create-slide` before authoring.
- **Resolving "this page" / "this element"** — when the user references the current slide or selection without naming it, consult the `current-slide` skill. It reads the dev server's `node_modules/.open-slide/current.json` to find which slide, page, and inspector-picked element they mean.
- **Any other slide edit** — read the `slide-authoring` skill before writing. It is the technical reference for everything inside `slides/<id>/`: file contract, the 1920×1080 canvas, type scale, palette, layout, assets, self-review checklist, and anti-patterns. `create-slide` and `apply-comments` both defer to it for the *how*.

Keep this file short: hard rules only. All deeper guidance lives in the skills above.

## Updating skills

The skills above are managed by `@open-slide/core`. Do not edit them in place. To pull the latest versions:

```
pnpm up @open-slide/core
pnpm sync:skills
```

`pnpm dev` will also detect drift on startup and offer to sync. `pnpm sync:skills --dry-run` (via `pnpm exec open-slide sync:skills --dry-run`) previews changes without writing.

## Cursor Cloud specific instructions

- **Package manager is npm here.** Although the docs above reference `pnpm`, this repo commits a `package-lock.json` and no `pnpm-lock.yaml`, so the Cloud environment uses `npm`. Dependencies are refreshed automatically by the startup update script (`npm install`). Use `npm run dev` / `npm run build` (defined in `package.json`). `pnpm`-specific commands in the docs (e.g. `pnpm up @open-slide/core`, `pnpm sync:skills`) still work if pnpm is installed, but the maintained path here is npm.
- **Dev server:** `npm run dev` serves the deck at `http://localhost:5173`. It does not exit — run it in the background (e.g. tmux) when you need the shell back.
- **No lint or test tooling exists** in this project (only `dev`, `build`, `preview`, `sync:skills` scripts; no ESLint, no test runner, no standalone `tsc`). `npm run build` (`open-slide build`, a Vite production build) is the closest thing to a compile/type check — use it to catch broken slides.
- **Hot reload picks up new slides automatically:** adding `slides/<id>/index.tsx` while `npm run dev` is running makes the deck appear in the overview without a restart.
