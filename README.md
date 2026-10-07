# EVA B2B — three-game microsite

Plain HTML, CSS and JavaScript, reusing the portfolio's existing static stack and fonts. No packages, build tools, backend or routing. GitHub Pages serves the repository root on `main`.

## Edit content and media

Edit **games.config.js**. It contains the identity, optional contact links and exactly three games. Empty metadata and contact values are hidden. The full portfolio is intentionally absent from this EVA edition.

For each game, place files in its folder:

```
media/hollow-graves/hero.mp4
media/hollow-graves/image-01.jpg
media/hollow-graves/image-02.jpg
media/hollow-graves/image-03.jpg
media/reditus-umbrae/...
media/dreadwoods/...
```

Then set `video.src` and the image `src` values in the config. Video accepts MP4 or WebM with `type: 'file'`. `poster` is optional. `captions` accepts a WebVTT path. For YouTube/Vimeo or another video host, set `type: 'embed'` with its HTTPS **embed/player URL**, not a regular watch page. The iframe loads only after a click and requests no autoplay. Provider failures may display the provider's error message. Native-video failures and missing images show local fallbacks.

No genuine game media was supplied. All default media values are empty, with intentional placeholders; nothing claims to be real gameplay. Add 2–4 images per game with meaningful `alt` text. Optional `caption` should be short. Metadata is limited to supplied facts; add engine/version and development status when verified.

## Interaction

- Three diamonds select games without navigating or scrolling the page. Previous/next stop at the ends.
- Arrow keys switch games outside the video and gallery controls. Thumbnail arrow keys select images. Native player keys remain reserved for the player.
- Switching games stops and removes the previous player. No audio autoplays on page load or game changes.
- Desktop uses one viewport from 801px width and 580px height upward. Mobile, short windows and enlarged text can use the stacked layout. Media use contain fitting to avoid cropping evidence.

## Run locally

Serve this folder with a static web server, for example `python -m http.server 4175`. Open `http://localhost:4175`. Relative paths also support `/santiago-portfolio/` on GitHub Pages.

The deployment includes redirect-only compatibility files for the old URLs. They return to this single screen; old case studies and Books content are not deployed. Git history preserves the previous portfolio.
