# Mirador extension for MediaWiki

This is an extension to (https://mediawiki.org)[MediaWiki] which implements a build of (https://projectmirador.org/)[Mirador 3], including four plugins, for use in wikis. Mirador is an image viewer which lets you bring in, view, zoom in on, leaf through and compare (https://iiif.io/)[IIIF resources] from institutions and repositories all across the world. A parser function (`#mirador`) lets users configure and load an instance of Mirador.

## Demo
An example of the extension in action can be (https://codecs.vanhamel.nl/Show:IIIF/Mirador?&manifest=https://damsssl.llgc.org.uk/iiif/2.0/4623419/manifest.json&canvas=https://damsssl.llgc.org.uk/iiif/2.0/4623419/canvas/4623439.json)[seen on the CODECS website].

[Screenshot](/modules/assets/Mirador-extension-screenshot-BBC.png)

## Usage
Here is example of a straightforward setup with just the manifest and all of the options set to their default values:

```
{{#mirador:manifest=https://www.loc.gov/item/2004553940/manifest.json
}}
```

### Options
The parser function offers a select set of configuration options:

```
{{#mirador:manifest=A IIIF manifest URL is currently mandatory. This value is overridden by the URL query parameter 'manifest' if there happens to be one. See below.
  |theme=light (default) or dark
  |canvasid=The URI of the @id of the specific canvas you want to begin with, which defaults to that of the first canvas in the sequence. Its value is overridden by the URL query parameter 'canvas'. See below for one way of exposing the canvas id in a public link.
  |workspacetype=mosaic (default) or elastic
  |thumbnavposition=off (default), far-bottom or far-right. Represents the position of thumbnail navigation.
  |imagetoolsopen=true, false (default). Whether the image tools should be open by default.
  |imagetoolsenabled=true, false (default).
  |canvaslinkenabled=true, false (default). Whether or not the Canvas Link plugin should be enabled.
  |pageurl=The base page URL for use with the Canvas Link plugin if enabled. This must contain a `?` for allowing URL search parameters to be appended. See below.
}}
```

### Share a link with a specific manifest and canvas
The CanvasLink plugin lets you share a link to your Mirador-using wiki page with the currently selected canvas. When the shared link is followed, the relevant manifest and canvas appended to the URL will be automatically picked up by the viewer.

```
{{#mirador:manifest=...
|canvaslinkenabled=true
|pageurl=https:{{fullurl:{{FULLPAGENAME}}}}? or {{fullurl:{{FULLPAGENAME}}}}?
(depending on your local settings)
}}
```

It is entirely up to you whether the link should point to the current page (hence the use of `{{FULLPAGENAME}}` in this example), or perhaps to some other dedicated page with the Mirador viewer.

## Version history
- 0.1 - Beta release. Mirador 3.3.0, with four plugins: Image Tools (developed by the Mirador Project) and Image Cropper, CanvasLink and Text Overlay (developed by Bavarian State Library).

## Known limitations
- You can use the parser function only once on a single page.
