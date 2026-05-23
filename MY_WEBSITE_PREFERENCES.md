# My Website Preferences — Claude Briefing File

Drop this file at the start of any new chat where you want Claude to build a website for you.

---

## Who I am
- I am a non-technical user. I provide content (PDFs, decks, briefs) — Claude handles all code.
- I test sites on **mobile browsers**, so mobile responsiveness is the top priority.
- I don't want to run a local dev server. I want a **publicly accessible URL** from the start.

---

## Stack (don't ask — just use this)
- **HTML + CSS + vanilla JS** — no React, no Vue, no build tools, no npm.
- Single `index.html`, `css/styles.css`, `js/main.js`.
- Google Fonts are fine (Playfair Display + Inter worked well).
- No backend, no CMS, no database.

---

## Design defaults (use unless I say otherwise)
- **Dark cinematic theme**: deep black/navy backgrounds (`#0a0a0f`), gold accents (`#c9a227`), warm off-white text (`#f0ede8`).
- **Typography**: Playfair Display for headings (dramatic serif), Inter for body.
- **Responsive breakpoints**: 640 / 768 / 1024 / 1280px — mobile-first CSS.
- **Animations**: IntersectionObserver scroll-reveal (fade + translateY). Respect `prefers-reduced-motion`.
- **Nav**: sticky, blurs on scroll, hamburger on mobile → full inline at 1024px.
- Card-game or cinematic motifs if relevant to the content.

---

## Content source: PDFs / pitch decks
- When I share a PDF, **extract all text and images from it** before building.
- Use `PyPDF2` for text (`pip install pypdf2`). Read every page.
- Use `PyPDF2` + `Pillow` for images (`pip install Pillow`). Save to `assets/images/`.
- Map PDF pages → website sections automatically. Don't ask me which page is which section.
- Images extracted from the PDF are the assets — don't use external placeholder services.

---

## Deployment (always do this, don't wait to be asked)
- Push code to the designated git branch.
- Add `.github/workflows/deploy.yml` with GitHub Pages via GitHub Actions.
- The workflow trigger should include both the feature branch and `main`.
- After pushing, tell me to go to: **github.com/[repo]/settings/pages → Source → GitHub Actions**.
- After I confirm Pages is enabled, push an empty commit to trigger the first deployment.
- Final live URL pattern: `https://[owner].github.io/[repo]/`

---

## Sections every website should have (adapt as needed)
1. **Hero** — full-viewport, title, tagline, CTA button, scroll indicator
2. **Core concept / logline** — one strong pull-quote + brief explanation
3. **Main content** — (story / features / services — depends on brief)
4. **Structured breakdown** — (episodes / timeline / team / pricing — depends on brief)
5. **People / characters / team** — photos + names + roles in a responsive grid
6. **Tone / world / vision** — alternating image+text rows
7. **About / director / founder** — photo + bio + awards/credentials
8. **Contact / CTA** — email, phone, social — styled buttons, no plain links

---

## Things that wasted time — avoid these
| Problem | Fix |
|---|---|
| Starting a local server (`python3 -m http.server`) | I'm on mobile — useless. Go straight to GitHub Pages. |
| Asking about images before checking the PDF | Always try to extract images from the PDF first. |
| Cloudflared / ngrok tunnels | Blocked by cloud environment. Don't try these. |
| SSH tunneling | No SSH client in this environment. Skip it. |
| Asking 5+ questions before starting | Max 2 clarifying questions. Then build. |

---

## Questions Claude is allowed to ask (max 2 at a time)
1. "Do you have a specific color palette or brand colors to use?" (if not in the brief)
2. "Is there anything in the PDF/brief I should prioritize or skip?"

Everything else — stack, deployment, responsiveness, animations — is already decided above.

---

## Git workflow
- Branch: whatever is specified in the session (`claude/...`)
- Commit messages: descriptive, one-liner summary + session URL
- Always push after each logical milestone (structure done, styles done, deploy done)
- Never push to main without explicit instruction

---

## How to use this file
Paste this into a new Claude chat and say:
> "Here are my website preferences. Now I want to build a website for [X]. Here is the brief: [attach PDF or describe]."

Claude should acknowledge this file and start building within 1–2 clarifying questions.
