# The Gato Gazette

A hand-coded, no-framework, no-build-step gaming blog. This whole site is
just HTML, CSS, and one small JS file. That's on purpose — it loads instantly
(good for SEO and for people reading on their phone on a lunch break) and you
never need to touch a terminal to publish a post.

## Renaming the site

Search every HTML file for "THE GATO GAZETTE" and "thegatogazette.com" and swap in
whatever name and domain you actually want. Do this before you launch.

## How to add a new blog post

1. Duplicate `posts/post-template.html`
2. Rename the copy to something like `posts/your-headline-here.html`
   (lowercase, hyphens, no spaces — this becomes part of the URL, so make it
   describe the story: good for SEO)
3. Open it and replace:
   - The `<title>` and `<meta name="description">` tags
   - The `<h1>`, the `.dek` paragraph, and the byline date
   - The body paragraphs
4. Open `index.html`, copy one of the `<a class="card">` blocks in the
   `.grid` section, and point its `href` at your new post file
5. Save. Refresh. Done. No database, no CMS login, no build command.

## Categories

The tab filter on the homepage works off the `data-category` attribute on
each `<a class="card">`. Current values: `tbush`, `cdl`, `streamers`, `games`.
Add a new one by adding a new `<button data-filter="yourtag">` in the `.tabs`
div and tagging your cards with matching `data-category="yourtag"`.

## Deploying for free

Two solid free options, both work great for a static site like this and both
support a custom domain later:

### Option A — GitHub Pages (recommended, most durable)
1. Create a free GitHub account and a new repository
2. Upload this whole `site` folder's contents to the repo (drag-and-drop
   works fine on github.com, no command line required)
3. In the repo, go to Settings → Pages → set source to the main branch
4. GitHub gives you a live URL in about a minute
   (yourname.github.io/reponame)
5. Later, if you buy a real domain (e.g. thegatogazette.com), add it in the
   same Pages settings screen — GitHub Pages supports custom domains for free

### Option B — Netlify Drop (fastest, zero setup)
1. Go to https://app.netlify.com/drop
2. Drag this whole `site` folder onto the page
3. It's live instantly with a free Netlify subdomain
4. Add a custom domain later from the site settings, still free

## SEO basics already built in

- Every page has a unique `<title>` and meta description — fill these in
  honestly and specifically per post, this matters more than almost anything
  else for search
- `sitemap.xml` and `robots.txt` are included — once you have a real domain,
  submit the sitemap URL to Google Search Console (free) so Google finds new
  posts fast
- Semantic HTML (`<article>`, `<header>`, `<footer>`, one `<h1>` per page)
- Fast load time by default — no frameworks, no bloat, which Google's ranking
  systems reward
- Update `sitemap.xml` each time you add a real post (just add a `<url>` line)

## What's still a placeholder

- The brand name "The Gato Gazette" — swap for your real name
- The Twitter/X and Contact links in the footer — currently `#`
- Several posts are marked `[Draft placeholder]` in the body — those are
  intentionally left for you two to actually write, per your process
