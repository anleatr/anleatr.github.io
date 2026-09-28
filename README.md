# Asera

A personal website built with Astro and deployed on GitHub Pages.

## Edit the site

- Personal introduction: `src/pages/about.astro`
- Research index: `src/pages/research.astro`
- Blog posts: `src/content/blog/`
- Site name and GitHub link: `src/consts.ts`
- Colors and typography: `src/styles/global.css`

Each Markdown file in `src/content/blog/` becomes one blog post. Copy an existing post and update its frontmatter to publish a new entry.

## Local development

```sh
npm install
npm run dev
```

Push to `main` to build and deploy through GitHub Actions.
