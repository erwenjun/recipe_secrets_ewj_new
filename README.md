# Recipe Secrets Restaurant — Website

A 5-page static website (Home, About, Specials, Reservations, Contact) built with
plain HTML, CSS, and vanilla JavaScript. No build step, framework, backend, or
paid services required.

## Structure

```
recpie_website/
  index.html          Home
  about.html           About
  specials.html        Specials
  reservations.html    Reservations
  contact.html         Contact
  css/style.css        Shared stylesheet (design tokens, layout, components)
  js/main.js           Mobile navigation toggle (all pages)
  js/reservation.js    Builds a prefilled mailto: link from the reservation form
```

All food and dining photography is loaded from Unsplash CDN URLs (free to use,
no API key or account required) and has descriptive alt text. To use your own
photography instead, drop files into an `images/` folder and update the `src`
attributes in the HTML — no other changes are needed.

All content marked "sample" (address, phone, email, hours, menu items, and
prices) is placeholder copy and should be replaced with the restaurant's real,
verified details before launch.

## Running locally

No install or build step is required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder with any static file server for correct relative paths and
  to test it the way a host will, e.g.:

```bash
# Python 3
python -m http.server 8000

# Node (no install needed)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to a free static host

### Option A: Netlify (drag-and-drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the entire `recpie_website` folder onto the page.
3. Netlify assigns a free `*.netlify.app` URL immediately. No account is
   required for a one-off drop; sign up free to manage future updates.

### Option B: GitHub Pages
1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to the branch and root folder
   containing `index.html`.
4. GitHub publishes the site at `https://<username>.github.io/<repo>/`.

### Option C: Cloudflare Pages
1. Create a free Cloudflare account and go to **Workers & Pages → Create → Pages**.
2. Connect the repository (or use direct upload) and set the output directory
   to the folder containing `index.html`.
3. Cloudflare builds and serves the site on a free `*.pages.dev` URL.

No database, server-side code, environment variables, or paid plan is needed
for any of the above.

## Notes on verified before launch

- Replace sample address, phone, email, hours, and specials/prices with real,
  current information.
- Replace Unsplash imagery with your own restaurant photography if available.
- The reservation form opens a prefilled email draft (via `mailto:`) rather
  than submitting to a server — this is intentional for a static, backend-free
  site. If you later add a backend or form service, you can swap the form's
  submit handler without changing the page markup.
