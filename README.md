# Rheem Sales Companion

A field-sales prototype for Rheem Australia — built to demonstrate the "Customer-Centric Sales Stack" vision: a tablet-first, step-of-the-call experience that takes a rep from morning plan to post-visit follow-up without app-switching.

**Live demo:** `https://daljeetkohli-sap.github.io/rheemsales/`

> Status: V1 click-through prototype with dummy data. No backend, no auth, no persistence. Designed for two demo audiences — internal Sales/Architects (Round 1) and Rheem business stakeholders (Round 2).

---

## What's in the prototype

Nine polished, fully responsive screens covering one complete sales visit:

| # | Screen | Maps to MoSCoW requirement |
|---|---|---|
| 1 | **Today's Visits** (home) | Sales Cycle Planning · Call Planning · Customer Segmentation |
| 2 | **Customer 360 — Step of the Call** | "Tablet with tiles for each step" · Greeting/personal cue capture |
| 3 | **Stock Take** | SKU count vs target · history · order recommendation |
| 4 | **Sales Review** | MTD/YTD vs YA · store vs region vs national · NBA insight |
| 5 | **Promotions & Campaigns** | NPD launches · Rebates · Rewards · Trade marketing · Training |
| 6 | **Competitor Capture** | 5 SKUs per visit · invoice/sell/multi-buy · photo OCR placeholder |
| 7 | **Quote Builder** | Build, preview, email professional quote with GST |
| 8 | **Visit Notes** | Sentiment · summary (AI draft) · scheduled follow-ups |
| 9 | **Post-Visit Summary** | Outcomes recap · open follow-ups · launch next visit |

---

## Architecture

- **Single-file static app:** `index.html` (no build step, no dependencies installed)
- **CDN-loaded:** Tailwind CSS, Google Fonts (Fraunces + Inter Tight)
- **Pure vanilla JS** — no React/Vue/framework lock-in for this prototype
- **Tablet-first responsive:** breakpoints at 768px (tablet) and 1024px (desktop); phones get a stacked single-column view
- **Brand:** Rheem red `#EA0021` on white with paper-texture background

The single-file approach is deliberate for V1 — it deploys to GitHub Pages in 30 seconds, runs from a USB stick on a customer's iPad, and has zero environment dependencies. The next phase (real backend) splits this into a proper React/Next.js app fed by SAP Sales Cloud APIs.

---

## Deploying to GitHub Pages

### One-time setup (do this once)

1. **Push these files** to the repo's `main` branch (root, not a subfolder):
   ```
   index.html
   README.md
   .nojekyll
   ```

2. **Enable Pages:**
   - Repo → **Settings** → **Pages** (left sidebar)
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` · **Folder:** `/ (root)`
   - Click **Save**

3. **Wait ~60 seconds**, then refresh the Pages settings tab. You'll see a green tick and the URL:
   `https://daljeetkohli-sap.github.io/rheemsales/`

### Updating the demo

Every push to `main` redeploys automatically (usually within 1–2 minutes). To check status: **Actions** tab → look for "pages build and deployment".

### Pushing from your machine

```bash
git clone https://github.com/daljeetkohli-sap/rheemsales.git
cd rheemsales

# Copy index.html, README.md, .nojekyll into the folder

git add .
git commit -m "Add Rheem Sales Companion prototype"
git push origin main
```

If you don't have the repo locally yet, you can also drag-and-drop the files in the GitHub web UI: open the repo → **Add file** → **Upload files**.

---

## Demoing it well

**Round 1 — Internal Sales / Architects:**

Focus on the data model and end-to-end flow:
- Show the segmentation (channel, segment, frequency, priority) on the home cards
- Open Customer 360 → point to the Step-of-the-Call structure and how it maps to the requirements doc
- Stock Take → show the gap calc, ROS, trend indicators — this is the data they'll wire up to Sales Cloud
- Sales Review → benchmark + Next-Best-Action is where AI integration plugs in
- Quote Builder → discuss the SAP CPQ integration path

**Round 2 — Rheem business stakeholders:**

Run the full visit flow end-to-end (about 4 minutes):
1. Open the URL → "Good morning, Daljeet" lands
2. Tap **Reece — Richmond** → show the personal cue ("Mike's kids, MTB trip")
3. Tap **Stock take** → adjust the CFGWH 26L counter → "Recommend order"
4. Back → **Sales review** → show the NBA card → "Build quote"
5. Quote builder → add a Bulla 280L → **Preview** → drawer slides up with formatted A4 quote
6. Send → back to Customer 360 → **Promotions** → share the Bulla 280L launch
7. **Competitor capture** → tap "Snap & extract" a couple of times → SKUs appear
8. **Visit notes** → "Draft with AI" populates the summary → save
9. Back to C360 → **Complete visit** → confetti + post-visit summary
10. **Start next visit** → flows into Tradelink

---

## Customising

**Brand colours** — edit the `tailwind.config` block near the top of `index.html`. Swap `#EA0021` for the exact hex from Rheem's brand guide if it differs.

**Data** — all dummy data is in the `DATA` section at the top of the `<script>` block. Edit `VISITS`, `SKUS`, `PROMOTIONS`, `COMPETITOR_CATALOG`, `SALES_MONTHS`, `CATEGORY_MIX` to swap in real customers and products.

**Rep details** — change the `REP` constant.

---

## What's not in V1 (deliberately)

- No backend / persistence (refresh resets state)
- No authentication
- AI features (NBA, AI summary, OCR capture) are simulated for demo purposes
- No actual email sending — quote "send" is a toast notification

These are intentional scope choices for a click-through demo. The architecture supports each one being wired up properly in the next phase (suggested: React + Next.js on Vercel, with the data layer hitting SAP Sales Cloud V2 / Service Cloud / CPQ APIs).

---

## Honest caveats

- Brand colours sourced from a third-party brand reference (`#EA0021` red), not Rheem's official style guide. Verify before client-facing use.
- Real Rheem SKUs/customers used here are illustrative — confirm naming and availability with Rheem before showing externally.
- The Fireflies/Slack/Atlassian/HubSpot integrations referenced in the conversation aren't wired up — this is a pure front-end prototype.

---

## Credits

Built as part of the Rheem CRM discovery for FAIR Consulting Group. Requirements from the *Use Cases and Requirements V1.0 — Steps of the Call* workshop output (MoSCoW prioritisation).
