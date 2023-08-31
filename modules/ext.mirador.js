$(document).ready(function(){

const instanceId = 'miradorframe';
const targetEl = document.getElementById(instanceId);
const urlParams = new URLSearchParams(location.search);

// Manifest from URL takes precedence over URL from parser function
const manifestFromUrl = urlParams.get('manifest');
// decodeURIComponent ?
const iiifManifestUrl = ( manifestFromUrl !== undefined && manifestFromUrl !== null && manifestFromUrl !== '' )
    ? manifestFromUrl.replaceAll(' ', '_')
    : targetEl.getAttribute('data-manifest-url');
const manifestArr = iiifManifestUrl.split(";;;");

const canvasIdsFromUrl = urlParams.getAll('canvas');
//const canvasIdFromPF = targetEl.getAttribute('data-canvasid');
let canvasId = ( canvasIdsFromUrl[0] !== undefined && canvasIdsFromUrl[0] !== null && canvasIdsFromUrl[0] !== '' ) ? canvasIdsFromUrl[0] : targetEl.getAttribute('data-canvasid');

const selectedTheme = targetEl.getAttribute('data-theme');
const workspaceType = targetEl.getAttribute('data-workspace-type');
const thumbNavPosition = targetEl.getAttribute('data-thumbnav-position');
const imageToolsOpen = targetEl.getAttribute('data-imagetools-open');
const imageToolsEnabled = targetEl.getAttribute('data-imagetools-enabled');
//const textOverlayEnabled = targetEl.getAttribute('data-textoverlay-enabled');
const canvasLinkEnabled = targetEl.getAttribute('data-canvaslink-enabled');
const mainColor = '#1967d2';
const pageUrl = targetEl.getAttribute('data-page-url');
const windowsMaximizedParam = targetEl.getAttribute('data-windows-maximized') ?? false;
const windowsMaximized = ( windowsMaximizedParam == 'true' ) ? true : false;
//const annotationsEnabled = targetEl.getAttribute('data-annotations-enabled') ?? 'false';

var catalogObjArr = [];
const catalogUrls =  targetEl.getAttribute('data-catalog-urls').split(";;;") ?? [];
for (var i = 0; i < catalogUrls.length; i++) {
  var obj = {};
  obj["manifestId"] = catalogUrls[i];
  catalogObjArr[i] = obj;
}

var filterManifestItems = function( url, action ) {
  if ( action.type === 'mirador/RECEIVE_MANIFEST' ) {
    var targetEl = document.getElementById('miradorframe');
    const canvasLabelsOnly = targetEl.getAttribute('data-labels-only') ?? false;
    if ( canvasLabelsOnly == false ) {
      return;
    }
    //const canvasLabelsOnly = new URLSearchParams(window.location.search).get('pages');
    if ( action['manifestJson']['@context'] == 'http://iiif.io/api/presentation/3/context.json' ) {
      var apiVersion = '3'; 
    } else if ( action['manifestJson']['@context'] == 'http://iiif.io/api/presentation/2/context.json' ) {
      var apiVersion = '2';
    } else {
      var apiVersion = '1';
    }
    const labelArr = canvasLabelsOnly.split(',').map(function(item) {
      return item.trim();
    });
    //const pagesArr = pageLabels.split(',').map( (page) => new Number(page) );
    if ( apiVersion == '2' || apiVersion == '1' ) {
      var canvases = action['manifestJson']['sequences'][0]['canvases'];
      const selectCanvases = filterCanvasesByLabel( canvases, labelArr );
      action['manifestJson']['sequences'][0]['canvases'] = selectCanvases;
    } else if ( apiVersion == '3') {
      var canvases = action['manifestJson']['items'];
      const selectCanvases = filterCanvasesByLabel( canvases, labelArr );
      action['manifestJson']['items'] = selectCanvases;
    }
  }
};

const windowsArr = [];
for (var i = 0; i < manifestArr.length; i++) {
  var manifestUrl = manifestArr[i];
  var windowId = 'mirador-window-' + ( i+1 );
  // @todo - support canvasid for windows other than the first.
  var localCanvasId = ( i == 0 ) ? canvasId : "";
  var window = {
    id: windowId,
    manifestId: manifestUrl,
    canvasId: canvasId,
    maximized: windowsMaximized,
    imageToolsEnabled: imageToolsEnabled,
    imageToolsOpen: imageToolsOpen,
    imageCropper: {
      enabled: true,
      active: false
      },
    textOverlay: {
      enabled: true,
      visible: false
    },
    annotation: {
      enabled: false
    }
  };
  windowsArr[i] = window;
}

/* Config for Mirador */
const config = {
  id: 'miradorframe',
  window: {
      //allowFullscreen: true,
      sideBarOpenByDefault: false,
      defaultView: 'single',
      //defaultSideBarPanel: 'annotations',
      views: [
        { key: 'single', behaviors: ['individuals', 'paged'] },
        { key: 'book', behaviors: ['paged'] },
        { key: 'scroll', behaviors: ['continuous'] },
        { key: 'gallery' }
      ],
      imageToolsEnabled: imageToolsEnabled,
      imageToolsOpen: imageToolsOpen,
      canvasLink: {
        active: true,
        enabled: canvasLinkEnabled,
        singleCanvasOnly: false,
        getCanvasLink: (manifestId, canvases) => {
          //const objectId = manifestId.split("/").slice(-2)[0];
          //const canvasIndices = canvases.map(
          //  (canvas) => canvas.id.split("/").slice(-1)[0]
          //);
          const objectId = manifestId;
          const canvasIds = canvases.map(
            (canvas) => canvas.id
          );
          const canvasIdsJoined = canvasIds.join( "," );
          const pageSearchParams = `&manifest=${objectId}&canvas=${canvasIdsJoined}`;
          return pageUrl + pageSearchParams;
        },
      },
    },
  windows: 
    windowsArr,
    selectedTheme: selectedTheme,
    theme: {
      palette: {
        primary: {
          main: mainColor,
        },
      },
    },
    workspace: {
      type: workspaceType
    },
    thumbnailNavigation: {
      defaultPosition: thumbNavPosition,
    },
  catalog: catalogObjArr,
  requests: {
    postprocessors: [ 
      filterManifestItems
     ]
  }
};
/* Optionally, add annotations plugin
However, importing plugin
if ( annotationsEnabled == 'true' ) {
  const Mirador = MiradorLib.default.Mirador;
  const MiradorPlugins = MiradorLib.default.MiradorPlugins;
  const MiradorAnnotationPlugins = MiradorLib.MiradorAnnotationPlugins;
  const annotationAdapter = (canvasId) => new MiradorLib.LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`);
  config['annotation'] = {};
  config['annotation']['adapter'] = annotationAdapter;
  config['annotation']['exportLocalStorageAnnotations'] = true;
  config['annotation']['enabled'] = false;
  MiradorPlugins.push( MiradorAnnotationPlugins );
  var miradorInstance = Mirador.viewer( config, MiradorPlugins );
} else {
 //
}
*/
const Mirador = MiradorLib.default.Mirador;
const MiradorPlugins = MiradorLib.default.MiradorPlugins;
const miradorInstance = Mirador.viewer( config, MiradorPlugins );

/**
 * Methods for changing the canvas
 * Elements with 'btn-change-canvas', and ids:
 * data-canvas-window - should default to canvas-window-1
 * data-canvas 
 * data-scroll = true/false - call to scrollIntoView
 */
function initChangeCanvas( miradorInstance ) {
  var btnOpenCanvases = document.getElementsByClassName("btn-change-canvas");
  if (typeof btnOpenCanvases !== 'undefined' && btnOpenCanvases.length > 0) {
      for (var i = 0, len = btnOpenCanvases.length; i < len; i++) {
          setButtonToChangeCanvas( miradorInstance, btnOpenCanvases[i] );
      }
  }
}

function setButtonToChangeCanvas( miradorInstance, btn ) {
    btn.addEventListener(
        "click",
         function() {
            // default to first window if not specified
            var canvasWindowId = this.getAttribute('data-canvas-window') ?? 'mirador-window-1';
            var canvasId = ( this.getAttribute('data-canvas') !== "" ) ? this.getAttribute('data-canvas') : "";
            var xywh = this.getAttribute('data-xywh') ?? "";
            var scrollIntoView = this.getAttribute('data-scroll') ?? 'true';

            // Access values before dispatch destroys viewers
            var state = miradorInstance.store.getState();
            if ( state['viewers'][canvasWindowId] == null ) {
              var rotation = 0;
              var flip = false;
            } else {
              var rotation = state['viewers'][canvasWindowId]['rotation'];
              var flip = state['viewers'][canvasWindowId]['flip'];
            }

            // Best to use single view for these kinds of actions
            miradorInstance.store.dispatch(Mirador.actions.setWindowViewType(canvasWindowId, "single"));

            // set canvas
            if ( canvasId == "next" ) {
                var canvasAction = Mirador.actions.setNextCanvas( canvasWindowId );
            } else if ( canvasId == "previous" ) {
                var canvasAction = Mirador.actions.setPreviousCanvas( canvasWindowId );
            } else {
                var canvasAction = Mirador.actions.setCanvas( canvasWindowId, canvasId );
            }
            miradorInstance.store.dispatch( canvasAction );

            // Set viewport zoom - currently disabled
            if ( xywh !== "" ) {
              var view = getZoomLevelView( xywh, rotation, flip );
              var zoomAction = Mirador.actions.updateViewport( canvasWindowId, view );
              //miradorInstance.store.dispatch(zoomAction);
              setTimeout(() => {
                miradorInstance.store.dispatch(zoomAction);
              }, 500 );
            }

            if ( scrollIntoView == 'true' ) {
              document.getElementById( canvasWindowId ).scrollIntoView();
            }
        },
        false
    );
}

function returnIfNotNull( input, fallback ) {
  if ( input !== null ) {
    return input;
  } else {
    return fallback;
  }
}  
/**
 * cf. https://github.com/utkdigitalinitiatives/exhibits/blob/main/src/components/yith/Mirador.js
 */
function getZoomLevelView( xywh, rotation, flip ) {
  arr = xywh.split(",");
  // Box to zoom to
  var boxToZoom = {
    x: parseInt( arr[0] ),
    y: parseInt( arr[1] ),
    width: parseInt( arr[2] ),
    height: parseInt( arr[3] )
  };
  var zoomCenter = {
    x: boxToZoom.x + boxToZoom.width / 2,
    y: boxToZoom.y + boxToZoom.height / 2
  };
  var res = {
    flip: flip,
    rotation: parseInt(rotation),
    x: zoomCenter.x,
    y: zoomCenter.y,
    zoom: 1 / boxToZoom.width
  };
  return res;
}

/**
 * Attempt at reverse engineering zoom to xywh fragment 
 * Best bet, cannot really work
 * Need to calculate height (image, window)
 * @param window HTMLelement
 */
function getRegionCoordinates( x, y, zoom ) {
  const boxToZoomWidth = 1 / zoom ;
  const boxToZoomheight = boxToZoomWidth ;
  //const boxToZoomheight = window.innerHeight; // @todo calculate that of the current window
  const boxToZoomX = x - ( boxToZoomWidth * 2 );
  // y: boxToZoom.y + boxToZoom.height / 2
  const boxToZoomY = y - ( boxToZoomheight * 2 );
  const str = boxToZoomX.toString() + "," + boxToZoomY.toString() + "," + boxToZoomWidth.toString() + "," + boxToZoomWidth.toString();
  return str;
}

/* 
 * Retrieves current canvas ID, prints it to a textarea and copies it to clipboard.
*/
function showCurrentCanvasID( miradorInstance, canvasWindowId ) {
  const canvasNotifier = document.getElementById( "iiif-canvas-notifier" );
  if ( canvasNotifier !== null ) {
    var canvasNotifierBtn = canvasNotifier.getElementsByTagName("button")[0];
    var forCanvasWindowId = canvasNotifier.getAttribute( 'data-window' );
    canvasNotifierBtn.addEventListener( "click", (event) => {
      var state = miradorInstance.store.getState();
      var visibleCanvases = state['windows'][canvasWindowId]['visibleCanvases'][0];
      var textarea1 = canvasNotifier.getElementsByTagName("textarea")[0];
      textarea1.value = visibleCanvases;
      navigator.clipboard.writeText( visibleCanvases );
    });
  }
}

/**
 * Return array of canvases based on label
 * @param array canvases 
 * @param array labelNames 
 * @returns 
 */
function filterCanvasesByLabel( canvases, labelNames ) {
  var newCanvases = [];
  labelNames.map( (label) => canvases.forEach( el => {
      //console.log( el['label'] );
      if ( el['label'] == label ) {
        newCanvases.push( el );
      }
    })
  );
  return newCanvases;
}

function initAll( miradorInstance, canvasWindowId ) {
  if ( typeof Mirador !== 'undefined' ) {
    miradorInstance;
    initChangeCanvas( miradorInstance );
    showCurrentCanvasID( miradorInstance, canvasWindowId );
  } else {
    setTimeout(function() {
      console.log( "Trying to load Mirador again..." );
      miradorInstance;
      initChangeCanvas( miradorInstance );
      showCurrentCanvasID( miradorInstance, canvasWindowId );
    }, 1000);
  }
}

initAll( miradorInstance, 'mirador-window-1' );

});
