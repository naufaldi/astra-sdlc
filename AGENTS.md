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

## Workshop context: AstraFlow SDLC Model Routing

The `astra-sdlc` deck supports a developer workshop built around **open-weight model routing through AstraFlow ModelVerse** (UCloud's OpenAI-compatible inference gateway). The core pitch is that a single premium frontier model is no longer the right default for every SDLC task; open-weight alternatives are now within 6–8% on the benchmarks that matter for daily engineering work while costing 5–12× less.

### Event framing

- **Audience:** Software developers and engineering teams using AI-assisted SDLC workflows.
- **Setting:** UCloud / AstraFlow ModelVerse workshop (Jakarta context, regional endpoint `api-sg.umodelverse.ai`).
- **Takeaway:** Stop defaulting to one frontier model. Route the right model to the right task through AstraFlow, verify quality with a rubric, and cut cost by an order of magnitude.

### The four replacement tiers

1. **Reasoning / backend brain:** Opus 4.8 → Kimi K2.7 (~8% benchmark gap, ~11× cheaper).
2. **Code generation:** GPT-5.5 → Qwen 3.7 Max (~18% benchmark gap, ~7× cheaper).
3. **Agent loops + tool calling:** Sonnet 4.7 → GLM 5.2 (~3% benchmark gap, ~5× cheaper on input).
4. **Cheap volume / bulk processing:** GPT-5.5 mini → MiMo V2.5 (~6% benchmark gap, ~12× cheaper).

These tiers are illustrative. Always verify live model IDs and pricing via `GET https://api-sg.umodelverse.ai/v1/models` before the workshop. Qwen 3.7 Max and MiMo V2.5 may not yet be available in the AstraFlow catalog; treat them as candidates to verify rather than guaranteed routes.

### Supply-risk context

Recent U.S. government action (June 2026) introduced a voluntary 30-day pre-release review window for covered frontier models and saw Anthropic's Fable 5 / Mythos 5 briefly suspended under export controls. OpenAI's GPT-5.6 shipped through a government-approved preview first. Open-weight models are currently exempt from the primary export-control classifications, adding a resilience argument to the cost argument.

### Design system

The deck follows the warm-cream editorial system in `design.md`: eggshell `#fdfcfc` canvas, warm taupe `#f5f3f1` cards, stone `#ebe8e4` hairlines, black ink, and violet `#0447ff` / orange `#ff4704` reserved only for decorative product-visual accents. Decorative diagrams, hairline connectors, and small gradient spheres are preferred over heavy UI chrome.

### Verification rule

Before any workshop delivery, recheck: model IDs, AstraFlow pricing, the four tier mappings, and the government-intervention facts. Use the live catalog as the source of truth.

## Cursor Cloud specific instructions

- **Package manager is npm here.** Although the docs above reference `pnpm`, this repo commits a `package-lock.json` and no `pnpm-lock.yaml`, so the Cloud environment uses `npm`. Dependencies are refreshed automatically by the startup update script (`npm install`). Use `npm run dev` / `npm run build` (defined in `package.json`). `pnpm`-specific commands in the docs (e.g. `pnpm up @open-slide/core`, `pnpm sync:skills`) still work if pnpm is installed, but the maintained path here is npm.
- **Dev server:** `npm run dev` serves the deck at `http://localhost:5173`. It does not exit — run it in the background (e.g. tmux) when you need the shell back.
- **No lint or test tooling exists** in this project (only `dev`, `build`, `preview`, `sync:skills` scripts; no ESLint, no test runner, no standalone `tsc`). `npm run build` (`open-slide build`, a Vite production build) is the closest thing to a compile/type check — use it to catch broken slides.
- **Hot reload picks up new slides automatically:** adding `slides/<id>/index.tsx` while `npm run dev` is running makes the deck appear in the overview without a restart.
