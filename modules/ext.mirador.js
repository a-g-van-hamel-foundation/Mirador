/**
 * 
 * Referene: https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js 
 */
$(document).ready(function() {

const instanceId = 'miradorframe';
const targetEl = document.getElementById( instanceId );
const urlParams = new URLSearchParams(location.search);
const valueSep = ( targetEl.hasAttribute('data-valuesep') ) ? targetEl.getAttribute('data-valuesep') : "^^";

// Identifiers. Manifest from URL takes precedence over URL from parser function
const manifestFromUrl = urlParams.get('manifest');
	// decodeURIComponent ?
const manifestFromSource = ( targetEl.hasAttribute('data-manifest-url') ) ? targetEl.getAttribute('data-manifest-url') : "https://www.loc.gov/item/2004553940/manifest.json";
const iiifManifestUrl = ( manifestFromUrl !== undefined && manifestFromUrl !== null && manifestFromUrl !== '' )
		? manifestFromUrl.replaceAll(' ', '_')
		: manifestFromSource;
//const manifestArr = iiifManifestUrl.split( valueSep );
const manifestArr = iiifManifestUrl.split( valueSep ).map(function(item) {
	return item.trim();
});

const canvasIdsFromUrl = urlParams.getAll('canvas');
const canvasIdFromSource = ( targetEl.hasAttribute('data-canvasid') ) ? targetEl.getAttribute('data-canvasid') : null;
const canvasId = ( canvasIdsFromUrl[0] !== undefined && canvasIdsFromUrl[0] !== null && canvasIdsFromUrl[0] !== '' ) 
	? canvasIdsFromUrl[0] 
	: canvasIdFromSource;

// Standard Mirador options
const selectedTheme = targetEl.getAttribute('data-theme');
const mainColor = targetEl.getAttribute('data-main-color');
const workspaceType = targetEl.getAttribute('data-workspace-type');
const thumbNavPosition = targetEl.getAttribute('data-thumbnav-position');
const windowsMaximized = ( targetEl.getAttribute('data-windows-maximized') == 'true' ) ? true : false;
const windowsDefaultView = targetEl.getAttribute('data-windows-defaultview');
const allowWindowsClose = ( targetEl.getAttribute('data-windows-allow-close') == 'false' ) ? false : true;
const allowWindowsFullscreen = ( targetEl.getAttribute('data-windows-allow-fullscreen') == 'false' ) ? false : true;
const allowTopMenuButton = ( targetEl.getAttribute('data-allow-top-menu-button') == 'false' ) ? false : true;
const highlightAllAnnotations = ( targetEl.getAttribute('data-highlight-all-annotations') == 'true' ) ? true : false;
const hideWindowTitle = ( targetEl.getAttribute('data-hide-window-title') == 'true' ) ? true : false;

// console.log( `selectedTheme: ${selectedTheme} / mainColor : ${mainColor} / workspaceType: ${workspaceType} / allowWindowsClose: ${allowWindowsClose} / allowWindowsFullscreen: ${allowWindowsFullscreen} / allowTopMenuButton: ${allowTopMenuButton} / highlightAllAnnotations: ${highlightAllAnnotations} / hideWindowTitle: ${hideWindowTitle} ` );

var catalogObjArr = [];
const catalogUrls = targetEl.hasAttribute('data-catalog-urls') ? targetEl.getAttribute('data-catalog-urls').split( valueSep ) : [];
for (var i = 0; i < catalogUrls.length; i++) {
	var obj = {};
	obj["manifestId"] = catalogUrls[i].trim();
	catalogObjArr[i] = obj;
}

// Mirador plugins:
const imageToolsEnabled = ( targetEl.getAttribute('data-imagetools-enabled') == 'false' ) ? false : true;
const imageToolsOpen = ( targetEl.getAttribute('data-imagetools-open') == 'true' ) ? true : false;
const textOverlayEnabled = ( targetEl.getAttribute('data-textoverlay-enabled') == 'false' ) ? false : true;
const imageCropperEnabled = ( targetEl.getAttribute('data-imagecropper-enabled') == 'false' ) ? false : true;
const canvasLinkEnabled = ( targetEl.getAttribute('data-canvaslink-enabled') == 'true' ) ? true : false;
const currentUrl = 'https:' + mw.config.get( 'wgServer' ) + mw.config.get( 'wgScriptPath' ) + location.pathname + "?";
const pageUrl = ( targetEl.hasAttribute('data-page-url') ) ? targetEl.getAttribute('data-page-url') : currentUrl;
const annotationsEnabled = ( targetEl.getAttribute('data-annotations-enabled') == 'true' ) ? true : false;

var filterManifestItems = function( url, action ) {
	if ( action.type !== 'mirador/RECEIVE_MANIFEST' ) {
		return;
	}
	var targetEl = document.getElementById('miradorframe');
	if ( targetEl.hasAttribute('data-canvasids-only') ) {
		var selectBy = 'canvasid';
		var canvasIdsOnly = targetEl.getAttribute('data-canvasids-only');
		if ( canvasIdsOnly.trim() == "" ) {
			return;
		}
		// @todo commas are not great as universal delimiters
		var canvasidArr = canvasIdsOnly.split( valueSep ).map(function(item) {
			return item.trim();
		});
	} else if ( targetEl.hasAttribute('data-labels-only') ) {
		var selectBy = 'label';
		var canvasLabelsOnly = targetEl.getAttribute('data-labels-only');
		if ( canvasLabelsOnly.trim() == "" ) {
			return;
		}
		//const canvasLabelsOnly = new URLSearchParams(window.location.search).get('pages');
		var labelArr = canvasLabelsOnly.split( valueSep ).map(function(item) {
			return item.trim();
		});
	} else {
		return;
	}

	var apiVersion = getApiVersionFromAction( action );
	if ( apiVersion == '2' || apiVersion == '1' ) {
		var canvases = action['manifestJson']['sequences'][0]['canvases'];			
	} else if ( apiVersion == '3') {
		var canvases = action['manifestJson']['items'];
	}

	if ( selectBy == 'canvasid' ) {
		var selectCanvases = filterCanvasesByCanvasId( canvases, canvasidArr, apiVersion );
	} else if ( selectBy == 'label' ) {
		var selectCanvases = filterCanvasesByLabel( canvases, labelArr );
		//const pagesArr = pageLabels.split(',').map( (page) => new Number(page) );
	}

	if ( apiVersion == '2' || apiVersion == '1' ) {
		action['manifestJson']['sequences'][0]['canvases'] = selectCanvases;
	} else if ( apiVersion == '3') {
		action['manifestJson']['items'] = selectCanvases;
	}

};

function setCanvasesBy() {

}

function getApiVersionFromAction( action ) {
	if ( action['manifestJson']['@context'] == 'http://iiif.io/api/presentation/3/context.json' ) {
		return '3'; 
	} else if ( action['manifestJson']['@context'] == 'http://iiif.io/api/presentation/2/context.json' ) {
		return '2';
	} else {
		return '1';
	}
}

const Mirador = MiradorLib.default.Mirador;
const MiradorPlugins = MiradorLib.default.MiradorPlugins;

/* Optionally, add annotations plugin */
if ( annotationsEnabled == true ) {
	const MiradorAnnotationPlugin = MiradorLib.default.MiradorAnnotationPlugin;
	//const LocalStorageAdapter = new MiradorPlugins.LocalStorageAdapter;
	const annotationAdapter = MiradorLib.default.adapter;
	//const annotationAdapter = (canvasId) => LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`);
	var annotConfig = {
		adapter: MiradorLib.default.adapter,
		exportLocalStorageAnnotations: true,
		enabled: true
	};
	MiradorPlugins.push( MiradorAnnotationPlugin );

	// @DG test @todo ext.localstorage.js
	mw.loader.using( [ 'ext.localstorage' ], function ( require ) {	
		var LocalStorageUtil = require( 'ext.localstorage' );
		// Should be a dynamic function
		var canvasIds = [];
		$.getJSON( iiifManifestUrl, function( data ) {
			var canvases = data.sequences[0].canvases;
			canvases.forEach( function (canvas) {
				canvasIds.push( canvas['@id'] );
			});
			var annotArr = LocalStorageUtil.initFetchAnnotations( canvasIds );
		});
	} );

	getAnnotationsFromStorage( iiifManifestUrl, true, false );

} else {
	//MiradorPlugins.annotationsPlugin = null;
	//MiradorPlugins.LocalStorageAdapter = null;
	//console.log( 'Annotation plugins not enabled...' );
	var annotConfig = {};
}

const windowsArr = [];
for (var i = 0; i < manifestArr.length; i++) {
	var manifestUrl = manifestArr[i];
	var windowId = 'mirador-window-' + ( i+1 );
	// @todo - support canvasid for windows other than the first.
	var localCanvasId = ( i == 0 ) ? canvasId : "";
	var window = {
		id: windowId,
		manifestId: manifestUrl,
		canvasId: localCanvasId,
		maximized: windowsMaximized,
		imageToolsEnabled: imageToolsEnabled,
		imageToolsOpen: imageToolsOpen,
		imageCropper: {
			enabled: imageCropperEnabled,
			active: false
			},
		textOverlay: {
			enabled: textOverlayEnabled,
			visible: false
		},
		annotation: {
			enabled: annotationsEnabled
		},
		allowClose: allowWindowsClose,
		allowFullscreen: allowWindowsFullscreen
	};
	windowsArr[i] = window;
}

/* Config for Mirador */
const config = {
	id: 'miradorframe',
	window: {
			defaultView: windowsDefaultView,
			allowFullscreen: allowWindowsFullscreen, // WindowTopBar only
			allowClose: allowWindowsClose,
			sideBarOpenByDefault: false,
			highlightAllAnnotations: highlightAllAnnotations,
			hideWindowTitle: hideWindowTitle,
			allowTopMenuButton: allowTopMenuButton,
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
					const objectId = manifestId;
					//const objectId = manifestId.split("/").slice(-2)[0];
					const canvasIds = canvases.map(
						(canvas) => canvas.id
					);
					//const canvasIndices = canvases.map(
					//  (canvas) => canvas.id.split("/").slice(-1)[0]
					//);
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
				}
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
	},
	annotation: annotConfig
};

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

/**
 * 
 * @param {*} annotPageId 
 * @param {*} btnId
 */
function setButtonToLoadAnnotationStorage( btnId ) {
	var btn = document.getElementById( btnId );
	if ( btn !== null ) {
		var annotPageId = btn.getAttribute( 'data-pageid' );
		btn.addEventListener( "click", function() {
			transferAnnotationStrToLocalStorage( annotPageId );
		});
	} else {
		// console.log( "Button not found..." );
	}
}

function setButtonToClearStorage( iiifManifestUrl, btnId ) {
	var btn = document.getElementById( btnId );
	if ( btn !== null ) {
		btn.addEventListener( "click", function() {
			getAnnotationsFromStorage( iiifManifestUrl, false, true );
		});
	} else {
		// console.log( "Button not found..." );
	}
}

function setButtonToChangeCanvas( miradorInstance, btn ) {
		btn.addEventListener( "click", function() {
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

/**
 * Enable button to print annotations to textarea
 */
function setButtonToPrintAnnotations( btnId ) {
	//var id = 'storage-annotations-textarea-button';
	var storAnnotBtn = document.getElementById( btnId );
	if ( storAnnotBtn !== null ) {
		storAnnotBtn.addEventListener( "click", function() {
			// clear storage only when the page is refreshed
			getAnnotationsFromStorage( manifestUrl, true, false );
		});
	}
}

function setButtonToClearStorage( $manifestUrl, btnId ) {
	var storAnnotBtn = document.getElementById( btnId );
	if ( storAnnotBtn !== null ) {
		storAnnotBtn.addEventListener( "click", function() {
			getAnnotationsFromStorage( $manifestUrl, false, true );
		});
	}
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
 * Return array of canvases based on canvas id
 * @param array canvases
 * @param array canvasIds
 * @param array apiVersion
 * @returns 
 */
function filterCanvasesByCanvasId( canvases, canvasIds, apiVersion ) {
	var newCanvases = [];
	var idAttr = ( apiVersion == '3' ) ? 'id' : '@id';
	canvasIds.map( (canvasid) => canvases.forEach( el => {
			//console.log( el['label'] );
			if ( el[idAttr] == canvasid ) {
				newCanvases.push( el );
			}
		})
	);
	return newCanvases;
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

/**
 * Fetches annotations from local storage
 * Optionally, clears them
 * @param string iiifManifestUrl 
 * @param bool print
 * @param bool clearStorage 
 */
function getAnnotationsFromStorage( iiifManifestUrl, print = true, clearStorage = false,  ) {
	mw.loader.using( [ 'ext.localstorage' ], function ( require ) {	
		var LocalStorageUtil = require( 'ext.localstorage' );
		// Should be a dynamic function
		// 
		var canvasIds = [];
		$.getJSON( iiifManifestUrl, function( data ) {
			var canvases = data.sequences[0].canvases;
			canvases.forEach( function (canvas) {
				canvasIds.push( canvas['@id'] );
			});
			var annotArr = LocalStorageUtil.initFetchAnnotations( canvasIds );
			//console.log( annotArr );

			// Options: print, clearStorage

			if ( print == true ) {
				// print to textarea
				var str = annotArr.toString();
				var str = ( str.startsWith( "[" ) ) ? str  : `[${str}]`;
				var storAnnotTextarea = document.getElementById( 'storage-annotations-textarea' );
				storAnnotTextarea.value = str;
			}

			if ( clearStorage == true ) {
				//console.log( annotArr );
				//console.log( typeof( annotArr ) );
				var annotKeys = LocalStorageUtil.getAnnotationKeysFromLocalStorage( canvasIds );
				annotKeys.forEach( function( id ) {
					//var itemId = "localStorage://?canvasId=" + id;
					//console.log( id );
					localStorage.removeItem( id );
				});
			}
			
		});
	} );
}

/**
 * @todo revise
 * Either fetch directly from page
 * Or get annotations from API - maybe make it easier to return what's needed for local storage
 */
function transferAnnotationStrToLocalStorage( annotPageId ) {
	var LocalStorageUtil = require( 'ext.localstorage' );
	var domain = 'https:' + mw.config.get( 'wgServer' ) + mw.config.get( 'wgScriptPath' ) + "/api.php";
	var apiUrl = domain + `?action=iiif-annotations&format=json&annotid=${annotPageId}&v=3&dest=localstorage`;
	//console.log( apiUrl );
	$.getJSON( apiUrl, function( data ) {
		var rawText = data.raw;
		//console.log( rawText );
		LocalStorageUtil.addItemStrToLocalStorage( data.raw );
	});
}


function initAll( miradorInstance, canvasWindowId ) {
	if ( typeof Mirador !== 'undefined' ) {
		miradorInstance;
		initChangeCanvas( miradorInstance );
		showCurrentCanvasID( miradorInstance, canvasWindowId );
		setButtonToPrintAnnotations( "storage-annotations-textarea-button" );
		// @todo test and add clear
		setButtonToLoadAnnotationStorage( "add-annotations-to-storage", "" );
		setButtonToClearStorage( iiifManifestUrl, "clear-annotations-from-storage" );
	} else {
		setTimeout(function() {
			console.log( "Trying to load Mirador again..." );
			miradorInstance;
			initChangeCanvas( miradorInstance );
			showCurrentCanvasID( miradorInstance, canvasWindowId );
			setButtonToPrintAnnotations( 'storage-annotations-textarea-button' );
		}, 1000);
	}
}

initAll( miradorInstance, 'mirador-window-1' );

});
