<?php
use MediaWiki\MediaWikiServices;
use MediaWiki\MainConfigNames;
use MediaWiki\OutputPage;
use MediaWiki\ParserOutput;
use MediaWiki\PPFrame;

/* Required: */
use MediaWiki\Revision\RevisionRecord;

class mrdrPF {

	/**
	 * Runs #mirador parser function and initialises js module
	 * @todo: consider singlecanvasonly
	 */
	public static function runMiradorPF ( $parser, $frame, $params ) {
		if ( $params == null || $params == 'undefined' ) {
			return false;
		}

		// Defaults
		$manifestURL = "";
		$canvasID = $labelsOnly = $canvasIdsOnly = $catalogUrls = null;
		// Standard Mirador options
		$theme = 'light'; //light, dark
		$mainColor = '#1967d2';
		$paramWorkspaceType = 'mosaic'; //mosaic, elastic
		$paramThumbNavPosition = 'off'; //off, far-bottom or far-right
		$windowsMaximized = 'true';
		$windowsDefaultView = 'single';
		$allowWindowClose = $allowWindowFullscreen = $allowTopMenuButton = 'true';		
		$highlightAllAnnotations = $hideWindowTitle = 'false';
		$allowTopMenuButton = 'true';
		$valueSep = '^^';
		// Plugins
		$imageToolsEnabled = $imageToolsOpen = 'false';
		$imageCropperEnabled = $annotationsEnabled = $canvasLinkEnabled = 'false';
		$basePageUrl = '';

		foreach ( $params as $i => $param ) {
			$paramExpanded = $frame->expand($param);
			$keyValPair = explode( '=', $paramExpanded, 2 );
			$paramName = trim( $keyValPair[0] );
			$value = ( array_key_exists(1, $keyValPair) ) ? trim( $keyValPair[1] ) : "";
			switch ( $paramName ) {
				// Identifiers
				case 'manifest': $manifestURL = $value;
				break;
				case 'canvasid': $canvasID = ( $value !== "" ) ? $value : $canvasID;
				break;
				case 'catalogurls':
					$catalogUrls = ( $value !== "" ) ? $value : $catalogUrls;
				break;
				case 'restricttolabels':
					$labelsOnly = ( $value !== "" ) ? $value : $labelsOnly;					
				break;
				case 'restricttocanvasids':
					$canvasIdsOnly = ( $value !== "" ) ? $value : $canvasIdsOnly;
				break;
				// Display options
				case 'theme': $theme = $value;
				break;
				case 'workspacetype': $paramWorkspaceType = $value;
				break;
				case 'thumbnavposition': $paramThumbNavPosition = $value;
				break;
				case 'defaultview': $windowsDefaultView = $value;
				break;
				case 'windowsmaximized': $windowsMaximized = $value;
				break;
				case 'allowwindowclose': $allowWindowClose = $value;
				break;
				case 'allowwindowfullscreen': $allowWindowFullscreen = $value;
				break;
				case 'allowtopmenubutton': $allowTopMenuButton = $value;
				break;
				case 'maincolor': $mainColor = $value;
				break;
				case 'highlightallannotations': $highlightAllAnnotations = $value;
				break;
				case 'hidewindowtitle': $hideWindowTitle = $value;
				break;
				case 'valuesep': $valueSep = ( $value !== "" ) ? $value : $valueSep;
				break;
				// Plugins:
				case 'imagetoolsopen': $imageToolsOpen = $value;
				break;
				case 'imagetoolsenabled': $imageToolsEnabled = $value;
				break;
				case 'imagecropperenabled' : $imageCropperEnabled = $value;
				break;
				case 'canvaslinkenabled': $canvasLinkEnabled = $value;
				break;
				case 'annotationsenabled': $annotationsEnabled = $value;
				break;
				case 'pageurl': $basePageUrl = $value;
				break;
			}
		}

		$parser->getOutput()->addModules( [ 'ext.mirador.core' ] );

		$config = [
			"id" => "miradorframe",
			"class" => "miradorframe",
			"data-manifest-url" => $manifestURL,
			"data-canvasid" => $canvasID,
			"data-theme" => $theme,
			"data-main-color" => $mainColor,
			"data-workspace-type" => $paramWorkspaceType,
			"data-thumbnav-position" => $paramThumbNavPosition,
			"data-catalog-urls" => $catalogUrls,
			"data-windows-maximized" => $windowsMaximized,
			"data-windows-defaultview" => $windowsDefaultView,
			"data-windows-allow-close" => $allowWindowClose,
			"data-windows-allow-fullscreen" => $allowWindowFullscreen,
			"data-allow-top-menu-button" => $allowTopMenuButton,
			"data-highlight-all-annotations" => $highlightAllAnnotations,
			"data-hide-window-title" => $hideWindowTitle,
			"data-labels-only" => $labelsOnly,//else null
			"data-canvasids-only" => $canvasIdsOnly,//else null
			"data-imagetools-enabled" => $imageToolsEnabled,
			"data-imagetools-open" => $imageToolsOpen,
			"data-imagecropper-enabled" => $imageCropperEnabled,
			"data-canvaslink-enabled" => $canvasLinkEnabled,
			"data-textoverlay-enabled" => 'true',
			"data-page-url" => $basePageUrl,
			"data-annotations-enabled" => $annotationsEnabled,
			"data-valuesep" => $valueSep,
		];
		$str = \Html::element( 'div', $config, "" );
		return $str;
	}

	/**
	 * 
	 * {{#mirador-change-canvas:}}
	 * window
	 * canvas = canvas id, or 'previous' or 'text'
	 */
	public static function runCanvasBtn ( $parser, $frame, $params ) {
		$windowid = "mirador-window-1";
		$class = "btn";
		$text = $canvasid = $xywh = "";
		$scroll = 'true';
		foreach ( $params as $i => $param ) {
			$paramExpanded = $frame->expand($param);
			$keyValPair = explode( '=', $paramExpanded, 2 );
			$paramName = trim( $keyValPair[0] );
			$value = ( array_key_exists(1, $keyValPair) ) ? trim( $keyValPair[1] ) : "";
			switch ( $paramName ) {
				case 'canvas': $canvasid = $value;
				break;
				case 'window': $windowid = $value;
				break;
				case 'class': $class = $value;
				break;
				case 'text': $text = $value;
				break;
				case 'scroll': $scroll = $value;
				break;
				case 'xywh': $xywh = $value;
				break;
			}
		}
		$str = "<button class='btn-change-canvas {$class}' data-canvas='{$canvasid}' data-xywh='{$xywh}' data-canvas-window='{$windowid}' data-scroll='{$scroll}'>{$text}</button>";
		return [ $str, 'noparse' => false, 'isHTML' => false ];
	}

	/**
	 * {{#mirador-annot:}}
	 * Previously separate: {{#mirador-load-annotations-into-storage:pageid= |text= }}
	 * @todo i18n
	 */
	public static function runAnnot( $parser, $frame, $params ) {
		if ( $params == null || $params == 'undefined' ) {
			return false;
		}
		// Defaults
		$action = $class = $pageId = $label = null;
		
		foreach ( $params as $param ) {
			$paramExpanded = $frame->expand( $param );
			$keyValPair = explode( '=', $paramExpanded, 2 );
			$paramName = trim( $keyValPair[0] );
			$value = ( array_key_exists(1, $keyValPair) ) ? trim( $keyValPair[1] ) : "";			
			switch ( $paramName ) {
				case 'action': $action = $value;
				break;
				case 'label': $label = $value;
				break;
				case 'pageid': $pageId = $value;
				break;
				case 'class': $class = $value;
				break;
			}
		}

		if ( $action == "addtostorage" && $pageId !== null ) {
			// Add annotatiins from page to local storage
			$label = ( $label !== null ) ? $label : "Add annotations to local storage";
			$class = ( $class !== null ) ? $class : "btn btn-success";
			$attributes = [
				"id" => "add-annotations-to-storage",
				"class" => $class,
				"data-pageid" => $pageId
			];
		} elseif( $action == "clearstorage" ) {
			// Create button that clears annotations relevant to present manifest from localStorage
			$label = ( $label !== null ) ? $label : "Clear annotations from storage";
			$class = ( $class !== null ) ? $class : "btn btn-danger";
			$attributes = [
				"id" => "clear-annotations-from-storage",
				"class" => $class
			];
		} elseif( $action == "print" ) {
			// Create button that prints annotations to textarea
			$label = ( $label !== null ) ? $label : "Print annotations to textarea";
			$textareaId = "storage-annotations-textarea-button";
			$class = ( $class !== null ) ? $class : "btn btn-dark";
			$attributes = [
				"id" => $textareaId,
				"class" => $class,
				"data-targetid" => "storage-annotations-textarea" // currently fixed
			];
		} else {
			return;
		}

		$res = \Html::rawElement( "button", $attributes, $label );
		return [ $res, 'noparse' => false, 'isHTML' => false ];

	}

	/**
	 * @todo
	 * Parser function to retrieve documentation about each parameter used
	 * Use i18n.
	 */
	public static function getParserDocs() {
		$docObj = [
			"manifest" => "",
			"canvasid" => "",
			"catalogurls" => "",
			"allowtopmenubutton" => "Configure if window view and thumbnail display menu are visible or not. Corresponds to allowTopMenuButton. Default: true;",
			"hidewindowtitle" => "Configure if the window title is shown in the window title bar or not. Corresponds to hideWindowTitle in Mirador. Default: false."
		];
		// ...
	}

}
