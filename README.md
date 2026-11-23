# bzen-scripts

Front-end scripts and styles that bzen.io loads from jsDelivr. Each file is self-contained: drop the stylesheet in the page head, the script before `</body>`, and an empty mount `div` where the widget should appear.

Always load a tagged version (`@<commit-sha>`), never a branch, so live pages don't change by accident. jsDelivr minifies on request: use `.min.js` / `.min.css`.

## Guides

### SaaS color palettes (`/guides/saas-color-palettes`)

```html
<!-- Page head -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mickmoney/bzen-scripts@<commit-sha>/guides/color-palettes.min.css">

<!-- Embeds in the page body -->
<div id="bz-color-studio"></div>
<div id="bz-color-gradients"></div>

<!-- Before </body> -->
<script src="https://cdn.jsdelivr.net/gh/mickmoney/bzen-scripts@<commit-sha>/guides/color-palettes.min.js" defer></script>
```

### B2B SaaS landing page templates (`/guides/b2b-saas-landing-page-templates`)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mickmoney/bzen-scripts@<commit-sha>/guides/landing-page-templates.min.css">

<div id="bztJump"></div>                 <!-- optional jump links -->
<div id="bz-landing-templates"></div>    <!-- template previews -->

<script src="https://cdn.jsdelivr.net/gh/mickmoney/bzen-scripts@<commit-sha>/guides/landing-page-templates.min.js" defer></script>
```

### B2B SaaS campaign landing page templates (`/guides/b2b-saas-campaign-landing-page-templates`)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mickmoney/bzen-scripts@<commit-sha>/guides/campaign-templates.min.css">

<div id="bztJump"></div>
<div id="bz-campaign-templates"></div>

<script src="https://cdn.jsdelivr.net/gh/mickmoney/bzen-scripts@<commit-sha>/guides/campaign-templates.min.js" defer></script>
```

A `<tbody id="bztTable">` on the page is filled with a summary row per template only if it's empty, so a static table in Webflow is left alone.

## Releasing a change

1. Edit the file and commit.
2. Tag a new version: `git tag v1.0.1 && git push --tags`.
3. Update the version in the page's custom code in Webflow, then publish.
