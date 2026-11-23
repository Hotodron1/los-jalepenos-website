# Los Jalapeños Mexican Restaurant website

Static website for Los Jalapeños (Unicoi & Piney Flats, TN). Plain HTML, CSS and JavaScript:
no framework, no build step, no dependencies.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page layout (all sections, inside `<template id="tpl">`) and SEO tags |
| `app.js` | All text (English and Spanish), the full menu with prices, both locations, and the page logic |
| `styles.css` | Hover effects and phone layout rules (most styling is inline in `index.html`) |
| `assets/` | Photos and the printable menu PDF |
| `favicon.svg` | Browser tab icon (the pepper) |
| `vercel.json` | Vercel settings (clean URLs, image caching) |

## Deploy to Vercel

1. Create a new GitHub repository and upload everything in this folder (keep the folder structure).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Settings on the import screen:
   - **Framework Preset:** Other
   - **Build Command:** leave empty
   - **Output Directory:** leave empty (the site is in the repository root)
4. Click **Deploy**. Every push to GitHub redeploys automatically.

To use the restaurant's domain (losjalapenosmexrest.com): in Vercel open the project, go to
**Settings → Domains**, add the domain and follow the DNS instructions Vercel shows.

## Editing

Everything you'd normally change is in `app.js`:

- **Hours:** search for `[OPEN] – [CLOSE]` and replace it with real times. The day groups are
  the `days` lists in the English (`en`) and Spanish (`es`) sections.
- **Menu items and prices:** the `MENU` list. Each dish is `{ n: name, p: price, d: description }`.
  Dishes with several choices use `o: [["Choice", "price"], ...]`. Add `v: 1` for vegetarian.
- **Addresses and phone numbers:** the `LOCS` list at the top.
- **Wording:** the `T` object (`en` for English, `es` for Spanish).

Layout and colors are in `index.html`. Photos are in `assets/`. To swap a photo, replace the file
and keep the same name.

## Before going live

- Replace the placeholder hours (`[OPEN] – [CLOSE]`).
- Confirm with the owners whether the name is written "Jalapeños" or "Jalapenos".
