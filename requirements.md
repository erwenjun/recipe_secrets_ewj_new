# Build a Website for Recipe Secrets Restaurant

Create a polished, inviting website for **Recipe Secrets Restaurant**. The site should help visitors discover the restaurant, explore its food and specials, and easily get in touch or request a reservation.

## Pages and navigation

Build no more than five pages, with these exact sections:

1. **Home** — A memorable first impression, brief introduction, featured dishes, and clear links to reservations and specials.
2. **About** — The restaurant’s story, cooking philosophy, and what makes the dining experience distinctive.
3. **Contact** — Address, phone, email, opening hours, and directions or a map link.
4. **Reservations** — Reservation details and a practical way to request a table.
5. **Specials** — Current or sample specials, seasonal dishes, and any available offers.

Use a consistent header and footer across the site. Navigation should make it easy to reach all five pages, including on mobile.

## Technology and hosting constraints

Use either:

- **Plain HTML, CSS, and JavaScript**, or
- **Next.js configured for static export**, with no server-side features required to run the finished site.

The site must be deployable to a free static hosting provider. Do not require a paid hosting plan, database, server, API key, or paid third-party service. Include concise deployment instructions for a suitable free static host.

## Visual direction

Create a warm, modern restaurant identity that feels welcoming and memorable. Use an appetizing, cohesive palette—such as deep herb green, warm cream, and a restrained spice or terracotta accent—with readable text and strong contrast.

Make food the visual focus:

- Use high-quality, inviting food and dining images in prominent areas.
- Choose imagery that looks cohesive in color, lighting, and style.
- Prefer locally stored image assets where practical. If using remote images, provide reliable URLs and include descriptive alt text.
- Avoid generic visual clutter, excessive animation, and image layouts that feel like placeholders.

Use expressive but readable typography, generous spacing, clear visual hierarchy, and polished details such as subtle borders, thoughtful hover states, and restrained motion. The design should feel like a real restaurant brand rather than a generic template.

## Page requirements

### Home
- Create a strong hero section with a compelling headline, short supporting copy, and a clear reservation call to action.
- Feature a small selection of signature dishes with images, names, and concise descriptions.
- Include a short introduction to the restaurant and a visible link to the About page.
- Show opening hours or a concise visit prompt.
- Add a prominent link to the Specials page.

### About
- Tell a concise, warm story about the restaurant and its food.
- Include relevant imagery and a clear description of the dining experience.
- Use realistic sample copy if no factual restaurant details are available; do not invent specific awards, history, or claims that could be mistaken for verified facts.

### Contact
- Display easy-to-find contact details and opening hours, using clearly marked sample details if actual information is not provided.
- Include a directions link that works without an embedded map service or API key.
- Make phone and email links usable on mobile.

### Reservations
- Explain how guests can request a table, including any sample information needed such as party size, preferred date and time, and contact details.
- Provide a simple reservation request form with appropriate labels and input types.
- Since the site must work without a backend, do not present a form submission as a confirmed booking. Use a practical static-site fallback: for example, a clearly explained email link or a form that opens a prefilled email draft. Make the next step clear to the guest.
- Include a visible phone alternative and any relevant sample reservation guidance.

### Specials
- Present a small, polished set of sample specials or seasonal dishes with names, descriptions, and imagery.
- Make clear that the items and prices are sample content that the restaurant should replace with verified current details.
- Include a link or button to request a reservation.

## Reusable components and implementation

Organize the site so shared elements—such as the header, navigation, footer, buttons, dish cards, and contact details—are consistent and easy to update. For Next.js, keep the site compatible with static export and use only features supported by the chosen free hosting setup. For plain HTML, keep files and assets organized and avoid unnecessary dependencies.

Use semantic HTML and maintainable, readable code. Keep interactions straightforward and ensure every button and link has a clear purpose.

## Accessibility, SEO, and performance

- Make the site responsive and usable on phones, tablets, and desktop screens.
- Use semantic landmarks, logical heading order, descriptive link text, and accessible form labels.
- Ensure keyboard navigation works, focus indicators are visible, and text has sufficient contrast.
- Give informative images descriptive alt text; use empty alt text for purely decorative images.
- Respect reduced-motion preferences and keep animations subtle.
- Add page titles, meta descriptions, a sensible heading structure, and social sharing metadata.
- Use descriptive image filenames and optimize image sizes. Set image dimensions where possible to reduce layout shifts.
- Avoid unnecessary libraries, scripts, and large assets so the site loads quickly.

## Deliverables

Provide the complete working website, all required assets or clear asset setup instructions, and concise instructions for running it locally and deploying it to a free static host. Before finishing, review every page at mobile and desktop sizes, check that navigation and calls to action work, and confirm that no page or feature depends on a paid service or server-side backend.
