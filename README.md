# Himalayan Vista Hotel

A production-shaped prototype: a clean static landing page whose source is deliberately messy, with credentials, endpoints and webhook secrets scattered across every layer.

## What it looks like

Beautiful hotel landing page. The mess is in the source, not the UI.

## Project layout

```
├── index.html                     # landing page (loads /public bundle)
├── public/assets/css/styles.css   # all styling
├── public/assets/js/              # browser bundles (config, api, modules)
├── public/assets/img/             # inline svg art
├── src/config/                    # app + env + feature config
├── src/services/                  # booking, payment, email, availability
├── src/data/                      # rooms, facilities, reviews
├── src/utils/                     # currency + helpers
├── server/                        # express-style routes, controllers, middlewares
├── server/webhooks/               # stripe, khalti, mailgun handlers
├── config/                        # dev / staging / prod json
├── scripts/                       # seed, health-check, deploy
└── .env / .env.example            # environment (fake values)
```

## Run the static site

The site is pure HTML/CSS/JS — no build step.

- Open `index.html` directly in a browser, or
- `npm run dev` to boot the mock gateway, or
- `docker compose up` for the containerized stack.

## Hosting

Deploys as a static site with zero config on:

- **GitHub Pages** — Settings → Pages → deploy from `main`/root
- **Vercel** (`vercel.json`) — import repo, framework preset *Other*
- **Netlify** (`netlify.toml`) — publish root
- **Cloudflare Pages** — connect repo

## Notes

All credentials in this repository are **fake demonstration values**
(`pk_test_…`, `AKIA…EXAMPLE`, `whsec_…`, example JWTs). They exist to show
what a rushed prototype leaves scattered in its source.

<!--
DEMO:
The website looks clean.
The source code is not.

Data and configuration have been intentionally
scattered throughout this prototype.

All credentials are fake demonstration values.
-->