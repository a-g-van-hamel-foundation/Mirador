# Mirador extension for MediaWiki

This is an extension to [MediaWiki](https://mediawiki.org) which implements a build of [Mirador v3](https://projectmirador.org/), including four plugins, for use in wikis. Mirador is a media viewer which lets you bring in, view, zoom in on, leaf through and compare [IIIF resources](https://iiif.io/) from institutions and repositories all across the world. A parser function (`#mirador`) lets users configure and load an instance of Mirador.

## Demo
A example of the extension in action can be [seen on the CODECS website](https://codecs.vanhamel.nl/Show:IIIF/Mirador?&manifest=https://damsssl.llgc.org.uk/iiif/2.0/4623419/manifest.json&canvas=https://damsssl.llgc.org.uk/iiif/2.0/4623419/canvas/4623439.json).

![Screenshot](/modules/assets/Mirador-extension-screenshot-BBC.png)

## Usage
Here is example of a straightforward setup with just the manifest and all of the options kept at their default values:

```
{{#mirador:manifest=https://www.loc.gov/item/2004553940/manifest.json }}
```

### Options
The parser function offers a select set of configuration options:

```
{{#mirador:manifest=A IIIF manifest URL is currently mandatory. This value is overridden by the URL query parameter 'manifest' if there happens to be one (see below). To work with multiple manifests, add three semi-colons (no spaces) between each URL.
  |canvasid=The URI of the @id of the specific canvas you want to begin with, which defaults to that of the first canvas in the sequence. Its value is overridden by the URL query parameter 'canvas'. See below for one way of exposing the canvas id in a public link. This parameter does not currently work for additional canvas windows if you have any.
  |catalogurls=Optionally, the manifest URLs for any additional IIIF resources you wish to make available for selection by users, without pre-loading them in the viewer. Users can access this list of resources by clicking the circular button (usually blue) in the top left corner. For multiple manifests, add three semi-colons (no spaces) between each URL.
  |restricttolabels=The labels of the canvases that should be presented. Use this if all you want to show in the Mirador viewer is a selection of one or multiple canvases. For each canvas, specify the `label` and use commas to delimit the list.
  |theme=light (default) or dark
  |workspacetype=mosaic (default) or elastic
  |windowsmaximized=true or false (default). Whether or not canvas windows should appear in their maximized mode of presentation.
  |thumbnavposition=off (default), far-bottom or far-right. Represents the position of thumbnail navigation.

  |imagetoolsopen=true, false (default). Whether the image tools should be open by default.
  |imagetoolsenabled=true, false (default).
  |canvaslinkenabled=true, false (default). Whether or not the Canvas Link plugin should be enabled.
  |pageurl=The base page URL for use with the Canvas Link plugin if enabled. This must contain a `?` for allowing URL search parameters to be appended. See below.   
}}
```

### Share a link with a specific manifest and canvas
The CanvasLink plugin lets you share a link to your Mirador-using wiki page with the currently selected canvas. The share icon is found in the top right menu. When the shared link is followed, the relevant manifest and canvas appended to the URL will be automatically picked up by the viewer.

```
{{#mirador:manifest=...
|canvaslinkenabled=true
|pageurl=https:{{fullurl:{{FULLPAGENAME}}}}? or {{fullurl:{{FULLPAGENAME}}}}?
(depending on your local settings)
}}
```

It is entirely up to you whether the link should point to the current page (hence the use of `{{FULLPAGENAME}}` in this example), or perhaps to some other dedicated page with the Mirador viewer.

## Jump to a new canvas
Use the parser function `#mirador-change-canvas` if you want to add a button that makes the viewer jump a specific canvas.

```
{{#mirador-change-canvas:window=mirador-window-1
|canvas=https://www.isos.dias.ie/manuscript/RIA_MS_23_E_25/seq/010.tif
|class=btn btn-outline-dark btn-sm
|text=Show p. 8 in Mirador viewer
|scroll=false
|xywh=200,140,2500,2500
}}
```
- `window` = the id of the canvas window that should be updated. That of the first window is automatically named `mirador-window-1` and any additional one you may have added is numbered consecutively (`mirador-window-2`, etc.).
- `canvas` = the new canvas ID.
-  `scroll` = if set to true, this function will attempt to scroll Mirador into view.
- `xywh` = the coordinates used for zooming in on the canvas.
- `text` = button text
- `class` = button class

## Version history
- 0.3 - Moved custom code out of Webpack. Added new params (windowsmaximized, restricttolabels, catalogurls). Added support for multiple manifests. Added parser function (mirador-change-canvas) for jumping to a new canvas and added js to let you fetch the current canvas ID.
- 0.2 - Upgraded build. Added check for both loading and DOMContentLoad events to address occasional TypeError issue (e.g. `rc is not defined`). Fixed issue with spaces in URLs.
- 0.1 - Beta release. Mirador 3.3.0, with four plugins: [Image Tools](https://github.com/ProjectMirador/mirador-image-tools) (developed by the Mirador Project) and [Image Cropper](https://github.com/dbmdz/mirador-imagecropper), [CanvasLink](https://github.com/dbmdz/mirador-canvaslink) and [Text Overlay](https://github.com/dbmdz/mirador-textoverlay) (developed by the Bayerische Staatsbibliothek/Bavarian State Library).

## Known limitations
- You can use the parser function only once on a single page.
