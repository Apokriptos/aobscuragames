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

The sidebar, header, video/pitch row, gallery  share the same DOM for all games. All video/image frames use `aspect-ratio: 16 / 9`; outlines do not alter frame dimensions. The desktop shell was checked at 1920x1080 and 1366x768. Below 1101px the pitch moves below the video; below 701px the sidebar becomes a compact header .

Hollow uses cold paper and astral diagrams; Reditus uses parchment and ritual geometry; Dreadwoods uses bone paper and branches. SVG texture/motifs remain separate from real controls. The six small JPEG crops under `assets/themes` are temporary decorative sidebar artwork and project symbols extracted from the supplied references, not gameplay screenshots. Replace them when final assets are available. The supplied Aobscura logo is used directly. No full reference screenshot is used as a page background.

## Run and publish

Serve this directory with any static server. Example: `python -m http.server 4175 --directory outputs/eva-b2b` from the workspace root. Publish this directory's contents to the GitHub Pages root; `.nojekyll` is included. Existing legacy routes redirect to the showcase.

Keyboard: the three sidebar buttons switch games; gallery arrow keys move focus and Enter selects. Reduced-motion preferences are respected. Video loads on explicit interaction and stops when switching games.

The right navigation rail has been removed from HTML, CSS and JavaScript. The two-column shell reserves no rail space. Global game-switching arrow handlers have been removed; standard Tab and Enter operate the left buttons.

Visual refinement: separate edge-art SVGs for each theme, warmer fibrous parchment, stronger display typography and sidebar artwork. Decorative layers remain outside the media content and do not receive pointer input.

Screen-fit pass: media dimensions are constrained by both viewport width and available height. All three themes were checked at 1920x1080, 1366x768, 993x892, 390x844 and 375x667 for full content visibility and 16:9 frame geometry. Nine small decorative crops supply binding edges, outer edges and paper grain from the supplied references; they contain no media frames or interface controls.


## Game documents
The right rail selects Main, Pitch Deck, Development Plan, or Road Map for the active game.
Game switching returns to Main. Document selection starts at page 1.

Upload original PDFs to `media/<game-id>/docs/` using these filenames:
- `pitch-deck.pdf`
- `development-plan.pdf`
- `roadmap.pdf`

Game IDs: `hollow-graves`, `reditus-umbrae`, `dreadwoods`.
Each game's `documents` config controls the title, description, and relative `src`.
Optional `pageLabels` supplies thumbnail labels; otherwise only page numbers appear.
Missing/failed documents show “Document forthcoming.” No conversion or build step is needed.

`documents.js` lazily loads PDF.js 5.4.624 and its matching worker from jsDelivr.
It contains pages at their original proportions, renders the selected page at capped device
resolution, progressively renders small visible thumbnails, and cancels/releases stale work.
The CDN must be reachable. Open/download actions point to the original PDF; same-origin files
support direct download. Keyboard Left/Right changes pages in document views.
On mobile the document body scrolls vertically so all metadata/actions remain accessible.
