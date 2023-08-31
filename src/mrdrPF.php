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
   */
  public static function runMiradorPF ( $parser, $frame, $params ) {
    $paramManifestURL = $paramCatalogUrls = ""; //default
    $paramCanvasID = null;
    $paramTheme = 'light'; //light, dark
    $paramWorkspaceType = 'mosaic'; //mosaic, elastic
    $paramThumbNavPosition = 'off'; //off, far-bottom or far-right
    $paramImageToolsOpen = false;
    $paramImageToolsEnabled = false;
    $paramCanvasLinkEnabled = false;
    $paramPageUrl = '';
    $labelsOnly = $windowsMaximized = null;
    if ( $params == null || $params == 'undefined' ) {
      return false;
    }

    foreach ( $params as $i => $param ) {
      $paramExpanded = $frame->expand($param);
      $keyValPair = explode( '=', $paramExpanded, 2 );
      $paramName = trim( $keyValPair[0] );
      $value = ( array_key_exists(1, $keyValPair) ) ? trim( $keyValPair[1] ) : "";
      switch ( $paramName ) {
        case 'manifest': $paramManifestURL = $value;
        break;
        case 'canvasid': $paramCanvasID = $value;
        break;
        case 'catalogurls': $paramCatalogUrls = $value;
        break;
        case 'theme': $paramTheme = $value;
        break;
        case 'workspacetype': $paramWorkspaceType = $value;
        break;
        case 'thumbnavposition': $paramThumbNavPosition = $value;
        break;
        case 'imagetoolsopen': $paramImageToolsOpen = $value;
        break;
        case 'imagetoolsenabled': $paramImageToolsEnabled = $value;
        break;
        case 'canvaslinkenabled': $paramCanvasLinkEnabled = $value;
        break;
        case 'pageurl': $paramPageUrl = $value;
        break;
        case 'restricttolabels': $labelsOnly = $value;
        break;
        case 'windowsmaximized': $windowsMaximized = $value;
        break;
      }
    }

    $parser->getOutput()->addModules( [ 'ext.mirador.core' ] );

    $str = "<div id='miradorframe' class='miradorframe' data-manifest-url='{$paramManifestURL}' data-canvasid='{$paramCanvasID}' data-theme='{$paramTheme}' data-workspace-type='{$paramWorkspaceType}' data-thumbnav-position='{$paramThumbNavPosition}' data-imagetools-open='{$paramImageToolsOpen}' data-canvaslink-enabled='{$paramCanvasLinkEnabled}' data-page-url='{$paramPageUrl}'";
    $str .= ( $windowsMaximized !== null ) ? " data-windows-maximized='{$windowsMaximized}'" : "";
    $str .= ( $labelsOnly !== null ) ? " data-labels-only='{$labelsOnly}'" : "";
    $str .= " data-catalog-urls=" . $paramCatalogUrls;
    $str .= "></div>";

    return $str;
  }
  //runMiradorPF

  /**
   * {{#canvas-change-canvas:...}}
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
    return [$str, 'noparse' => false, 'isHTML' => false];

  }

}
