# EVA game showcase

A static, shared three-game interface. No build step or dependencies required.

## Edit content

Edit `games.config.js`. Each game has a title, subtitle, genre, two short pitch paragraphs, logo, video and six gallery images. The gallery displays one selected image and the five remaining thumbnails. Empty media paths show honest placeholders.

- Video file: set `video.type` to `file` and `video.src` to an MP4 path. Optional poster and WebVTT captions are supported.
- Embedded player: set type to `embed` and supply the provider's embed URL.
- Images: set each `src`, descriptive `alt`, and optional `caption`.
- Studio mark/contact links: edit `identity`.
- Palette, fonts, textures, motifs and sidebar artwork: edit the `themes` records.

Paths resolve relative to the site root and work under the GitHub Pages repository subpath. No secrets belong in this public config.

## Layout and art

The sidebar, header, video/pitch row, gallery and index rail share the same DOM for all games. All video/image frames use `aspect-ratio: 16 / 9`; outlines do not alter frame dimensions. The desktop shell was checked at 1920x1080 and 1366x768. Below 1101px the pitch moves below the video; below 701px the sidebar becomes a compact header and the index rail becomes horizontal.

Hollow uses cold paper and astral diagrams; Reditus uses parchment and ritual geometry; Dreadwoods uses bone paper and branches. SVG texture/motifs remain separate from real controls. The six small JPEG crops under `assets/themes` are temporary decorative sidebar artwork and project symbols extracted from the supplied references, not gameplay screenshots. Replace them when final assets are available. The Aobscura mark is temporary. No full reference screenshot is used as a page background.

## Run and publish

Serve this directory with any static server. Example: `python -m http.server 4175 --directory outputs/eva-b2b` from the workspace root. Publish this directory's contents to the GitHub Pages root; `.nojekyll` is included. Existing legacy routes redirect to the showcase.

Keyboard: sidebar buttons and diamonds switch games, rail arrows move previous/next, gallery arrow keys move focus and Enter selects. Reduced-motion preferences are respected. Video loads on explicit interaction and stops when switching games.
